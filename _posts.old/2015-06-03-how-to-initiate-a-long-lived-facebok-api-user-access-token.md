---
layout: post
title: "如何建立一個不會過期的 Facebok API User access token？"
date: 2015-06-03 16:27
comments: true
published: false
categories: [facebok, api, API explorer, token, ruby]
---
這是我難得在標題上打這麼多英文字，畢竟這整串東西翻成中文也沒人看得懂，也無法讓人搜尋到。

# 為什麼需要 long-lived token
如果你已經很熟悉 facebook API，或者很常用 API explorer 來做測試，應該就會知道 `access_token`大概一兩個小時就會過期。如果你花整晚在寫 code 或者 debug ，大概也只會經歷一兩次過期而已，重新刷新就是了。不過如果你對 API 的需求是相對長期的，例如寫一個機器人週期性操作 API，那你就會需要一個可以久久才更新一次的 token。

是的，真的有這樣的東西。
