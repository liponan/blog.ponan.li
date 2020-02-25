---
layout: post
title: "野望：POVRAY中文化教學計劃"
date: 2013-08-06 09:21
comments: true
categories: [POVRAY, 翻譯, 中文化]
---
[POVRAY](http://www.povray.org/ "POVRAY official website")是一個多平台而且 open-source 的3D繪圖軟體。沒有互動式的GUI介面，完全靠寫code然後按下RENDER鍵來看產生的成品。

最初會接觸這東西是因為我研究所的老闆一直很羨慕別人的group有精美又漂亮的示意圖，但是**我們**又畫不出來 (其實講到這我有點不服氣，因為我自己用 CorelDRAW 基本上已經可以畫出大部分我需要的圖了，但是整個實驗室也只有我會用 CorelDRAW )。後來，他從~~夏威夷~~德國一口氣**引進**兩套 open-source 的軟體回來，一套是滿有名的[Blender](http://www.blender.org/ "Blender official website")，另一套就是今天要介紹的POVRAY。

POVRAY到底是什麼？官方的說法是：**Persistence of Vision Raytracer**。可是我想他的原名叫什麼其實不重要，應該也沒有人會記得，但是有興趣的人應該會注意到，它的名稱最後面寫說這是一個 ray tracer ，這點滿重要的，因為這直接點出了 POVRAY 的原理，也就是 ray-tracing 。

POV可以做什麼呢？我們來看個範例：

![t_spheres_spp_gaussian_2.png](/assets/img/2013/2zPnV66vQD2SEehndUOv_t_spheres_spp_gaussian_2.png)
為什麼一開始就做這麼奇怪的**範例**來練習呢？因為當時老闆從德國回來的時候，跟我說[這篇 Opitcs Express](http://www.opticsinfobase.org/oe/abstract.cfm?uri=oe-17-16-14235 "Analytic coherent control of plasmon propagation in nanostructures") 的圖是用 POVRAY 畫的，要我再現看看，也就是要我臨摹啦！

過了兩天天之後，我畫出了這個東西：一個T字形的 nano-particle 陣列，一個激發的 Gaussian beam，還有正在傳播的 SPPs (surface plasmon polariton，表面電漿子)，此外還有兩個 detector 的位置標示。

嗯，沒記錯的話我大概花了一晚摸出怎麼用 POVRAY，然後花了一天多一點點，把這張圖畫出來。
而原圖則是長這樣：
<!--more-->
![oe2009.jpg](/assets/img/2013/tANaqlkGSBuwriBZTRBe_oe2009.jpg)> Tuchscherer *et al*., Optics Express **17**, 14235 (2009).

如何？像吧？ 好啦我知道不像，不過至少我盡力了XD

產生這張圖的原始碼長什麼樣子呢？有點長，所以我放在最後，有興趣的人可以捲下去看！

為什麼我可以一晚就摸出來這個詭異的軟體的用法，第一個原因當然是因為我會寫程式，這很重要；第二個原因有點微妙，是因為這個軟體裡面的東西都是幾何物件，然後布置的邏輯和概念根本就跟我們用來做光學模擬的 FDTD 軟體 [MEEP](http://ab-initio.mit.edu/wiki/index.php/Meep "MIT: MEEP") 一模一樣！所以其實我後來還滿鼓勵實驗室的學弟妹也來學的，因為既然 POVRAY 的使用邏輯和 MEEP 這麼像，那這也就表示你可以很快地透過 POVRAY 把你原本在 MEEP 裡面設計的幾何元件表現出來！

其實距離上次用 POVRAY 已經一年了，也就是說自從去年我按下存檔完成我的碩士論文以後，我就再也沒開過 POVRAY 了。不過最近我現在的老闆要我幫他準備 talk 的投影片，我突然想到了，如果可以用 POVRAY 來展示我們設計的 device ，那不是更生動嗎？也因此，事隔一年我重新打開了 [POVRAY 的官方網站](http://www.povray.org/ "POVRAY official website")，只是這次下載的是 Windows 64-bit 的版本。 (之前我都是在mac上完成論文的，我使用的是非官方的POVRAY軟體 [MEGAPOV](http://megapov.inetart.net/ "MEGAPOV official website")，非常推薦，事實上比 Windows 版好用多了XD)

去年，我就一直在想，要如何推廣 POVRAY 這個好玩的東西。當然一方面，在實驗室內推廣其實滿有成果的，看下面這張大學部專題生學弟妹做的壁報，就知道絕對是青出於藍更勝於藍(不過這組其實不是我指導的，只是沾光一下XD)

![386768_1707994877693_954504833_n.jpg](/assets/img/2013/rKNPHcUFSu6hEeLgDltw_386768_1707994877693_954504833_n.jpg)
不過一直以來我覺得 POVRAY 官方網站的教學文件雖然寫的很親民，但是還是需要一點程式基礎、也要一點sense才能快速學會。這樣的情況下，如果是一個會寫程式而且有人引路的人，其實絕對可以學得非常快；但是如果沒有人告訴你doc要從哪邊看起，其實我覺得就會稍微吃虧一點，要耐住性子，才能跟上doc的腳步，開始踏上學習 POVRAY 的偉大旅程。

於是我想要自己重編一個 POVRAY 的教材。

另外一個更顯而易見的理由是，繁體中文的資源。

如果我沒有弄錯的話，網路上應該是完全沒有；就算有，也都是片段而已，不是我想像中的 tutorial。因此我心中一直有想要弄個 50% 翻譯 50% ~~腦補~~ 自己詮釋的中文 POVRAY 教學。

引言就講到這邊，如果真的有時間有心情來寫的話，下一次就重如何下載和安裝教起吧 (笑)


下面是剛才的 code：

``` povray oe2009.pov
#include "colors.inc"
#include "golds.inc"
#include "metals.inc"
#include "stones.inc"  

#declare r = 25;
#declare g = 10;
#declare d = r*2 + g;   
#declare n1 = 10;
#declare n2 = 7;
#declare n3 = 7;
  
  global_settings { ambient_light rgb 1 }
    
  camera {
    location <450, 600, -450>
    look_at <0, 0, 0>
  }
  background { color rgb 1}
  
  light_source {
    <400, 600, -400>
    color White
    area_light <500, 0, 0>, <0, 0, 500>, 10, 10
    jitter
  }

  #declare ball = sphere {
  	0, r
  	}

// Chains
union {
	#declare index = 0;
	#while (index < n1) 
		object {
			ball
			translate x*(d/2)*-1
			translate x*-1*d*index
			}
		#declare index = index + 1;
	#end
	#declare index = 0;
	#while (index < n2) 
		object {
			ball
			translate x*(d/2)
			translate x*d*index
			}
		#declare index = index + 1;
	#end
	#declare index = 0;
	#while (index < n3) 
		object {
			ball
			translate -z*d
			translate -z*d*index
			}
		#declare index = index + 1;
	#end	
//	texture {T_Silver_2A}
	pigment {
		White
		//filter 0.5
		}
	finish {
		//phong 1
		metallic
		//reflection 0.2
		}	
}

// SPP
union {
	#declare index = 0;
	#while (index < n1) 
		object {
			ball
			scale 1.1
			translate -x*d*index
			}
		#declare index = index + 1;
	#end
	#declare shrink = 0.99;
	#declare index = 1;
	#while (index < n2) 
		object {
			ball
			scale 1*shrink
			translate x*d*index
			}
		#declare index = index + 1;
		#declare shrink = shrink*shrink;
	#end
	#declare shrink = 0.98;
	#declare index = 1;
	#while (index < n3) 
		object {
			ball
			scale 1*shrink
			translate -z*d*0.5
			translate -z*d*index
			}
		#declare index = index + 1;
		#declare shrink = shrink*shrink;
	#end	
	interior {
		media {
			emission 1
			}
		}
	pigment {
		Pink
		filter 1  
		}
}

// Gaussian beam
#declare w0 = 200;
#declare origin = -1*d*(n1-0.5);
#declare lam = 300;
#declare N = 10;
#declare zr = pi * w0 * w0 / lam;
#declare gauss = lathe {
	linear_spline
	//quadratic_spline
	N+1,
	<0,0>
	#declare index = 0;
	#while (index < N)
		#declare pz = index  * 50;
		#declare w = w0*sqrt( 1 + (pz/zr)*(pz/zr) );
		,<w, pz>
		//<0,0>
		#declare index = index + 1;
	#end
	pigment {
		Red
		filter 0.7
		}
	translate x*origin
	}
difference {
	object {gauss}
	box {
		<-w0, 0, -w0>,
		<w0, 0.001, w0>
		pigment {White filter 1}
		translate x*origin
		}
	}	

// Arrows
#declare ah = 180;
union {
	cylinder {
		<origin, 0, 0>,
		<origin, ah+r,0>,
		20
		}
	cylinder {
		<origin, ah/2+r, 0>,
		<origin+150, ah/2+r,0>,
		15
		}
	cylinder {
		<origin, ah/2+r, 0>,
		<origin, ah/2+r,-150>,
		15
		}
	cone {
		<origin+150, ah/2+r,0>,20
		<origin+200, ah/2+r,0>,0
		}
	cone {
		<origin, ah/2+r,-150>,20
		<origin, ah/2+r,-200>,0
		}
	cone {
		<origin, ah+r,0>,25
		<origin, ah+r+80,0>,0
		}				
	pigment {DimGray}			
	}


// Detectors	
union {
	sphere {
		<930-d*(n1-0.5), 10, 0>, 5 }
	sphere {
		<570-d*(n1-0.5), 10, -380>, 5 }
	pigment {Gray20}
	}
	
	
	
	
		

```

