---
title: "Unrolling Parameters"
date: 2020-10-10T13:31:21+03:30
draft: false
weight: 40
---

ما در شبکه های عصبی در حال کار با مجموعه ای از ماتریس ها هستیم:
$$
\begin{align*} \Theta^{(1)}, \Theta^{(2)}, \Theta^{(3)}, \dots \newline D^{(1)}, D^{(2)}, D^{(3)}, \dots \end{align*}
$$

برای استفاده از تابع بهینه سازی مثل **()fminunc**،
می‌خواهیم همه عضو ها را **unroll** کرده (باز کنیم)
و داخل یک وکتور طولانی قرار دهیم:

<div align="left">

```
thetaVector = [ Theta1(:); Theta2(:); Theta3(:); ]
deltaVector = [ D1(:); D2(:); D3(:) ]
```

</div>

اگر ابعاد Theta1 $10 \times 11$ و Theta2 $10 \times 11$ و Theta3 $1 \times 11$ باشند،
سپس می‌توانیم ماتریس های اصلی مان را از نسخه های **unrolled** به این شکل برگردانیم:

<div align="left">

```
Theta1 = reshape(thetaVector(1:110),10,11)
Theta2 = reshape(thetaVector(111:220),10,11)
Theta3 = reshape(thetaVector(221:231),1,11)
```

</div>


به طور خلاصه:

![image2.png](../images/image2.png?width=40pc)
