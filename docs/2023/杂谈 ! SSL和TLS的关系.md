---
catalog:
  - '2023'
date: '2023-08-23 00:00:00'
type: Post
slug: relofTLSandSSL
title: 杂谈 | SSL和TLS的关系
status: 已发布
urlname: 77da3939-fdb4-465f-9abb-c8ef1b8779f3
updated: '2024-04-06 00:20:00'
---

### 引言：


一直认为SSL就是HTTPS的证书的意思，TLS是某个协议，其中的差别挺大的。其实不然，这是个错误误区。


### 定义：


SSL:（_Secure Sockets Layer_）传输层安全性协议


TLS:  (_Transport Layer Security_）安全套接层


关系：SSL是TLS的前身


SSL 1.0：因存在严重的安全漏洞，从未公开过


SSL 2.0：1995年，已于2011年弃用（参考[RFC_6176](https://link.juejin.cn/?target=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc6176)）。


SSL 3.0：1996年，已于2015年弃用（参考[RFC_7568](https://link.juejin.cn/?target=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc7568)）


TLS 1.0：1999年，参考[RFC_2246](https://link.juejin.cn/?target=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc2246)


TLS 1.1：2006年，参考[RFC_4346](https://link.juejin.cn/?target=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc4346)


TLS 1.2：2008年，参考[RFC_5246](https://link.juejin.cn/?target=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc5246)


TLS 1.3：2018年，参考[RFC_8446](https://link.juejin.cn/?target=https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc8446)


[embed](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87b802a56645468fb6422fe3275d84c6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)


### 解释


SSL和TLS之间存在密切的关系。它们都是用于在两个通信应用程序之间提供保密性和数据完整性的协议。


TLS协议是SSL协议的后续版本，它们的主要区别在于所支持的加密算法和证书验证级别。TLS协议通常被认为是更安全的协议，因为它要求更高的验证级别，而SSL协议可能存在一些安全漏洞。


在TLS协议中，记录协议（Record Protocol）负责将应用层的数据进行加密和压缩，然后将其传递给传输层进行传输。握手协议（Handshake Protocol）则负责在客户端和服务器之间建立安全连接，其中包括密钥交换和身份验证等步骤。


在SSL协议中，同样分为记录协议和握手协议。SSL记录协议（SSL Record Protocol）与TLS记录协议类似，它也负责将应用层的数据进行加密和压缩，然后传递给传输层进行传输。而SSL握手协议（SSL Handshake Protocol）也负责在客户端和服务器之间建立安全连接，但它与TLS握手协议略有不同。


在版本方面，TLS协议的版本包括TLS 1.0、TLS 1.1和TLS 1.2。而SSL协议的版本包括SSL 2.0、SSL 3.0、TLS 1.0、TLS 1.1和TLS 1.2。其中，TLS 1.0实际上是基于SSL 3.0开发的，因此可以说SSL 3.0是TLS 1.0的前身。


总的来说，SSL和TLS是密切相关的协议，它们都用于提供安全的数据传输服务。虽然SSL仍然被广泛使用，但TLS被认为是更安全和更现代的协议。


以后若见到SSL和TLS混用时候 基本可以认为是一个东西。

