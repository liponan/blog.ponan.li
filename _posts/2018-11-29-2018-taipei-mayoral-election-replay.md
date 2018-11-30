---
layout: post
title: "邊開票邊投票讓排隊選民棄姚保柯？"
date: 2018-11-29 20:28
comments: true
categories: ["data science", "python"]
---

<meta property="og:image" content="http://blog.ponan.li/assets/taipei-replay/og.png" />
<link href='/assets/taipei-replay/mg.css' rel='stylesheet' type='text/css' id='light'>
<script src='https://d3js.org/d3.v4.min.js' charset='utf-8'></script>
<script src='/assets/taipei-replay/metricsgraphics.min.js'></script>
<script src='/assets/taipei-replay/replay.js'></script>

前幾天看了丁守中的記者會，他說了這樣的一段話：

> 「而且我們也發現一點，就是，在30多萬票的時候，姚文智已經達到 19 萬票了，可是到後來，我們到 50 多萬票的時候、 57 萬票的時候，姚文智成長的幅度就很小。那這，明顯地，是有操作棄保的效應，有這樣作用的發揮。」

<iframe width="640" height="360" src="https://www.youtube.com/embed/plPy_qL5Au8?start=638" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

（在 10:38 左右）

這次因為我自己的 [side project](http://election-night.ponan.li/) 的需要，從台灣時間週六傍晚七點左右開始紀錄了全台灣所有縣市在中選會網站上的縣市長開票「過程」。現在把開票的總票數重新「播放」來看，我們可以得到兩個初步的結論：

- 所有候選人的票數增加趨勢都是一樣的，甚至連另外兩位獨立參選人也不例外。
- 無論是在(柯或丁)開到 30 多萬票或者是 57 萬票的時候，從票數增加率來看，都沒有明顯的訊號可以看出姚文智的票數有停止增加的情形。

以下是互動式的數據圖表。各位也可以在我製作的 [2018開票預測](http://election-night.ponan.li/taipei_replay.html)網站上看到一模一樣的圖表，只是可能顏色的效果會比在這個部落格上更好一點。

以上研究結果同步發表於 [ptt 八卦板](https://www.ptt.cc/bbs/Gossiping/M.1543540920.A.F75.html)

此外也歡迎大家瀏覽我和其他五位網友一起合作的 [公投結果視覺化網站](https://rfrd-tw.github.io/)

## 累計票數

<div>
<div id="taipei_votes" />
<br />
</div>


## 票數增加率


<div>
<div id="taipei_incre" />
<br />
<div id="legend" />
</div>
<br />
