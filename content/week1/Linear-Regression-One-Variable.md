---
title: "رگرسیون خطی با یک متغیر"
date: 2020-09-06T13:26:16+04:30
draft: flase
weight : 40
---

### بررسی نماد ها و مفاهیم
مثلا در 
<span class="top-dict" data-tipso="data">داده</span>
ی خانه ها نماد ها به این صورت هستند:
![house-price.png](../images/house-price.png?width=25pc)


| نماد |  |
| ------:| -----------:|
| $m$   | تعداد کل ردیف های جدول داده آموزش |
| $x$ | متغیر های ورودی|
| $y$    |متغیر های خروجی یا هدف |

برای آدرس دهی در جدول به این شکل عمل می‌کنیم:

$$(x_i, y_i) \Rightarrow x_1= 2104, y_1 = 460$$


{{% notice note %}}
اینجا منظور از $i$  اندیس داده در جدول است.
{{% /notice %}}

![دوره یادگیری ماشین دانشگاه استنفورد به فارسی](../images/h-function.png?width=17pc)

همانطور که می‌بینید هدف ما اینکه با دادن 
<span class="top-dict" data-tipso="training set">مجموعه آموزشی</span>
به الگوریتم، تابعی را به وجود بیاوریم که با گرفتن
متغیر ورودی $x$ متغیر خروجی یعنی $y$ را پیش بینی کند!
که به تابع $h$ ،  <span class="top-dict" data-tipso="hypothesis">فرضیه</span>
می‌گوییم.

تابع $h$ را به این شکل نمایش می‌‌دهیم:
$$ h_\theta(x) = \theta_0 + \theta_1x $$

که این در واقع 
<span class="top-dict" data-tipso="linear regression">رگرسیون خطی</span>
تک متغیره است،
$x$ همان تک متغیر مدل است،
$ \theta_0, \theta_1 $ نیز <span class="top-dict" data-tipso="parameter">پارامتر</span>
های مدل هستند.

![دوره یادگیری ماشین دانشگاه استنفورد به فارسی](../images/red-line.png?width=17pc)

خط قرمز همان تابع $h$ است
که برای پیش بینی قیمت 
خانه با متغیر $x$ به دست آمده

