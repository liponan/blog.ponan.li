---
layout: post
title: "EEMD (Ensemble Empirical Mode Decomposition) 訓練講義"
date: 2014-10-14 10:52
comments: true
categories: [Matlab, EMD, EEMD]
---
# 簡介

# 訓練目標
以1D為切入點，了解 EEMD 之基本原理，並以 Matlab 語言實作之。

## Matlab
完成這份訓練講義之後，預期學習者將會應用到或者學到如何

- 創造並使用 `function`
- 找出資料向量中的極值
- 使用 `interp1` 內插出平滑的資料曲線
- 打造 EMD 引擎
- 將 white noise 加入資料之中
- 完成 EEMD 函數

# 習題

## 尋找極值函數 findExtrema
在這題當中，我們要學會寫出一個傳入資料向量 `data`，可以回傳資料中極值的 **值** 以及 **位置** 的函數。以下將分為四個小題進行。

### 學會如何自定函數
試找尋資料，學習如何創造一個自定函數，或查詢 Matlab 內建教學

{% highlight matlab %}
doc function
{% endhighlight %}

或參考以下範例：

{% highlight matlab %}
function y = numAdd(a, b)
y = a + b;
{% endhighlight %}

### 尋找最大值
試寫一個函數 `findMax.m`，輸入任意長度向量 `data` 可傳回兩組輸出：

- 最大值所在的位置 `max_ind`
- 最大值的值 `max_val`

*提示： 函數的第一行可能長成這個樣子：*

{% highlight matlab %}
function [max_ind, max_val] = findMax(data)
% coding here
{% endhighlight %}

請注意，一串資料可以有多個 local maxima。此題要求的是找出所有的 local maxima，而非僅是資料中的最大值，否則用內建函數 `max()` 即可達成。

### 尋找最小值
承上題，找出「所有」最小值 `min_val` 及其分別之所在位置 `min_ind`。

*提示： 試想，是不是將上一題的傳入資料由 `data` 改為 `-data` 就可以達成目標了？*

### 尋找所有極值
綜合前面三題所學，請完成一個可以找出所有極值，並分別回傳最大最小值的值與位置的函數 `findExtrema.m`

{% highlight matlab %}
function [max_ind, max_val, min_ind, min_val] = findExtrema(data)
% coding here
{% endhighlight %}

*注意： `data(1)` 與 `data(end)` 是否也須考慮為「極值」？如果是，其原因為何？*

## 內插曲線

下面這兩題，我們將會利用前一大題所得到的資料，以及 Matlab 內建的 `interp1`函數，得到 EMD 所需要的「趨勢」曲線。

### 使用離散資料內插曲線

利用 `interp1`，將 `max_ind` 和 `max_val`內插成一條長度和取樣率皆與 `data` 相同之「連續」曲線 `max_trend`。
利用 `interp1`，將 `min_ind` 和 `min_val`內插成一條長度和取樣率皆與 `data` 相同之「連續」曲線 `min_trend`。

*注意： `max_trend`或`min_trend`的頭尾，都要和 `end` 一樣（可以想成是 boundary conditions），否則會有些區域沒有定義。*

### 求得「平均」曲線
將上小題的兩條曲線做點對點平均，得到 `avg_trend`。

## 打造 EMD 引擎
參考 paper 上的演算法，以及上面所練習的技巧與成品，應該已經可以完成 EMD 的引擎。其界面如下：

{% highlight matlab %}
function modes = emd(data, nmode)
% coding here
{% endhighlight %}

其中 `nmode` 是所要求的模態數量。請注意，如果原本的 `data` 長度是 `$M \times 1$` 的話，則得到的輸出資料 `modes`的大小會是 `$ M \times (nmodes+1) $`。

## 打造 EEMD 引擎
如果前面的 `emd.m` 已經驗證完成，那麼接下來就是讓它進化成 EEMD 的時候了。比起 EMD ， EEMD 多了下面兩項特色

- 外加了額外的 white noise 進去
- 先跑出 N 組各別使用不同的 white noise 所解出來的結果，再一起取平均。

下面我們只拆成兩小題練習，不足之處請直接參閱 paper。

### 加入 white noise
假定使用者指定一個特定的 white noise 強度 `wn_std`，我們有兩種方式可以將等效強度的 white noise `Wn` 加到 `data` 裡面去，第一種是：

$$
D' = \frac{D}{\sigma(D)} + W_n
$$

其中 \\(D\\) 指 `data`， \\(\sigma()\\)是求標準差的函數；或者第二種方法

$$
D' = D + \sigma(D)W_n
$$

試問：兩種方法何種較優？較劣者，有什麼致命的缺點？

請利用 Matlab 內建的 `randn()` 完成此題。

### 完成 EEMD 架構
參考 paper 上的演算法，以及上面所練習的技巧與成品，終於我們可以完成 EEMD 的全面架構。完成品的輸入資料除了 `data`以及`nmode`之外，還多了指定 ensemble 數量的 `nens` 與 white noise 的標準化強度 `wn_std`。其界面如下：

{% highlight matlab %}
function modes = eemd(data, nmode, nens, wn_std)
% coding here
{% endhighlight %}
