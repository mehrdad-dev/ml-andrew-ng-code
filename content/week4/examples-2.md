---
title: "مثال ها قسمت دوم"
date: 2020-09-30T12:06:57+03:30
draft: false
weight: 60
---

### عملگر XNOR

از قسمت قبل به خاطر داریم که ماتریس وزن $\Theta^{(1)}$ برای عملگر های منطقی 
AND، OR و NOR به این صورت بود:
$$
\begin{align*}AND:\newline\Theta^{(1)} &=\begin{bmatrix}-30 & 20 & 20\end{bmatrix} \newline NOR:\newline\Theta^{(1)} &= \begin{bmatrix}10 & -20 & -20\end{bmatrix} \newline OR:\newline\Theta^{(1)} &= \begin{bmatrix}-10 & 20 & 20\end{bmatrix} \newline\end{align*}
$$

با ترکیب آن ها می‌توانیم عملگر منطقی XNOR را به دست آوریم:
$$
\begin{align*}\begin{bmatrix}x_0 \newline x_1 \newline x_2\end{bmatrix} \rightarrow\begin{bmatrix}a_1^{(2)} \newline a_2^{(2)} \end{bmatrix} \rightarrow\begin{bmatrix}a^{(3)}\end{bmatrix} \rightarrow h_\Theta(x)\end{align*}
$$

برای انتقال از لایه اول به لایه دوم می‌توانیم از ماتریس $\Theta^{(1)}$ استفاده کنیم،
که ترکیبی از مقادیر AND و NOR است:

$$
\Theta^{(1)} =\begin{bmatrix}-30 & 20 & 20 \newline 10 & -20 & -20 \end{bmatrix}
$$

و برای انتقال از لایه دوم به لایه سوم از ماتریس $\Theta^{(2)}$ استفاده می‌کنیم،
که شامل مقادیر OR می‌باشد:
$$
\Theta^{(2)} =\begin{bmatrix} -10 & -20 & -20 \end{bmatrix}
$$

حالا مقادیر مربوط به نود های فعال ساز را می‌نویسیم:
$$
\begin{align*}& a^{(2)} = g(\Theta^{(1)} \cdot x) \newline& a^{(3)} = g(\Theta^{(2)} \cdot a^{(2)}) \newline& h_\Theta(x) = a^{(3)}\end{align*}
$$

و حالا عملگر XNOR را با استفاده از یک لایه پنهان با دو نود داریم!

به صورت خلاصه:

![image24.png](../images/image24.png?width=40pc)
