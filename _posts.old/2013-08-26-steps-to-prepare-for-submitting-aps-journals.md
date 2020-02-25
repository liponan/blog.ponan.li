---
layout: post
title: "第一次投APS期刊就上手"
date: 2013-08-26 03:19
comments: true
categories: [LaTex, APS, paper, journal, 論文, citation, PRL, PRB, PRX, REVteX]
---
整理一下這次投 PRX 的心得，基本上 APS 系列期刊的guideline都是一樣的，不同期刊之間的版面風格，在LaTex之中調整就好，整體來說沒有太大差異。APS官方你絕對找不到 LaTex 的 template 的，不用找了，我找過了。但是有兩個地方其實可以找到，而且我確認過是沒問題的，可以用：
* [sharelatex](https://www.sharelatex.com/templates/journals/aps/ "American Physical Society (APS) LaTeX Template")
* [REVTeX 4.0 的壓縮檔](http://publish.aps.org/files/revtex/4/revtex4.zip "REVTeX 4.0 ZIP")

雖然APS推薦使用的是 REVTeX ，不過說真的我覺得真的對於投稿的人沒有太大差別，就是當作 LaTex 去寫就對了，而且一般的 LaTex 編輯器(例如我用的 [TexCenter](http://www.texniccenter.org/ "TexCenter"))也都有支援。
<!--more-->

# 引用圖片
提到圖片的部分，[APS的Manuscript Style說明](https://authors.aps.org/STYLE/ms.html#ident "Identifying figures")中有明確提到 **Identifying figures** 的方法：

* 如果是在句首，則稱 __Figure 1__，例如：
> Figure 1 shows experimental results.

* 如果是在句中，則稱 __Fig. 1__，例如：
> Experimental results are shown in Fig. 1.

為了處理這些麻煩的問題，所以我~~偷學~~沿用了[New Journal of Physics](http://atom.iop.org/atom/usermgmt.nsf/EGWebSubmissionWelcome?OpenForm&ISSN=1367-2630 "New Journal of Physics: submitting an article")的template中用的方法，直接定義懶人`\newcommand{}`：
```latex
\newcommand{\fref}[1]{Fig.~\ref{#1}}
\newcommand{\Fref}[1]{Figure~\ref{#1}}
```
如此一來，只要如果是在句首，就打`\Fref{fig:label}(a)`，如此就會產生 __Figure 1(a)__；如果在句中就打`\fref{fig:label}(a)`，則產生__Fig. 1(a)__。請注意到`\Fref`和`\fref`都是我們自己定義的；原生的 LaTex應該只有給你`\ref`而已，並且建議你在宣告`\label`的時候要保持好習慣，方程式取名叫做`\label{eq:name}`，圖片取名叫做`\label{fig:name}`。
  
# 方程式換行
不是我要說，APS系列用的方法我還滿感冒的，他們用的是`\eqnarray`，老實說我覺得這樣做不是很優雅。詳細的解釋可以看我之前打的[這篇文章](http://nan.logdown.com/post/2013/08/03/write-complex-latex-equations-in-logdown-by-mathjax-support "在 logdown 裡面打複雜方程式")，總之我覺得`\eqnarray`應該是拿來打方程組的，不是拿來排方程式換行的，而且實際用起來我也覺得很麻煩，常常要用`&`對半天，比用`\eqnalign`還麻煩許多。
APS建議的方程式換行方式是：
``` latex eqnarray_demo.tex
\begin{eqnarray}
    &x &= &r \cos \theta \nonumber \\
    &y &= &r \sin \theta
\end{eqnarray}
```
總之簡單來說就是用最簡單的`\\`來換行，但是要加上一個`\nonumber`來阻止編號出現，否則會變成**9.a**、**9.b**這樣的格式。值得注意的是，APS有特別強調，`\nonumber`要出現在`\\`之前。

# Reference
Reference 的部分是我習慣用的numerical方法，先引先列，而格式也是我最喜歡的寫法
> P.-N. Li, H.-H. Tsao, J.-S. Huang, and C-.B. Huang, Opt. Lett. **36**, 2339 (2011).

建議加上文章標題，但是不強迫加上final page

# Popular Summary
根據PRX規定，投稿的時候要附上一篇250字的科普摘要，而且要避免用技術名詞，不但要讓不是這個領域的人看的懂，更要讓非科學界的人也能理解。這個挑戰有點大，總之我按照[這裡的規則](http://prx.aps.org/info/suggestionforauths-prx "PRX ADVICE TO AUTHORS")寫了一篇草稿給老闆改，老闆稍微改了一下就送出去了。

# Cover Letter
原本我想說 Cover Letter 應該是老闆自己會寫，一方面來說這是 corresponding author 親自寫給編輯的信，一方面來說這封信滿重要的，老闆親自下筆寫應該會比較妥當。不過看起來老闆好像很忙，所以我就擅自幫他擬稿了；後來看他寄出去的 cover letter版本，其實也只有加上他的親筆簽名還有補上他的position而已。真是惶恐啊......
Cover letter我之前沒寫過，所以我參考了下面幾個網站：
* [研究生2.0](http://newgenerationresearcher.blogspot.tw/2010/11/cover-letter.html "如何寫 Cover Letter?   ")
* [Purdue OWL](http://owl.english.purdue.edu/owl/resource/639/1/ "Academic Cover Letters")
* [COVER LETTER（投稿信）实用指南](http://opticalcommunication.blogbus.com/logs/4114204.html "COVER LETTER（投稿信）实用指南")

此外也感謝我們group的博後私下提供給我他以前寫過的 cover letter 供我參考，特此感謝。