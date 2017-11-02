---
layout: post
title: "BibTex 二三事 (有時還有EndNote)"
date: 2013-08-12 08:41
comments: true
categories: [LaTex, EndNote, reference, BibTex, paper, journal, Zotero, JabRef]
---
嗯，簡單來說這篇的主旨是要講**如何把建在 Endnote Web 版上的參考文獻資料最後轉成BibTex所用的 .bib檔**。

還記得以前研究所寫碩士論文的時候，當時少不更事所以是用 Word 加上 Endnote的 **Cite While You Write** (CWYW) 外掛完成的。各位可能知道 Endnote 和 Web of Science 根本就是同一家子，也因此如果各位平常有養成在 Web of Science 查期刊的習慣，那麼最佳的書目軟體搭檔就是 EndNote了。說真的， EndNote雖然有出 MAC 版，不過無論是 Windows 版或者是 MAC 版，我其實都覺得單機版並沒有那麼好用，所以我比較偏好直接使用網路版的 [My EndNote Web](http://www.myendnoteweb.com/ "My EndNote Web")，畢竟這是雲端的時代，而且直接從 Web of Science 把資料傳送過去，根本再方便不過了。 Word 裡面的 CWYW 工具雖然同時支援單機版的 EndNote 和網路版，但是畢竟和網路版同步需要一點的時間，使用體驗難免打了一點折扣，因此我選擇了一個看起來很笨的折衷方法：在單機的 EndNote 上面開一個 local 的 Library，但是隨時和web版同步；但是 Word端，則是選擇與剛才說的local的Lib連線，這樣每次要跑 citation 出來，才不會受限於網路連線。

但是值得注意的是，EndNote的軟體是要錢的，雖然大部分的大專院校圖書館都有買，但是如果你已經不是學生了，那麼大概就沒有 EndNote 可以用；但是如果我沒有搞錯的話， My EndNote Web 使用是完全免費的...... 但是等等！ My Endnote Web 其實要搭配 Web of Science 才能發揮他的長處，我想一般人應該也不會自己買 Web of Science 訂閱吧；所以總之 Web of Science + myendnoteweb + EndNote 應該是一個滿適合在學校讀書的學生或者在學校裡面工作的人的搭配方案。

下面依序會講：怎麼從 Web of Science 挑出需要的期刊並且傳送到 myendnoteweb ，以及如何將 myendnote 中的資料**間接地**轉成 BibTex 用的 `.bib`檔。

說真的，我比較喜歡自己手key `\bibitem`自己做 `thebibliography`的list，但是如果遇到需要列出article全名的場合，甚至要求要打上所有作者名稱的場合，那用手key`\bibitem`實在是太崩潰惹，這時候就要建個`.bib`才有效率。

# 從 Web of Science 挑選要引用的文章

# 從 myendnoteweb 匯出參考文獻清單

# 利用 Zotero 匯出 .bib 檔

咦，我們剛才不是已經從 myendnoteweb 匯出文獻清單了嗎？為什麼還要第三方軟體？原來，無論是網路版或者是單機版的 EndNote 都無法直接匯出`.bib`檔案。這個**缺點**應該已經是 well-known 了，隨便 Google 都可以看到非常多人在問或者在教如何從 EndNote 轉到 `.bib`。所以說真的我寫這篇文章，其實也只是自己的筆記而已；若要說是教學，其實已經是錦上添花罷了。

Zotero可以從[這裡下載](http://www.zotero.org/download/ "Download Zotero")，Windows、Linux和MAC版都有，相當令人激賞！

# 利用 JabRef 匯出 .bib 檔