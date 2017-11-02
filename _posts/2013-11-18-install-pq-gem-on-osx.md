---
layout: post
title: "OSX上安裝 pq gem"
date: 2013-11-18 17:11
comments: true
categories: [heroku, ruby, rails, Ruby on Rails, gem, bundler]
---
每次要deploy Rails 專案到 heroku 都會遇到一樣惱人的問題： 要用 PostgreSQL，每次光想到這點就很崩潰。

為了可以兼顧 heroku 但是又可以簡化開發程序，所以我在自己的電腦上還是用 `sqlite3` XD，所以我的 `Gemfile`是這樣寫的：

```ruby Gemfile
gem 'pg', :group => :production
gem 'sqlite3', :group => [:development, :test]
```

但是如果這樣改完你就直接去跑 `bundle install` 一定會有問題，他會跟你抱怨
```
An error occurred while installing pg (0.17.0), and Bundler cannot continue.
Make sure that `gem install pg -v '0.17.0'` succeeds before bundling.
```

想單然爾你實際上去跑 `gem install pq -v=0.17.0`一定也是失敗收場，不會成功了。值得一提的是因為我是用 RVM 所以 `gem install`前面並不需要加 `sudo`喔。

就像 mySQL 一樣，其實要安裝 `pq` 需要電腦上先有 PostgreSQL 的相關 lib ，但是我們又要怎麼裝起來呢？經過多次嘗試之後，我覺得毫無疑問最無痛的方法就是透過 `brew`去裝，關於 brew 的安裝方式這邊就不解釋了。

你唯一需要做的就是
```
brew install PostgreSQL
```
接著當你再次執行
```
gem install pq
```
你會發現你成功了。超爽der。

然後你就可以跑 `bundle install`惹。