---
catalog:
  - '2023'
date: '2023-08-16 00:00:00'
type: Post
slug: opera_1
title: Opera浏览器关闭代理不能上网的问题
status: 已发布
urlname: 041350c8-c2c1-4805-8389-e426d0bcda1b
updated: '2024-04-13 23:00:00'
---

今天下载了Opera浏览器 ，发现界面确实让我很喜欢。于是我就使用，发现速度还行，基本和我现在用的 CentBrowser 差不多。但是也出现了不少问题。


[Opera官网](https://www.opera.com/zh-cn)


经常出现不能上网，突然显示不能连接的问题。


捣鼓发现其实发生在关闭代理之后，总会有这种情况。


搜索后，觉得是DNS出问题了，Edge浏览器也会出现这个问题，显示DNS错误。于是，搜到一个解决方案：


使用腾讯DNS可以解决：


1.打开 Opera 浏览器的设置，搜索DNS


![b977613fade7cf3d3a0d8277131a1cdd.png](https://main.qcloudimg.com/raw/b977613fade7cf3d3a0d8277131a1cdd.png)


2.将其改为腾讯DNS:


[Opera浏览器接入腾讯DNS](https://docs.dnspod.cn/public-dns/opera-public-dns/#:~:text=%E6%9C%AC%E6%96%87%E6%A1%A3%E6%8C%87%E5%AF%BC%E6%82%A8%E5%A6%82%E4%BD%95%E5%9C%A8%20Opera%20%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E6%8E%A5%E5%85%A5%20Public%20DNS%20%E3%80%82%20%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%97%20%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4,%E5%9C%A8%20Opera%20%E6%B5%8F%E8%A7%88%E5%99%A8%E5%9C%B0%E5%9D%80%E6%A0%8F%E4%B8%AD%EF%BC%8C%E8%BE%93%E5%85%A5%20opera%3A%2F%2Fsettings%20%E5%B9%B6%E5%9B%9E%E8%BD%A6%2C%E8%BF%9B%E5%85%A5%E5%B8%B8%E8%A7%84%E8%AE%BE%E7%BD%AE%E9%A1%B5%E9%9D%A2%E3%80%82%20%E5%B9%B6%E5%9C%A8%E6%90%9C%E7%B4%A2%E6%A1%86%E4%B8%AD%E8%BE%93%E5%85%A5%20DNS-over-HTTPS%20%E8%BF%9B%E8%A1%8C%E6%9F%A5%E6%89%BE%E3%80%82)


3.可以愉快上网了，Edge应该是同理，猜测他俩特殊在都是用了内置的安全DNS系统？


4.腾讯云的Public DNS 基础服务请填入 `https://doh.pub/dns-query`。

