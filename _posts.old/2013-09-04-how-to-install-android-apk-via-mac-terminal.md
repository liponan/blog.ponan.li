---
layout: post
title: "如何經由MAC的terminal安裝apk程式"
date: 2013-09-04 14:42
comments: true
categories: [mac, terminal, apk, sdk, android, HTC, eclipse, java, app, AppUniverz]
---
今天早上，正在做專題的老弟突然問我，能不能跟我借我的 HTC Legend？他要裝 apk 上去。心想手機裡面也沒有什麼奇怪的慾照，便說當然好，但是，你會裝嗎？

接著，我想起了一段往事......

# 第一次安裝...... 非常不上手

大概半年前吧，有一個晚上一個總是半夜不睡覺的學妹 ~~（顯示為子偉文）~~ 傳給我一個 apk 叫我安裝看看，我想說我當年也是參加過 [AppUniverz](http://www.appuniverz.org/activities/4/ "第一屆育成團隊 Uno 成果展示") 的，安裝 apk 這種事情哪難的倒我，於是我就從抽屜裡面拿出我那 ~~塵封已久~~ 的 HTC Legend，準備安裝來玩玩看。
<!--more-->

## 使用 Dropbox 或 Astro
第一個想到的檔案傳輸方法，當然是丟 Dropbox ，但是沒有打開 apk 的關聯。
接著，余憶童稚時，是用 Astro 把我們開發的 apk 裝上去手機的，於是心想這次總該成了吧！殊不知，不知道為什麼，還是不行orz

明明是 apk 檔，照理來說可以執行的動作裡面應該要出現 install 的選項才對，但是 Astro 好像完全沒有辨識出這是一個 apk 檔？！

## 可惡，一定是apk檔有問題
我明明就得 Astro 是可以裝 apk 的，我也確定 apk 檔沒壞，但是我的手機就是不給我裝。此時我開始懷疑問題是出在 deployment ，也就是搞不好根本不支援我的手機的 `Android 2.2`。

於是請學妹編一個 2.2 的給我。她說她剛才是用 2.3.3 的 lib，這次改成用 2.2。

此時，她問我：
> 不過你應該不會有SDK

我一看，笑了！
> 我有 ㄏㄏ
> 你太 small watch me 了

雖然我大概知道接下來會發生什麼事情，雖然我有裝 Eclipse，但是我想睡覺了......
> 你該不會
> 要我自己 compile 吧
> 拜託 別

## 既然有 SDK ，那試試看 shell 吧
她叫我用 'adb shell'試試看
以我來說，我把 sdk 放在自己的 home 目錄底下，所以

    cd ~/android-sdks/
    cd platform-tools/
    ./adb shell

結果......

	* daemon not running. starting it now on port 5037 *
	* daemon started successfully *
	error: device not found
  
囧！

## 所以手機根本沒有連上電腦啊大大！
所以此時我就在想，到底是怎樣！不是用 **USB 隨身碟模式** 莫非是用 **充電模式** ？！

咦？好像還有第三個模式耶！試試看好了！

靠北，結果正解真的就是...... **HTC Sync** 模式，囧！
事後才知道，無論如何，一定要用 **HTC Sync** 模式才能讓電腦抓到你的 Android device。

好的，這時候我知道了：

> 問題不在 Driver 或者安裝 [HTC Sync Manager](http://www.htc.com/tw/software/htc-sync-manager/ "HTC Sync Manager") 電腦端程式啊

說到這裡，剛才赫然發現居然有 mac 版耶...... 好感動。之前一直以為既然沒有平台可以選，一定是只有 Windows版；殊不知其實用 Windows 瀏覽，就會自動下載 `exe` 檔，用 mac 瀏覽就會自動下載`dmg`檔！

## 知道要用 HTC Sync 之後，即將大有進展了...... 嗎？
好的，既然現在可以連上了，那總該可以 `adb install`了吧？

```shell 小教室：用 terminal 安裝 apk檔
./adb install path_of_apk_file
```

各位觀眾......

	leeneilteki-MacBook-Pro:platform-tools leeneil$ ./adb install ~/Dropbox/Apps/ZoehContextLogger2.2.apk 
	550 KB/s (186120 bytes in 0.329s)
		pkg: /data/local/tmp/ZoehContextLogger2.2.apk
	Failure [INSTALL_FAILED_OLDER_SDK]

**蝦密？！**

## 於是我摸摸鼻子，跑去升級了我的 sdk
而就在此時，學妹也傳給我最新的 apk 檔

剎那間......
![217505_3000255943412_306377090_n.jpg](/assets/img/2013/rZZEECrbRTKu46f4cb4g_217505_3000255943412_306377090_n.jpg)
magic......

原來，要改成用 `API8`才行（撰寫本文的此時我弟說已經到 `API18`了）

> 搞半天，不是我的 sdk 太舊，是你的 apk 不給我裝啊大大

然後我就去睡覺了......

---
# 後記

等到我回家，見到我弟問他說他裝好了沒，他說：

> 蛤？我沒有用你說的方法欸

此時瞬間我才想起來，對喔我弟是 developer 當然是直接在 Eclipse 上就可以 deploy 了啊......
我在蠢什麼 ＝口＝