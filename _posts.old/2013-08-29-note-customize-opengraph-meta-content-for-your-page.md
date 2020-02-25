---
layout: post
title: "筆記：為你的網頁加入 opengraph 的 meta"
date: 2013-08-29 01:36
comments: true
categories: [SEO, 社群網站, OpenGraph, html, facebook, Plurk, Google plus, Google+, Twitter]
---
昨天半夜高中社團學弟和他朋友弄了這個[康熙字典體產生器](http://marchuang.mqstudiotw.com/kxgen/ "康熙字典體產生器")，弄完之後跑來問我怎麼加入 meta ？ 我心裡想你既然都知道你要弄的東西叫做 meta 了，怎麼會跑來問我？ XD

總之我直接貼給他 logdown 的 `<head />` 裡面我看到的東西XD 。簡單來說，以前大家都知道加入適當的`<meta>` tag 有助於幫助搜尋引擎辨認你的網站，並且 **適時** 地在使用者的搜尋結果中提供你的網站或者頁面。

不過隨著社群媒體 (Facebook、Plurk、Twitter等) 的普及，人們現在更關心一個問題： **我的網頁會如何被呈現在 Facebook 的轉貼連結上？** 也就是說，網站主關心的是，如果有使用者把自己的網頁貼到 Facebook 上， Facebook 是不是能正確地抓取你網站上的圖片當作縮圖？是不是能正確地產生文章摘要和文章標題？
<!--more-->
如果你有按照正常的規範做網頁，那答案應該是肯定的。但是還有更多時候，你希望完全掌握這一點；更進一步來說，你希望你可以精確地 **掌握出現在 Facebook 上面的內容** 。為什麼？第一印象很重要。使用者的朋友們，往往依照 Facebook 上產生的摘要還有縮圖內容來決定是否要點進去朋友所轉貼的連結；縱使他的朋友聲嘶力竭、讚譽有加，但是如果產生的 **Edge** 很無趣，甚至是破圖，那使用者可能還是不會想點開這個連結。

那下面就是你要的答案。

# Facebook Opengraph
下面的 code 和使用方法參考自下面兩個網頁：

- [打造方便分享的網頁|Open Graph Protocol篇](http://epromotor.pixnet.net/blog/post/30997291-%E6%89%93%E9%80%A0%E6%96%B9%E4%BE%BF%E5%88%86%E4%BA%AB%E7%9A%84%E7%B6%B2%E9%A0%81%7Copen-graph-protocol%E7%AF%87)
- [18 Meta Tags Every Webpage Should Have in 2013](http://www.iacquire.com/blog/18-meta-tags-every-webpage-should-have-in-2013/)

Okay，簡單來說，`OpenGraph`就是 Facebook所提供的 meta tag。其六個基本的 tag 為：
```html Facebook OpenGraph
 <meta property="og:title" content="筆記：為你的網頁加入 opengraph 的 meta"/>
 <meta property="og:type" content="article"/>
 <meta property="og:url" content="http://nan.logdown.com/post/2013/08/29/note-customize-opengraph-meta-content-for-your-page"/>
 <meta property="og:image" content="http://user-image.logdown.io/system/blog/37/og_image/nan_logo.png"/>
 <meta property="og:description" content="昨天半夜高中社團學弟和他朋友弄了這個康熙字典體產生器..."/>
 <meta property="og:site_name" content="not a number"/>
```
### title
如果你沒有設定`"og:title"`其實也沒關係，Facebook會去抓你`<title />`中的內容。只是有時候你的 title 掛的太長了，會希望顯示在 Facebook 上面可以精簡一點也說不定？這個欄位允許你最多放95個字元。
### type
type的指定，和 OpenGraph 的精神有很大的關係：也就是 Facebook 希望可以了解每一個網頁的**性質**，長久來說每一個網頁都可以成為某種物件。
對一般人來說，實用的`"og:type"`屬性有：`blog`、`website`或`article`，不過有興趣的話你可以參考 [Facebook 上的說明](https://developers.facebook.com/docs/opengraph/ "Open Graph Overview") 認識更多`type`的種類。
### url
基本上就是貼到 Facebook 上面要指向的網址，原則上會和你的頁面往本身一樣，我剛才想到一些可能會不一樣的場景，不過應該不常見，所以就不討論了。
### image
嘿嘿，我覺得這個應該是最重要的。 *"A picture says a thousand words."*，一張正確的縮圖，決定了網友會不會點開你的圖片。圖片沒有特別限制是 png 或者是 jpg ，也沒有特別規定要多大張；但是為了能夠有和你預期一樣的顯示效果，建議最好是準備一張方形的圖片，才會在 Facebook 上有最佳的顯示效果。
### description
敘述應該是僅次於`og:image`重要的吧！原則上內容就跟標準的 `<meta content="..." name="description">` meata一樣就好， Facebook 允許你最多寫297個字元。
### site_name
指定你的網站名稱。

## 清除cache
如果你先前已經先發行過還沒有放 `OpenGraph` 的版本，而且已經有人 ~~(可能就是你自己)~~ 轉貼過了，那麼 Facebook 就會在機器裡面存下cahce。接下來不管你重新刷新或者重貼幾次都是沒有用的。 
這個時候你需要 [Facebook 的 Debugger](https://developers.facebook.com/tools/debug "Debugger")。詳細的教學可以看這邊：
- [解決Facebook轉貼連結的縮圖快取問題，讓它抓取到正確的圖片](http://fundesigner.net/facebook-cache/ "解決Facebook轉貼連結的縮圖快取問題，讓它抓取到正確的圖片")

---
晚點再來寫其餘 ~~比較不重要~~ 的社群網站的meta作法。 XD