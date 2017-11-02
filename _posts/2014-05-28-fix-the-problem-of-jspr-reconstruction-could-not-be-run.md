---
layout: post
title: "解決 jspr 不能執行 reconstruction 的問題"
date: 2014-05-28 14:46
comments: true
categories: [Linux, bashrc, source]
---
[jspr](http://jiang.bio.purdue.edu/jspr.php "jspr: software for single particle cryo-EM image processing and 3-D reconstruction") 是美國普渡大學的 [Wen Jiang](http://jiang.bio.purdue.edu/ "Wen Jiang Group") 教授團隊所開發的單顆粒重組（ single particle reonstruction）軟體包，一直以來我同事都是在Windows 上面開 Virtual box ，跑該團隊所提供的 ova 檔案裡面的 linux系統。但是跑顆粒重組本身是很耗能的事情，在虛擬機器上跑效能一定不會太好，所以我今天幫我同事在原生的 linux 系統上弄了一樣的環境給他用。原本以為一切順利，但是最後他要跑最重要的 reconstruction 的步驟的時候，在 terminal 出現了這樣的錯誤：

```
  File "/home/alanfan101/cryoem/x86_64/jiang/jspr.py", line 1417, in createBTSession
    import libtorrent
ImportError: libboost_system.so.1.53.0: cannot open shared object file: No such file or
directory
```
查了一下，發現這個`libtorrent`在軟體解壓縮後的目錄中的`cryoem/x86_64/lib64`和`cryoem/x86_64/lib`都有，如果使用`ldd`去查詢，會發現：
```
[user@linux lib]# ldd libtorrent-rasterbar.so
	linux-vdso.so.1 =>  (0x00007fffd51ff000)
	libboost_system.so.1.54.0 => not found
	librt.so.1 => /lib64/librt.so.1 (0x00007f25a579d000)
	libpthread.so.0 => /lib64/libpthread.so.0 (0x00007f25a5580000)
	libstdc++.so.6 => /usr/lib64/libstdc++.so.6 (0x00007f25a527a000)
	libm.so.6 => /lib64/libm.so.6 (0x00007f25a4ff5000)
	libc.so.6 => /lib64/libc.so.6 (0x00007f25a4c61000)
	/lib64/ld-linux-x86-64.so.2 (0x0000003044c00000)
	libgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007f25a4a4b000)
```
嗯，沒錯就是少了這個`libboost_system.so.1.54.0`。但是 Wen Jiang 的團隊號稱這個 jspr 軟體包，是自給自足，什麼都有啊。於是我去找了他們提供的 ova 映像檔，去查裡面那個可以動的版本，到底是去哪裡找`libboost_system.so.1.54.0`的。一查，發現居然就在`cryoem/x86_6x/lib`下面，原來，應該只是忘記在自己的 `.bashrc`下面 source 他們提供的bashrc設定而已，虛驚一場！
