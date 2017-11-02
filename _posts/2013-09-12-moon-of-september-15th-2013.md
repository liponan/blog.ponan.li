---
layout: post
title: "半月 月半"
date: 2013-09-12 16:07
comments: true
categories: [ImageMagick, Aperture, 月亮, moon, 中秋節, 101, 台北盆地, 夜景]
---

![test1.gif](/assets/img/2013/GPERLPn9QoKWqqUzTbAJ_test1.gif)
Taken by `Canon 50D` with `EF 35mm f/2.0`
拍完之後先把第一張 crop 並且修到滿意之後，用 Aperture 的 `Lift` 和 `stamp` 套用到剩下的198張，共199張。

> ### Info
> ISO 400
> 35 mm
> f/8.0
> 2.0 s
> Manual mode

用 Aperture 匯出之後開 terminal ，用 ImageMagick 出圖

```bash
convert IMG_*.jpg test1.gif
```

boom，就這樣。