const navItems = [
  { title: "公告", path: "/announcements" },
  { title: "快速开始", path: "/quick-start" },
  { title: "Codex", path: "/codex" },
  { title: "Claude Code", path: "/claude-code" },
  { title: "Trae/IDE", path: "/trae-ide-clients" },
  { title: "fast/1M", path: "/fast-context" },
  { title: "实用命令", path: "/claude-usage" },
  { title: "排错", path: "/troubleshooting" },
];

const sidebar = [
  {
    title: "开始使用",
    items: [
      { title: "首页", path: "/" },
      { title: "公告与服务说明", path: "/announcements" },
      { title: "快速开始", path: "/quick-start" },
      { title: "账号与令牌", path: "/account-token" },
      { title: "模型与分组", path: "/models-groups" },
    ],
  },
  {
    title: "客户端教程",
    items: [
      { title: "Codex CLI", path: "/codex" },
      { title: "Claude Code", path: "/claude-code" },
      { title: "fast 与 1M 上下文", path: "/fast-context" },
      { title: "Claude Code 实用命令", path: "/claude-usage" },
      { title: "Trae 等 IDE 客户端", path: "/trae-ide-clients" },
      { title: "IDE 集成", path: "/ide" },
      { title: "其他 CLI 与插件", path: "/other-clients" },
      { title: "CC Switch", path: "/cc-switch" },
      { title: "Cherry Studio", path: "/cherry-studio" },
    ],
  },
  {
    title: "进阶",
    items: [
      { title: "常用命令与工作流", path: "/workflows" },
      { title: "网络与代理", path: "/network-proxy" },
      { title: "常见问题排查", path: "/troubleshooting" },
    ],
  },
];

const pages = {
  "/": {
    title: "RelayHub 中转站教程",
    section: "开始使用",
    meta: "一套白底教程站，按客户端场景拆页，不把配置和排错混在一起。",
    hero: true,
    body: `
      <div class="hero">
        <div>
          <div class="eyebrow">RelayHub 中转站教程</div>
          <h1>Codex / Claude Code / IDE 客户端接入指南</h1>
          <p class="lead">从注册、创建令牌、填写 Base URL，到模型选择、上下文、代理和错误排查，按文档站的方式重新整理。</p>
          <div class="hero-actions">
            <a class="button button--primary" href="#/quick-start">立即开始</a>
            <a class="button" href="#/troubleshooting">常见问题</a>
          </div>
        </div>
        <div class="hero-visual" role="img" aria-label="中转站教程首页视觉"></div>
      </div>

      <div class="feature-grid">
        <section class="feature">
          <h3>快速配置</h3>
          <p>先把账号、令牌、Base URL 和最小验证跑通，再切客户端。</p>
        </section>
        <section class="feature">
          <h3>多客户端覆盖</h3>
          <p>Codex CLI、Claude Code、Trae、Cursor、Cherry Studio、CC Switch 都有独立页。</p>
        </section>
        <section class="feature">
          <h3>白底文档风格</h3>
          <p>保留顶部导航、左侧目录、右侧本页大纲，整体改成浅色阅读体验。</p>
        </section>
        <section class="feature">
          <h3>排错优先</h3>
          <p>401、403、404、429、503、超长上下文、代理问题都集中到排错页。</p>
        </section>
      </div>

      <div class="quick-panel">
        <div class="quick-panel__group">
          <strong>新人入口</strong>
          <a class="chip-link chip-link--primary" href="#/quick-start">注册 / 登录 / 加白</a>
          <a class="chip-link" href="#/account-token">创建 API 令牌</a>
        </div>
        <div class="quick-panel__copy">
          <strong>Base URL</strong>
          <span class="copy-chip">https://relayhub.example.com</span>
        </div>
      </div>

      <div class="doc">
        <h2 id="overview">站点说明</h2>
        <p>这个版本不是直接照搬参考站源码，而是复刻它的使用方式：顶部主导航、左侧章节目录、中间正文、右侧本页目录、搜索框、翻页导航都保留；内容则重写成一套中转站通用教程。</p>

        <div class="callout callout--danger">
          <strong>先完成登录和 IP 加白</strong>
          <p>大多数中转站如果启用了风控或 Cloudflare，未登录、未加白、IP 变化后未更新白名单，都会直接导致请求失败。</p>
        </div>

        <h2 id="reading-order">推荐阅读顺序</h2>
        <ol>
          <li>先看快速开始，把令牌、Base URL 和最小验证弄通。</li>
          <li>使用 Codex 的用户看 Codex CLI 页面。</li>
          <li>使用 Claude Code 的用户看 Claude Code 页面。</li>
          <li>使用 Trae、Cursor、RooCode 的用户看 Trae / IDE 页面。</li>
          <li>遇到网络、代理、错误码问题时，直接跳到排错页。</li>
        </ol>

        <h2 id="entry-points">必看入口</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>用途</th>
                <th>地址示例</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>登录 / 注册 / IP 加白</td>
                <td><code>https://relayhub.example.com/whitelist</code></td>
                <td>很多站点会把加白入口和控制台分开。</td>
              </tr>
              <tr>
                <td>官网 / 控制台 / API</td>
                <td><code>https://relayhub.example.com</code></td>
                <td>给 OpenAI 兼容客户端时，通常再补 <code>/v1</code>。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout--tip">
          <strong>提示</strong>
          <p>教程里所有服务地址都用示例域名占位。你实际写教程时，把它们统一替换成你的中转站地址即可。</p>
        </div>
      </div>
    `,
  },
  "/announcements": {
    title: "公告与服务说明",
    section: "开始使用",
    meta: "这页放会影响配置行为的公告，不写营销介绍。",
    body: `
      <div class="doc">
        <h1>公告与服务说明</h1>
        <p class="lead">把真正影响用户配置的事项放在最前面，比如入口地址变化、模型下线、白名单要求、上下文计费规则和拥挤时段说明。</p>

        <h2 id="important">当前使用规则</h2>
        <ul>
          <li>登录入口、控制台入口、API 根地址如果不同，必须分开写清楚。</li>
          <li>给 OpenAI 兼容客户端时，通常使用 <code>https://你的域名/v1</code>。</li>
          <li>给 Anthropic 兼容客户端时，很多工具要求填写根地址，而不是自己拼接路径。</li>
          <li>百万上下文或 fast 线路如果存在附加计费，必须单独写，不要藏在 FAQ。</li>
          <li>如果某些旧模型已经停用，明确列出不可请求的模型名。</li>
        </ul>

        <h2 id="status">建议公告格式</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>字段</th>
                <th>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>生效时间</td>
                <td>写绝对日期，避免“今天起”“近期”这种模糊表述。</td>
              </tr>
              <tr>
                <td>影响范围</td>
                <td>影响哪些客户端、哪些模型、哪些分组。</td>
              </tr>
              <tr>
                <td>用户动作</td>
                <td>是否需要改 Base URL、重建令牌、重新加白 IP、切换模型。</td>
              </tr>
              <tr>
                <td>临时方案</td>
                <td>如果主线路不可用，给出备用线路或回退模型。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout--warning">
          <strong>不要把备用网址当主站</strong>
          <p>备用网址只在主线路不可达时使用。文档中的默认配置仍应指向主站，避免用户把临时线路固化进脚本。</p>
        </div>

        <h2 id="what-users-care">用户最关心的四件事</h2>
        <ol>
          <li>我该登录哪个地址。</li>
          <li>Base URL 究竟填根地址还是 <code>/v1</code>。</li>
          <li>哪个模型现在可用，哪个分组有额外限制。</li>
          <li>403、429、503 出现时该做什么。</li>
        </ol>
      </div>
    `,
  },
  "/quick-start": {
    title: "快速开始",
    section: "开始使用",
    meta: "先把最小调用通了，再讨论模型、上下文和 IDE 体验。",
    body: `
      <div class="doc">
        <h1>快速开始</h1>
        <p class="lead">任何客户端接入前，都先确认三件事：令牌已创建、Base URL 填对、当前公网 IP 已通过白名单或风控检查。</p>

        <div class="quick-panel">
          <div class="quick-panel__group">
            <strong>新手入口</strong>
            <span class="chip-link chip-link--primary">注册 / 登录 / 加白</span>
            <span class="chip-link">创建 API Token</span>
          </div>
          <div class="quick-panel__copy">
            <strong>Base URL</strong>
            <span class="copy-chip">https://relayhub.example.com</span>
          </div>
        </div>

        <h2 id="prepare">1. 准备两项</h2>
        <ul>
          <li><strong>API Key / Token</strong>：在控制台创建，复制后立刻保存。</li>
          <li><strong>Base URL</strong>：默认填写站点根地址，OpenAI 兼容客户端再按需要补 <code>/v1</code>。</li>
        </ul>

        <div class="callout callout--danger">
          <strong>新用户先走加白入口</strong>
          <p>不要上来就直接用 API 地址压测。先完成注册、登录、IP 加白，否则很多请求会在网关层直接被拒绝。</p>
        </div>

        <h2 id="whitelist">2. 注册、登录、IP 加白</h2>
        <pre><code>https://relayhub.example.com/whitelist</code></pre>
        <ol>
          <li>注册账号。</li>
          <li>登录账号。</li>
          <li>提交当前公网 IP 到白名单。</li>
        </ol>
        <p>如果你用的是校园网、公司出口或者家庭宽带拨号，公网 IP 有机会变化。只要原来可用、后来突然 403，先怀疑 IP 变了。</p>

        <h2 id="token">3. 创建 API 令牌</h2>
        <ol>
          <li>进入控制台的令牌页面。</li>
          <li>新建令牌。</li>
          <li>复制保存。</li>
        </ol>
        <pre><code>服务根地址: https://relayhub.example.com</code></pre>

        <h2 id="client-mapping">4. 常见客户端填写方式</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>客户端</th>
                <th>Base URL</th>
                <th>Token 位置</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Codex CLI</td>
                <td><code>https://relayhub.example.com/v1</code></td>
                <td>OpenAI API Key</td>
              </tr>
              <tr>
                <td>Claude Code</td>
                <td><code>ANTHROPIC_BASE_URL=https://relayhub.example.com</code></td>
                <td><code>ANTHROPIC_AUTH_TOKEN</code></td>
              </tr>
              <tr>
                <td>Trae / Cursor / RooCode</td>
                <td><code>https://relayhub.example.com/v1</code></td>
                <td>OpenAI Compatible API Key</td>
              </tr>
              <tr>
                <td>Cherry Studio</td>
                <td>自定义 OpenAI 提供商地址</td>
                <td>API Key</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="validate">5. 最小验证</h2>
        <pre><code>curl https://relayhub.example.com/v1/models \\
  -H "Authorization: Bearer sk-your-token"</code></pre>
        <p>能返回模型列表，说明地址和令牌基本没问题。再继续配 CLI 或 IDE。</p>

        <h2 id="first-errors">6. 出错先看这三项</h2>
        <ul>
          <li><strong>401</strong>：令牌无效、过期、复制多了空格。</li>
          <li><strong>404</strong>：Base URL 填错，常见是少了或多了 <code>/v1</code>。</li>
          <li><strong>403</strong>：当前 IP 未加白，或出口 IP 已变化。</li>
        </ul>
      </div>
    `,
  },
  "/account-token": {
    title: "账号与令牌",
    section: "开始使用",
    meta: "把注册、登录、加白、令牌管理拆开写，用户更容易定位问题。",
    body: `
      <div class="doc">
        <h1>账号与令牌</h1>
        <p class="lead">这页只讲账号体系和令牌，不混入模型推荐和客户端配置。</p>

        <h2 id="accounts">账号入口建议</h2>
        <ul>
          <li>登录入口和控制台入口不同的话，在文档里都列出来。</li>
          <li>IP 加白如果依赖登录态，也要写清楚在哪里提交。</li>
          <li>不要让用户去备用网址注册，再回主站生成令牌，这种流程最容易出问题。</li>
        </ul>

        <h2 id="token-rules">令牌使用规则</h2>
        <ul>
          <li>每台机器不一定都要单独建令牌，但生产环境和个人开发环境建议分开。</li>
          <li>CLI、IDE、自动化脚本尽量使用不同令牌，方便撤销和审计。</li>
          <li>令牌只在创建时显示一次，丢失就重新生成，不要指望后台可逆查看。</li>
        </ul>

        <h2 id="rotation">轮换建议</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>场景</th>
                <th>建议</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>个人开发机</td>
                <td>固定一个令牌，定期轮换。</td>
              </tr>
              <tr>
                <td>CI / 服务器</td>
                <td>专门令牌，保存在密钥管理系统里。</td>
              </tr>
              <tr>
                <td>团队共享</td>
                <td>避免共用一个长期令牌，至少按成员或项目拆分。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
  },
  "/models-groups": {
    title: "模型与分组",
    section: "开始使用",
    meta: "模型名、分组名、上下文、计费说明要分清。",
    body: `
      <div class="doc">
        <h1>模型与分组</h1>
        <p class="lead">很多问题不是客户端坏了，而是模型名、分组名或上下文上限理解错了。</p>

        <h2 id="naming">模型命名</h2>
        <ul>
          <li>文档里优先写用户实际要填的模型名。</li>
          <li>如果站点后台有“分组”概念，说明它和模型是否强绑定。</li>
          <li>旧模型停用时，把旧名字直接列出来，避免用户靠猜。</li>
        </ul>

        <h2 id="context-limit">上下文规则</h2>
        <p>如果站点宣传支持大上下文，必须同时告诉用户默认可用窗口、超额部分是否加价、是否需要开启特定分组。否则用户会把单次请求塞到上限，然后把所有报错都理解成客户端问题。</p>

        <h2 id="fallback">推荐回退策略</h2>
        <ol>
          <li>先换同系列但更稳定的模型。</li>
          <li>再缩小上下文、关闭大文件输入。</li>
          <li>最后再判断是不是代理或风控问题。</li>
        </ol>
      </div>
    `,
  },
  "/codex": {
    title: "Codex CLI",
    section: "客户端教程",
    meta: "按 OpenAI 兼容方式配置 Codex CLI。",
    body: `
      <div class="doc">
        <h1>Codex CLI</h1>
        <p class="lead">Codex CLI 一般按 OpenAI 兼容方式接入，因此重点是 <code>OPENAI_API_KEY</code> 和兼容的 Base URL。</p>

        <h2 id="install">安装</h2>
        <pre><code>npm install -g @openai/codex@latest
codex --version</code></pre>

        <h2 id="env">环境变量</h2>
        <pre><code>export OPENAI_API_KEY="sk-your-token"
export OPENAI_BASE_URL="https://relayhub.example.com/v1"</code></pre>

        <div class="callout callout--warning">
          <strong>地址格式要一致</strong>
          <p>Codex CLI 走 OpenAI 兼容路径时，通常需要的是带 <code>/v1</code> 的根地址。少了这一段，模型列表和聊天接口往往都会 404。</p>
        </div>

        <h2 id="test">最小测试</h2>
        <pre><code>codex</code></pre>
        <p>先进入 CLI，看是否能正常列出或请求模型。第一次不需要上来就跑大仓库上下文。</p>

        <h2 id="persistent">长期固化</h2>
        <ul>
          <li>macOS / Linux 写进 shell profile。</li>
          <li>Windows PowerShell 写进 profile 或系统环境变量。</li>
          <li>CI 里用 secret 注入，不要把令牌写进仓库。</li>
        </ul>

        <h2 id="codex-errors">常见错误</h2>
        <ul>
          <li><strong>401</strong>：Key 填错。</li>
          <li><strong>404</strong>：Base URL 漏了 <code>/v1</code>，或者多拼了一层路径。</li>
          <li><strong>429</strong>：频率限制或配额不足。</li>
          <li><strong>503</strong>：上游模型拥挤，先换模型试。</li>
        </ul>
      </div>
    `,
  },
  "/claude-code": {
    title: "Claude Code",
    section: "客户端教程",
    meta: "按 Anthropic 兼容方式配置 Claude Code。",
    body: `
      <div class="doc">
        <h1>Claude Code</h1>
        <p class="lead">Claude Code 常见的坑不是命令本身，而是把 OpenAI 风格地址错误地照搬进 Anthropic 兼容配置。</p>

        <h2 id="install-claude">安装</h2>
        <pre><code>npm install -g @anthropic-ai/claude-code@latest
claude --version</code></pre>

        <h2 id="anthropic-env">环境变量</h2>
        <pre><code>export ANTHROPIC_AUTH_TOKEN="sk-your-token"
export ANTHROPIC_BASE_URL="https://relayhub.example.com"</code></pre>

        <div class="callout callout--danger">
          <strong>不要默认补 /v1</strong>
          <p>Claude Code 这类 Anthropic 兼容客户端，很多时候要求的是服务根地址。把 OpenAI 的路径习惯照搬过来，反而更容易 404。</p>
        </div>

        <h2 id="claude-workflow">推荐工作流</h2>
        <ul>
          <li>先用小仓库测试鉴权。</li>
          <li>再测试 <code>/init</code>、上下文注入和多文件修改。</li>
          <li>最后再开大上下文或 IDE 联动。</li>
        </ul>

        <h2 id="helpful-commands">常用命令</h2>
        <pre><code>/init
/clear
/compact
@README.md
!git status</code></pre>
      </div>
    `,
  },
  "/fast-context": {
    title: "fast 与 1M 上下文",
    section: "客户端教程",
    meta: "这一页只讲速度档位和长上下文，不讲基础配置。",
    body: `
      <div class="doc">
        <h1>fast 与 1M 上下文</h1>
        <p class="lead">fast 路线和超长上下文通常不是默认免费能力，教程里必须明确说明成本和适用场景。</p>

        <h2 id="when-fast">什么时候开 fast</h2>
        <ul>
          <li>交互式开发，希望降低等待时间。</li>
          <li>多轮短请求，用户对响应延迟敏感。</li>
          <li>不适合默认所有脚本都走 fast，成本通常更高。</li>
        </ul>

        <h2 id="when-1m">什么时候用超长上下文</h2>
        <ul>
          <li>真的要跨大量源码、日志、规范文档联动分析时再开。</li>
          <li>不要把“支持 1M”理解成“每次都应该塞满 1M”。</li>
          <li>先做文件裁剪和检索，再决定要不要上超长窗口。</li>
        </ul>
      </div>
    `,
  },
  "/claude-usage": {
    title: "Claude Code 实用命令",
    section: "客户端教程",
    meta: "按真实开发动作整理，而不是简单罗列命令帮助。",
    body: `
      <div class="doc">
        <h1>Claude Code 实用命令</h1>
        <p class="lead">把常用命令按用途整理，用户更容易建立工作流。</p>

        <h2 id="session">会话控制</h2>
        <pre><code>/init
/clear
/compact</code></pre>

        <h2 id="context">上下文注入</h2>
        <pre><code>@package.json
@src/index.ts
@docs/api.md</code></pre>

        <h2 id="shell">终端辅助</h2>
        <pre><code>!git status
!npm test
!rg "TODO" src</code></pre>

        <h2 id="usage-tips">使用建议</h2>
        <ul>
          <li>每轮对话尽量限制目标，避免把多个大任务塞在一条指令里。</li>
          <li>上下文太大时，先清理无关文件。</li>
          <li>卡住时先 <code>/compact</code>，再继续当前任务。</li>
        </ul>
      </div>
    `,
  },
  "/trae-ide-clients": {
    title: "Trae 等 IDE 客户端",
    section: "客户端教程",
    meta: "统一按 OpenAI Compatible 思路填写。",
    body: `
      <div class="doc">
        <h1>Trae 等 IDE 客户端</h1>
        <p class="lead">Trae、Cursor、RooCode、Continue、Kilo 这一类客户端，大多能按 OpenAI Compatible 方式配置。</p>

        <h2 id="fill-form">快速填写</h2>
        <pre><code>Base URL: https://relayhub.example.com/v1
API Key: sk-your-token
Model: 你的目标模型名</code></pre>

        <h2 id="provider-choice">提供商类型</h2>
        <ul>
          <li>优先选 <code>OpenAI Compatible</code>、<code>Custom OpenAI</code> 这类入口。</li>
          <li>如果客户端要求 Endpoint，填到 <code>/v1</code> 即可，不要再补聊天路径。</li>
          <li>如果支持测试连接，先点测试连接，再开自动补全或 Agent。</li>
        </ul>

        <h2 id="ide-errors">高频问题</h2>
        <ul>
          <li>保存后没有生效：很多客户端需要重新打开工作区。</li>
          <li>补全可用但 Agent 不可用：通常是模型能力不匹配，或者工具调用未开启。</li>
          <li>列表能拉到但对话失败：多半是聊天路径和模型路径兼容不完整。</li>
        </ul>
      </div>
    `,
  },
  "/ide": {
    title: "IDE 集成",
    section: "客户端教程",
    meta: "IDE 集成写法应该聚焦组织策略。",
    body: `
      <div class="doc">
        <h1>IDE 集成</h1>
        <p class="lead">如果你同时维护 CLI 和 IDE 文档，这一页用来讲配置组织和团队统一规范。</p>

        <h2 id="workspace-policy">工作区策略</h2>
        <ul>
          <li>个人开发环境和团队共享模板分开。</li>
          <li>不要把真实令牌提交到工作区配置。</li>
          <li>能用环境变量注入的，就不要写死在项目文件里。</li>
        </ul>
      </div>
    `,
  },
  "/other-clients": {
    title: "其他 CLI 与插件",
    section: "客户端教程",
    meta: "给无法单开大页的客户端一个收纳页。",
    body: `
      <div class="doc">
        <h1>其他 CLI 与插件</h1>
        <p class="lead">没有必要给每一个边缘客户端都单独建一套完整教程，这一页用来收纳轻量说明。</p>

        <h2 id="common-pattern">共同模式</h2>
        <ul>
          <li>OpenAI 兼容客户端：通常填 <code>API Key + Base URL(/v1)</code>。</li>
          <li>Anthropic 兼容客户端：通常填 <code>Auth Token + 根地址</code>。</li>
          <li>如果插件支持自定义 headers，再单独补充组织 ID、路由头或版本头。</li>
        </ul>
      </div>
    `,
  },
  "/cc-switch": {
    title: "CC Switch",
    section: "客户端教程",
    meta: "给多配置切换器的独立说明页。",
    body: `
      <div class="doc">
        <h1>CC Switch</h1>
        <p class="lead">这类配置切换器的核心价值是让你在不同中转站、不同模型组之间快速切换，而不是每次手工改环境变量。</p>

        <h2 id="profile-fields">常用字段</h2>
        <ul>
          <li>配置名称</li>
          <li>Base URL</li>
          <li>Auth Token</li>
          <li>默认模型</li>
        </ul>
      </div>
    `,
  },
  "/cherry-studio": {
    title: "Cherry Studio",
    section: "客户端教程",
    meta: "桌面聚合客户端通常按 OpenAI 兼容提供商接入。",
    body: `
      <div class="doc">
        <h1>Cherry Studio</h1>
        <p class="lead">Cherry Studio 这类桌面聚合客户端，一般把中转站配置成自定义 OpenAI 提供商即可。</p>

        <h2 id="cherry-fill">填写方式</h2>
        <pre><code>Provider: Custom OpenAI
Base URL: https://relayhub.example.com/v1
API Key: sk-your-token</code></pre>
      </div>
    `,
  },
  "/workflows": {
    title: "常用命令与工作流",
    section: "进阶",
    meta: "文档不只是命令列表，还要告诉用户什么时候用。",
    body: `
      <div class="doc">
        <h1>常用命令与工作流</h1>
        <p class="lead">教程最有价值的部分不是命令本身，而是让用户知道在什么阶段该用什么组合。</p>

        <h2 id="starter-flow">新项目接入流</h2>
        <ol>
          <li>创建账号和令牌。</li>
          <li>完成 IP 加白。</li>
          <li>用 <code>curl /models</code> 做最小验证。</li>
          <li>再去配置 CLI 或 IDE。</li>
        </ol>

        <h2 id="incident-flow">故障排查流</h2>
        <ol>
          <li>先看错误码。</li>
          <li>再查 Base URL 和模型名。</li>
          <li>然后查 IP、代理、配额。</li>
        </ol>
      </div>
    `,
  },
  "/network-proxy": {
    title: "网络与代理",
    section: "进阶",
    meta: "把代理和加白分开讲，避免互相混淆。",
    body: `
      <div class="doc">
        <h1>网络与代理</h1>
        <p class="lead">网络问题经常被误判成账号问题。把代理、出口 IP、DNS 和白名单分开看，排查会快很多。</p>

        <h2 id="proxy-choice">什么时候需要代理</h2>
        <ul>
          <li>客户端本身无法直连你的中转站。</li>
          <li>公司网络限制了出站访问。</li>
          <li>你需要固定出口 IP 便于白名单管理。</li>
        </ul>

        <h2 id="ip-whitelist">什么时候是白名单问题</h2>
        <ul>
          <li>网页控制台可用，但本机 CLI 403。</li>
          <li>换网络后才开始失败。</li>
          <li>同一令牌在不同设备上表现不一致。</li>
        </ul>
      </div>
    `,
  },
  "/troubleshooting": {
    title: "常见问题排查",
    section: "进阶",
    meta: "按错误码和现象组织，而不是按客户端组织。",
    body: `
      <div class="doc">
        <h1>常见问题排查</h1>
        <p class="lead">排错页应该是用户最容易跳转到的一页，所以要按错误码和现象组织，而不是按产品分类。</p>

        <h2 id="error-401">401 Unauthorized</h2>
        <ul>
          <li>令牌输错。</li>
          <li>令牌被删除或轮换后仍在用旧值。</li>
          <li>环境变量里夹了空格或换行。</li>
        </ul>

        <h2 id="error-403">403 Forbidden</h2>
        <ul>
          <li>当前公网 IP 未加白。</li>
          <li>出口 IP 刚变化，白名单还是旧值。</li>
          <li>风控策略拦截了当前网络。</li>
        </ul>

        <h2 id="error-404">404 Not Found</h2>
        <ul>
          <li>OpenAI 兼容客户端少了 <code>/v1</code>。</li>
          <li>Anthropic 兼容客户端误加了 <code>/v1</code>。</li>
          <li>Base URL 里多拼了一层具体接口路径。</li>
        </ul>

        <h2 id="error-429">429 Too Many Requests</h2>
        <ul>
          <li>请求过快。</li>
          <li>站点限流。</li>
          <li>账户余额或配额不足。</li>
        </ul>

        <h2 id="error-503">503 Service Unavailable</h2>
        <ul>
          <li>上游模型拥挤。</li>
          <li>当前分组临时不可用。</li>
          <li>模型和调用能力不匹配。</li>
        </ul>

        <h2 id="oversized-context">上下文太大</h2>
        <p>先缩小输入文件、只保留必要日志，再判断是否真的需要长上下文。很多“模型崩了”的反馈，本质只是把过量内容一次性塞给了服务。</p>
      </div>
    `,
  },
};

const contentEl = document.getElementById("content");
const sidebarEl = document.getElementById("sidebar");
const tocEl = document.getElementById("toc");
const topNavEl = document.getElementById("topNav");
const searchInput = document.getElementById("searchInput");
const searchModal = document.getElementById("searchModal");
const searchModalInput = document.getElementById("searchModalInput");
const searchResults = document.getElementById("searchResults");
const closeSearch = document.getElementById("closeSearch");
const sidebarToggle = document.getElementById("sidebarToggle");

function normalizeHash() {
  const hash = window.location.hash || "#/";
  const cleaned = hash.slice(1) || "/";
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
}

function flattenPages() {
  return Object.entries(pages).map(([path, page]) => ({
    path,
    title: page.title,
    content: stripHtml(page.body),
    section: page.section,
  }));
}

function stripHtml(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent.replace(/\s+/g, " ").trim();
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function renderTopNav(currentPath) {
  topNavEl.innerHTML = navItems
    .map((item) => {
      const active = currentPath === item.path ? "active" : "";
      return `<a class="${active}" href="#${item.path}">${item.title}</a>`;
    })
    .join("");
}

function renderSidebar(currentPath) {
  sidebarEl.innerHTML = sidebar
    .map(
      (group) => `
        <section class="sidebar-section">
          <h2 class="sidebar-section__title">${group.title}</h2>
          <div class="sidebar-links">
            ${group.items
              .map((item) => {
                const active = item.path === currentPath ? "active" : "";
                return `<a class="${active}" href="#${item.path}">${item.title}</a>`;
              })
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
}

function buildPager(currentPath) {
  const order = sidebar.flatMap((group) => group.items);
  const currentIndex = order.findIndex((item) => item.path === currentPath);
  if (currentIndex === -1) return "";
  const prev = order[currentIndex - 1];
  const next = order[currentIndex + 1];
  if (!prev && !next) return "";
  return `
    <nav class="pager">
      ${
        prev
          ? `<a href="#${prev.path}"><span class="pager__label">上一页</span><span class="pager__title">${prev.title}</span></a>`
          : `<div></div>`
      }
      ${
        next
          ? `<a href="#${next.path}"><span class="pager__label">下一页</span><span class="pager__title">${next.title}</span></a>`
          : `<div></div>`
      }
    </nav>
  `;
}

function assignHeadingIds(container) {
  const headings = container.querySelectorAll("h2, h3");
  headings.forEach((heading) => {
    if (!heading.id) {
      heading.id = slugify(heading.textContent);
    }
  });
}

function renderToc() {
  const headings = [...contentEl.querySelectorAll(".doc h2, .doc h3")];
  if (!headings.length) {
    tocEl.innerHTML = "";
    return;
  }

  tocEl.innerHTML = `
    <div class="toc__title">本页目录</div>
    <div class="toc-links">
      ${headings
        .map(
          (heading) => `
            <a href="#${normalizeHash()}?section=${heading.id}" data-section-link="true" data-level="${heading.tagName === "H3" ? "3" : "2"}" data-id="${heading.id}">
              ${heading.textContent}
            </a>
          `
        )
        .join("")}
    </div>
  `;

  tocEl.querySelectorAll("[data-section-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const id = link.dataset.id;
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function renderPage() {
  const currentPath = normalizeHash();
  const page = pages[currentPath] || pages["/"];

  renderTopNav(currentPath);
  renderSidebar(currentPath);

  contentEl.innerHTML = `
    <article class="doc-shell">
      <div class="doc">
        ${page.hero ? "" : `<div class="meta">${page.meta}</div>`}
      </div>
      ${page.body}
      ${buildPager(currentPath)}
    </article>
  `;

  assignHeadingIds(contentEl);
  renderToc();
  document.title = `${page.title} | RelayHub 中转站教程`;
  window.scrollTo({ top: 0, behavior: "instant" });
  sidebarEl.classList.remove("is-open");
}

function searchPages(query) {
  const keyword = query.trim().toLowerCase();
  if (!keyword) return [];
  return flattenPages()
    .map((page) => {
      const haystack = `${page.title} ${page.content}`.toLowerCase();
      const index = haystack.indexOf(keyword);
      if (index === -1) return null;
      const excerptSource = page.content;
      const start = Math.max(0, index - 36);
      const excerpt = excerptSource.slice(start, start + 120);
      return { ...page, excerpt };
    })
    .filter(Boolean)
    .slice(0, 12);
}

function renderSearchResults(query) {
  const results = searchPages(query);
  if (!query.trim()) {
    searchResults.innerHTML = `<div class="empty-state">输入关键字搜索教程内容</div>`;
    return;
  }
  if (!results.length) {
    searchResults.innerHTML = `<div class="empty-state">没有找到相关内容</div>`;
    return;
  }
  searchResults.innerHTML = results
    .map(
      (result) => `
        <a class="search-result" href="#${result.path}">
          <div class="search-result__title">${result.title}</div>
          <div class="search-result__meta">${result.section}</div>
          <div class="search-result__excerpt">${result.excerpt}</div>
        </a>
      `
    )
    .join("");
}

function openSearch(prefill = "") {
  searchModal.classList.remove("hidden");
  searchModal.setAttribute("aria-hidden", "false");
  searchModalInput.value = prefill;
  renderSearchResults(prefill);
  searchModalInput.focus();
}

function closeSearchModal() {
  searchModal.classList.add("hidden");
  searchModal.setAttribute("aria-hidden", "true");
}

window.addEventListener("hashchange", renderPage);

document.addEventListener("click", (event) => {
  const closeTarget = event.target.closest("[data-close-modal='true']");
  if (closeTarget) {
    closeSearchModal();
  }
});

document.addEventListener("keydown", (event) => {
  const isSearchShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
  if (isSearchShortcut) {
    event.preventDefault();
    openSearch(searchInput.value);
  }
  if (event.key === "Escape") {
    closeSearchModal();
  }
});

searchInput.addEventListener("focus", () => {
  openSearch(searchInput.value);
});

searchInput.addEventListener("input", () => {
  renderSearchResults(searchInput.value);
});

searchModalInput.addEventListener("input", () => {
  renderSearchResults(searchModalInput.value);
});

searchResults.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='#']");
  if (link) closeSearchModal();
});

closeSearch.addEventListener("click", closeSearchModal);
sidebarToggle.addEventListener("click", () => {
  sidebarEl.classList.toggle("is-open");
});

renderPage();
