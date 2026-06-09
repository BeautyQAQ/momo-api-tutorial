#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-4173}"
SYNC_INTERVAL="${SYNC_INTERVAL:-60}"

log() {
  printf '[%s] %s\n' "$(date '+%H:%M:%S')" "$*"
}

has_local_changes() {
  [[ -n "$(git status --porcelain)" ]]
}

resolve_upstream() {
  git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>/dev/null || true
}

sync_once() {
  local upstream local_rev remote_rev

  upstream="$(resolve_upstream)"
  if [[ -z "$upstream" ]]; then
    log "当前分支没有上游仓库，跳过自动同步。"
    return 0
  fi

  if has_local_changes; then
    log "检测到本地有未提交改动，跳过本轮 git pull。"
    return 0
  fi

  log "检查远端更新：$upstream"
  git fetch --quiet

  local_rev="$(git rev-parse HEAD)"
  remote_rev="$(git rev-parse "$upstream")"

  if [[ "$local_rev" == "$remote_rev" ]]; then
    log "已是最新版本。"
    return 0
  fi

  log "发现远端更新，开始快进拉取。"
  git merge --ff-only "$upstream"
  log "更新完成，刷新浏览器即可看到最新教程。"
}

cd "$ROOT_DIR"

if ! command -v python3 >/dev/null 2>&1; then
  log "未找到 python3，无法启动静态服务器。"
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  log "当前目录不是 Git 仓库，无法自动同步。"
  exit 1
fi

sync_once || log "启动前同步失败，继续启动本地服务。"

log "启动教程网站：http://$HOST:$PORT/"
python3 -m http.server "$PORT" --bind "$HOST" &
SERVER_PID="$!"
CLEANED_UP=0

cleanup() {
  if [[ "$CLEANED_UP" -eq 1 ]]; then
    return 0
  fi
  CLEANED_UP=1
  log "停止教程网站。"
  kill "$SERVER_PID" >/dev/null 2>&1 || true
  wait "$SERVER_PID" >/dev/null 2>&1 || true
}

trap cleanup EXIT
trap 'cleanup; exit 130' INT
trap 'cleanup; exit 143' TERM

sleep 1
if ! kill -0 "$SERVER_PID" >/dev/null 2>&1; then
  log "静态服务器启动失败，可能是端口 $PORT 已被占用。"
  exit 1
fi

while true; do
  sync_once || log "本轮同步失败，稍后重试。"
  sleep "$SYNC_INTERVAL"
done
