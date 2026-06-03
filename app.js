const navItems = [
  { title: "模型价格", href: "https://www.momoapi.shop/pricing" },
  { title: "购买额度", href: "https://pay.ldxp.cn/shop/QJD3AMYP", primary: true },
  { title: "兑换额度", href: "https://www.momoapi.shop/console/topup" },
  { title: "创建令牌", href: "https://www.momoapi.shop/console/token" },
];

const sidebar = [
  {
    title: "开始使用",
    items: [
      { title: "快速开始", path: "/quick-start" },
      { title: "公告与服务说明", path: "/announcements" },
      { title: "账号与令牌", path: "/account-token" },
      { title: "模型与分组", path: "/models-groups" },
    ],
  },
  {
    title: "客户端教程",
    items: [
      { title: "CC Switch（推荐）", path: "/cc-switch" },
      { title: "Codex CLI", path: "/codex" },
      { title: "Claude Code", path: "/claude-code" },
      { title: "fast 与 1M 上下文", path: "/fast-context" },
      { title: "Claude Code 实用命令", path: "/claude-usage" },
      { title: "Trae 等 IDE 客户端", path: "/trae-ide-clients" },
      { title: "IDE 集成", path: "/ide" },
      { title: "其他 CLI 与插件", path: "/other-clients" },
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

function renderEntryPanel(stacked = false) {
  return `
    <div class="entry-panel${stacked ? " entry-panel--stacked" : ""}">
      <div class="quick-panel">
        <div class="quick-panel__main">
          <div class="quick-panel__intro">
            <strong>常用操作入口</strong>
          </div>
          <div class="quick-panel__actions" aria-label="新人操作入口">
            <a class="chip-link chip-link--primary" href="https://www.momoapi.shop/" target="_blank" rel="noopener noreferrer">
              <span>注册 / 登录</span>
            </a>
            <a class="chip-link" href="https://pay.ldxp.cn/shop/QJD3AMYP" target="_blank" rel="noopener noreferrer">
              <span>购买额度</span>
            </a>
            <a class="chip-link" href="https://www.momoapi.shop/console/topup" target="_blank" rel="noopener noreferrer">
              <span>兑换额度</span>
            </a>
            <a class="chip-link" href="https://www.momoapi.shop/console/token" target="_blank" rel="noopener noreferrer">
              <span>创建 API 令牌</span>
            </a>
          </div>
        </div>
        <p class="quick-panel__note">建议顺序：先注册登录，再购买或兑换额度，最后创建 API 令牌。</p>
        <div class="service-facts" aria-label="服务关键信息">
          <div class="service-fact">
            <strong>额度比例</strong>
            <span>当前 <code>1 元人民币 ≈ 1 美元额度</code>，以控制台为准。</span>
          </div>
          <div class="service-fact">
            <strong>支持客户端</strong>
            <span>Codex CLI、Claude Code、CC Switch、Cherry Studio、Trae / Cursor / RooCode 等。</span>
          </div>
          <div class="service-fact">
            <strong>联系支持</strong>
            <span>QQ群 <code>1102891423</code></span>
          </div>
        </div>
      </div>
      <div class="entry-support-note">
        <strong>需要人工处理</strong>
        <span>大额充值、额度异常或线路波动，可进 QQ 群 <code>1102891423</code> 联系管理员。</span>
      </div>
    </div>
  `;
}

const pages = {
  "/announcements": {
    title: "公告与服务说明",
    section: "开始使用",
    meta: "整理后的站点公告、线路说明与高频服务提示。",
    body: `
      <div class="doc">
        <h1>公告与服务说明</h1>
        ${renderEntryPanel(true)}

        <p>本页只整理服务入口、计费、线路和联系说明。具体客户端配置、模型选择和报错处理，请跳到对应教程页查看。</p>

        <h2 id="current-notes">当前要点</h2>
        <div class="callout callout--tip">
          <strong>先看这里</strong>
          <p>日常使用优先主站；购买前先估算用量；遇到 401、403、404、429、503 等错误时，优先看 <a href="#/troubleshooting">常见问题排查</a>。</p>
        </div>

        <h2 id="billing-support">充值、计费与联系</h2>
        <ul>
          <li>当前主要是按量付费，直接充值，用多少扣多少。</li>
          <li>购买前先评估大致用量，按需充值，避免把 fast、长上下文、生图的费用当成普通短请求来估算。</li>
          <li>如果拿到的是兑换码，到 <code>https://www.momoapi.shop/console/topup</code> 兑换额度。</li>
          <li>大额充值建议先进 QQ 群 <code>1102891423</code> 联系管理员，通常会有赠送额度。</li>
        </ul>

        <h2 id="entry-routing">入口与备用线路</h2>
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
        <div class="callout callout--warning">
          <strong>备用网址不要当主站</strong>
          <p>备用线路更适合故障切换。日常使用优先主站，避免把临时入口固化到长期配置里。Base URL 细节见 <a href="#/quick-start">快速开始</a>。</p>
        </div>

        <h2 id="delays">额度、令牌和记录延迟</h2>
        <ul>
          <li>充值记录、消费记录、令牌创建等操作可能存在短暂延迟。</li>
          <li>刚操作完先等待一会再刷新，不要连续重复提交同一个动作。</li>
          <li>长时间异常时，再进 QQ 群 <code>1102891423</code> 联系管理员。</li>
        </ul>

        <h2 id="related-guides">相关说明入口</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>想了解</th>
                <th>去哪里看</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base URL、Token、最小验证</td>
                <td><a href="#/quick-start">快速开始</a></td>
                <td>先把最小调用跑通。</td>
              </tr>
              <tr>
                <td>模型、分组、生图能力</td>
                <td><a href="#/models-groups">模型与分组</a></td>
                <td>以控制台实时展示为准。</td>
              </tr>
              <tr>
                <td>fast、1M 上下文、额外计费</td>
                <td><a href="#/fast-context">fast 与 1M 上下文</a></td>
                <td>大上下文和 fast 使用前先估算成本。</td>
              </tr>
              <tr>
                <td>401、403、404、429、503、模型拥挤</td>
                <td><a href="#/troubleshooting">常见问题排查</a></td>
                <td>按错误类型逐项处理。</td>
              </tr>
            </tbody>
          </table>
        </div>
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
        ${renderEntryPanel(true)}

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

        <h2 id="recharge">3. 充值与兑换</h2>
        <p>如果你使用的是按量模式，先确认自己是直接充值还是通过兑换码入账。购买前先评估大致用量，避免一次充得太多。</p>
        <div class="step-list">
          <section class="step-item">
            <div class="step-item__eyebrow">步骤 1</div>
            <h3>进入充值页兑换额度</h3>
            <p>购买后如果拿到的是兑换码，就去充值页兑换。充值页和充值记录偶尔会有短暂延迟，提交后先等待一会再刷新。</p>
            <pre><code>https://www.momoapi.shop/console/topup</code></pre>
            <figure class="doc-figure">
              <img src="./assets/guide/quick-start/topup-redeem.png" alt="充值页兑换额度界面截图" loading="lazy" />
              <figcaption>在充值页输入兑换码后提交，等待余额刷新。</figcaption>
            </figure>
          </section>
        </div>

        <h2 id="token">4. 创建 API 令牌</h2>
        <ol>
          <li>登录控制台。</li>
          <li>进入令牌 / API Key 页面。</li>
          <li>新建令牌。</li>
          <li>复制并保存令牌。令牌丢失后重新创建即可。</li>
        </ol>
        <p>服务根地址仍然是：</p>
        <pre><code>https://www.momoapi.shop</code></pre>

        <h2 id="client-mapping">5. 选择客户端</h2>
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

        <h2 id="persist">6. 临时试跑和长期固化</h2>
        <p>临时试跑可以直接在当前终端里设置环境变量。如果只是验证一次，这样够用；真正长期使用时，不要只依赖临时变量。</p>
        <ul>
          <li>Claude Code：优先用长期配置，或者写进 shell profile、PowerShell profile、systemd、启动器。</li>
          <li>Codex CLI：优先用长期配置和本地鉴权缓存，或者写进 profile、systemd、启动器。</li>
          <li>IDE 客户端：直接保存在客户端设置里，不要每次重开终端再敲一次。</li>
          <li>只做一次性测试时，当前终端里的临时导出最省事。</li>
        </ul>
        <p>对应细节见 <a href="#/claude-code">Claude Code 配置</a> 和 <a href="#/codex">Codex CLI 配置</a>。</p>

        <h2 id="ide-fast-fill">7. Trae / Cursor / RooCode 快速填写</h2>
        <p>这类 IDE 客户端一般选择 <code>OpenAI Compatible</code> 或 <code>Custom OpenAI</code>：</p>
        <pre><code>Base URL: https://www.momoapi.shop/v1
API Key: sk-你的令牌
Model: 你的目标模型名</code></pre>
        <p>完整说明见 <a href="#/trae-ide-clients">Trae 等 IDE 客户端配置</a>。</p>

        <h2 id="cli-install">8. 安装常用 CLI</h2>
        <p>如果你要同时使用 Claude Code、Codex、Gemini CLI，可以一次安装：</p>
        <pre><code>npm install -g @anthropic-ai/claude-code@latest @openai/codex@latest @google/gemini-cli@latest</code></pre>
        <p>检查版本：</p>
        <pre><code>claude --version
codex --version
gemini --version</code></pre>

        <h2 id="validate">9. 最小验证</h2>
        <p>配置完成后，先用最小请求测试：</p>
        <pre><code>curl https://www.momoapi.shop/v1/models \\
  -H "Authorization: Bearer sk-你的令牌"</code></pre>
        <p>能返回模型列表，说明地址和令牌基本没问题。再继续配 CLI 或 IDE。</p>

        <h2 id="first-errors">10. 出错先看这几项</h2>
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

        <h2 id="token-walkthrough">图文流程</h2>
        <div class="step-list">
          <section class="step-item">
            <div class="step-item__eyebrow">步骤 1</div>
            <h3>进入令牌管理页</h3>
            <p>登录控制台后，先进入令牌管理页面。这里可以看到已有令牌，也可以直接新建新的 API Key。</p>
            <figure class="doc-figure">
              <img src="./assets/guide/account-token/token-list.png" alt="令牌管理列表截图" loading="lazy" />
              <figcaption>令牌管理列表页，点击新建即可继续。</figcaption>
            </figure>
          </section>
          <section class="step-item">
            <div class="step-item__eyebrow">步骤 2</div>
            <h3>填写令牌名称和分组</h3>
            <p>令牌名称可以按设备或用途命名，例如“macbook-codex”“prod-ci”。这样后续排错和轮换会更容易。</p>
            <p>如果你要接入 <code>gpt-5.5</code>、<code>gpt-5.4</code> 或常见 Codex 相关模型，旧指南里默认建议先选 <code>default</code> 分组；如果控制台当前展示的分组规则不同，以控制台模型广场和分组说明为准。</p>
            <figure class="doc-figure">
              <img src="./assets/guide/account-token/token-form.png" alt="新建令牌表单截图" loading="lazy" />
              <figcaption>名称按用途填写，分组优先看当前控制台可用范围。</figcaption>
            </figure>
          </section>
          <section class="step-item">
            <div class="step-item__eyebrow">步骤 3</div>
            <h3>提交后立即复制 API Key</h3>
            <p>很多控制台只在创建成功当下展示完整密钥。复制后就地保存，不要等到后面配置客户端时再回来找。</p>
            <figure class="doc-figure">
              <img src="./assets/guide/account-token/token-copy.png" alt="复制 API Key 截图" loading="lazy" />
              <figcaption>创建成功后立刻复制并保存密钥原文。</figcaption>
            </figure>
          </section>
        </div>

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
    meta: "Codex CLI 的安装、配置、fast 与常见问题。",
    body: `
      <div class="doc">
        <h1>Codex CLI 配置</h1>

        ${renderEntryPanel(true)}

        <h2 id="install">1. 安装 Codex</h2>
        <p>确保已安装 Node.js，然后安装或更新 Codex CLI：</p>
        <pre><code>npm install -g @openai/codex
codex --version</code></pre>
        <p>启动：</p>
        <pre><code>codex</code></pre>
        <p>如果你明确知道自己在做什么，也可以使用跳过权限确认的模式：</p>
        <pre><code>codex --dangerously-bypass-approvals-and-sandbox</code></pre>

        <div class="callout callout--danger">
          <strong>权限提醒</strong>
          <p>跳过权限确认会让 Codex 直接执行命令。只建议在可信目录、可信机器上使用。</p>
        </div>

        <h2 id="base-url-token">2. 配置 Base URL 和 Token</h2>
        <p>Codex 使用 OpenAI 兼容接口时，通常需要下面两项。临时试跑可以直接在当前终端里导出：</p>
        <pre><code>export OPENAI_API_KEY="sk-你的令牌"
export OPENAI_BASE_URL="https://www.momoapi.shop/v1"</code></pre>
        <p>Windows PowerShell：</p>
        <pre><code>$env:OPENAI_API_KEY="sk-你的令牌"
$env:OPENAI_BASE_URL="https://www.momoapi.shop/v1"</code></pre>
        <p>如果你要长期使用，不要只靠当前终端里的临时导出。按系统持久化保存：</p>
        <ul>
          <li>macOS / Linux：写到 <code>~/.zshrc</code> 或 <code>~/.bashrc</code>。</li>
          <li>Windows PowerShell：写到 PowerShell profile，或用 <code>setx</code>。</li>
          <li>systemd / 启动器 / 桌面快捷方式：写到对应 service 或 launcher 配置。</li>
        </ul>

        <div class="callout callout--warning">
          <strong>地址格式要一致</strong>
          <p>Codex 走 OpenAI 兼容路径时，通常需要的是带 <code>/v1</code> 的根地址。少了这一段，模型列表和聊天接口往往都会 404。</p>
        </div>

        <h2 id="windows-walkthrough">3. Windows 图文配置</h2>
        <p>如果你主要在 Windows 上使用 Codex，直接按下面这套图文步骤做最省事。它本质上是在本地准备好 <code>auth.json</code> 和 <code>config.toml</code>。</p>

        <div class="step-list">
          <section class="step-item">
            <div class="step-item__eyebrow">步骤 1</div>
            <h3>先安装 Codex 客户端</h3>
            <p>如果你不是用 npm 安装，而是直接走 Windows 图形化入口，可以先从开始菜单或应用商店搜索 Codex 并安装。网络慢时建议先解决代理或出口问题。</p>
            <div class="guide-gallery">
              <figure class="doc-figure">
                <img src="./assets/guide/codex/windows-start-menu.png" alt="Windows 打开开始菜单截图" loading="lazy" />
                <figcaption>从开始菜单或应用商店入口进入。</figcaption>
              </figure>
              <figure class="doc-figure">
                <img src="./assets/guide/codex/windows-search-codex.png" alt="Windows 搜索 Codex 截图" loading="lazy" />
                <figcaption>搜索 Codex，通常第一个就是目标客户端。</figcaption>
              </figure>
              <figure class="doc-figure">
                <img src="./assets/guide/codex/windows-install-codex.png" alt="Windows 安装 Codex 截图" loading="lazy" />
                <figcaption>点击安装，装好后先不用急着打开。</figcaption>
              </figure>
            </div>
          </section>

          <section class="step-item">
            <div class="step-item__eyebrow">步骤 2</div>
            <h3>打开 <code>.codex</code> 配置目录</h3>
            <p>把下面这个路径直接粘到文件资源管理器地址栏：</p>
            <pre><code>%HOMEDRIVE%%HOMEPATH%\\.codex</code></pre>
            <figure class="doc-figure">
              <img src="./assets/guide/codex/open-codex-folder.png" alt="打开 .codex 目录截图" loading="lazy" />
              <figcaption>进入用户目录下的 <code>.codex</code> 文件夹。</figcaption>
            </figure>
          </section>

          <section class="step-item">
            <div class="step-item__eyebrow">步骤 3</div>
            <h3>显示扩展名并准备两个配置文件</h3>
            <p>先在资源管理器里打开文件扩展名显示，然后确认目录中有 <code>auth.json</code> 和 <code>config.toml</code>。如果没有，就新建空白文本文件再改名。</p>
            <div class="guide-gallery">
              <figure class="doc-figure">
                <img src="./assets/guide/codex/show-file-extensions.png" alt="Windows 显示文件扩展名截图" loading="lazy" />
                <figcaption>先打开扩展名显示，避免把文件误建成 <code>.txt</code>。</figcaption>
              </figure>
              <figure class="doc-figure">
                <img src="./assets/guide/codex/create-config-files.png" alt="创建 auth.json 和 config.toml 截图" loading="lazy" />
                <figcaption>目录里准备好 <code>auth.json</code> 和 <code>config.toml</code>。</figcaption>
              </figure>
            </div>
          </section>

          <section class="step-item">
            <div class="step-item__eyebrow">步骤 4</div>
            <h3>编辑 <code>auth.json</code></h3>
            <p>右键用记事本打开 <code>auth.json</code>，填入你的 API Key。这里写的是 OpenAI 兼容鉴权值，不是网页登录账号。</p>
            <div class="guide-gallery">
              <figure class="doc-figure">
                <img src="./assets/guide/codex/edit-auth-json.png" alt="编辑 auth.json 截图" loading="lazy" />
                <figcaption>用记事本或其他纯文本编辑器打开。</figcaption>
              </figure>
              <figure class="doc-figure">
                <img src="./assets/guide/codex/auth-json-content.png" alt="auth.json 内容截图" loading="lazy" />
                <figcaption>保存后确认 JSON 格式没有多余逗号或引号。</figcaption>
              </figure>
            </div>
          </section>
        </div>

        <h2 id="model-selection">4. 模型选择</h2>
        <p>进入 Codex 后，通过客户端的模型设置选择可用模型。若提示模型元数据缺失，一般不影响基础请求，但可能影响 token 估算或使用体验。</p>

        <div class="guide-gallery">
          <figure class="doc-figure">
            <img src="./assets/guide/codex/pin-codex.png" alt="固定 Codex 到任务栏截图" loading="lazy" />
            <figcaption>第一次配置好后，可以固定到任务栏或桌面，减少后续重复查找。</figcaption>
          </figure>
          <figure class="doc-figure">
            <img src="./assets/guide/codex/open-folder.png" alt="Codex 打开工作目录截图" loading="lazy" />
            <figcaption>进入客户端后用 File 或 Open Folder 打开你的工作目录。</figcaption>
          </figure>
          <figure class="doc-figure">
            <img src="./assets/guide/codex/network-example.png" alt="Codex 联网能力示例截图" loading="lazy" />
            <figcaption>Codex 本身支持联网工具，适合需要检索或读项目的场景。</figcaption>
          </figure>
          <figure class="doc-figure">
            <img src="./assets/guide/codex/skip-startup-options.png" alt="Codex 启动引导截图" loading="lazy" />
            <figcaption>首次启动里的一些引导选项可以先跳过，优先确认配置是否生效。</figcaption>
          </figure>
          <figure class="doc-figure">
            <img src="./assets/guide/codex/continue-current-model.png" alt="继续使用当前模型截图" loading="lazy" />
            <figcaption>模型可用时直接继续使用当前模型即可开始工作。</figcaption>
          </figure>
        </div>

        <h2 id="fast-context">5. fast 和百万上下文</h2>
        <p>Codex fast 可以在 Codex 里执行：</p>
        <pre><code>/fast</code></pre>
        <p>GPT / Codex API 层对应：</p>
        <pre><code>{
  "service_tier": "fast"
}</code></pre>
        <p>momoapi 会按请求里的 fast / <code>service_tier</code> 动态计费。</p>
        <p>GPT 百万上下文超过 <code>272k</code> 的部分会额外计费。不要默认把整个仓库、超长日志一次性塞进上下文。详见 <a href="#/fast-context">fast 与百万上下文</a>。</p>

        <h2 id="common-issues">6. 常见问题</h2>
        <h3 id="unexpected-404">Unexpected status 404 Not Found</h3>
        <p>通常是 URL 填错。Codex 请求 <code>/v1/responses</code> 时，Base URL 应该类似：</p>
        <pre><code>https://www.momoapi.shop/v1</code></pre>
        <p>不要填成：</p>
        <pre><code>https://www.momoapi.shop/v1/responses</code></pre>

        <h3 id="service-unavailable">Service temporarily unavailable</h3>
        <p>表示当前模型 / 分组 / 上游账号暂时不可用。处理方式：</p>
        <ol>
          <li>换同系列模型。</li>
          <li>换支持的分组。</li>
          <li>等待账号池恢复。</li>
        </ol>

        <h3 id="context-too-large">context too large</h3>
        <p>上下文太大时，新开会话或减少附加文件。可以让 Codex 先读关键文件，不要一次性塞入整个项目。</p>

        <h2 id="config-template">7. 最后统一模板</h2>
        <p>前面讲的临时变量、长期固化、最后都可以收口到这两份文件<code>config.toml</code>：</p>
        <pre><code>model_provider = "custom"
model = "gpt-5.5"
model_reasoning_effort = "high"
network_access = "enabled"             # 启用网络访问（工具调用等）
sandbox_mode = "danger-full-access"
model_context_window = 1000000
model_auto_compact_token_limit = 900000
disable_response_storage = true

# 模型提供者配置
[model_providers.custom]
name = "custom"              # 显示名称（自定义）
base_url = "https://www.momoapi.shop/v1"  # 代理基地址（OpenAI 兼容）
wire_api = "responses"                 # 使用 Responses API（推荐 GPT-5 系列，支持高级 reasoning）
requires_openai_auth = true            # 需要标准 OpenAI 风格的 API Key 认证
model_reasoning_effort = "high"
network_access = "enabled"
disable_response_storage = true

[windows]
sandbox = "elevated"</code></pre>
        <p><code>fast</code> 仍然是请求层的设置，不写进这个 <code>config.toml</code>。要么在 Codex 里用 <code>/fast</code>，要么在请求里带 <code>service_tier=fast</code>。</p>
        <p><code>auth.json</code>：</p>
        <pre><code>{
  "OPENAI_API_KEY": "sk-xxx"
}</code></pre>
      <p><code>auth.json</code>和<code>config.toml</code> 都在 ~/.codex目录（mac和linux），%USERPROFILE%\\.codex（windows）</p>
      </div>
    `,
  },
  "/claude-code": {
    title: "Claude Code",
    section: "客户端教程",
    meta: "Claude Code 的安装、环境变量、CC Switch、fast 与 1M 上下文。",
    body: `
      <div class="doc">
        <h1>Claude Code 配置</h1>

        ${renderEntryPanel(true)}

        <h2 id="install-deps">1. 安装依赖</h2>
        <p>建议先安装：</p>
        <ul>
          <li>Node.js 18+，推荐 Node.js 22 LTS 或更高稳定版。</li>
          <li>Git。</li>
          <li>可选：CC Switch，用于管理不同中转配置。</li>
        </ul>

        <h2 id="install-claude">2. 安装 Claude Code</h2>
        <p>推荐使用 npm：</p>
        <pre><code>npm install -g @anthropic-ai/claude-code</code></pre>
        <p>如果已经安装过，可以更新到最新版：</p>
        <pre><code>npm install -g @anthropic-ai/claude-code@latest
claude --version</code></pre>
        <p>如果 npm 安装失败，先看 <a href="#/network-proxy">网络与代理</a>，确认命令行能访问 npm 源。</p>
        <p>启动：</p>
        <pre><code>claude</code></pre>
        <p>跳过权限询问：</p>
        <pre><code>claude --dangerously-skip-permissions</code></pre>

        <h2 id="cc-switch">3. 推荐使用 CC Switch</h2>
        <p>打开 CC Switch，新建配置：</p>
        <ul>
          <li>Token：填写 momoapi 令牌。</li>
          <li>Base URL：填写 <code>https://www.momoapi.shop</code>。</li>
          <li>保存后切换配置。</li>
          <li>重启 Claude Code。</li>
        </ul>
        <p>这类图形化配置适合长期使用。多个中转或多个令牌之间切换时，不建议反复手改环境变量。</p>
        <p>如果要配置 fast 或百万上下文，先看 <a href="#/fast-context">fast 与百万上下文</a>。当前 fast 不再要求单独 fast 分组；Claude Code 里用 <code>/fast</code>，GPT / Codex 侧对应 <code>service_tier</code>。</p>

        <h2 id="env-config">4. 使用环境变量配置</h2>
        <p>如果只是临时验证，可以直接在当前终端里 <code>export</code>：</p>
        <pre><code>export ANTHROPIC_AUTH_TOKEN="sk-你的令牌"
export ANTHROPIC_BASE_URL="https://www.momoapi.shop"
claude</code></pre>
        <p>真正长期使用时，不要只在当前终端里临时 <code>export</code>。要把变量写进系统能持续读取的位置。</p>
        <p>macOS / Linux：</p>
        <pre><code>echo 'export ANTHROPIC_AUTH_TOKEN="sk-你的令牌"' >> ~/.zshrc
echo 'export ANTHROPIC_BASE_URL="https://www.momoapi.shop"' >> ~/.zshrc
source ~/.zshrc</code></pre>
        <p>如果你用的是 Bash，把 <code>~/.zshrc</code> 换成 <code>~/.bashrc</code>。</p>
        <p>Windows PowerShell：</p>
        <pre><code>$env:ANTHROPIC_AUTH_TOKEN="sk-你的令牌"
$env:ANTHROPIC_BASE_URL="https://www.momoapi.shop"
claude</code></pre>
        <p>如果是 systemd、启动器或桌面快捷方式，就把变量写进对应配置，不要依赖一次性 shell 会话。</p>
        <p>如果你想把它永久写进 PowerShell 用户配置，也可以放到 <code>Microsoft.PowerShell_profile.ps1</code> 里；如果只是要写入新的用户环境变量，可以用 <code>setx</code>，但要重新打开终端才会生效。</p>
        <p>一行临时启动只适合试跑：</p>
        <pre><code>ANTHROPIC_AUTH_TOKEN="sk-你的令牌" ANTHROPIC_BASE_URL="https://www.momoapi.shop" claude</code></pre>
        <p>这种写法关掉终端就失效，不适合长期使用。</p>

        <div class="callout callout--danger">
          <strong>不要默认补 /v1</strong>
          <p>Claude Code 这类 Anthropic 兼容客户端，很多时候要求的是服务根地址。把 OpenAI 的路径习惯照搬过来，反而更容易 404。</p>
        </div>

        <h2 id="avoid-official">5. 防止跳转官方</h2>
        <p>如果 Claude Code 没走中转，通常是配置未生效。可以检查：</p>
        <ul>
          <li>CC Switch 当前配置是否启用。</li>
          <li>环境变量是否在启动 Claude Code 的同一个终端里设置。</li>
          <li><code>ANTHROPIC_BASE_URL</code> 是否为 <code>https://www.momoapi.shop</code>。</li>
        </ul>
        <p>必要时检查用户目录下的 <code>.claude.json</code>，确保已经完成 onboarding 状态。</p>
        <p>常见字段类似：</p>
        <pre><code>{
  "hasCompletedOnboarding": true
}</code></pre>

        <h2 id="config-idea">6. 推荐配置文件思路</h2>
        <p>如果你习惯把环境变量写入 Claude Code 配置，重点是把 momoapi 地址和令牌写对：</p>
        <pre><code>{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "sk-你的令牌",
    "ANTHROPIC_BASE_URL": "https://www.momoapi.shop",
    "DISABLE_TELEMETRY": "1",
    "DISABLE_COST_WARNINGS": "1"
  }
}</code></pre>
        <p>不要把令牌提交到 Git 仓库。共享截图、日志、配置文件前先打码。</p>

        <h2 id="startup">7. 启动建议</h2>
        <p>正常启动：</p>
        <pre><code>claude</code></pre>
        <p>可信目录下跳过权限确认：</p>
        <pre><code>claude --dangerously-skip-permissions</code></pre>

        <div class="callout callout--danger">
          <strong>生产机器慎用</strong>
          <p>跳过权限确认会让模型更容易直接执行命令。线上服务器、有密钥的目录、数据库机器上不要随便开启。</p>
        </div>

        <h2 id="fast-1m">8. fast 与百万上下文</h2>
        <p>快速配置：</p>
        <pre><code>/fast</code></pre>
        <p>Claude fast 本质上还是请求层的 fast 状态。常见三种写法：</p>
        <ul>
          <li>在 Claude Code 里直接输入 <code>/fast</code>。</li>
          <li>在客户端设置里开启 <code>fastMode</code>。</li>
          <li>在网关 / 请求里走 <code>service_tier=fast</code>。</li>
        </ul>
        <p>Claude 百万上下文在claude终端执行/model，在里面选择模型时选择有[1m]后缀的</p>
        <p>GPT 百万上下文超过 <code>272k</code> 的部分会额外计费。详细说明见 <a href="#/fast-context">fast 与百万上下文</a>。</p>
      </div>
    `,
  },
  "/fast-context": {
    title: "fast 与 1M 上下文",
    section: "客户端教程",
    meta: "fast、service_tier、百万上下文与计费说明。",
    body: `
      <div class="doc">
        <h1>fast 与百万上下文</h1>

        ${renderEntryPanel(true)}

        <h2 id="summary">结论</h2>
        <ul>
          <li>GPT / Codex 的 fast 本质是 <code>service_tier</code>。</li>
          <li>Codex 里也可以用 <code>/fast</code> 启用 fast。</li>
          <li>momoapi 会按请求动态计费。</li>
          <li>GPT 百万上下文按长上下文计费，超过 <code>272k</code> 的部分额外计费。</li>
        </ul>

        <h2 id="gpt-codex-fast">GPT / Codex fast</h2>
        <p>基础配置：</p>
        <pre><code>export OPENAI_API_KEY="sk-你的令牌"
export OPENAI_BASE_URL="https://www.momoapi.shop/v1"</code></pre>
        <p>Codex 内启用：</p>
        <pre><code>/fast</code></pre>
        <p>API / 客户端请求里的核心字段：</p>
        <pre><code>{
  "model": "gpt-5.5",
  "service_tier": "fast"
}</code></pre>
        <p>如果客户端把 fast 做成按钮、速度档或配置项，本质也是设置 <code>service_tier=fast</code>。momoapi 会识别请求里的 fast / <code>service_tier</code> 并动态计费。</p>

        <h2 id="claude-fast">Claude fast</h2>
        <p>Claude Code 内启用：</p>
        <pre><code>/fast</code></pre>
        <p>也可以在 Claude Code 配置里写：</p>
        <pre><code>{
  "fastMode": true
}</code></pre>
        <p>禁用：</p>
        <pre><code>export CLAUDE_CODE_DISABLE_FAST_MODE=1</code></pre>

        <h2 id="cc-switch">CC Switch 设置</h2>
        <p>基础项：</p>
        <pre><code>Base URL: https://www.momoapi.shop
Token: sk-你的令牌
分组：普通可用分组</code></pre>
        <p>Claude Code：</p>
        <pre><code>Fast：开启</code></pre>
        <p>如果 CC Switch 没有 fast 开关，启动 Claude Code / Codex后输入：</p>
        <pre><code>/fast</code></pre>

        <h2 id="million-context">百万上下文</h2>
        <h3 id="million-claude">Claude</h3>
        <p>Claude 4.6 系列百万上下文通常原生支持，不需要额外 beta。</p>
        
        <h3 id="million-gpt">GPT / Codex</h3>
        <p>GPT 百万上下文按长上下文计费。</p>
        <p>规则：</p>
        <ul>
          <li><code>272k</code> 以内按普通上下文计费。</li>
          <li>超过 <code>272k</code> 的输入进入长上下文计费区间。</li>
          <li>超过部分会额外计费，不要默认把百万上下文当普通价格。</li>
        </ul>

        <p>使用建议：</p>
        <ul>
          <li>日常编程不要默认塞满百万上下文。</li>
          <li>大仓库先让模型读关键目录，不要一次性塞全仓。</li>
          <li>长日志先裁剪，只保留关键报错和上下文。</li>
          <li>需要长上下文时明确告知用户会增加费用。</li>
        </ul>

        <h2 id="recommended-patterns">推荐写法</h2>
        <h3 id="normal-coding">普通编程</h3>
        <pre><code>分组：普通可用分组
fast：关闭
上下文：控制在 272k 以内</code></pre>

        <h3 id="low-latency">低延迟编程</h3>
        <pre><code>分组：普通可用分组
Codex：/fast
GPT API：service_tier=fast
计费：动态 fast 计费</code></pre>

        <h3 id="long-context">超长上下文</h3>
        <pre><code>分组：普通可用分组
上下文：允许超过 272k
计费：272k 以上额外计费</code></pre>

        <h2 id="troubleshoot-fast">排错</h2>
        <ul>
          <li>fast 没生效：确认 Codex 是否执行 <code>/fast</code>，或请求是否带 <code>service_tier</code>。</li>
          <li>价格异常高：检查是否同时启用了 fast 和超长上下文。</li>
          <li>1M 不生效：确认模型是否支持百万上下文。</li>
        </ul>
      </div>
    `,
  },
  "/claude-usage": {
    title: "Claude Code 实用命令",
    section: "客户端教程",
    meta: "按实际工作流整理 Claude Code 常用命令和输入方式。",
    body: `
      <div class="doc">
        <h1>Claude Code 实用命令</h1>
        
        ${renderEntryPanel(true)}

        <p>这页整理 Claude Code 日常使用中最常见的命令、输入方式和上下文管理方法。核心原则是：先给足上下文，再让模型分步骤执行。</p>

        <h2 id="init-project">初始化项目</h2>
        <p>进入项目目录后，先执行：</p>
        <pre><code>/init</code></pre>
        <p>Claude Code 会根据当前项目生成 <code>CLAUDE.md</code>。建议让它记录：</p>
        <ul>
          <li>项目目标和主要目录。</li>
          <li>构建、测试、启动命令。</li>
          <li>代码风格和禁止事项。</li>
          <li>部署、数据库、外部服务等注意点。</li>
        </ul>
        <p>如果项目已有类似文档，可以让 Claude Code 先阅读再补充，不要重复生成互相冲突的说明。</p>

        <h2 id="context-at">用 @ 提供上下文</h2>
        <p>当问题和具体文件有关，直接引用路径：</p>
        <pre><code>请检查 @src/api/auth.ts 和 @src/components/Login.vue，找出登录失败原因。</code></pre>
        <p>也可以引用目录：</p>
        <pre><code>请只阅读 @src/server/ 下面和支付回调相关的文件，先总结调用链，不要改代码。</code></pre>
        <p>这样比让模型全局猜更稳定，也能减少无关 token 消耗。</p>

        <h2 id="shell-bang">用 ! 运行 Bash 命令</h2>
        <p>在 Claude Code 交互里可以让它运行命令，例如：</p>
        <pre><code>!git status</code></pre>
        <p>常用检查命令：</p>
        <pre><code>git status
npm test
npm run build
rg "关键字" .</code></pre>

        <div class="callout callout--warning">
          <strong>权限提醒</strong>
          <p>让模型运行命令前，确认当前目录可信。涉及删除、重启、数据库写入、部署的命令要格外谨慎。</p>
        </div>

        <h2 id="clear-compact">清理和压缩上下文</h2>
        <p>长会话会让上下文变大，模型可能开始遗漏细节。常用命令：</p>
        <pre><code>/clear</code></pre>
        <p>清空当前上下文，适合开始全新任务。</p>
        <pre><code>/compact</code></pre>
        <p>压缩已有上下文，适合长任务中途保留摘要继续做。</p>
        <pre><code>/context</code></pre>
        <p>查看当前上下文使用情况。</p>

        <h2 id="slash-commands">常用斜杠命令</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>命令</th>
                <th>用途</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>/help</code></td><td>查看帮助和可用命令</td></tr>
              <tr><td><code>/init</code></td><td>初始化项目说明文件</td></tr>
              <tr><td><code>/clear</code></td><td>清空上下文，开启新任务</td></tr>
              <tr><td><code>/compact</code></td><td>压缩上下文并继续当前任务</td></tr>
              <tr><td><code>/context</code></td><td>查看上下文使用情况</td></tr>
              <tr><td><code>/model</code></td><td>切换模型</td></tr>
              <tr><td><code>/status</code></td><td>查看账户、模型、版本和连接状态</td></tr>
              <tr><td><code>/doctor</code></td><td>诊断本地 Claude Code 安装</td></tr>
              <tr><td><code>/cost</code></td><td>查看当前会话费用和时长</td></tr>
              <tr><td><code>/export</code></td><td>导出当前会话，便于复盘</td></tr>
              <tr><td><code>/add-dir</code></td><td>添加新的工作目录</td></tr>
              <tr><td><code>/mcp</code></td><td>管理 MCP 服务</td></tr>
              <tr><td><code>/permissions</code></td><td>管理工具访问权限</td></tr>
              <tr><td><code>/review</code></td><td>审查当前分支或 PR</td></tr>
            </tbody>
          </table>
        </div>
        <p>不同版本的 Claude Code 命令可能略有差异，以 <code>/help</code> 显示为准。</p>

        <h2 id="basic-interaction">基本交互方式</h2>
        <h3 id="analyze-first">先分析再修改</h3>
        <p>推荐这样提需求：</p>
        <pre><code>先分析原因，不要修改代码。确认方案后，只改最小范围，并说明需要验证的命令。</code></pre>
        <p>这样可以避免模型直接大范围改动。</p>

        <h3 id="limit-scope">限定范围</h3>
        <pre><code>只允许修改 src/api 目录，不要改 UI 和数据库迁移。</code></pre>
        <p>范围明确后，模型更容易保持改动聚焦。</p>

        <h3 id="split-work">分批处理</h3>
        <p>复杂任务不要一次塞满所有要求。推荐拆成：</p>
        <ol>
          <li>复现或定位问题。</li>
          <li>给出改动方案。</li>
          <li>实施最小修复。</li>
          <li>运行相关测试。</li>
          <li>总结风险和回滚方式。</li>
        </ol>

        <h2 id="directory-ops">文件夹操作</h2>
        <p>如果要处理某个新目录，先进入目录再启动：</p>
        <pre><code>cd /path/to/project
claude</code></pre>
        <p>或者在 Claude Code 里使用：</p>
        <pre><code>/add-dir</code></pre>
        <p>只把必要目录加入上下文，不要把无关大目录、依赖目录或日志目录全部加入。</p>

        <h2 id="drag-paste">拖拽文件和粘贴</h2>
        <p>多数终端支持把文件拖进窗口，自动插入路径。对截图、日志、报错：</p>
        <ul>
          <li>能复制文本就复制文本。</li>
          <li>长日志只保留关键上下文。</li>
          <li>不要一次粘贴超大构建输出。</li>
        </ul>

        <h2 id="multiline">换行输入</h2>
        <p>不同终端换行方式不同：</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>终端</th>
                <th>常见换行方式</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>PowerShell</td><td><code>Alt + Enter</code></td></tr>
              <tr><td>CMD</td><td><code>Alt + Enter</code></td></tr>
              <tr><td>WSL / Bash</td><td><code>Ctrl + Enter</code> 或终端自带多行输入</td></tr>
            </tbody>
          </table>
        </div>
        <p>如果不确定，先用短文本测试。</p>

        <h2 id="danger-mode">危险模式</h2>
        <p>Claude Code 支持跳过权限确认：</p>
        <pre><code>claude --dangerously-skip-permissions</code></pre>
        <p>只建议在可信仓库、可信机器上使用。生产服务器、含密钥目录、数据库机器不要随便使用危险模式。</p>

        <h2 id="deep-thinking">深度思考模式</h2>
        <p>部分版本可以用 <code>Shift + Tab</code> 切换思考模式。复杂任务可以要求：</p>
        <pre><code>这个问题涉及线上风险，请先详细分析边界条件，再给出最小改动方案。</code></pre>

        <h2 id="shortcuts">快捷键建议</h2>
        <ul>
          <li>需要开始新任务：用 <code>/clear</code>。</li>
          <li>上下文变大但任务未结束：用 <code>/compact</code>。</li>
          <li>发现模型开始忘细节：补充关键事实，不要只说“继续”。</li>
          <li>做线上操作前：要求模型先列出将执行的命令。</li>
        </ul>

        <h2 id="example-task">示例任务</h2>
        <pre><code>把当前文件夹里所有不规范的文件名改成英文短横线命名。
要求：
1. 先列出计划改名列表。
2. 不改文件内容。
3. 保留原编号。
4. 确认后再执行。</code></pre>
      </div>
    `,
  },
  "/trae-ide-clients": {
    title: "Trae 等 IDE 客户端",
    section: "客户端教程",
    meta: "适用于 OpenAI Compatible IDE 和插件的统一配置说明。",
    body: `
      <div class="doc">
        <h1>Trae 等 IDE 客户端配置</h1>

        ${renderEntryPanel(true)}

        <h2 id="scope">适用范围</h2>
        <p>本页适用于需要填写 OpenAI 兼容接口的 IDE 客户端，例如：</p>
        <ul>
          <li>Trae</li>
          <li>Cursor / Windsurf 这类支持自定义 OpenAI Base URL 的 IDE</li>
          <li>Cline / RooCode / Kilo Code 等 VS Code 插件</li>
          <li>Continue、Aider、Open WebUI 等 OpenAI 兼容客户端</li>
        </ul>
        <p>如果客户端明确写的是 Anthropic / Claude Code 配置，请看 <a href="#/claude-code">Claude Code 配置</a>。如果客户端写的是 OpenAI Compatible、Custom OpenAI、OpenAI API Base URL，一般按本页填写。</p>

        <h2 id="trae-config">Trae 配置</h2>
        <p>在 Trae 里添加自定义模型服务或 OpenAI 兼容服务，核心只填三项：</p>
        <pre><code>Provider / 类型：OpenAI Compatible / 自定义 OpenAI
API Key：sk-你的令牌
Base URL：https://www.momoapi.shop/v1</code></pre>
        <p>模型名填写控制台支持的模型，例如：</p>
        <pre><code>gpt-5.5
gpt-5.4</code></pre>
        <p>如果 Trae 的配置项叫法不同，按这个对应关系理解：</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Trae 配置项</th>
                <th>填写内容</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>API Key / Token</td><td><code>sk-你的令牌</code></td></tr>
              <tr><td>Base URL / API Base</td><td><code>https://www.momoapi.shop/v1</code></td></tr>
              <tr><td>Model / Model ID</td><td>控制台支持的模型名</td></tr>
              <tr><td>Provider</td><td>OpenAI Compatible / Custom OpenAI</td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout--warning">
          <strong>Base URL 不要填错</strong>
          <p>OpenAI 兼容客户端一般填 <code>https://www.momoapi.shop/v1</code>。不要填成 <code>https://www.momoapi.shop</code>，也不要填成 <code>https://www.momoapi.shop/v1/responses</code>。</p>
        </div>

        <h2 id="cursor-windsurf">Cursor / Windsurf</h2>
        <p>在自定义 OpenAI 地址里填写：</p>
        <pre><code>API Key: sk-你的令牌
OpenAI Base URL: https://www.momoapi.shop/v1
Model: gpt-5.5</code></pre>
        <p>如果客户端支持多个模型，建议先添加一个稳定模型测试，再逐步添加其他模型。不要一次性填大量不存在或未配置价格的模型。</p>

        <h2 id="cline-roocode-kilo">Cline / RooCode / Kilo Code</h2>
        <p>这些 VS Code 插件一般在 Provider 里选择 OpenAI Compatible：</p>
        <pre><code>Provider: OpenAI Compatible
Base URL: https://www.momoapi.shop/v1
API Key: sk-你的令牌
Model: gpt-5.5</code></pre>
        <p>注意事项：</p>
        <ul>
          <li>插件会自动读取项目上下文，Token 消耗通常比 CLI 更高。</li>
          <li>大项目建议只打开当前任务目录。</li>
          <li>不要让插件自动索引无关大目录、日志目录、构建产物和依赖目录。</li>
          <li>出现上下文过大时，先新开任务或减少引用文件。</li>
        </ul>

        <h2 id="continue">Continue</h2>
        <p>Continue 的 OpenAI 兼容配置可按这个思路填写：</p>
        <pre><code>{
  "models": [
    {
      "title": "momoapi gpt-5.5",
      "provider": "openai",
      "model": "gpt-5.5",
      "apiBase": "https://www.momoapi.shop/v1",
      "apiKey": "sk-你的令牌"
    }
  ]
}</code></pre>
        <p>不同 Continue 版本字段可能略有差异。如果界面里有 OpenAI Compatible 选项，优先用界面填写，不要把 token 写进会提交到仓库的配置文件。</p>

        <h2 id="aider">Aider</h2>
        <p>Aider 可以通过环境变量指定 OpenAI 兼容接口。</p>
        <p>macOS / Linux：</p>
        <pre><code>export OPENAI_API_KEY="sk-你的令牌"
export OPENAI_API_BASE="https://www.momoapi.shop/v1"
aider --model openai/gpt-5.5</code></pre>
        <p>Windows PowerShell：</p>
        <pre><code>$env:OPENAI_API_KEY="sk-你的令牌"
$env:OPENAI_API_BASE="https://www.momoapi.shop/v1"
aider --model openai/gpt-5.5</code></pre>
        <p>如果你的 Aider 版本使用 <code>OPENAI_BASE_URL</code>，则改为：</p>
        <pre><code>export OPENAI_BASE_URL="https://www.momoapi.shop/v1"</code></pre>

        <h2 id="webui-librechat">Open WebUI / LibreChat / 其他面板</h2>
        <p>这类面板通常添加 OpenAI 连接：</p>
        <pre><code>API Base URL: https://www.momoapi.shop/v1
API Key: sk-你的令牌
Models: gpt-5.5,gpt-5.4,gpt-5.3-codex</code></pre>
        <p>如果面板会定时拉取模型列表，先用一个令牌小流量测试。多人共用面板时，建议给面板单独创建令牌，方便统计和停用。</p>

        <h2 id="fast-1m">fast 与百万上下文</h2>
        <p>GPT / Codex fast 对应请求参数：</p>
        <pre><code>{
  "service_tier": "fast"
}</code></pre>
        <p>在 Codex CLI 中也可以用：</p>
        <pre><code>/fast</code></pre>
        <p>GPT 百万上下文超过 <code>272k</code> 的部分会额外计费。IDE 客户端很容易自动塞入大量文件，上下文越大费用越高，建议：</p>
        <ol>
          <li>只打开当前任务相关目录。</li>
          <li>明确指定要读取的文件。</li>
          <li>大日志先裁剪后再发。</li>
          <li>长会话及时新开或压缩。</li>
        </ol>
        <p>更多说明见 <a href="#/fast-context">fast 与百万上下文</a>。</p>

        <h2 id="image-support">生图支持</h2>
        <p>如果客户端支持 OpenAI Responses 的 <code>image_generation</code> 工具或 OpenAI 图片接口，可使用控制台支持的生图模型。常见注意点：</p>
        <ul>
          <li><code>gpt-image-2</code> API 可用，但不保证稳定性。</li>
          <li>Codex 内部 skill 生图可用。</li>
          <li>慢图、大图、多图建议使用流式和 partial images。</li>
          <li>非流式长时间生图可能被客户端或 CDN 超时中断。</li>
        </ul>

        <h2 id="minimal-test">最小测试</h2>
        <p>配置后先发一个小请求：</p>
        <pre><code>你好，请只回复 OK</code></pre>
        <p>如果客户端支持模型列表，也可以先测试：</p>
        <pre><code>curl https://www.momoapi.shop/v1/models \\
  -H "Authorization: Bearer sk-你的令牌"</code></pre>

        <h2 id="common-errors">常见错误</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>错误</th>
                <th>常见原因</th>
                <th>处理</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>401 Unauthorized</td><td>Token 错误、复制多空格、令牌被删</td><td>重新创建令牌并完整复制</td></tr>
              <tr><td>403 Forbidden</td><td>当前网络环境或出口 IP 被拦截</td><td>更换网络、代理或出口 IP 后重试</td></tr>
              <tr><td>404 Not Found</td><td>Base URL 填错</td><td>OpenAI 兼容客户端填 <code>https://www.momoapi.shop/v1</code></td></tr>
              <tr><td>429 Too Many Requests</td><td>上游限流或并发过高</td><td>降低并发，等待恢复，换模型或分组</td></tr>
              <tr><td>503 Service temporarily unavailable</td><td>当前模型/分组/账号池暂不可用</td><td>换同系列模型或稍后重试</td></tr>
              <tr><td>context too large</td><td>IDE 自动塞入过多文件</td><td>减少上下文、新开任务、只引用关键文件</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="checklist">配置检查清单</h2>
        <p>正式使用前确认：</p>
        <ul>
          <li>Base URL 是 <code>https://www.momoapi.shop/v1</code>。</li>
          <li>Token 是 <code>sk-</code> 开头的 momoapi 令牌。</li>
          <li>模型名在控制台可用。</li>
          <li>没有把 token 写入会提交到 Git 的文件。</li>
          <li>已用小请求验证成功。</li>
        </ul>
      </div>
    `,
  },
  "/ide": {
    title: "IDE 集成",
    section: "客户端教程",
    meta: "在 Cursor、VS Code 等 IDE 终端里配合 Claude Code 使用 momoapi。",
    body: `
      <div class="doc">
        <h1>IDE 集成</h1>
        ${renderEntryPanel(true)}

        <p class="lead">在 Cursor、VS Code 这类 IDE 里，最常见的用法不是单独装一个特殊插件，而是在 IDE 内置终端里直接启动 Claude Code，让它在当前项目目录工作。</p>

        <h2 id="cursor-vscode-claude-code">Cursor / VS Code 中使用 Claude Code</h2>
        <p>常见方式是在 IDE 终端里进入项目目录后直接启动 Claude Code：</p>
        <pre><code>cd /path/to/project
claude</code></pre>
        <p>这样 Claude Code 的工作目录就是当前项目目录，能直接读取和修改项目文件。</p>

        <div class="callout callout--tip">
          <strong>先确认账号配置</strong>
          <p>如果你用的是 momoapi 提供的 Claude 兼容接口，先确认令牌有效，并且客户端里填写的是 <code>https://www.momoapi.shop</code>，不要默认补成 <code>/v1</code>。</p>
        </div>

        <h2 id="recommended-flow">推荐流程</h2>
        <ol>
          <li>先用 IDE 打开项目。</li>
          <li>在 IDE 内置终端确认当前目录：</li>
        </ol>
        <pre><code>pwd
git status</code></pre>
        <ol start="3">
          <li>启动 Claude Code：</li>
        </ol>
        <pre><code>claude</code></pre>
        <ol start="4">
          <li>第一次进入项目先运行：</li>
        </ol>
        <pre><code>/init</code></pre>
        <ol start="5">
          <li>让 Claude Code 先阅读关键目录，再开始修改代码。</li>
        </ol>

        <h2 id="ide-collaboration-notes">和 IDE 配合的注意点</h2>
        <ul>
          <li>让模型改完后，用 IDE 的 diff 视图审查变更。</li>
          <li>涉及批量重命名、格式化、迁移文件时，先要求模型列出计划。</li>
          <li>不要把 IDE 自动生成的大文件、构建产物、依赖目录加入上下文。</li>
          <li>如果模型改动不符合预期，先让它解释 diff，再决定是否回退。</li>
        </ul>

        <h2 id="common-issues">常见问题</h2>

        <h3 id="command-not-found">IDE 里命令找不到</h3>
        <p>通常说明 Node.js、npm 或 Claude Code 没装到当前终端的 PATH。先检查：</p>
        <pre><code>node -v
npm -v
claude --version</code></pre>

        <h3 id="wrong-working-directory">工作目录不对</h3>
        <p>Claude Code 默认只会操作启动时所在目录。先 <code>cd</code> 到项目目录，再启动 Claude Code。</p>

        <h3 id="too-many-permission-prompts">权限弹窗太多</h3>
        <p>按需批准具体命令即可，不要为了省事在陌生项目里直接开启危险模式。</p>
      </div>
    `,
  },
  "/other-clients": {
    title: "其他 CLI 与插件",
    section: "客户端教程",
    meta: "补充 Gemini CLI 和其他轻量插件的使用提醒。",
    body: `
      <div class="doc">
        <h1>其他 CLI 与插件</h1>
        ${renderEntryPanel(true)}

        <p class="lead">Trae、Cursor、RooCode、Kilo Code、Continue 这类 OpenAI 兼容 IDE 客户端已经整理到 <a href="#/trae-ide-clients">Trae 等 IDE 客户端配置</a>。本页只保留 Gemini CLI 和其他轻量插件的说明。</p>

        <h2 id="gemini-cli">Gemini CLI</h2>
        <p>安装或更新 Gemini CLI：</p>
        <pre><code>npm install -g @google/gemini-cli@latest
gemini --version</code></pre>
        <p>如果你只是想先确认本机命令行环境是否正常，这一步比直接排查复杂插件更省事。</p>

        <div class="callout callout--tip">
          <strong>Gemini CLI 卡住时先看客户端状态</strong>
          <p>Gemini CLI 使用一段时间后如果明显卡住、长时间无响应，先不要直接判断成站点故障。更常见的是客户端会话状态、上下文过大，或者本机网络环境有问题。</p>
        </div>

        <ol>
          <li>先重开一个新会话。</li>
          <li>缩小上下文，不要一次塞太多文件和日志。</li>
          <li>检查代理、网络和终端连接状态。</li>
          <li>必要时先改用 IDE 插件或其他客户端继续工作。</li>
        </ol>

        <h2 id="roocode-kilo">RooCode / Kilo</h2>
        <p>RooCode、Kilo Code 这类 IDE 插件通常带有更长的系统提示词，也更容易自动读取工作区上下文。实际表现一般是：</p>
        <ul>
          <li>Token 消耗比纯命令行工具更高。</li>
          <li>相同任务下费用更难预测。</li>
          <li>大项目更容易触发上下文过大。</li>
        </ul>
        <p>使用这类插件时，建议优先控制上下文规模，而不是默认让插件读取整个仓库。</p>
        <ol>
          <li>只打开当前任务相关目录。</li>
          <li>明确要求插件不要读取无关文件。</li>
          <li>把大任务拆成多个小任务。</li>
          <li>定期新开会话或清理上下文。</li>
        </ol>

        <h2 id="model-experience">模型体验差异</h2>
        <p>不同客户端、不同模型适合的工作并不一样：</p>
        <ul>
          <li>轻量问答、前端小改动：优先考虑响应更快的模型。</li>
          <li>复杂代码修改：优先选代码能力更强、上下文更稳定的模型。</li>
          <li>长时间连续迭代：重点看上下文压缩、费用和限流表现。</li>
        </ul>
        <p>如果感觉模型突然变慢或不稳定，不要只判断模型本身，也同时检查下面几项：</p>
        <ul>
          <li>当前分组是否拥挤。</li>
          <li>是否触发限流。</li>
          <li>网络是否断流或代理不稳定。</li>
          <li>客户端是否携带了过多上下文。</li>
        </ul>
      </div>
    `,
  },
  "/cc-switch": {
    title: "CC Switch",
    section: "客户端教程",
    meta: "用 CC Switch 管理 Claude Code 的多套中转配置。",
    body: `
      <div class="doc">
        <h1>CC Switch（推荐）</h1>
        ${renderEntryPanel(true)}

        <p class="lead">CC Switch 用来管理 Claude Code 的多套环境配置，比如官方、不同中转站、不同 Token。它适合不想手动改环境变量的用户。</p>

        <h2 id="purpose">作用</h2>
        <p>如果你经常在不同配置之间切换，CC Switch 比直接改 shell 环境变量更稳定，也更容易排错。</p>

        <h2 id="basic-steps">基本步骤</h2>
        <ol>
          <li>下载并安装 CC Switch。</li>
          <li>新建配置。</li>
          <li>填写 Token 和 Base URL。</li>
          <li>保存并切换到该配置。</li>
          <li>完全退出后重新打开 Claude Code。</li>
        </ol>

        <h2 id="momoapi-config">momoapi 配置</h2>
        <pre><code>Token: sk-你的令牌
Base URL: https://www.momoapi.shop</code></pre>
        <p>如果配置项区分 Anthropic / OpenAI，Claude Code 选择 Anthropic 相关配置；Codex 或其他 OpenAI 兼容客户端选择 OpenAI 兼容配置，并按客户端要求决定是否补 <code>/v1</code>。</p>

        <h2 id="codex-provider">Codex / OpenAI 兼容提供商图文配置</h2>
        <p>如果你是用 CC Switch 管 Codex 或其他 OpenAI 兼容客户端，核心字段就是提供商名称、官网链接、API Key、请求地址和模型名。</p>
        <div class="step-list">
          <section class="step-item">
            <div class="step-item__eyebrow">步骤 1</div>
            <h3>新建提供商</h3>
            <p>在 CC Switch 里创建一套新的 OpenAI 兼容配置，避免和 Claude 配置混用。</p>
            <figure class="doc-figure">
              <img src="./assets/guide/cc-switch/cc-switch-codex-provider.png" alt="CC Switch 新建 Codex 提供商截图" loading="lazy" />
              <figcaption>新建一个单独的 Codex 或 OpenAI Compatible 提供商配置。</figcaption>
            </figure>
          </section>
          <section class="step-item">
            <div class="step-item__eyebrow">步骤 2</div>
            <h3>填写最少必要字段</h3>
            <p>旧指南里给出的关键字段就是这几项：</p>
            <pre><code>Provider Name: 自定义名称
Website: https://www.momoapi.shop
API Key: sk-你的令牌
Base URL: https://www.momoapi.shop/v1
Model: 目标模型名</code></pre>
            <figure class="doc-figure">
              <img src="./assets/guide/cc-switch/cc-switch-codex-form.png" alt="CC Switch 填写 Codex 表单截图" loading="lazy" />
              <figcaption>OpenAI 兼容客户端通常要用带 <code>/v1</code> 的地址。Claude Code则不需要加 <code>/v1</code></figcaption>
            </figure>
          </section>
        </div>

        <h2 id="fast-context">fast 与百万上下文</h2>
        <p>先保证基础项正确：</p>
        <pre><code>Base URL: https://www.momoapi.shop
Token: sk-你的令牌</code></pre>
        <p>如果 CC Switch 里有分组或模型选择，优先选择控制台明确可用的普通分组和目标 Claude 模型。</p>
        <ul>
          <li>fast 按请求动态计费。</li>
          <li>Claude Code / Codex 内可直接执行 <code>/fast</code>。</li>
        </ul>
        <p>GPT 超过 <code>272k</code> 的上下文部分会额外计费。完整说明见 <a href="#/fast-context">fast 与 1M 上下文</a>。</p>

        <h2 id="quick-setup">懒人版快速配置</h2>
        <p>最少只需要确认两项：</p>
        <pre><code>请求地址：https://www.momoapi.shop
API Key：sk-你的令牌</code></pre>
        <p>保存后切换到该配置，并完全退出再重新打开 Claude Code。</p>

        <h2 id="switch-not-effective">切换后没生效</h2>
        <ol>
          <li>确认已经切换到正确配置。</li>
          <li>确认 Claude Code 已经完全重启。</li>
          <li>检查 Token 是否复制完整。</li>
          <li>检查 Base URL 是否多了路径、空格或换行。</li>
          <li>检查是否仍然有旧环境变量覆盖了 CC Switch 配置。</li>
        </ol>

        <h2 id="env-relation">与环境变量的关系</h2>
        <p>如果系统环境变量里已经设置了 <code>ANTHROPIC_BASE_URL</code> 或 <code>ANTHROPIC_AUTH_TOKEN</code>，可能会覆盖或干扰 CC Switch。排错时建议只保留一种配置方式。</p>
      </div>
    `,
  },
  "/cherry-studio": {
    title: "Cherry Studio",
    section: "客户端教程",
    meta: "Cherry Studio 作为 OpenAI 兼容提供商接入 momoapi。",
    body: `
      <div class="doc">
        <h1>Cherry Studio</h1>
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

        <p class="lead">Cherry Studio 这类桌面聚合客户端，一般把中转站配置成自定义 OpenAI 提供商即可。</p>

        <h2 id="openai-provider">新建 OpenAI 兼容提供商</h2>
        <p>在 Cherry Studio 中添加自定义 OpenAI 提供商：</p>
        <pre><code>API Key: sk-你的令牌
Base URL: https://www.momoapi.shop/v1</code></pre>
        <p>如果这里直接报 <code>failed to fetch</code>，优先按 Cherry Studio 客户端自身问题处理，先升级到最新版再试。这个报错通常不是 momoapi 服务端能力问题。</p>

        <h2 id="model-list">模型列表</h2>
        <p>如果客户端支持拉取模型列表，可以先刷新模型；如果刷新失败，手动填写控制台支持的模型名即可。</p>

        <h2 id="test-advice">测试建议</h2>
        <p>先用轻量模型发一句最小请求：</p>
        <pre><code>你好，请只回复 OK</code></pre>
        <p>如果成功，再切换到目标模型正式使用。</p>
      </div>
    `,
  },
  "/workflows": {
    title: "常用命令与工作流",
    section: "进阶",
    meta: "把初始化、上下文控制和安全改动流程写清楚。",
    body: `
      <div class="doc">
        <h1>常用命令与工作流</h1>
        <p class="lead">教程真正有价值的部分，不只是命令本身，而是让用户知道在什么阶段该用什么组合。</p>

        <h2 id="init-project">开始项目前先初始化</h2>
        <p>不要一上来就让 AI 写大量代码。建议先让它理解项目：</p>
        <pre><code>请阅读项目结构，生成一份简短的项目说明和开发约束。</code></pre>
        <p>Claude Code 可以直接使用：</p>
        <pre><code>/init</code></pre>
        <p>这类初始化文档通常应该包含：</p>
        <ul>
          <li>项目目标。</li>
          <li>目录结构。</li>
          <li>构建和测试命令。</li>
          <li>代码风格。</li>
          <li>禁止事项。</li>
        </ul>

        <h2 id="use-context">用 @ 指定上下文</h2>
        <p>当你已经知道问题和某些文件相关，直接引用文件或目录：</p>
        <pre><code>请重点检查 @src/api 和 @src/components/Login.vue</code></pre>
        <p>这比让模型全局猜更稳定，也更省 token。</p>

        <h2 id="complex-task">分步骤处理复杂任务</h2>
        <p>推荐提示词结构：</p>
        <pre><code>先分析原因，不要修改代码。
确认方案后，只改最小范围。
改完后运行相关测试，并总结风险。</code></pre>

        <h2 id="clean-long-chat">长会话及时清理</h2>
        <p>上下文太大时，新开会话或清理上下文。不要把无关日志、完整构建输出、超长文件一次性塞进去。</p>

        <h2 id="claude-commands">常用 Claude Code 命令</h2>
        <p>更完整的命令说明见 <a href="#/claude-usage">Claude Code 实用命令</a>。</p>
        <pre><code>/clear
/compact
/context
/model
/status
/doctor
/cost
/export
/add-dir
/mcp</code></pre>

        <h2 id="safe-edit-example">示例：安全地让 AI 改代码</h2>
        <pre><code>请先阅读相关代码并说明调用链，不要修改。
确认问题后，只做最小改动。
改完后运行最相关的测试。
最后总结改动文件、验证结果和潜在风险。</code></pre>

        <h2 id="incident-analysis-example">示例：排查线上报错</h2>
        <pre><code>这是用户看到的报错：...
请根据日志判断是客户端配置、网关、调度还是上游问题。
先给结论和证据，不要直接改代码。</code></pre>
      </div>
    `,
  },
  "/network-proxy": {
    title: "网络问题",
    section: "进阶",
    meta: "把命令行代理、Git 和 npm 排查拆开讲。",
    body: `
      <div class="doc">
        <h1>网络问题</h1>
        <p class="lead">网络问题经常被误判成账号问题。把代理、Git、npm 和客户端配置分开看，排查会快很多。</p>

        <h2 id="npm-mirror">npm 镜像</h2>
        <p>如果 npm 下载慢，可临时改用镜像源：</p>
        <pre><code>npm config set registry https://registry.npmmirror.com</code></pre>
        <p>恢复官方源：</p>
        <pre><code>npm config set registry https://registry.npmjs.org</code></pre>

        <h2 id="install-fail-order">安装国外包失败的排查顺序</h2>
        <ol>
          <li>浏览器能否访问目标站。</li>
          <li>命令行 <code>curl</code> 是否能访问目标站。</li>
          <li>npm / git 是否单独配置了错误代理。</li>
          <li>公司网络或系统代理是否覆盖了终端代理。</li>
          <li>换网络后是否恢复。</li>
        </ol>
      </div>
    `,
  },
  "/troubleshooting": {
    title: "常见问题排查",
    section: "进阶",
    meta: "按错误码和典型症状组织的排错页。",
    body: `
      <div class="doc">
        <h1>常见问题排查</h1>
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

        <p class="lead">排错页应该是用户最容易跳转到的一页，所以要按错误码和现象组织，而不是按产品分类。</p>

        <h2 id="error-401">401 Unauthorized</h2>
        <p>常见原因：</p>
        <ul>
          <li>Token 填错。</li>
          <li>Token 被删除或禁用。</li>
          <li>复制时多了空格、换行。</li>
          <li>客户端没有按 <code>Bearer</code> 方式发送。</li>
        </ul>
        <p>处理：重新创建令牌，并完整复制。</p>

        <h2 id="invalid-token">令牌无效</h2>
        <p>如果客户端提示令牌无效，先确认不是环境变量残留或配置位置错误。</p>
        <p>Windows PowerShell 检查：</p>
        <pre><code>$Env:ANTHROPIC_AUTH_TOKEN
$Env:ANTHROPIC_BASE_URL
$Env:OPENAI_API_KEY
$Env:OPENAI_BASE_URL</code></pre>
        <p>macOS / Linux 检查：</p>
        <pre><code>echo "$ANTHROPIC_AUTH_TOKEN"
echo "$ANTHROPIC_BASE_URL"
echo "$OPENAI_API_KEY"
echo "$OPENAI_BASE_URL"</code></pre>
        <p>如果显示旧地址或旧 token，先清理后重新打开终端。</p>

        <h2 id="error-403">403 Forbidden</h2>
        <p>常见原因：</p>
        <ul>
          <li>访问 IP 被 Cloudflare 或安全规则拦截。</li>
          <li>代理 IP 风险较高。</li>
          <li>当前路径或接口不允许访问。</li>
          <li>请求头、模型权限或账户状态不符合当前接口要求。</li>
        </ul>
        <p>处理：</p>
        <ol>
          <li>先确认账号已注册、已登录、令牌可用。</li>
          <li>重新检查当前客户端填写的 Base URL 和模型。</li>
          <li>换当前网络、代理出口或节点后重试。</li>
          <li>先访问 <code>https://www.momoapi.shop</code> 确认主站本身是否可达。</li>
          <li>不要用脚本高频重试 403 请求，这只会提高拦截概率。</li>
        </ol>

        <h2 id="error-404">404 Not Found</h2>
        <p>通常是 Base URL 填错。</p>
        <p>OpenAI 兼容客户端一般填：</p>
        <pre><code>https://www.momoapi.shop/v1</code></pre>
        <p>Claude Code 类 Anthropic 配置一般填：</p>
        <pre><code>https://www.momoapi.shop</code></pre>
        <p>不要把完整接口路径当 Base URL，例如不要填：</p>
        <pre><code>https://www.momoapi.shop/v1/responses</code></pre>

        <h2 id="error-400">400 Bad Request</h2>
        <p>常见原因：</p>
        <ul>
          <li>客户端会话状态异常。</li>
          <li>请求参数不符合模型要求。</li>
          <li>上下文里引用了已失效的历史 item。</li>
          <li>输入文本超出接口限制。</li>
        </ul>
        <p>处理：</p>
        <ol>
          <li>先 <code>/clear</code> 新开会话。</li>
          <li>如果仍然失败，减少输入长度。</li>
          <li>检查是否使用了模型不支持的参数。</li>
          <li>把服务端返回的 <code>message</code> 和 <code>param</code> 一起看，不要只看状态码。</li>
        </ol>
        <p>如果需要恢复旧会话内容，可以让 Claude Code 读取本地 <code>.claude</code> 目录中的历史文件，但不要在异常会话里继续堆上下文。</p>

        <h2 id="error-429">429 Too Many Requests</h2>
        <p>表示当前账号池或上游账号触发限流。处理：</p>
        <ul>
          <li>等待限流恢复。</li>
          <li>换模型或分组。</li>
          <li>降低并发。</li>
          <li>不要用脚本密集重试。</li>
        </ul>

        <h2 id="error-503">503 Service temporarily unavailable</h2>
        <p>表示当前请求没有可用上游，可能是模型、分组、账号池临时不可用，也可能是客户端选了错误分组，导致请求进入了不支持该模型的账号池。</p>
        <p>处理：</p>
        <ol>
          <li>确认模型是否在控制台可用。</li>
          <li>确认当前令牌或客户端选择的分组是否支持该模型，不确定时先换普通可用分组测试。</li>
          <li>换一个同系列模型。</li>
          <li>如果大量出现，等待服务端账号池恢复。</li>
        </ol>

        <h2 id="capacity">selected model is at capacity</h2>
        <p>这是官方模型算力不足或上游拥挤导致的提示，通常不是 token 或 Base URL 配错。</p>
        <ol>
          <li>直接继续或稍后重试。</li>
          <li>换同系列模型。</li>
          <li>降低并发。</li>
          <li>如果只在某个分组复现，换分组测试。</li>
        </ol>

        <h2 id="stream-disconnect">decode response body error / stream disconnected</h2>
        <p>常见于流式请求中途被 CDN、客户端或网络断开。处理：</p>
        <ul>
          <li>换网络或线路。</li>
          <li>降低单次请求上下文大小。</li>
          <li>尽量使用支持 SSE 的客户端。</li>
          <li>如果是生图长请求，等待服务端保活逻辑完成后再重试。</li>
        </ul>

        <h2 id="request-timeout">request timed out / Request Timed Out</h2>
        <p>请求超时通常和网络、代理、长任务或上游响应慢有关。处理：</p>
        <ol>
          <li>先用小请求测试同一令牌和同一模型。</li>
          <li>降低上下文长度或减少图片数量。</li>
          <li>换网络或备用线路。</li>
          <li>如果只有生图长任务超时，等待服务端流式保活或稍后重试。</li>
        </ol>

        <h2 id="image-timeout">生图超时</h2>
        <p>可能超时的图片、过大分辨率图片、多图请求，不建议走普通非流式等待。</p>
        <p>建议：</p>
        <ul>
          <li>使用支持流式请求的客户端。</li>
          <li>开启 partial images。</li>
          <li>减少单次图片数量或降低分辨率。</li>
          <li>不要在客户端超时后立即高频重试。</li>
        </ul>

        <h2 id="oversized-context">context too large</h2>
        <p>上下文超过模型限制。处理：</p>
        <ul>
          <li>新开会话。</li>
          <li>减少附加文件。</li>
          <li>让 AI 只读取关键文件。</li>
          <li>把大日志裁剪成关键片段。</li>
        </ul>
        <p>Claude Code 里可以用：</p>
        <pre><code>/clear
/compact
/context</code></pre>

        <h2 id="api-connect-error">API connect Error</h2>
        <p>连接类错误一般不是模型能力问题，而是网络或地址问题。检查：</p>
        <ul>
          <li>Base URL 是否正确。</li>
          <li>本地代理是否可用。</li>
          <li>DNS 是否能解析。</li>
          <li>公司网络、防火墙、杀毒软件是否拦截。</li>
          <li>Cloudflare 是否返回 403、522、526 等错误。</li>
        </ul>

        <h2 id="gemini-stuck">Gemini CLI 卡住或 400</h2>
        <p>如果 Gemini CLI 使用一段时间后卡住、停止响应或报 400：</p>
        <ul>
          <li>先重开会话。</li>
          <li>检查网络代理。</li>
          <li>降低上下文大小。</li>
          <li>如果持续复现，换用 IDE 插件或其他客户端完成当前任务。</li>
        </ul>

        <h2 id="roo-kilo-cost">Kilo / Roo Token 消耗过快</h2>
        <p>RooCode、Kilo 等插件经常内置较长提示词，并会自动读取较多上下文。这通常属于客户端设计问题，不一定是 momoapi 配置错误。</p>
        <p>处理：</p>
        <ol>
          <li>限制工作区范围。</li>
          <li>明确要求只读取相关文件。</li>
          <li>减少自动索引目录。</li>
          <li>复杂任务拆开做。</li>
        </ol>

        <h2 id="npm-git-fail">npm / git 安装失败</h2>
        <p>参考 <a href="#/network-proxy">网络与代理</a>，先确认命令行能访问目标站点，再安装依赖。</p>

        <h2 id="fallback-official">跳转官方，没有走 momoapi</h2>
        <p>Claude Code 出现官方登录或官方扣费倾向时，通常是配置没生效。</p>
        <p>处理顺序：</p>
        <ol>
          <li>优先用 CC Switch 重新切换配置。</li>
          <li>检查 <code>.claude.json</code> 是否完成 onboarding。</li>
          <li>检查 <code>ANTHROPIC_BASE_URL</code> 是否为 <code>https://www.momoapi.shop</code>。</li>
          <li>完全退出 Claude Code 后重启。</li>
        </ol>

        <h2 id="safety-block">敏感词或安全拦截</h2>
        <p>如果请求被安全系统拦截，说明内容触发了平台或上游安全规则。处理方式是改写为合规需求，不要尝试绕过安全限制。</p>

        <h2 id="claude-version">Claude Code 版本异常</h2>
        <p>如果新版本表现异常，可以先检查版本：</p>
        <pre><code>claude --version</code></pre>
        <p>必要时重新安装：</p>
        <pre><code>npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code@latest</code></pre>
        <p>如果某个具体版本出现会话割裂、输出异常等问题，可以临时回退到上一个稳定版本：</p>
        <pre><code>npm install -g @anthropic-ai/claude-code@版本号</code></pre>

        <h2 id="disable-autoupdate">关闭 Claude Code 自动更新</h2>
        <p>如果需要固定版本，可在环境变量或 Claude Code 配置里加入：</p>
        <pre><code>DISABLE_AUTOUPDATER=1</code></pre>
        <p>固定版本适合排查问题，但长期使用仍建议关注官方更新和安全修复。</p>
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
const imageModal = document.getElementById("imageModal");
const imageModalImg = document.getElementById("imageModalImg");
const closeImageModal = document.getElementById("closeImageModal");

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

function renderTopNav() {
  topNavEl.innerHTML = navItems
    .map((item) => {
      const className = item.primary ? "topbar__action topbar__action--primary" : "topbar__action";
      return `<a class="${className}" href="${item.href}" target="_blank" rel="noopener noreferrer">${item.title}</a>`;
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
  const headings = [...contentEl.querySelectorAll(".doc h2")];
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
            <a href="#${normalizeHash()}?section=${heading.id}" data-section-link="true" data-id="${heading.id}">
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
  const pagePath = currentPath === "/" ? "/quick-start" : currentPath;
  const page = pages[pagePath] || pages["/quick-start"];

  renderTopNav();
  renderSidebar(pagePath);

  contentEl.innerHTML = `
    <article class="doc-shell">
      <div class="doc">
        ${pagePath === "/quick-start" ? "" : `<div class="meta">${page.meta}</div>`}
      </div>
      ${page.body}
      ${buildPager(pagePath)}
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

function openImageModal(src, alt = "") {
  if (!src) return;
  imageModalImg.src = src;
  imageModalImg.alt = alt;
  imageModal.classList.remove("hidden");
  imageModal.setAttribute("aria-hidden", "false");
}

function closeImagePreview() {
  imageModal.classList.add("hidden");
  imageModal.setAttribute("aria-hidden", "true");
  imageModalImg.removeAttribute("src");
  imageModalImg.alt = "";
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

  const closeImageTarget = event.target.closest("[data-close-image-modal='true']");
  if (closeImageTarget) {
    closeImagePreview();
  }

  const copyButton = event.target.closest("[data-copy-text]");
  if (copyButton) {
    handleCopyButton(copyButton);
  }

  const figureImage = event.target.closest(".doc-figure img");
  if (figureImage) {
    openImageModal(figureImage.currentSrc || figureImage.src, figureImage.alt || "");
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
    closeImagePreview();
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
closeImageModal.addEventListener("click", closeImagePreview);
sidebarToggle.addEventListener("click", () => {
  sidebarEl.classList.toggle("is-open");
});

renderPage();
