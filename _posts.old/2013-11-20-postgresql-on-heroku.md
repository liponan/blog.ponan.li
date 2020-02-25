---
layout: post
title: "繼續談 heroku 上的 PostgreSQL"
date: 2013-11-20 02:52
comments: true
categories: [ruby, rails, Ruby on Rails, heroku, PostgreSQL]
---
啊啊啊啊，再寫下去都可以寫一個 ~~幹譙~~ heroku 專欄惹。
總之昨天最新遇到的困境是可以跑 `heroku run rake db:migrate`，但是不能跑`heroku run rake db:reset`或者`heroku run rake db:drop`，這根本超級崩潰啊啊啊啊，教練我想刪檔啊QQ

查看 `heroku logs`之後，發現做這兩個動作，PostgreSQL會回傳 permission denied，哪招！

後來我自己找到的解法是
```
heroku pg:reset DATABASE
```
果然是解鈴仍需繫鈴人，用 `pg` 的指令就解決了。

另外做個筆記，如果用 heroku 的話， `database.yml` 不需要寫 `username` ，然後密碼留白就好，例如

```YAML database.yml
production:
  adapter: postgresql
  encoding: unicode
  database: myapp_production
  pool: 5
  password: 
```  