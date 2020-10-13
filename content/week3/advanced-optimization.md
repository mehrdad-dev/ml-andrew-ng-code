---
title: "بهینه سازی پیشرفته"
date: 2020-09-11T13:28:40+04:30
draft: false
weight: 50
---

Conjugate gradient, BFGS و L-BFGS
راه های پیچیده تر و سریع تری برای بهینه سازی $\theta$ به جای Gradient descent هستند.

پیشنهاد می‌شود که این الگوریتم های پیچیده را خودتان ننویسید
(مگر اینکه در محاسبات عددی متخصص باشید)،
و به جای آن از کتابخانه ها استفاده کنید، زیرا قبلا آزمایش شده اند و بسیار بهینه شده اند.

ابتدا لازم است تابعی بسازیم که دو مقدار زیر را با ورودی مقدار $\theta$ برگرداند:

$$
\begin{align*} & J(\theta) \newline & \dfrac{\partial}{\partial \theta_j}J(\theta)\end{align*}
$$

تابعی می‌نویسیم که هر دو این مقادیر را بر گرداند:

<div align="left">

```
function [jVal, gradient] = costFunction(theta)
  ;jVal = [...code to compute J(theta)...]
  ;gradient = [...code to compute derivative of J(theta)...]
end
```

</div>

سپس می‌توانیم از الگوریتم بهینه سازی ()fminunc در اکتاو به همراه تابع ()optimset برای ساخت یک
object شامل تنظیمات و گزینه هایی که می‌خواهیم به عنوان ورودی به تابع ()fminunc بدهیم.

<div align="left">

```
;options = optimset('GradObj', 'on', 'MaxIter', 100)
;initialTheta = zeros(2,1)
   ;[optTheta, functionVal, exitFlag] = fminunc(@costFunction, initialTheta, options)
```

</div>

به عنوان ورودی به تابع ()fminunc:

تابع هزینه، بردار مقادیر تتا، و options را که از قبل درست کرده ایم می‌دهیم.