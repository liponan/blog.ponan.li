---
layout: post
title: "以pop3主機驗證清大學生身份"
date: 2013-11-23 07:17
comments: true
categories: [pop3, telnet, ruby, Ruby on Rails]
---
這招是之前在電機系當網管助教的時候跟學長學的，因為電機系的學生與教授帳號都是基於工作站系統，但是我們寫 web 網頁的主機並沒有直接的管道跟工作站主機溝通，所以其中一個驗證登入身份的方法式利用 `telnet` 連接 POP3 主機，確認是否可以登入。

這次會實際用到是為了[清大校長模擬選舉](http://nthu-sim-vote.herokuapp.com/ "校長你得投！ 清大校長模擬選舉")網站，我們作為一個非官方的網站，但是要能驗證投票者是否為清大學生或者校友，因此最佳的實作方法就是請投票者提供學校計中的信箱帳號和密碼，我們嘗試登入 POP3 主機，便可以快速證明該使用者是否為信箱擁有者。

# Ruby 對 telnet 的支援
在寫入 **Ruby on rails** 之前我先在自己電腦上寫 Ruby 沙盤推演，先確定了 POP3 主機可以用 `telnet` 溝通而且走 port 110 **[1]** ，並且很快找到了兩個參考資料，一篇是中文的實作**[2]** 一篇是 `Net::Telnet` 的 doc 
，看了這兩篇之後才發現 Ruby 的 telnet 支援遠比我想像中還要強大，因此不到半小時就把流程用 Ruby 寫出來了。
<!--more-->
下面附的是最初的沙盤推演程式碼，用 Regex 的 `match` 是為了要從 email 中拆開學號和主機名稱，但是後來我把 Regex 從 `pop3_auth.rb` 中拿出來了，因為我想到在網頁上就要先檢查 email 是否合法了，所以後來改成直接把拆出來的 `my_id`和 `my_host` 欄位丟進去 `pop3_auth` 這個 privateaction 裡面。

```ruby pop3_auth.rb
require 'net/telnet'

my_id = "u9561100"
my_pw = "12345678"

pop3 = Net::Telnet.new(
	'Host' => "pop.oz.nthu.edu.tw",
	'Port' => 110,
	'Timeout' => 3,
	'Waittime' => 0
	)

pop3.waitfor(/Mailbox ready./){ |s| print(s)}
line1 = pop3.cmd(
	'String' => "user #{my_id}",
	'Match' => /OK/){ |s| print(s)}

line2 =pop3.cmd(
	'String' => "pass #{my_pw}",
	'Match' => /./){ |s| print(s)}

if line2.match(/OK Logged in./)
	puts "valid voter."
else
	puts "invalid user."
end

pop3.close
```

## 解說
以清大的 oz 主機為例，實際上登入先不用輸入帳號密碼，要稍後才會用互動式的方法輸入
```
$ telnet pop.oz.nthu.edu.tw 110
Trying 140.114.63.117...
Connected to pop.oz.nthu.edu.tw.
Escape character is '^]'.
+OK Mailbox ready.
```
登入成功後，先送 
```
user <我的帳號>
```
它會回傳 `+OK`，在我的 Regex 裡面我只認 `/OK/` 抓到就過關了。
接著再傳
```
pass <我的密碼>
```
此時如果成功，會回傳 `+OK Logged in.`
因為我不確定使用者會不會輸入錯誤的密碼（故意或者無心），所以我只抓 `/./` 後面再去分析有沒有登成功。

實際上在上線的主機中的 `pop3_auth` 當然有做一些改寫，但是因為安全考量，這邊就先不公佈完整的程式碼了。不過這邊忍不住要說一下，我開 `model` 的時候完全沒有開密碼的欄位，而是用 `<%= password_field_tag(:password) %>` 這樣去開的，並且利用 `params[:password]` 去傳，傳完就丟掉。

# 清大信箱命名規則

# 後記
--------
## References
* [Microsoft 技術支援： 如何使用 Telnet 來測試網際網路郵件連線](http://support.microsoft.com/kb/196748/zh-tw "如何使用 Telnet 來測試網際網路郵件連線")
* [用 Ruby 玩 ptt](http://godspeedlee.myweb.hinet.net/ruby/ptt1.htm "用 Ruby 玩 ptt")
* [Ruby doc: Net::Telnet](http://ruby-doc.org/stdlib-1.9.3/libdoc/net/telnet/rdoc/Net/Telnet.html "Net::Telnet")