---
title: "مثال ها قسمت اول"
date: 2020-09-27
draft: false
weight: 50
---

### عملگر منطقی AND
یک مثال ساده از کاربرد شبکه های عصبی پیش بینی
نتیجه عملگر منطقی AND بین دو متغیر $x_1$ و $x_2$ است.

می‌دانیم که جدول درستی عملگر AND به این صورت است:

![image17.png](../images/image17.png?width=20pc)

شکل کلی توابع به صورت زیر است:

$$
\begin{align*}\begin{bmatrix}x_0 \newline x_1 \newline x_2\end{bmatrix} \rightarrow\begin{bmatrix}g(z^{(2)})\end{bmatrix} \rightarrow h_\Theta(x)\end{align*}
$$

{{% notice note %}}
به خاطر داشته باشید که $x_0$ متغیر بایاس ما است، و همواره برابر با مقدار 1 است.
{{% /notice %}}

و ماتریس وزن های خود را به این صورت تنظیم می‌کنیم:

$$
\Theta^{(1)} = [-30 \hspace{0.5cm} 20 \hspace{0.5cm} 20]
$$

این کار باعث می‌شود که نتیجه تابع فرضیه ۱ شود، اگر هر دو متغیر $x_1$ و $x_2$ ۱ باشند.

به صورت خلاصه می‌توانیم این مثال را به شکل زیر شرح دهیم:
![image18.png](../images/image18.png?width=40pc)

![image19.png](../images/image19.png?width=40pc)

### عملگر منطقی OR
عملگر OR شبیه به AND است، اما فقط نیاز داریم که وزن نود بایاس را به 
$-10$ تغییر دهیم:

![image20.png](../images/image20.png?width=40pc)

![image21.png](../images/image21.png?width=40pc)

### عملگر منطقی NAND
![image22.png](../images/image22.png?width=40pc)


### عملگر منطقی NOT
![image23.png](../images/image23.png?width=40pc)
