---
title: "ساده شده تابع هزینه و گرادیان کاهشی"
date: 2020-09-11T12:53:43+04:30
draft: false
weight : 40
---

### Cost Function

ما می‌توانیم دو حالت شرطی تابع هزینه خودمان در قسمت قبلی را در یک حالت فشرده شده بنویسیم:

$$ 
Cost(h_\theta(x), y) = - y \hspace{0.2cm} log(h_\theta(x)) - (1 - y) log(1 - h_\theta(x))
$$

در خاطر داشته باشید وقتی که $y$  برابر $1$ است،
قسمت
$(1 - y) log(1 - h_\theta(x))$
برار $0$ خواهد شد. 

اگر $y$ برابر با $1$ باشد،
سپس قسمت
$- y \hspace{0.2cm} log(h_\theta(x))$
برابر $0$ خواهد شد
و در نتیجه تاثیری ندارد.

در نهایت می‌توانیم کل تابه هزینه را به این صورت بنویسیم: 

$$
J(\theta) = - \frac{1}{m} \sum_{i = 1}^m [y^{(i)} log(h_\theta(x^{(i)})) + (1 - y^{(i)}) log(1 - h_\theta(x^{(i)})) ]
$$

و پیاده سازی برداری شده به این صورت خواهد بود:

$$
\begin{align*} & h = g(X\theta)\newline & J(\theta) = \frac{1}{m} \cdot \left(-y^{T}\log(h)-(1-y)^{T}\log(1-h)\right) \end{align*}
$$


### Gradient Descent

به یاد داشته باشید که شکل کلی گرادیان کاهشی به این صورت است:

$$
\begin{align*}& Repeat \lbrace \newline &  \theta_j := \theta_j - \alpha \dfrac{\partial}{\partial \theta_j}J(\theta) \newline & \rbrace\end{align*}
$$

می‌توانیم قسمت مشتق را با استفاده از حساب دیفرانسیل محاسبه کنیم:

$$
\begin{align*} & Repeat \lbrace \newline &  \theta_j := \theta_j - \frac{\alpha}{m} \sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)} \newline & \rbrace \end{align*}
$$

توجه داشته باشید که این الگوریتم مشابه الگوریتمی است که ما در رگرسیون خطی استفاده کردیم، هنوز باید به صورت همزمان همه مقادیر $\theta$ را به روز کنیم.

و پیاده سازی برداری شده به این صورت خواهد بود:

$$
\theta := \theta - \frac{\alpha}{m} X^T g((X \theta) -\vec{y} )
$$