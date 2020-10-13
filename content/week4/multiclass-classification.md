---
title: "طبقه بندی چند کلاسه"
date: 2020-09-30T16:39:28+03:30
draft: false
weight: 70
---

برای طبقه بندی داده ها در چندین کلاس، نیاز داریم که تابع فرضیه ما برداری از مقادیر را برگرداند.
مثلا اگر بخواهیم داده هایمان را در یکی از ۴ دسته طبقه بندی کنیم می‌توانیم برای دیدن نحوه انجام این طبقه بندی
از مثال زیر استفاده می‌کنیم، این الگوریتم یک تصویر را به عنوان ورودی گرفته و بر اساس آن طبقه بندی را انجام می‌دهد، ۴ دسته ما عبارت اند از:

![image25.png](../images/image25.png?width=35pc)


1. pedestrian
2. car
3. motorcycle
4. truck
   
می‌توانیم مجموعه کلاس های خود را به عنوان $y$ به صورت زیر تعریف کنیم:

$$
y^{(i)} = \begin{bmatrix}1 \newline 0 \newline 0 \newline 0 \end{bmatrix} ,
\begin{bmatrix}0 \newline 1 \newline 0 \newline 0 \end{bmatrix} ,
\begin{bmatrix}0 \newline 0 \newline 1 \newline 0 \end{bmatrix} ,
\begin{bmatrix}0 \newline 0 \newline 0 \newline 1 \end{bmatrix}
$$

هر کدام از $y^{(i)}$ ها دسته متفاوتی را نشان می‌دهند،
که مربوط به اتوموبیل، عابر پیاده، کامیون یا موتور سیکلت است.
و لایه های میانی هر کدام اطلاعات جدیدی در اختیار ما قرار می‌دهند،
که منجر به تابع فرضیه نهایی ما می‌شود.


$$
\begin{bmatrix}x_0 \newline x_1 \newline x_2 \newline ...\newline x_n  \end{bmatrix}  \rightarrow
\begin{bmatrix}a_0 ^ {(2)} \newline a_1 ^ {(2)} \newline a_2 ^ {(2)} \newline ... \end{bmatrix} \rightarrow
\begin{bmatrix}a_0 ^ {(3)} \newline a_1 ^ {(3)} \newline a_2 ^ {(3)} \newline ... \end{bmatrix} \rightarrow
...
\rightarrow
\begin{bmatrix}h_\Theta (x)_1 \newline h_\Theta (x)_2 \newline h_\Theta (x)_3 \newline h_\Theta (x)_4 \end{bmatrix}
$$

تابع فرضیه حاصل ما برای یک مجموعه ورودی ممکن است به این صورت شود:
$$
h_\Theta (x) = \begin{bmatrix}0 \newline 0 \newline 1 \newline 0 \end{bmatrix}
$$

که این نشان دهنده سومین کلاس ما یعنی موتور سیکلت است،
یعنی همان $h_\Theta (x)_3$.
