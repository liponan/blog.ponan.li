---
layout: post
title: "把 Matlab 裡面 2D 或者更高維度的矩陣當作 vector 噴出來"
date: 2013-09-10 06:09
comments: true
categories: [Matlab, matrix, Array, vector, 3D, 2D]
---
剛才突然想到，之前一直有個很差的習慣，就是遇到2D的矩陣，就用很彆扭的方式去解決，例如要解2D矩陣的 `max` ，就寫
```matlab
A = rand(6, 3);
max_num = max(max(A));
```

照理來說`min`和`mean`這類 **會從 column 開始做起然後才做更高維度** 的函數，我也都是用一樣的方法來解決。

可是俗話說的好， **夜路走多了會遇到鬼**，如果遇到 `std` 我就沒轍了，如果你這樣寫你就準備出糗了
<!--more-->
```matlab
A = rand(6, 3);
sigma = std(std(A));
```
 
 先前我的解法是這樣：
 
```matlab
A = rand(6, 3);
AL = reshape(A, [numel(A) 1]);
```
 
 其中`AL`表示`A`的linear版本。我知道很蠢，但是至少管用。
 
 
 **但是我剛才才想到明明就有更簡單的方法啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊**
 
 很簡單，用 `A(:)` 就解決了嘛！因為任何高維度的矩陣都可以用 linear index 來存取，所以全選符號 `:` 自然也可以用在 linear index上啊！重點是， **只要是用 linear index 來選元素，就一定會用 vector 的形式來噴出！ **
 
 所以......
![matlab_colon.PNG](/assets/img/2013/XBOY4ZkSgWJ90psqs7GT_matlab_colon.PNG) 
我知道我之前做了蠢事，不過還是紀錄一下orz 

------

所以最前面提到的二維矩陣 `std` 求法是：

```matlab
A = rand(6, 3);
sigma = std(A(:));
```