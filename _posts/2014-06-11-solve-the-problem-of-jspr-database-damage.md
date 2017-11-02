---
layout: post
title: "解決jspr資料庫損毀的問題"
date: 2014-06-11 10:36
comments: true
categories: [Linux, EMAN, jspr]
---
我們group的博後說 Wen Jiang 的 [jspr](http://jiang.bio.purdue.edu/jspr.php "jspr: software for single particle cryo-EM image processing and 3-D reconstruction") 每次用一陣子都會出error，他只好把linux系統砍掉重裝 @@，我叫他拜託不要再這麼做了！

遇到這個問題，可能會在 terminal 上面看到的錯誤訊息如下：
```
Traceback (most recent call last):
  File "/home/alanfan101/cryoem/x86_64/EMAN2/lib/EMAN2db.py", line 1289, in put
    self.bdb.put(key,val,txn=txn)
DBPageNotFoundError: (-30985, 'DB_PAGE_NOTFOUND: Requested page not found')
********** Warning: problem writing  ▒U
                                       micrographsq.  to  importMicrograph.py .
Retrying (0/10)
********** Warning: problem writing  ▒U
                                       micrographsq.  to  importMicrograph.py .
```
或者
```
Traceback (most recent call last):
  File "/home/alanfan101/cryoem/x86_64/EMAN2/lib/EMAN2db.py", line 1289, in put
    self.bdb.put(key,val,txn=txn)
DBPageNotFoundError: (-30985, 'DB_PAGE_NOTFOUND: Requested page not found')
********** Warning: problem writing  ▒U
                                       micrographsq.  to  importMicrograph.py . Retrying
(9/10)
NOT Writing notes, ppid=-1

```

解法很簡單
```
rm -rf ~/EMAN2DB
```
就這樣。雖然如此可能會把記憶在EMAN2裡面的參數消掉，但是這總比把整個Linux系統打掉重來簡單吧？