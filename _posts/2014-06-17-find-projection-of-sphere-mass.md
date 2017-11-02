---
layout: post
title: "求圓球的質量投影"
date: 2014-06-17 06:40
comments: true
categories: [Matlab]
---
之前就有想過要用解析解求一個均勻的圓球的質量投影，但是推半天沒推出來，只好先用MATLAB做出一個3D的volume，再用 `sum(V,3)`來求投影質量。我知道這樣超白癡的，而且要是球稍微大一點，電腦就記憶體不足當掉給你看了。

剛才突然... 就夢到正確的解析解做法了......

## 原理

已知圓球球面的公式是\

\\[
R = \sqrt{ x^2 + y^2 + z^2}
\\]

其中 \\( R \\) 為一常數，是球面的半徑。

現在我們將其推廣，把球面推廣成球體，則參數  \\( r \\)  要滿足

\\[
r \leq R
\\]
其中
\\[
r = \sqrt{ x^2 + y^2 + z^2 }
\\]

所以要快速求出一個球體的質量投影，只要移項還有乘以2就好了，得到：

\\[
P(x,y)  = 2\sqrt{ R^2 - x^2 - y^2 }
\\]

不過記得要把超出 support \\( x^2 + y^2 < R \\) 的地方手動設為零，不然可是會出現 complex 的。請直接參考下面的實作程式碼。

## MATLAB 實作

{% highlight matlab %}
function Z = sphere_proj(DIA)

RAD = DIA/2; % radius
x = linspace(-RAD, RAD, DIA);
[X, Y] = meshgrid(x, x);
R = sqrt( X.^2 + Y.^2);
Z = 2 * sqrt( RAD^2 - R.^2 );
Z( R > RAD) = 0;
{% endhighlight %}
