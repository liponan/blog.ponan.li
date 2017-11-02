---
layout: post
title: "誰來晚餐？印出 facebook 活動賓客名單"
date: 2015-06-25 15:09
comments: true
categories: [ruby, facebook, OpenGraph, api]
---
上禮拜辦了一個活動，完全用 facebook 的活動 （event）功能邀請賓客；活動前一天我想要印出賓客清單，才發現 facebook 居然沒有把賓客名單匯出成 .csv 的功能..... 我記得以前有啊？

這種時候就只好動用 facebook 強大的 opengraph API了。opengraph 的 **EDGE** 除了可以是一個人，一個fan page之外，也可以是一個活動。

取得 event 相關資訊前，要在申請 access token 前額外要求要 event 的權限：
![螢幕截圖 2015-06-25 23.29.43.png](/assets/img/uIeto13SQnOiUehd8iQJ_%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96%202015-06-25%2023.29.43.png)

話不多說，來看 code：

``` ruby list_attendees.rb 
# encoding=utf-8 
require 'open-uri'
require 'json'

event_id = '1609895432567499'
token = STDIN.read

url = 'https://graph.facebook.com/v2.3/' \
+ event_id + '/attending/?limit=250'
url = url + '&access_token=' + token

json = open(url)
data_hash = JSON.parse(json.read)

data_hash["data"].each do |datum|
	puts datum["name"]
end
```

執行
``` shell
ruby list_attendees.rb < token > guests.csv
```
即可

其中 `< token` 是利用 standard input 將我放在另一個檔案的 token 吃進來； `> guests.csv` 就是把列印出來的內容存到csv檔裡面。

### 同場加映
- [今晚誰作東？印出 facebook 社團成員並亂數編號](http://blog.ponan.li/post/2015/06/25/get-member-list-in-a-facebook-group-and-assigin-a-random-id "今晚誰作東？印出 facebook 社團成員並亂數編號")