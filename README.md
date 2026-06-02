# momo-api-tutorial

一个白底静态文档站模板，用来编写和展示中转站接入教程。

当前版本已经实现了完整的文档站骨架，适合继续填入你自己的中转站信息，包括：

- 注册 / 登录
- API Token 创建流程
- Codex CLI 配置
- Claude Code 配置
- Trae / Cursor / RooCode / Cherry Studio 等客户端接入
- fast / 长上下文说明
- 网络代理与常见错误排查

## 项目特点

- 白色底色，阅读风格接近教程文档站
- 顶部主导航
- 左侧侧边栏文档目录
- 右侧本页目录
- 搜索弹层
- 页内分页导航
- 单页静态站实现，部署简单
- 无构建依赖，直接打开即可预览

## 文件结构

```text
.
├── index.html
├── styles.css
├── app.js
└── assets/
    └── relayhub-hero.png
```

## 本地预览

直接打开：

```text
index.html
```

或者使用本地静态服务：

```bash
python3 -m http.server 4173
```

然后访问：

```text
http://127.0.0.1:4173/
```

## 如何替换成你自己的教程

这个模板里的站点内容目前使用的是占位信息，比如：

- `https://www.momoapi.shop`
- `https://www.momoapi.shop/v1`

你需要按自己的实际服务替换这些内容。

建议优先修改：

1. `app.js` 中各页面的正文内容
2. 首页 Hero 的标题和说明
3. 快速开始页中的地址、Token 获取方式、验证命令
4. 模型、分组、计费和代理规则
5. 排错页中的真实错误处理逻辑

## 内容组织方式

站点内容集中定义在 `app.js` 的 `pages` 对象中。

每个页面都包含：

- 页面标题
- 所属章节
- 页面简介
- HTML 正文内容

导航和侧边栏也都在 `app.js` 中统一维护：

- `navItems`
- `sidebar`
- `pages`

如果你要新增页面，通常需要同时修改这三处。

## 适合的使用场景

- 个人中转站教程
- 团队内部 API 接入说明
- 多客户端统一接入文档
- OpenAI / Anthropic 兼容接口配置文档

## 注意事项

- 当前项目是纯静态实现，没有引入 VitePress、Vue 或其他构建工具。
- 如果后续需要 markdown 管理、全文检索、自动目录生成、部署流水线，可以再升级到正式文档框架。
- 首页视觉图已经生成并放在 `assets/momoapi.png`。

## 当前状态

目前 README 仅作为项目说明文件，已经写入本地仓库，尚未推送远端。
