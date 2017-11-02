---
layout: post
title: "今晚誰作東？印出 facebook 社團成員並亂數編號"
date: 2015-06-25 15:22
comments: true
categories: [ruby, facebook, OpenGraph, api]
---
繼上一篇[印出 facebook 活動賓客名單](http://blog.ponan.li/post/2015/06/25/get-facebook-event-attendees-with-opengraph-api "誰來晚餐？印出 facebook 活動賓客名單")，同場加映一下，這次我們把 EDGE 由活動換成社團，印出全部社團成員，並且隨機排列，給他們一個亂數編號。

原先我的想法是按照賓客的長度創照一個連續自然數陣列，再利用 ruby 內建的 `shuffle` 洗牌，但是這樣名單印出來就是亂的。例如：

``` ruby
nums = 1..16
nums = nums.to_a.shuffle
```

後來想到一個更簡單的做法，就是直接把成員名單的順序打亂就好。實作如下：

``` ruby list_members.rb
# encoding=utf-8 
require 'open-uri'
require 'json'

group_id = '67226335296474'
token = STDIN.read

url = 'https://graph.facebook.com/v2.3/' \
+ group_id + '/members/?fields=name&limit=250'
url = url + '&access_token=' + token

json = open(url)

data_hash = JSON.parse(json.read)

nums = 1..data_hash["data"].size

data = data_hash["data"].shuffle

for t in nums
	datum = data[t-1]
	puts t.to_s + "\t" + datum["name"]
end
```

執行
``` shell
ruby get_members.rb < token
```
其中 `token` 放有你的 access token。

如此就會印出洗牌過的成員名單，並加上一個照順序印出的編號了。
	
