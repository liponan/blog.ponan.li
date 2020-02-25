---
layout: post
title: "Rails 3 上傳 Heroku 完全指南"
date: 2013-10-16 16:35
comments: true
categories: [rails, ROR, ruby, Ruby on Rails, Rails 3, heroku, Web, stackoverflow, Sqlite 3, PostgreSQL]
---
由於過去這幾年每次 deploy 到 Heroku 都吃了大虧，所以我決定趁這次一次把話講清楚，把所有會遇到的雷都一次記起來 = =

# 第一步驟：永遠記得先開 git 才開 heroku
第一步當然是先開 rails app 啦，這個沒爭議齁

	rails new my_project
  
重點來啦！再跑 `heroku create` 之前一定千萬記得要先跑完 `git` 的相關指令，尤其第一次跑別忘了 `git init`：

```
git init
git add .  
git commit -m "init"

```

等到上面四個都跑完了，才可以開你的 heroku ，也就是

	heroku create my-project
 
如果你先創 Heroku 才跑 `git`，那麼等到跑上面那一行的時候就會GG。 萬一這件事情真的發生了，其實也沒關係，就是要打開 Heroku 的官方網頁，登進去把你之前創的那個 app 刪掉，重新來過。

`my-project` 是我在這邊取的 app 名稱啦，請自行換成你的名字；為了區別，所以 rails 的 app 名稱我取叫 `my_project` 但是 Heroku 上面的 app 名字我取叫做 `my-project`。

<!--more-->

# 第二步驟：搞定 PostgreSQL

Heroku 現在很嚴格， production 一定要用 PostgreSQL ，它會去檢查你的 `Gemfile` ，裡面一定要有 `gem "pg" `而且不可以有 `gem "sqlite3"` 否則就不給你過，科科。

但是要在自己的 mac 上面搞一個 PostgreSQL 又很麻煩，於是經過多次慘痛的經驗，我發現最佳解是 **只有 production 用 PostgreSQL， test 和 development 還是用 sqlite3 ！** 毫無疑問這是重點中的重點，因為這樣子才能又在自己電腦上玩 sqlite3 又可以在 Heroku 上面用 PostgreSQL 跑 production。反正要跑 PG 就交給 Heroku 了，它要怎麼弄我可管不著。

範例如下：
``` yml database.yml
development:
  adapter: sqlite3
  database: db/development.sqlite3
  pool: 5
  timeout: 5000
test:
  adapter: sqlite3
  database: db/test.sqlite3
  pool: 5
  timeout: 5000
production:
  adapter: postgresql
  encoding: unicode
  database: my_project_production
  pool: 5
  username: my_project
  password: my_project
```  
以上，然後 `Gemfile` 中預設的 `gem "sqlite3" 先 comment 掉，改成這樣：

```ruby Gemfile （局部）
gem 'pg', :group => :production
gem 'sqlite3', :group => [:development, :test]
```

搞定之後跑一下 `rake` ：

	rake db:migrate
  
沒事的話就可以結束這一回合了。  

# 第三步驟： 修改 prcompile 選項

這一步我卡超久，超不爽！但是其實是稍微 Google 一下，就可以在 Stackoverflow 找到解答的問題...... 只怪我太鐵齒，明明 logs 上寫這是 **Error** 我還不當一回事。什麼 error 呢？

```
2013-10-16T16:29:11.020222+00:00 app[web.1]: Completed 500 Internal Server Error in 12ms
2013-10-16T16:29:11.022557+00:00 app[web.1]: ActionView::Template::Error (bootstrap.css isn't precompiled):
```

嗯，重點就出在 **xxx.css isn't precompiled** 這邊。其實這邊真的是我該打屁股，不聽話，因為 [Heroku 的說明文件](https://devcenter.heroku.com/articles/getting-started-with-rails3#setting-up-the-asset-pipeline "Setting up the Asset Pipeline") 有很明確地跟你說一定要改設定，只是問題出在，實際上的作法和上面教的不太一樣，不知道是不是因為 Rails 3.2 有改版的關係？

作法很簡單，只有一個步驟，請找到 `config/environments/production.rb`，找到`config.assets.compile = false`這句話，把它的 `false` 改成 `true`：

```ruby config/environments/production.rb （局部）
# Don't fallback to assets pipeline if a precompiled asset is missed
config.assets.compile = true
```

如果這一步沒有做，會發生 **deploy 成功但是網頁打不開的情形** 。

# 第四步驟： deploy 上 Heroku

如果一切都沒問題，其實這時候就可以上傳惹。記得重新 commit 一次：
```
git add .
git commit -m "my second commit"
git push heroku master
```  
然後順便跑一下資料庫（雖然我覺得如果你此時還沒有開資料表，這一步應該只是多餘 ）

```
heroku db:push
heroku db:migrate
```

如果沒有問題，就可以開你的 app 來看了，快速指令是：

```
heroku open
```

如果出現 **We're sorry......** ，這時候就要開始 debug 惹，請打

```
heroku logs
```

下集待續......  

-------
# References

* [Deploying with Git](https://devcenter.heroku.com/articles/git "Deploying with Git") on Heroku
* [Getting Started with Rails 3.x on Heroku](https://devcenter.heroku.com/articles/getting-started-with-rails3 "Getting Started with Rails 3.x on Heroku") on Heroku
* [Keep getting Completed 500 internal server error heroku](http://stackoverflow.com/questions/15592218/keep-getting-completed-500-internal-server-error-heroku "Keep getting Completed 500 internal server error heroku") on stackoverflow
* [Setting the environment in Gemfile for bundling install/update based on a customize file](http://stackoverflow.com/questions/7801846/setting-the-environment-in-gemfile-for-bundling-install-update-based-on-a-custom "Setting the environment in Gemfile for bundling install/update based on a customize file") on stackoverflow
* [rails 3.1.0 ActionView::Template::Error (application.css isn't precompiled)](http://stackoverflow.com/questions/7275636/rails-3-1-0-actionviewtemplateerror-application-css-isnt-precompiled "rails 3.1.0 ActionView::Template::Error (application.css isn't precompiled)") on stackoverflow