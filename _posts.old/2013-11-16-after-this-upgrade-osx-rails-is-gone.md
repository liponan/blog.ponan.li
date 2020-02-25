---
layout: post
title: "這次升級OSX之後 rails 又不見了"
date: 2013-11-16 01:22
comments: true
categories: 
---
## 無法安裝 rails 的錯誤
```
POPOjiangdeMacBook-Pro:~ leeneil$ sudo gem install rails -v=4.0.0
Password:
Building native extensions.  This could take a while...
ERROR:  Error installing rails:
	ERROR: Failed to build gem native extension.

    /System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/bin/ruby extconf.rb
creating Makefile

make "DESTDIR="
make: *** No rule to make target `"/Recovered', needed by `atomic_reference.o'.  Stop.


Gem files will remain installed in /Library/Ruby/Gems/2.0.0/gems/atomic-1.1.14 for inspection.
Results logged to /Library/Ruby/Gems/2.0.0/gems/atomic-1.1.14/ext/gem_make.out
```

## 無法安裝 RVM 的錯誤
```
Searching for binary rubies, this might take some time.
No binary rubies available for: osx/10.9/x86_64/ruby-2.0.0-p247.
Continuing with compilation. Please read 'rvm help mount' to get more information on binary rubies.
Checking requirements for osx.
Installing requirements for osx.
Updating system...........................................
Installing required packages: autoconf, automake, pkg-config, libyaml, libksba, openssl........................
Error running 'requirements_osx_brew_libs_install autoconf automake pkg-config libyaml libksba openssl',
please read /leeneil.rvm/log/1384703898_ruby-2.0.0-p247/package_install_autoconf_automake_pkg-config_libyaml_libksba_openssl.log
Requirements installation failed with status: 1.
```


## 安裝 xcode
按下 ctrl+space 打 xcode 應該就可以自動讓你的電腦安裝  xcode 了

## 安裝 homebrew
```
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
```
中間它會提示你需要安裝 `xcode-select` 
最後應安裝程式的要求跑一下
```
brew doctor
```
以我來說，我看到了
```
Warning: Your XQuartz (2.7.3) is outdated
Please install XQuartz 2.7.5:
  https://xquartz.macosforge.org

Warning: You have MacPorts or Fink installed:
  /opt/local/bin/port

This can cause trouble. You don't have to uninstall them, but you may want to
temporarily move them out of the way, e.g.

  sudo mv /opt/local ~/macports

Warning: Xcode is installed to a directory with a space in the name.
This will cause some formulae to fail to build.
```

## 用 brew 安裝 git
```
brew install git
```
然後
```
brew update
```

## 用 brew 安裝 ImageMagick
```
brew install imagemagick
```

## 安裝 Ruby Version Manager
```
\curl -L https://get.rvm.io | bash -s stable
```
然後把這個加到安裝程式告訴你要放的地方去
```
source ~/.profile
```
弄完之後，重開 terminal

## 安裝 REE
```
rvm install ree
rvm ree --default
```

## 解決使用 RVM 裝 REE 之後 irb 不能打中文的問題
```
￼￼￼brew install readline
brew link readline
rvm --reconfigure --force -C --with-readline-dir=/usr/local install ree
```

