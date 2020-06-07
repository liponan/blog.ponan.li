---
layout: post
title: "2020 韓國瑜罷免案逐時開票結果"
date: 2020-06-06 03:44
comments: true
categories: ["data science", "data viz", "taiwan", "metro", "taipei"]
image: /assets/han-recall/og.png
---

<link rel="stylesheet" href="/assets/css/iframe.css">

作者： 李柏南 Po-Nan Li


- 資料來源：[中央選舉委員會](https://recall.2020.nat.gov.tw/)
- 圖表資料：[GitHub](https://github.com/leeneil/blog.ponan.li/blob/gh-pages/assets/han-recall/2020_recall.csv)


## 逐時開票記錄

本次中選會資料網站有改版，不過因為改成用 json 更新資料，所以花了五分鐘就把爬蟲寫好了。只是因太晚才想起來要紀錄開票，所以結束投票後40分鐘才開始抓資料，敬請見諒。
記錄到資料整理後，業已分享於[GitHub](https://github.com/leeneil/blog.ponan.li/blob/gh-pages/assets/han-recall/2020_recall.csv)。

<iframe frameborder="0" scrolling="no" height="300" width="600" src="/assets/han-recall/han-recall.html"></iframe>


## 與 2020 蔡英文於總統大選得票率之比較

<iframe frameborder="0" scrolling="no" height="600" width="600" src="/assets/han-recall/recall_vs_2020.html"></iframe>

台灣歷屆罷免投票，普遍都有同意者參與較為踴躍的情形，即使在選罷法修法後依然如此。此次罷免投票，由於韓國瑜喊話關係，這樣的現象再度變得非常明顯，因此投票率跟同意票比例，應該幾乎沒有差別。
在本分析中，我們比較今年年初總統大選，連任的蔡英文在高雄市各行政區的得票率，與本次罷免的投票率。圖中資料點的顏色，綠色代表在 2020 年的總統大選時，蔡英文的得票贏過韓國瑜的行政區，藍色資料點反之。


## 與 2018 陳其邁於市長選舉得票率之比較

<iframe frameborder="0" scrolling="no" height="600" width="600" src="/assets/han-recall/recall_vs_2018.html"></iframe>

再更往前看，我們也比較了上一次高雄市長選舉韓國瑜的對手陳其邁在高雄市各行政區的得票率，與本次罷免的投票率。圖中資料點的顏色，綠色代表在 2018 年的市長大選時，陳其邁的得票贏過韓國瑜，藍色資料點反之。
與前一張圖相對照，除了今年一月的時候我們已經知道許多行政區的藍綠都重新翻盤之外，應該也不難發現兩組對照圖中，綠營（陳其邁與蔡英文）的得票率，與本次罷免的投票率，還是非常有關連。
這樣的現象其實並不太讓人意外。比較值得留意的是，在蔡英文與罷韓的比較中，三個藍色資料點於總統大選的蔡英文得票率，其實並沒有轉化為罷韓的投票率。網路上的分析一般認為，與偏鄉投開票所較為分散、前往投票的時間與機會成本較高有關。