---
layout: post
title: "解決Amira不能開Matlab的mat檔"
date: 2013-11-28 05:41
comments: true
categories: [Matlab, Amira, path]
---
Amira 是一個許多做顯微術或者生物影像的人都會用到的軟體，可以用它來具象化許多3D的data。
除了原生的AM檔案之外，有時候我們也會希望藉由 Amira來顯現來自 Matlab我們加工後或者計算後的檔案，因此就會需要由 Amira來打開 `.mat`檔案；照理來說 Amira 是支援的，但是我自己實際測試，卻會噴出這樣的錯誤訊息：

```
Reading minivirus_A.mat ...
opening connection to Matlab engine...
Couldn't open libeng.dll:
File does not exist.
Couldn't open libmat.dll:
File does not exist.
Couldn't open libmx.dll:
File does not exist.
Failed to connect to Matlab
Be sure Matlab is correctly installed, and the path is valid
Error opening file G:/minivirus_A.mat
```

網路上查半天，都找不到問題所在或者解法，但是自己嘗試去解決，卻發現解法超乎想像地簡單。

首先先試著去找 `libeng.dll` 、`libmat.dll`或`libmx.dll`這三個鬼東西在哪。答案很簡單，就在
```
C:\Program Files\MATLAB\R2012b\bin\win64
```
的下面。我想 Amira 抓不到的原因非常簡單，是因為 Amira 不知道 64-bit 的 Matlab 已經改變存放這些lib的位置了。

# 解決方法
解法非常簡單，就是改系統變數中的 `PATH`值。

![PATH.PNG](/assets/img/2013/5bwoTm5TLizV99vgvRhS_PATH.PNG)
首先對著 **我的電腦** 按右鍵，選 **內容** ，接著選 **進階系統設定** ，然後按 **進階** 這個頁籤，最後按最下面的按鈕 **環境變數** 。接著在下面的小框框中找到`PATH`，點選 **編輯**，然後在最後面加上
```
;C:\Program Files\MATLAB\R2012b\bin\win64
```
就大功告成，此時重開 Amira 後就可以開啟 `.mat` 檔案了。



