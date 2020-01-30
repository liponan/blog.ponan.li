---
layout: post
title: "台北忠孝復興：土三寒六讚岐烏龍麵"
date: 2013-10-04 17:16
comments: true
categories: [食記, 烏龍麵, 日本料理, 台北, 忠孝復興, udon]
---

### 備份 SQL


### 備份所有靜態檔案


### 修改 wp-config.php


### 修改 Apache2 設定



"""
a2enmod rewrite
"""

編輯 `/etc/apache2/apache2.conf`，將 `AllowOverride None` 改成 `AllowOverride All`。

執行 `service apache2 restart`，重開伺服器。
