---
layout: post
title: "Python初心者日記：安裝模組"
date: 2015-01-16 13:15
comments: true
categories: [程式交易, Python, mac]
---
因為想要邀請我大學同學開設程式交易的讀書會，所以我這陣子自己也在做功課，其中一項作業就是研究[網友開發的股價擷取API](https://github.com/toomore/grs "台灣上市上櫃股票價格擷取（Fetch Taiwan Stock Exchange data）含即時盤、台灣時間轉換、開休市判斷。")。 Python 對我來說並不陌生，我工作上還滿常讀 Python 的 code 的，之前也有「玩」過 CodeAcademy 的 Python 課程；但是要我在自己電腦上開發 Python ，坦白說，我還真的沒有嘗試過。

今天的第一天日記，記錄兩個我部署上述的 [grs](https://github.com/toomore/grs) 遇到的問題，第一是怎麼安裝「常用」的 module，第二是怎麼安裝網友寫好的 module。以下環境部分都是針對 mac ，非 mac 的朋友抱歉了。

# 安裝「常用」的 module
`easy_install` 是 Python 的套件管理系統，而 mac 不但有內建 `python`， `easy_install`也內建了。如果擔心要使用的套件要求的 Python 版本超過系統內建的版本，可以打

```
python --version
```

先確定一下。

現在把焦點轉回到 [grs](https://github.com/toomore/grs) 上面。依照它的 README 要求，使用者要有下面三個套件

* python-dateutil==1.5
* ujson
* urllib3

所以我們馬上就會遇到一個問題，就是下載好了之後怎麼安裝，或者有沒有給懶人用的快速安裝方式呢？

有的。就是用 `easy_install`。所以要做的事情很簡單，就是依序執行

```
sudo easy_install ujson
sudo easy_install urllib3
sudo easy_install python-dateutil
```

別忘了我們要做的事情是「安裝」，所以要記得加上 `sudo`；執行後系統會要求你輸入密碼，如果短時間內一直 sudo，則不用一直輸入。


# 安裝外部的模組 （設定模組路徑）

熟悉 Python 的朋友應該都知道 Python 程式的開頭跟 C++ 很像，起手式就是要 `import` 一些要用的套件。萬一要用的模組是強者你同學寫的，或者從 GitHub 上下載下來的，那要怎麼把這個模組的路徑加到 Python 的搜尋路徑裡面呢？如果只是暫時性的使用，可以透過 `sys.path`指令來「暫時」加進去路徑裡面。如果你是用 `python` 的互動模式來寫程式，那就只在這次的 session 內有效喲。

## 一次性設定法

``` python
import sys # 引用 sys 模組
sys.path.append('/path/to/the/module/')
```

這樣就可以了。在互動模式下，你也可以印出目前的路徑清單，檢查一下有路徑有沒有設定成功。

``` python
print sys.path
```

## 永久安裝

當然一次性安裝不是長久之計，也如同我上面所講的，比較適合在互動模式下使用。那麼怎麼做永久的「安裝」呢？這時候就要看網友寫的模組裡面有沒有 `setup.py`了。以這次的 [grs](https://github.com/toomore/grs) 為例，從下載到安裝的完整步驟是：

```
git clone git@github.com:toomore/grs.git
```
先用 ssh 或者 https `clone`下來。

```
cd grs
python setup.py
```
這樣就完成啦！簡單吧！