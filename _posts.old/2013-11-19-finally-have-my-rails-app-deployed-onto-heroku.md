---
layout: post
title: "總算deploy上 heroku"
date: 2013-11-19 02:09
comments: true
categories: [heroku, ruby, rails, Ruby on Rails, gem, boostrappers]
---
我真的是視送app上heroku為畏途...... 儘管開發 rails 再怎麼愉快，每次光想到要送app上heroku就先軟一半。後來我逐漸掌握到一些訣竅：
* 學會搞定 pq
* 永遠用最新版的 rails

基本上掌握這兩點就八九不離十了。

這一次我還用了 xdite 的團隊開發的 gem `boostrappers`，想不到卻因此遭受到前所未有的鬼打牆局面。一開始是`push`完到最後會抱怨 precompile 失敗，解決之道是`app/assets/javascripts/README`把它改成`README.txt`，然後先在自己的電腦上先跑
```
rake assets:precompile
```
嗯，總之先在自己電腦上跑 precombile 就對了， somehow it works。至於為什麼我直覺就想到要把`README`加上附檔名這是因為 rails 4.0 剛出不久就在 xdite 大大的文章裡面看到這件事情了XD。

另外一件事情鬼打牆比較久，`push`成功之後，還是打不開網站。查看 `heroku logs`之後好不容易找到這一段：
```
2013-11-18T19:28:42.063321+00:00 heroku[web.1]: Starting process with command `bin/rails server -p 4734 -e $RAILS_ENV`
2013-11-18T19:28:49.787036+00:00 app[web.1]: 	from /app/vendor/bundle/ruby/2.0.0/gems/settingslogic-2.0.9/lib/settingslogic.rb:102:in `initialize'
2013-11-18T19:28:49.787036+00:00 app[web.1]: /app/vendor/ruby-2.0.0/lib/ruby/2.0.0/open-uri.rb:36:in `initialize': No such file or directory - /app/config/config.yml (Errno::ENOENT)
```
咦，奇～～～～～～～怪了，明明`config/config.yml`就好好地蹲在那邊啊，為什麼會找不到咧？弄到半夜三點實在找不出來，只好去怒睡，結果隔天一早醒來就想到了，原來在根目錄下面有一個 `.gitignore` ...... 好樣地，最下面居然有寫

```xxx .gitignore
# Ignore all logfiles and tempfiles.
/log/*.log
/tmp
*.DS_Store
*.swp
.env
public/uploads
vendor/bundler_gems
config/database.yml
config/config.yml
```

真的是只能大罵靠北啊啊啊啊啊，好吧，那就把 `config/config.yml`那行先 comment 掉吧，然後就push成功惹。