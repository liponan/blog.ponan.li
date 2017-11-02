---
layout: post
title: "自訂 Matlab polar 函數的邊界"
date: 2013-09-26 02:58
comments: true
categories: [Matlab, plot, polar, 論文]
---
有在用 Matlab 的人可能有用過 `polar`這個畫極座標的繪圖函數，但是很令人崩擴的是 `polar` 這個函數本身功能非常有限，如果要多別的事情，都要靠 handler 還有 `set`搭配來完成，不像 `plot`早就已經做到萬能的地步，幾乎想要做什麼，都可以直接在 argument 裡面完成。

現在的問題是，假設我想要把兩個函數都畫在同一張 polar 上面，聰明的各位可能馬上就會想到可以透過 `hold on,`來實作，這是沒錯的，但是如果實際去做，會發現一個很糟糕的事情：polar的limit會被第一個畫的函數所限制住，例如假設我想要畫以下的函數：

```mathjax
\begin{eqnarray}
 	&y_1 &= |\cos\theta| \\
  &y_2 &= 1.5|\sin\theta|
\end{eqnarray}
```

最簡單的寫法大概是這樣：

```matlab
close all;

N = 101;
theta = linspace(0, 2*pi, N);

y1 = abs(cos(theta));
y2 = 1.5 * abs(sin(theta));

figure(1),
polar(theta, y1, 'k');
hold on,
polar(theta, y2, 'r');
hold off;
```

但是畫出來卻會變這樣：
![fig1.png](/assets/img/2013/BZdWSl6XSjaAeA6heoeC_fig1.png)

囧！因為 limit 已經被第一個polar決定了，所以如果後面再`hold on`上去的圖案更大，就只能悲劇。
<!--more-->
Google了一下，發現網路上有很多人都遇到一樣的問題，這個問題看起來並沒有辦法透過`axis`來解決，只能用一些莫名其妙的 hack來解決，其中我覺得最直觀的是這兩篇：

* [stackoverflow: Fixing the Radial Axis on MATLAB Polar Plots](http://stackoverflow.com/questions/226315/fixing-the-radial-axis-on-matlab-polar-plots "stackoverflow: Fixing the Radial Axis on MATLAB Polar Plots")
* [Matlab answers: polar plots axis limits](http://www.mathworks.com/matlabcentral/answers/8948 "Matlab answers: polar plots axis limits")

其實這兩篇的作法是完全一樣的！只是我同時都有看到，所以一併附上。

簡單來說，就是我們故意先畫第一個假的函數，把圖 **撐大** ，再拿它的 handler 透過 `set` 把第一個先畫的函數隱藏起來，那後面就隨便你畫啦！

所以，前面的範例就可以改寫成：

```matlab
figure(1),
h0 = polar(theta, max([y1 y2]) * ones(size(theta))); % 取得兩個函數的最大值，先畫一個圈圈出來
set(h0, 'Visible', 'off');                           % 透過前一行取得的 handler 將其設為隱形
hold on,
polar(theta, y1, 'k');
polar(theta, y2, 'r');
hold off;
```

成果：

![fig1a.png](/assets/img/2013/wEsaqUCcSqaxsJxxvwo0_fig1a.png)

當然啦，其實也不一定要用自動的寫法，例如我覺得把 axis limit 設成 2 會比較好看，所以就可以直接寫成

```matlab
h0 = polar(theta, 2 * ones(size(theta)));
```

成果：
![fig1b.png](/assets/img/2013/WpSe3GpWRRSyMohhKE8E_fig1b.png)


