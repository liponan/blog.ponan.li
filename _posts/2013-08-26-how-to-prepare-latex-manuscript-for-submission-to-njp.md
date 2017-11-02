---
layout: post
title: "第一次投New Journal of Physics就上手"
date: 2013-08-26 03:24
comments: true
categories: [NJP, IOP, journal, paper, 論文, LaTex]
---
趁著剛寫完**[第一次投APS期刊就上手](http://nan.logdown.com/post/2013/08/25/steps-to-prepare-for-submitting-aps-journals "第一次投APS期刊就上手")**決定順勢~~騙點稿費~~，也寫一篇如何投 NJP 的心得筆記。會同時寫這兩篇，當然是因為兩家期刊我們都有考慮要投；只是最後投了哪一家，這就是學術機密了。

雖然我介紹的是如何投 NJP，但是其實 IOP (Institute of Physics) 下面的期刊應該都適用。值得注意的是，這是英國的期刊。NJP，簡稱為 *New J Phys.*，1998發行至今，目前出到 volume 15，所以看起來是一年一個 volume
<!--more-->

# template
好template，不用嗎？IOP期刊的 LaTex template[按這裡下載](javascript:openHelp('/atom/help.nsf/0/B042B0AF79C815B88025702000409514?OpenDocument&journalid=NJP',true,635,450); "IOP journals template")。好的 template是成功的一半！

# 引用圖片
引用圖片部分，NJP的 template 除了 LaTex 原生的 `\ref{}`之外，還提供了引用圖片用的`\Fref`和`\fref`。詳細用法還有其原理，相信大家看了下面的code就懂。這段code來自於template的壓縮檔中提供的`iopart.cls`。
```latex iopart.cls (局部)
\newcommand{\eref}[1]{(\ref{#1})}
\newcommand{\sref}[1]{section~\ref{#1}}
\newcommand{\fref}[1]{figure~\ref{#1}}
\newcommand{\tref}[1]{table~\ref{#1}}
\newcommand{\Eref}[1]{Equation (\ref{#1})}
\newcommand{\Sref}[1]{Section~\ref{#1}}
\newcommand{\Fref}[1]{Figure~\ref{#1}}
\newcommand{\Tref}[1]{Table~\ref{#1}}
```
  
# 方程式換行
NJP使用的是`\eqnalign`搭配`\cr`當作換行符號。例如下面這段code
```latex eqnalign_demo.tex
	\begin{equation}
	\eqalign{
		|A(k)|^2 
		&\approx |F(k)|^2 + F^*(k) \cdot G(k) + F(k) \cdot G^*(k) \cr
		&\gg |G(k)|^2 .
	}
	\end{equation}
``` 
應該會給你
```mathjax
	\begin{equation}
	\eqalign{
		|A(k)|^2 
		&\approx |F(k)|^2 + F^*(k) \cdot G(k) + F(k) \cdot G^*(k) \cr
		&\gg |G(k)|^2 .
	}
	\end{equation}
```


# Reference
Reference 的部分NJP允許作者自由選擇使用 Havard 或者 Vancouver，我的話當然是選擇按照引用順序排列的 Vancouver。 NJP的citation格式比較特殊，除了先寫 Family name 之外，名字是打單一字母但是不打逗點的，例如：
> Li P-N, Tsao H-H, Huang J-S and Huang C-B 2011 *Opt. Lett.* **36** 2339

或者
> Jiang Z, Huang C-B, Leaird D E and Weiner A M 2007 *Nat. Photon.* **1** 463

嗯是的，你會發現，從頭到尾完全沒有逗點，包含最後一個作者之前也不會加逗點。NJP明訂超過十個作者就寫 *et al*；我想各位應該都知道各個期刊對於 *et al*這東西格式都不太一樣，包含要不要打句點、要不要斜體，好像沒有很統一。為了怕大家打錯，NJP乾脆送你一個`\etal`，想要打*et al*的話呼叫它就對了！
值得注意的是，-符號是因為打中文名字所以才有的，如果是外國人的話就是把他的名字字母簡寫個別打上去就好囉，不用加-。


