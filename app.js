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
    title: "momoapi 中转站教程",
    section: "开始使用",
    meta: "一套白底教程站，按客户端场景拆页，不把配置和排错混在一起。",
    hero: true,
    body: `
      <div class="hero">
        <div>
          <div class="eyebrow">momoapi 中转站教程</div>
          <h1>Codex / Claude Code / 常见客户端快速配置</h1>
          <p class="lead">从注册、创建令牌、配置 Base URL 到常见错误排查，一页一件事。</p>
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
          <p>按步骤完成注册、创建令牌、填写 Base URL，避免配置项遗漏。</p>
        </section>
        <section class="feature">
          <h3>多客户端覆盖</h3>
          <p>覆盖 Codex CLI、Claude Code、Trae、Cursor、RooCode、CC Switch、Cherry Studio 等常用场景。</p>
        </section>
        <section class="feature">
          <h3>排错优先</h3>
          <p>对 401、403、404、429、503、网络代理、上下文过大等问题给出直接处理方式。</p>
        </section>
        <section class="feature">
          <h3>Claude Code 工作流</h3>
          <p>整理 /init、@ 上下文、! 命令、/clear、/compact、IDE 集成和常用技巧。</p>
        </section>
      </div>

        <div class="quick-panel">
          <div class="quick-panel__group">
            <strong>新人入口</strong>
          <a class="chip-link chip-link--primary" href="https://www.momoapi.shop/" target="_blank" rel="noopener noreferrer">注册 / 登录</a>
          <a class="chip-link" href="https://www.momoapi.shop/console/token" target="_blank" rel="noopener noreferrer">创建 API 令牌</a>
          </div>
        <div class="quick-panel__copy">
          <strong>Base URL</strong>
          <span class="copy-chip">https://www.momoapi.shop</span>
          <button
            class="copy-chip copy-chip--button"
            type="button"
            data-copy-text="https://www.momoapi.shop"
            aria-label="复制 Base URL"
          >
            复制
          </button>
        </div>
      </div>

      <div class="doc">
        <h2 id="announcements">公告速览</h2>
        <ul>
          <li>主站：正常使用 <code>https://www.momoapi.shop</code>，备用网址 <code>https://www.momo-api.cc.cd</code> 仅在主线路不可达时使用。</li>
          <li>OpenAI 兼容客户端：通常使用 <code>https://www.momoapi.shop/v1</code>。</li>
          <li>Anthropic 兼容客户端：直接使用 <code>https://www.momoapi.shop</code>，不需要补 <code>/v1</code>。</li>
          <li>fast：当前 fast 模式双倍计费，具体以公告和控制台展示为准。</li>
          <li>百万上下文：GPT 超过 272k 的部分会额外计费；不要默认塞满百万上下文。</li>
          <li>生图：gpt-image-2 生图可用，但是不保证稳定性。</li>
          <li>模型：当前 OpenAI 已下线 <code>gpt-5.2</code> 和 <code>gpt-5.3</code>，这两个模型暂时不可用。</li>
          <li>拥挤：出现 <code>selected model is at capacity</code> 时，通常是上游算力紧张，稍后重试即可。</li>
        </ul>

        <p>更多说明见 <a href="#/announcements">公告与服务说明</a>。</p>

        <h2 id="reading-order">推荐阅读顺序</h2>
        <ol>
          <li>先看快速开始，确认令牌和请求地址。</li>
          <li>使用 Codex 的用户看 Codex CLI。</li>
          <li>使用 Claude Code 的用户看 Claude Code。</li>
          <li>日常开发技巧看 Claude Code 实用命令。</li>
          <li>使用 Trae、Cursor、RooCode 看 Trae 等 IDE 客户端。</li>
          <li>使用 Gemini CLI 等看其他 CLI 与插件。</li>
          <li>遇到报错时直接查常见问题排查。</li>
        </ol>

        <div class="callout callout--tip">
          <strong>提示</strong>
          <p>文档中的 <code>Base URL</code> 默认使用 <code>https://www.momoapi.shop</code>。如果公告给出备用线路，以公告为准。</p>
        </div>

        <p>momoapi 文档仅用于帮助用户正确配置客户端。</p>
      </div>
    `,
  },
  "/announcements": {
    title: "公告与服务说明",
    section: "开始使用",
    meta: "整理后的站点公告、线路说明与高频服务提示。",
    body: `
      <div class="doc">
        <h1>公告与服务说明</h1>
        <div class="quick-panel quick-panel--stacked">
          <div class="quick-panel__group">
            <strong>新人入口</strong>
            <a class="chip-link chip-link--primary" href="https://www.momoapi.shop/" target="_blank" rel="noopener noreferrer">注册 / 登录</a>
            <a class="chip-link" href="https://www.momoapi.shop/console/token" target="_blank" rel="noopener noreferrer">创建 API 令牌</a>
          </div>
          <div class="quick-panel__copy">
            <strong>Base URL</strong>
            <span class="copy-chip">https://www.momoapi.shop</span>
            <button
              class="copy-chip copy-chip--button"
              type="button"
              data-copy-text="https://www.momoapi.shop"
              aria-label="复制 Base URL"
            >
              复制
            </button>
          </div>
        </div>

        <p>本页把当前站点常用公告整理成更适合查阅的版本。控制台和站内公告如有更新，以实际展示为准。</p>

        <h2 id="entry-routing">入口与线路</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>用途</th>
                <th>地址</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>官网 / 控制台 / API</td>
                <td><code>https://www.momoapi.shop</code></td>
                <td>默认主站，优先使用这个地址。</td>
              </tr>
              <tr>
                <td>备用线路</td>
                <td><code>https://www.momo-api.cc.cd</code></td>
                <td>只在主线路不可达时临时使用。</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>OpenAI 兼容客户端通常填写 <code>https://www.momoapi.shop/v1</code>。Anthropic 兼容客户端通常直接填写 <code>https://www.momoapi.shop</code>，不要默认补 <code>/v1</code>。</p>

        <div class="callout callout--warning">
          <strong>备用网址不要当主站</strong>
          <p>备用线路更适合故障切换。日常使用优先主站，避免把临时入口固化到长期配置里。</p>
        </div>

        <h2 id="image-generation">生图能力</h2>
        <ul>
          <li><code>gpt-image-2</code> 可用，但不保证一直稳定。</li>
          <li>大图、慢图、高分辨率图建议使用支持流式返回的客户端，避免长请求超时。</li>
          <li>如果客户端支持 partial images 或流式图像响应，优先开启。</li>
        </ul>

        <div class="callout callout--tip">
          <strong>长时间生图要预期超时</strong>
          <p>非流式生图请求容易超过 CDN 或客户端等待时间。请求超时不一定是令牌问题，也可能只是图像生成链路太慢。</p>
        </div>

        <h2 id="models-groups">模型与分组</h2>
        <p>站点是低倍率站点，具体倍率以控制台实时展示为准。当前仓库内已明确记录的公告包括：</p>
        <ul>
          <li>例如 <code>gpt-5.5</code> 曾按低倍率提供，实际价格请以站内面板为准。</li>
          <li>OpenAI 已下线 <code>gpt-5.2</code> 和 <code>gpt-5.3</code>，这两个模型当前不可用。</li>
          <li>如果控制台模型列表与旧文档不一致，以控制台最新列表为准。</li>
        </ul>

        <h2 id="fast-billing">fast 与计费</h2>
        <ul>
          <li>当前 fast 模式按双倍计费理解即可，实际账单以控制台展示为准。</li>
          <li>GPT 超过 <code>272k</code> 的上下文部分会额外计费，不要把“支持 1M”理解成每次都应该塞满。</li>
          <li>fast 更适合交互式开发；批量脚本和大上下文任务先评估成本。</li>
        </ul>

        <h2 id="service-notes">常见服务提示</h2>
        <h3 id="capacity">selected model is at capacity</h3>
        <p>这通常是上游模型拥挤或算力不足，不代表你的 token 一定有问题。</p>
        <ol>
          <li>稍后重试。</li>
          <li>换同系列更稳定的模型。</li>
          <li>降低并发，不要短时间密集重试。</li>
        </ol>

        <h3 id="delays">创建令牌、充值、消费记录延迟</h3>
        <p>创建 API 令牌、充值记录、消费记录等操作可能存在延迟。</p>
        <ol>
          <li>刚操作完先等待一会再刷新。</li>
          <li>不要连续重复提交同一个动作。</li>
          <li>长时间异常再检查控制台记录。</li>
        </ol>

        <h3 id="api-503">API Error 503</h3>
        <p>通常是当前模型、分组或上游账号池临时不可用。</p>
        <ol>
          <li>先换模型或换分组。</li>
          <li>不要脚本化密集重试。</li>
          <li>如果多个模型都异常，再排查线路或等待恢复。</li>
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
        <div class="quick-panel quick-panel--stacked">
          <div class="quick-panel__group">
            <strong>新人入口</strong>
            <a class="chip-link chip-link--primary" href="https://www.momoapi.shop/" target="_blank" rel="noopener noreferrer">注册 / 登录</a>
            <a class="chip-link" href="https://www.momoapi.shop/console/token" target="_blank" rel="noopener noreferrer">创建 API 令牌</a>
          </div>
          <div class="quick-panel__copy">
            <strong>Base URL</strong>
            <span class="copy-chip">https://www.momoapi.shop</span>
            <button
              class="copy-chip copy-chip--button"
              type="button"
              data-copy-text="https://www.momoapi.shop"
              aria-label="复制 Base URL"
            >
              复制
            </button>
          </div>
        </div>

        <h2 id="prepare">1. 准备两项</h2>
        <p>使用任何客户端前，先准备好下面两项：</p>
        <ul>
          <li><strong>API Key / Token</strong>：在控制台创建。</li>
          <li><strong>Base URL</strong>：默认使用 <code>https://www.momoapi.shop</code>。</li>
          <li><strong>可用客户端</strong>：Codex CLI、Claude Code、CC Switch、Cherry Studio、Trae / Cursor / RooCode 等。</li>
        </ul>

        <div class="callout callout--warning">
          <strong>不要混用地址</strong>
          <p>配置里先填根地址 <code>https://www.momoapi.shop</code>。只有客户端明确要求 OpenAI 兼容地址时，再补成 <code>/v1</code>。</p>
        </div>

        <h2 id="register-login">2. 注册、登录</h2>
        <p>先打开站点入口：</p>
        <pre><code>https://www.momoapi.shop/</code></pre>
        <ol>
          <li>注册账号。</li>
          <li>登录账号。</li>
        </ol>
        <p>默认主站是 <code>https://www.momoapi.shop</code>。如果主线路不可达，再临时切到备用地址 <code>https://www.momo-api.cc.cd</code>。</p>

        <h2 id="token">3. 创建 API 令牌</h2>
        <ol>
          <li>登录控制台。</li>
          <li>进入令牌 / API Key 页面。</li>
          <li>新建令牌。</li>
          <li>复制并保存令牌。令牌丢失后重新创建即可。</li>
        </ol>
        <p>服务根地址仍然是：</p>
        <pre><code>https://www.momoapi.shop</code></pre>

        <h2 id="client-mapping">4. 选择客户端</h2>
        <p>常用客户端配置规则如下：</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>客户端</th>
                <th>Base URL</th>
                <th>Token 填写位置</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Codex CLI</td>
                <td><code>https://www.momoapi.shop/v1</code> 或客户端要求的 OpenAI Base URL</td>
                <td>OpenAI API Key</td>
              </tr>
              <tr>
                <td>Claude Code</td>
                <td><code>ANTHROPIC_BASE_URL=https://www.momoapi.shop</code></td>
                <td><code>ANTHROPIC_AUTH_TOKEN</code></td>
              </tr>
              <tr>
                <td>CC Switch</td>
                <td>新建配置里的 Base URL</td>
                <td>配置里的 Token</td>
              </tr>
              <tr>
                <td>Cherry Studio</td>
                <td>OpenAI 兼容提供商 Base URL</td>
                <td>API Key</td>
              </tr>
              <tr>
                <td>Trae / Cursor / RooCode</td>
                <td><code>https://www.momoapi.shop/v1</code></td>
                <td>OpenAI Compatible API Key</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="persist">5. 临时试跑和长期固化</h2>
        <p>临时试跑可以直接在当前终端里设置环境变量。如果只是验证一次，这样够用；真正长期使用时，不要只依赖临时变量。</p>
        <ul>
          <li>Claude Code：优先用长期配置，或者写进 shell profile、PowerShell profile、systemd、启动器。</li>
          <li>Codex CLI：优先用长期配置和本地鉴权缓存，或者写进 profile、systemd、启动器。</li>
          <li>IDE 客户端：直接保存在客户端设置里，不要每次重开终端再敲一次。</li>
          <li>只做一次性测试时，当前终端里的临时导出最省事。</li>
        </ul>
        <p>对应细节见 <a href="#/claude-code">Claude Code 配置</a> 和 <a href="#/codex">Codex CLI 配置</a>。</p>

        <h2 id="ide-fast-fill">6. Trae / Cursor / RooCode 快速填写</h2>
        <p>这类 IDE 客户端一般选择 <code>OpenAI Compatible</code> 或 <code>Custom OpenAI</code>：</p>
        <pre><code>Base URL: https://www.momoapi.shop/v1
API Key: sk-你的令牌
Model: 你的目标模型名</code></pre>
        <p>完整说明见 <a href="#/trae-ide-clients">Trae 等 IDE 客户端配置</a>。</p>

        <h2 id="cli-install">7. 安装常用 CLI</h2>
        <p>如果你要同时使用 Claude Code、Codex、Gemini CLI，可以一次安装：</p>
        <pre><code>npm install -g @anthropic-ai/claude-code@latest @openai/codex@latest @google/gemini-cli@latest</code></pre>
        <p>检查版本：</p>
        <pre><code>claude --version
codex --version
gemini --version</code></pre>

        <h2 id="validate">8. 最小验证</h2>
        <p>配置完成后，先用最小请求测试：</p>
        <pre><code>curl https://www.momoapi.shop/v1/models \\
  -H "Authorization: Bearer sk-你的令牌"</code></pre>
        <p>能返回模型列表，说明地址和令牌基本没问题。再继续配 CLI 或 IDE。</p>

        <h2 id="first-errors">9. 出错先看这几项</h2>
        <ul>
          <li><strong>401</strong>：令牌错误、令牌被删、复制时多了空格。</li>
          <li><strong>404</strong>：Base URL 填错，常见是漏了 <code>/v1</code> 或多填了路径。</li>
          <li><strong>403</strong>：可能是当前网络环境被拦截，先更换网络、代理或出口 IP，再重新测试。</li>
          <li><strong>503</strong>：当前分组 / 模型 / 上游账号暂时不可用，也可能是选错分组导致模型不兼容；先换普通可用分组或同系列模型测试。</li>
        </ul>
      </div>
    `,
  },
  "/account-token": {
    title: "账号与令牌",
    section: "开始使用",
    meta: "注册、登录、令牌格式与余额用量说明。",
    body: `
      <div class="doc">
        <h1>账号与令牌</h1>
        <h2 id="register-login">注册与登录</h2>
        <p>新用户直接从主站开始即可：</p>
        <pre><code>https://www.momoapi.shop/</code></pre>
        <p>在这里完成：</p>
        <ol>
          <li>注册。</li>
          <li>登录。</li>
        </ol>
        <p>如果注册需要邮箱验证码，等待验证码邮件送达后再继续操作。默认主站不可达时，再临时切到 <code>https://www.momo-api.cc.cd</code>。</p>

        <h2 id="create-token">创建令牌</h2>
        <p>令牌是客户端访问 API 的凭证。建议：</p>
        <ul>
          <li>每个客户端单独创建一个令牌，方便定位问题。</li>
          <li>不要把令牌发给他人。</li>
          <li>令牌泄露后立即删除并重新创建。</li>
        </ul>
        <p>创建路径通常在控制台的令牌 / API Key 页面：</p>
        <pre><code>https://www.momoapi.shop/console/token</code></pre>

        <h2 id="token-format">令牌格式</h2>
        <p>客户端通常要求填写 <code>API Key</code>、<code>Token</code> 或 <code>Authorization Bearer Token</code>。这些场景填同一个 momoapi 令牌即可。</p>

        <div class="copy-block">
          <div class="copy-block__meta">
            <span class="copy-block__type">text 文本/文字</span>
            <button
              class="copy-block__button"
              type="button"
              data-copy-text="Authorization: Bearer sk-xxxxxxxx"
              aria-label="复制令牌格式"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 9.75A2.75 2.75 0 0 1 11.75 7h6.5A2.75 2.75 0 0 1 21 9.75v8.5A2.75 2.75 0 0 1 18.25 21h-6.5A2.75 2.75 0 0 1 9 18.25zM4.5 14.25v-8.5A2.75 2.75 0 0 1 7.25 3h6.5A2.75 2.75 0 0 1 16.5 5.75v.75h-4.75A4.75 4.75 0 0 0 7 11.25V16H7.25A2.75 2.75 0 0 1 4.5 13.25z"></path>
              </svg>
              <span>复制</span>
            </button>
          </div>
          <pre class="copy-block__body"><code>Authorization: Bearer sk-xxxxxxxx</code></pre>
        </div>

        <h2 id="token-rules">令牌使用规则</h2>
        <ul>
          <li>个人开发机、CI、服务器建议拆分不同令牌。</li>
          <li>CLI、IDE、自动化脚本尽量不要共用一个长期令牌。</li>
          <li>令牌复制后立即保存，避免后续只剩旧配置却找不到原值。</li>
        </ul>

        <h2 id="balance-usage">余额与用量</h2>
        <p>控制台可查看余额、消费记录、模型、渠道或分组相关信息。请求失败时，先确认：</p>
        <ul>
          <li>账号余额是否充足。</li>
          <li>当前令牌是否启用。</li>
          <li>当前分组是否允许所选模型。</li>
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
                <td>专门令牌，保存在密钥管理系统或环境变量平台里。</td>
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
    meta: "分组、fast、模型范围与不可用时的处理方式。",
    body: `
      <div class="doc">
        <h1>模型与分组</h1>
        <h2 id="what-is-group">分组是什么</h2>
        <p>分组决定当前请求会进入哪一类账号池，以及该池支持哪些模型、倍率和能力。</p>
        <p>常见分组可能包含：</p>
        <ul>
          <li><code>default</code></li>
          <li><code>gpt-plus</code></li>
          <li><code>gpt-pro</code></li>
          <li><code>claude-kiro</code></li>
        </ul>
        <p>具体名称以控制台展示为准。</p>

        <h2 id="fast-tier">fast / service_tier 的理解</h2>
        <ul>
          <li><strong>fast</strong>：表示更快的速度档或官方 fast mode，当前按请求动态计费，不再要求单独 fast 分组。</li>
          <li><strong>service_tier=fast</strong>：GPT / Codex fast 对应的 API 参数。</li>
        </ul>
        <p>如果客户端模型名或配置里包含 <code>fast</code>，系统会按请求实际 fast 状态动态计费。用户无需专门切换到 <code>*-fast</code> 分组。</p>

        <h2 id="billing-notes">当前公告里的计费说明</h2>
        <ul>
          <li>fast 不再依赖单独的 fast 分组。</li>
          <li>如果出现fast不可用请联系管理员。</li>
          <li>请求启用 fast 时，系统按动态计费识别倍率。</li>
          <li><code>gpt-5.5 fast</code> 可能有更高倍率，但不需要用户切换到单独分组。</li>
          <li>GPT / Codex fast 通过 <code>service_tier</code>、客户端 fast 开关或 <code>/fast</code> 启用。</li>
          <li>Claude Code fast 通过 <code>/fast</code> 启用。</li>
        </ul>
        <p>体感速度只作为参考：</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>类型</th>
                <th>简单请求体感</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>默认</td>
                <td>约 7 秒</td>
              </tr>
              <tr>
                <td>fast</td>
                <td>约 4-5 秒</td>
              </tr>
              <tr>
                <td>spark</td>
                <td>约 3 秒</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="codex-model-range">Codex 模型范围</h2>
        <p>当前仓库里已经明确记录：<code>gpt-5.2-codex</code> 以及任何低于 <code>5.3</code> 的模型已下架，不能请求。当前主线可用范围大致是：</p>
        <ul>
          <li><code>gpt-5.4</code></li>
          <li><code>gpt-5.5</code></li>
        </ul>
        <p><code>pro</code> 分组的可用模型可能不同，以控制台模型列表为准。</p>

        <h2 id="image-models">生图模型</h2>
        <p>当前公告提到：</p>
        <ul>
          <li><code>gpt-image-2</code> 通过 API 可用。</li>
          <li>Codex 内部调用 skill 生图可用。</li>
          <li>Codex 内生图和直接调用 API 生图均支持。</li>
          <li>慢图、大图、高分辨率图建议使用流式请求和 partial images。</li>
        </ul>

        <h2 id="model-unavailable">模型不可用时怎么办</h2>
        <p>如果看到下面这类报错：</p>
        <pre><code>{
  "error": {
    "message": "model price not configured"
  }
}</code></pre>
        <p>说明当前模型没有配置价格，或者不在当前分组白名单里。处理方式：</p>
        <ol>
          <li>换控制台明确列出的模型。</li>
          <li>检查令牌所属分组。</li>
          <li>等管理员同步模型和价格配置。</li>
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
export OPENAI_BASE_URL="https://www.momoapi.shop/v1"</code></pre>

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
export ANTHROPIC_BASE_URL="https://www.momoapi.shop"</code></pre>

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
        <pre><code>Base URL: https://www.momoapi.shop/v1
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
Base URL: https://www.momoapi.shop/v1
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
          <li>确认 Base URL 和模型名。</li>
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
    meta: "把代理、DNS、客户端配置分开讲，避免互相混淆。",
    body: `
      <div class="doc">
        <h1>网络与代理</h1>
        <p class="lead">网络问题经常被误判成账号问题。把代理、出口 IP、DNS 和客户端配置分开看，排查会快很多。</p>

        <h2 id="proxy-choice">什么时候需要代理</h2>
        <ul>
          <li>客户端本身无法直连你的中转站。</li>
          <li>公司网络限制了出站访问。</li>
          <li>当前网络对目标域名解析异常或连接不稳定。</li>
        </ul>

        <h2 id="network-diagnosis">先看哪几项</h2>
        <ul>
          <li>网页控制台可用，但本机 CLI 403。</li>
          <li>换网络后才开始失败。</li>
          <li>同一令牌在不同设备上表现不一致。</li>
          <li>命令行能通，但 IDE 内置终端或插件请求失败。</li>
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
          <li>风控策略拦截了当前网络。</li>
          <li>代理出口质量差，或当前 IP 被上游误判为异常。</li>
          <li>请求头、模型权限或账户状态不符合当前接口要求。</li>
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
  const isHomePage = currentPath === "/";

  renderTopNav(currentPath);
  renderSidebar(currentPath);
  document.body.classList.toggle("page-home", isHomePage);

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
  document.title = `${page.title} | momoapi 中转站教程`;
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

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "true");
  input.style.position = "absolute";
  input.style.left = "-9999px";
  document.body.appendChild(input);
  input.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(input);
  return copied;
}

async function handleCopyButton(button) {
  const text = button.dataset.copyText;
  if (!text) return;

  const label = button.querySelector("span");
  const original = label ? label.textContent : "";

  try {
    const copied = await copyText(text);
    if (!copied) throw new Error("copy failed");
    button.classList.add("is-copied");
    if (label) label.textContent = "已复制";
  } catch (error) {
    button.classList.add("is-copy-error");
    if (label) label.textContent = "复制失败";
  }

  window.setTimeout(() => {
    button.classList.remove("is-copied", "is-copy-error");
    if (label) label.textContent = original || "复制";
  }, 1600);
}

window.addEventListener("hashchange", renderPage);

document.addEventListener("click", (event) => {
  const closeTarget = event.target.closest("[data-close-modal='true']");
  if (closeTarget) {
    closeSearchModal();
  }

  const copyButton = event.target.closest("[data-copy-text]");
  if (copyButton) {
    handleCopyButton(copyButton);
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
