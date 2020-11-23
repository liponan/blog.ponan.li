---
layout: post
title: "台鐵和台北捷運的統計數據符合 Benford's law 嗎？"
date: 2020-11-22 21:15
comments: true
categories: ["data science", "data viz", "taiwan", "metro", "taipei", "Benford's Law"]
image: /assets/benford/taipei_metro_ridership_vs_benfords_law.png
---

作者： 李柏南 Po-Nan Li

- 圖表資料：[台鐵統計資料](https://github.com/leeneil/tra-data-viz/blob/master/export/20190901_20200229_%E9%80%B2%E5%87%BA%E8%BB%8A%E7%AB%99%E4%BA%BA%E6%95%B8.csv)、
[台北捷運統計資料](https://github.com/leeneil/taipei-metro-ridership/tree/master/export)
- 資料來源：[台北捷運/統計資料/旅運量](https://www.metro.taipei/cp.aspx?n=FF31501BEBDD0136)、
[政府資料開放平台/政府行政機關辦公日曆表](https://data.gov.tw/dataset/26557)、
[政府資料開放平台](https://data.gov.tw/dataset/8792)、
[台鐵統計資訊](https://www.railway.gov.tw/tra-tip-web/adr/about-public-info-3?&activePage=1)、


今年稍早我們陸續談了[台鐵進站與出站人數最懸殊的車站](https://blog.ponan.li/post/2020/03/02/taiwan-railway-entries-vs-exits/)
以及[台北捷運進站與出站人數最懸殊的車站](https://blog.ponan.li/post/2020/03/14/taipei-metro-entries-vs-exits/)。
最近因為美國總統大選的開票爭議，許多專家都提到了利用 [Benford's Law](https://en.wikipedia.org/wiki/Benford%27s_law)來驗證統計數據的想法。
這裡我推薦大家閱讀[東海大學應用物理系](https://www.facebook.com/THUPhys1955/posts/3580881175265788)跟
[科宅導讀－知識娛樂 × 問題 × 夢囈與詩](https://www.facebook.com/Nerdxplain/posts/804387393718701)非常精彩的導讀與介紹。
在這裡我要引用科宅提到的重點：Benford's law 要在資料橫跨多個數量級的時候才會比較適用。說到這裡，
不知道大家是不是有想到我們前面介紹過的台鐵跟台北捷運的進出站人次，都是用對數座標軸？原因就是因為大站（如台北跟板橋）與小站（如萬芳社區、加祿）
的運量實在是過於懸殊。此外，根據我們先前引用的開放資料，在2019年度的時候，台北捷運有 135 個車站，台鐵有 241 站，應該都有夠多的數據。
那麼以下我們就先從台北捷運開始吧！

## 台北捷運的各站進出人次符合 Benford's law 嗎？

![台北捷運系統各站在2019年的進出站人次首位數字出現頻率](/assets/benford/taipei_metro_ridership_vs_benfords_law.png)

從上圖看起來，4 跟 8 開頭的數字比 Benford's law 預測的分布來的多，2開頭的數字則較少。值得注意的是 1 開頭的出現頻率幾乎跟定律的預測一樣。


## 台鐵的各站進出人次符合 Benford's law 嗎？

![台鐵各站在2019年的進出站人次首位數字出現頻率](/assets/benford/benfords_law_ridership.png)

那台鐵呢？可能是因為台鐵的營業車站更多的緣故，比起台北捷運更貼近定律的分布一點，除了 2 開頭稍微偏多之外。

![台鐵各站在2019年各站每日停靠車次首位數字出現頻率](/assets/benford/benfords_law_train_by_station.png)

此外同樣出自台鐵的公開資料，我們也可以分析每站每日停靠車次的首位數字分布。
或許是因為資料的數量級對比較小的緣故（最小值 4，最大值 302），資料點明顯比上面兩張圖，更偏離定律的預測。

## 台灣高鐵的各站進出人次符合 Benford's law 嗎？

之前我們寫過台鐵跟台北捷運的分析，那高鐵呢？其實我之前分析也做了，不過一直沒時間寫文章。
我們就用當時抓的數據，來分析一下台灣高鐵的進出站人次有沒有符合定律的預測好了。

![台鐵各站在2019年各站每日停靠車次首位數字出現頻率](/assets/benford/thsr_ridership_vs_benfords_law.png)

結果，數字有缺 XD。雖然在 2019 年的時候高鐵已經有 12 個營業車站，不過在首位數字的分布上，4、7、9 都是缺席的。





