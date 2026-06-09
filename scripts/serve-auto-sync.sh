#!/bin/sh
set -eu

REPO_URL="${REPO_URL:-git@github.com:BeautyQAQ/momo-api-tutorial.git}"
REPO_DIR="${REPO_DIR:-$HOME/momo-api-tutorial}"
TARGET_DIR="${TARGET_DIR:-/var/www/momo-tutorial}"
BRANCH="${BRANCH:-}"

log() {
  printf '[%s] %s\n' "$(date '+%H:%M:%S')" "$*"
}

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    log "缺少命令：$1"
    exit 1
  fi
}

run_as_root() {
  if [ "$(id -u)" -eq 0 ]; then
    "$@"
  else
    sudo "$@"
  fi
}

update_repo() {
  if [ -d "$REPO_DIR/.git" ]; then
    log "更新源码：$REPO_DIR"
    git -C "$REPO_DIR" fetch --prune

    if [ -n "$BRANCH" ]; then
      git -C "$REPO_DIR" checkout "$BRANCH"
    fi

    git -C "$REPO_DIR" pull --ff-only
    return 0
  fi

  log "源码目录不存在，克隆仓库到：$REPO_DIR"
  mkdir -p "$(dirname "$REPO_DIR")"

  if [ -n "$BRANCH" ]; then
    git clone --branch "$BRANCH" "$REPO_URL" "$REPO_DIR"
  else
    git clone "$REPO_URL" "$REPO_DIR"
  fi
}

deploy_files() {
  log "同步静态文件到：$TARGET_DIR"
  run_as_root mkdir -p "$TARGET_DIR"
  run_as_root rsync -a --delete --delete-excluded --exclude='.git/' --exclude='scripts/' "$REPO_DIR"/ "$TARGET_DIR"/
}

require_cmd git
require_cmd rsync

if [ "$(id -u)" -ne 0 ]; then
  require_cmd sudo
fi

update_repo
deploy_files

log "部署完成。"
