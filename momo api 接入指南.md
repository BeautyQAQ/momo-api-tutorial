# momo api 接入指南

> 老板们有问题可以群里问
> 
> 务必加 qq 群，防止国内官方下手失联：1102891423
> 
> 

目前站内  gpt  倍率为 0\.04，即 1 元=7 美元=0\.04 倍 gpt 额度

# 账号注册与充值

注册账号：

[https://www\.momoapi\.shop/sign\-up](https://yeyyyao.cc.cd/sign-up)

**网站支持按量付费。语言模型，如：gpt\-5\.5 gpt\-5\.4。**

**1元额度卡密：**

[https://pay\.ldxp\.cn/item/k1hyp6](https://pay.ldxp.cn/item/k1hyp6)

**购买后会拿到一个兑换码，在这里兑换额度：**[**https://www\.momoapi\.shop/wallet**](https://www.momo-api.cc.cd/)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=ODVlOWJhYWNkNWZhZGQwYTdhYmYxYWU5NzRiMmYxZjNfZGQ2OWRhMzM4YTJmMDYxZTc4ZTcyMTI4OGYzYzczYzZfSUQ6NzYzODYzMDc2OTAzMTk3MzgyNF8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

使用过程中如果有什么疑问，可联系管理员



**购买前请认真评估自己用量，按需充值**

# 按量付费订购

按量付费，直接充值，用多少扣多少。

# 创建令牌\(API Key\)

购买成功后，在令牌管理新建令牌

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MDQwYzUyNGI4YzEyOWNlOWE0Yjg2NGIyMDlkNjg3OThfNjQyMWMxMGEyMTBhOTQ5ZTVmYzFmODM4YmY3NzQ4YjNfSUQ6NzYzODYzMDk0MDM5NDI0NTM0MF8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

令牌名称随便填写，

令牌分组填写说明：

如果购买的套餐或者调用gpt\-5\.5 gpt\-5\.4 gpt\-5\.3\-codex 这些，目前分组选择default，后续可能调整，可以在模型广场查看模型分组列表

然后点击提交即可

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=ZmYxMzBjMDk4NDkyMGQ1MDg0YjBjZWViMWYxNDEyZDFfYjM0NzM4YzIzMjdiYjhiMjY4ZjA2NTFjNWU0YTdmNzZfSUQ6NzYzODYzMTAyNDI4NDc5ODE1OV8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

这里可以复制密钥\(API key\)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=OWEyMDg0NjdjODIxMGY3NDU1NWRmZmMxZmFmMzFiZGZfM2JjNDRhZTc1MTJhNjgzN2E1NmU5Yzk2NTAwMzQ1ZDBfSUQ6NzYzODYzMTA3MzA4MTUyNzIyNl8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

# API使用

有了API 可以在很多AI工具中使用，比如常见的codex、Claude Code、Openclaw\(龙虾\) 里面使用。如今各种AI工具，AI Agent，多如繁星。但主流工具基本上都支持接入中转API，这里只介绍几种。若你使用的工具不在本文档范围内，可以自行搜索: xxx接入中转API

## codex客户端安装使用

codex为 openai官方的chatGPT模型客户端，类似与豆包、元宝之类的。也是最推荐使用的终端，而且Codex是直接可以联网搜索的。



如果没有科学上网Codex可能下载非常慢（推荐开启tun模式，加速下载codex客户端）

### Windows安装Codex

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=ZDI1YjVhNjhiYjEzODdiZjA5NjM0ZTMxZTliMDgyYWFfNzE0ZDE3YTA4YWYxNDU3YWQ3ZGZjYmExZjQ4MmJkN2FfSUQ6NzYzODYzMTE0MjI1OTM2MzAwNl8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

打开后搜索Codex, 第一个就是

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=OWNiN2JmM2Y4ZmVkYmY2YmMxMTJlYjk5NzQ2YjkzOWZfYWNjNzQ1ZGU1YzQ5ODFjZDA2MTg2ZmY3ZGZmMmVlMzBfSUQ6NzYzODYzMTE5MTE1OTIyOTM4MF8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

点击进去，点击安装

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MmM3MmRhNmRkYWYzY2ZjM2NjZjVjNDJmZWMxNWU5YWZfZDc2OGQ3MDc0OGVkOWU1MWE0YzE3ZDBmNzZkNWMxMWNfSUQ6NzYzODYzMTIyOTIzOTM4MTIxMl8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

安装完成后，这里可以先不打开。

### 修改配置

将下面这个目录，直接复制到文件资源管理器中，按Enter键即可

```Python
%HOMEDRIVE%%HOMEPATH%\.codex
```

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MTBlOGUyNTUyNjViMDcwMDA3NDEwOTk4NTNmNGM3YzRfOGQzYmYzNDhmYTRhZmIxZDQ4YmY4MjcxMmU2OGEyNzlfSUQ6NzYzODYzMTI4MzA0Nzk5MjUwNl8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)



进入目录后，点击\-\-查看\-\-\>显示，勾选文件扩展名

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YTk5NmE0ZmM5YmQ5YmUwM2EyYjJhNmFkMmViNGRmZjdfNThhM2NiYTYxNDYxMTdiNTU1ZmNiOTdmMDU2MzI1NGFfSUQ6NzYzODYzMTMyMTY5MDA4MjI0NF8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

如果不存在auth\.json和config\.toml ，自己新建一个txt文档，将文件名改成auth\.json和config\.toml

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YTU0Yjg1NDU5YTYyMjY3NDdmMmE5ODM3YzczOTBiYjFfMjE5YjU5NTBjMzM1MTAyMTM0NTIyYjFmYzE1ZmM5MDJfSUQ6NzYzODYzMTM1NDU2NTg0MDA3Ml8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

选择auth\.json右击，选择记事本中编辑

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MGY3YmNhMjQ5MGE5YzJhYjg3Mjk3ZWY5ZmVjMDI2ZjFfZTMzMzAzZTZkNTJmM2M4NDJhMWIzYzYzODk3MmZiMWJfSUQ6NzYzODYzMTM4NDE0MzIxOTY0NF8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

填写你的密钥\(api key\) 内容格式如下：

```Python
{
  "OPENAI_API_KEY": "sk-xxx"
}
```

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NDcxMDRmNmI3ZWM3ZjRlNjQ0MTU2MGIxZDBmMDQyYjFfNWZjY2ExY2NmZTllYjE1NmE2MmYxNGMxNDJjNWJkMDVfSUQ6NzYzODYzMTQyMzA4NzMxNTkzOF8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

同样的方式用记事本打开config\.toml

配置内容如下：

```Python
model_provider = "custom"
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
sandbox = "elevated"
```



保存上面两个文件后，再打开codex ，第一次打开可能有点慢

可以从搜索中找到\(将以将Codex固定到任务栏或者发送到桌面，下次好打开\)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YTgyMDU2NTcyZjAzNGVmOTRkZjQxNTAzMjc0ZTNlYTdfMDdhODJiMGRlZGIzZDNkYTFmMDZhYzUzN2U1YmNkNzVfSUQ6NzYzODYzMTQ5MzY3MzMwNzM1OF8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

点击上方file\-\-\>open folder 打开一个工作的文件夹目录，即可开始对话。

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=ZWI4NGRkYzNiOWI2NTlmYjU0ZmFiZjE5YzY2NDRhMzdfY2Y2MTUwZTM4MzlhNjI4Njg5M2I2ZmVmMmNjZTRmYWJfSUQ6NzYzODYzMTUzNDAzNTE2MDAwOV8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

使用示例：

Codex自带联网功能的

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NjNkNWVmMzk3ODIyOWQxY2I0YTkxMjgyNGIxY2E5NjFfN2U0YWY4YjNkYmFjMWE2YzljMDZjYWMzMzk0MWEzZWNfSUQ6NzYzODYzMTU2ODEwNTQ1ODYzOV8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

启动后这些选项可以跳过

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NWMwNjI1NDBlZmYzZjIyMWNiZmIzNzMyNTZjNmU0YWVfZTk0MTM1NGE5M2Y3NDg4N2ZhMGE1ZDcxYWVmN2Y3ZGZfSUQ6NzYzODYzMTYxMjA5OTQxNTI0NV8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

点击继续使用当前模型

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NmE5Yjk0M2I1MzY2NmQ1YTUyOTE1OTQ2OWQ0ZWU4ODZfZDY4YjAzNmE1ZjBmYzM1YjA0YjQ3OGQ0OWM1ODliMmFfSUQ6NzYzODYzMTYyOTM5MjU3OTU0MV8xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

安装完成后，若无法使用，建议先关闭codex，重启电脑试试。



## CC\-Switch 配置Codex

方法同配置Claude Code差不多。

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YWM4Yzg0Zjg2YmZiYzRhYjc0OTljZTE1NTQwY2ZjZDdfMjdlZDRkZTczYmFjMGIxOTQ0ZDRmNDM3ZTg3NjllNDdfSUQ6NzYzODYzMTcwMTgwNzM4NTc5N18xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)

配置如下：

只需要填写 供应商名称，官网链接，API key , API请求地址，模型名称即可。

url: https://www\.momoapi\.shop/v1

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=N2NiYjcwMTA2NjA3MDE0ZGU4MjQwY2FhODFmNzk3ZjlfNjhjNTBkNDE1Njg3MmRlMWRlMDQyMWQ4YmFhN2Q2YjZfSUQ6NzYzODYzMTc0MTY3ODE3NzI1M18xNzgwMzk1MjU1OjE3ODA0ODE2NTVfVjM)



