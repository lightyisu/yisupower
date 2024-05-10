---
catalog:
  - '2023'
date: '2023-08-07 00:00:00'
type: Post
slug: https_securityif
title: HTTPS 能被抓包所以安全吗？
status: 已发布
urlname: 62fc2ac3-897d-4be5-bbb9-3c7f60ef5e1d
updated: '2024-05-10 23:55:00'
---

     今天学习 Scrapy 的时候，抓取了豆瓣的登录信息用于模拟登录。意外的发现豆瓣的登录竟然把 username 和 password 写进了 Url。


### 现象：


   进入豆瓣登录后，inspect 会发现豆瓣走了[`https://accounts.douban.com/j/mobile/login/basic？  remember=true&name=xxxxx&password=xxxxx`](https://accounts.douban.com/j/mobile/login/basic?remember=true&name=xxxxx&password=xxxxx) 的url，完完全全的把我的密码和手机号暴露在 url 里。说实话，我对网络这块也不是懂得很多，但我感觉用代理软件或者第三方代理服务登录后，~~对方是完全可拿到我访问的 url ，这和是否走SSL肯定是无关的，直接赤裸裸告诉别人我的账号和密码了。~~(错误观点 已修正 #修正）


   于是我开始联想之前上网的安全性，以及HTTPS的作用，问了文心一言他说HTTPS可以保护 payload，但是写在 URL 是没法被保护的。这让我产生了一个问题：HTTPS究竟安全吗？


### HTTPS（浅浅理解）:


    之前使用过Fiddle抓包了自己的一些请求，完完全全也可以看到我发送和收到的内容，其中也不乏https，这个https真的安全吗。是不是我使用代理或者第三方服务的时候都相当于裸奔呢。


    当代理的时候，如果使用的是代理IP，本机首先发送数据到代理服务器，代理服务器与https的网站之间是加密通信，代理服务器将我们需要的内容再发送到本机，而数据在本机和代理服务器之间的通信并不是经过加密的，这样是否就不安全了呢？


    即便用了 Https ，数据也是可以被抓包和篡改的，你看我用 Charles 就抓了很多知名平台的 https 的包，我还能随意篡改数据。这样一讲确实HTTPS貌似一点用也没有，完完全全也是裸奔的嘛。其实不是，阅读了这两篇文章：


[https://learnku.com/articles/19238](https://learnku.com/articles/19238)


[http://www.jinglingdaili.com/news-getInfo-id-24.html](http://www.jinglingdaili.com/news-getInfo-id-24.html)


其中告诉我们，我们在本地抓包的原因是因为本地拥有自己设置的证书，我的理解是本地的操作永远是可以随意更改抓取数据的，包只能在客户端自己抓到。在网络传输中SSL包裹的数据是不会被窃取的，需要预防的是某些本地客户端软件，可能控制客户端电脑，进而安装代理服务器自己的证书，进行SSL劫持，这样就会直接窃取HTTPS包裹的数据。访问所有的HTTPS网站时通过浏览器的SSL证书验证才是最安全的。


     所以，SSL还是非常安全的协议，只要本地不被恶意地篡改可以放心的使用。


### 修正：


    豆瓣的明文 URL 在TLS下还是很安全的，HTTPS 会保护URL参数进行加密只会透露访问域名主机，所以没什么问题。


[https://zhuanlan.zhihu.com/p/553839592](https://zhuanlan.zhihu.com/p/553839592)

