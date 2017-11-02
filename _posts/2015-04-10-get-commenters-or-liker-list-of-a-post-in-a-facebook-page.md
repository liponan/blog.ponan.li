---
layout: post
title: "取得粉絲團文章留言按讚名單"
date: 2015-04-10 17:23
comments: true
categories: [ruby, regex, facebook, OpenGraph, Rubular, FQL]
---
最近因為自己經營的粉絲團要辦個抽獎活動，於是就面臨怎麼有效率地把符合資格者的名單列出來的問題。在我的例子裡，符合資格的條件是在有效的時間內，對某篇文章留言。
我想很多商家面對這種事情，一定是花錢請個工讀生或者所謂的「小編」自己把所有的名字複製貼上下來。這樣做不是不好，但是缺點有三

- 曠日費時，留言者動輒上百人
- 容易有人工上遺漏
- 你不確定 facebook 是否有把所有的留言都列出來

而我們身為碼農，怎麼可以讓自己做這種 dirty 的事情呢？用程式來解是一定要的。我第一個想到的方法是抓原始碼，看有沒有結構化的規律，用 regex 來抓就好，因為 [Rubular](http://rubular.com/ "Rubular a Ruby regular expression editor") 可以在網頁上解決，就不用 ~~動刀動槍~~ 的了。

但是當你把那一頁存下來之後，你會發現， WTF 根本沒有幾個字是明碼啊。

![螢幕截圖 2015-04-11 11.25.20.png](/assets/img/2015/PYtFkamMTtW5Ya2zxATh_%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96%202015-04-11%2011.25.20.png)
所以，我放棄了。接著我試著 Google 關鍵字，發現很多人教大家用 **FGL** 來抓資料。因為我知道 open graph 可以做到我想要做的事情，但是懶得學；但是我會 SQL ，所以看到可以用看起來跟 SQL 長得根本一樣的 FQL 來做，當然是高興的不得了。

但是，人生最厲害的就是這個 but ！ FQL 已經停用了。 GG。只好學用 open graph 啦。

# 使用 open-graph 取得名單

要取得某個粉絲頁（page）特定文章（post）的按讚或者留言者名單，首先你得先知道兩個資訊：

- 該 page 的 Facebook Page ID
- 該 post 的 Post ID

首先粉絲頁的 ID 可以在「關於」頁面的最下面找到。

![螢幕截圖 2015-04-11 11.33.21.png](/assets/img/2015/ZLe61mkSeOo2QXAuGd5o_%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96%202015-04-11%2011.33.21.png)
接著 post id 可以用許多方法找到。

這時候我們就用打開 Facebook 的 [API explorer](https://developers.facebook.com/tools/explorer "Facebook API explorer") 啦！第一次使用必須要先按一下 **Get Access Token**，隨意勾選一些項目後，就可以授權讀取資料。

接著我們先試著將剛才得到的 Page ID 代入 open graph 的路徑之下：

![螢幕截圖 2015-04-11 11.36.02.png](/assets/img/2015/PISHn0aiQ2uAsaRpfu4M_%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96%202015-04-11%2011.36.02.png)
此時回傳資料會列出這個粉絲頁的一些諸元。接著我們就要試著探索這個粉絲頁下面的貼文。首先可以試試看

```
1494556507449732/posts
```

那麼就會列出前幾篇貼文，還有詳細的推文資料等等。其中我們感興趣的是post id，可以在這裡找到：

![螢幕截圖 2015-04-11 11.39.20.png](/assets/img/2015/T5c4JYpwQs2FAc8Ll9eR_%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96%202015-04-11%2011.39.20.png)
另外一個可以找到 post id 的地方當然就是貼文的網址啦！

![螢幕截圖 2015-04-11 11.41.08.png](/assets/img/2015/Tv4K1jXLRUebpQYKc4Vh_%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96%202015-04-11%2011.41.08.png)
如果是從網址抓來的話，那你要餵給 open graph 的形式就會變成是

```
1494556507449732_1541869892718393
```

總之就是用一個底線隔開啦！

接著事情就簡單了，如果你要查的是該貼文按讚的名單，就是

```
1494556507449732_1541869892718393/likes
```

如果要查留言的名單，就是

```
1494556507449732_1541869892718393/comments
```

最後，如果回傳資料不是全部的話，可以加上 `?limit=100` 這樣就可以指定回傳的數量了。

總之就是如果要抓回該篇貼文的按讚名單，我們就是去詢問這個 open graph

```
http://graph.facbook.com/1494556507449732_1541869892718393/likes
```

# 取出留言者

有了這個 json 檔案之後，最理想的方法當然就是直接用支援 json 的語言去開它。但是如果剛好手邊沒有任何程式語言的平台可以用的時候（例如一台野生的 Windows 電腦...），用網頁工具也是一個好主意。我自己第一個想到的是我很常拿來練習 regex 的網頁工具： [Rubular](http://rubular.com/ "Rubular a Ruby regular expression editor")。

## 方法一： 用 regex

首先把 json 裡面的資料全部貼到網頁上，接著我第一個想到的策略是寫一個「中文或者英文」的條件去抓「名字」，後來又補上了`.`和`-`也可以。

``` regex
/"name": "([\s\u4e00-\u9fa5]+|[\w\s\-\.]+)"/
```

看起來成效不錯，但是居然有漏網之魚！原來有的按讚者是用日文、阿拉伯文...當名字。沒辦法，只好用更骯髒的方式了：

``` regex
/{\s+"id": "\d+",\s+"name": "([\w\W]{2,30})"\s+}/
```
嗯，這是連初學者都寫得出來的格式，就只是限制字數而已，但是最重要的是它可行！

## 方法二： 用 Ruby 讀 json

當然如果手上有 Ruby 或者 Python 當然還是直接對付 json 最快啦。

不囉唆，我的解法如下

``` ruby get_likers.rb
# encoding=utf-8 
require 'open-uri'
require 'json'

url = 'http://graph.facebook.com/pageid_postid/likes?limit=200'

json = open(url) # download the json file
data_hash = JSON.parse(json.read) # parse the json into hash

data_hash["data"].each do |datum| 
	puts datum["name"]
end
```

因為按讚者是包在 `data` 之中的巢狀結構，所以我寫了一個 each do 去把它們逐一印出來。

如果要印的是「留言者」名單，除了 url 要把 `likes` 改成 `comments` 之外，程式的部分請把迴圈部分改為

``` ruby get_commenters.rb (snippet)
data_hash["data"].each do |datum|
	puts datum["from"]["name"]
end
```

# References

- [取得Facebook 粉絲團中，某篇文章按讚的人數 + 名單 + 個人資料](http://sweeteason.pixnet.net/blog/post/40753405)
- [Facebook 使用Graph API 解決FQL 最多上限1000筆的問題 (就是改用Graph](http://sweeteason.pixnet.net/blog/post/40861897-facebook-%E4%BD%BF%E7%94%A8graph-api-%E8%A7%A3%E6%B1%BAfql-%E6%9C%80%E5%A4%9A%E4%B8%8A%E9%99%901000%E7%AD%86%E7%9A%84%E5%95%8F)
- [Graph API Reference](https://developers.facebook.com/docs/graph-api/reference/)
- [Using the Graph API](https://developers.facebook.com/docs/graph-api/using-graph-api/v2.3)
- [正则表达式 匹配中文，英文字母和数字及_的写法！同时控制长度](http://blog.csdn.net/sefvang/article/details/8270553)
- [Ruby Doc: JSON](http://ruby-doc.org/stdlib-2.0/libdoc/json/rdoc/JSON.html)