---
layout: post
title: "四月開發筆記"
date: 2014-04-30 09:29
comments: true
categories: [Linux, c++, GSL, roor, swap, ubuntu]
---
整理一下四月在工作上遇到的一些開發瓶頸，以及其解法。大部分都是跟linux或者c++有關。


# GSL篇
GSL，也就是 GNU Scientific Librarary 是一個號稱可以取代 Numerical Recipe 的科學計算函示庫。

## 安裝篇
如果是在國網上，不可能取得 sudo 安裝在 `/usr/local/lib/`，所以要另外找地方放，例如自己開一個 `~/local/`。安裝步驟如下
```
./configure --prefix ~/local/
make
make install
```

## 安裝後

附加新的 `LD_LIBRARY_PATH`

```
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:~/local/lib/
```

compile的時候要加上的flag
```
-lgsl -lgslcblas -lm
```

# MPI 篇

## 重新載入 .bashrc
以前都以為改完 `.bashrc`之後要重登才會生效(其實確實也是如此)，不過其實有偷吃步，可以直接執行
```
. ~/.bashrc
```
就可以重新載入了

# LINUX 主機管理篇
我們實驗室自己的機器，不知道為什麼從半年前開始就無法 sudo ，系統說 `/etc/sudoers` 這個檔案壞掉了。麻煩就麻煩在，因為 sudo 壞掉了，所以要修一定要用 root；但是為了安全因素，我們的機器根本沒有啟用 root ，最後發現可以在開機的時候按住 shift 進入 GRUB menu，然後有 root 模式可以用。講起來好像很容易，不過我們的主機實體是託管在中研院地下三樓的機房裡面，所以還是特地去了三次，才把問題解決。

進到了 root 模式之後，按照系統的錯誤訊息，照理來說執行 `chmod 0440 sudoers`就好，結果系統又說 file system read-only，靠夭，這是什麼巫術？
```
mount -o remount,rw /
```
不要問我這是怎麼辦到的，總之就是 magic！
remount好之後，再跑  `chmod 0440 /etc/sudoers`即可

另外筆記一下，我發現被限制用 ssh 登入的帳號，也就是只能先用一般帳號登入再su過去的帳號，不能用 screen。

## 釋放swap
先查詢swap所在地點
```
swapon -s
```
假設查出來是 `/dev/sda5/`，接下來先執行
```
sync
```
然後執行
```
swapoff /dev/sda5/; swapoff /dev/sda5/
```
大功告成！可以跑`top`檢查一下是否已經釋放成功。