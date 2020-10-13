---
title: "بررسی گرادیان"
date: 2020-10-11T16:33:27+03:30
draft: false
weight: 50
---

بررسی گرادیان به شما این اطمینان را می‌دهد که
پس انتشار همانطور که در نظر گرفته شده کار می‌کند‌ 
(مطابق هدف کار می‌کند).

ما می‌توانیم مشتق تابع خود را به این صورت تقریب بزنیم:
$$
\frac{\partial}{\partial \Theta} J(\Theta) \approx  \frac { J(\Theta +  \epsilon) - J(\Theta -  \epsilon) } {2 \epsilon}
$$

با چند ماتریس تتا، می‌توانیم مشتق را با توجه به $\Theta _j$ تقریب بزنیم:

$$
\frac{\partial}{\partial \Theta} J(\Theta) \approx \frac{ J(\Theta _1, ..., \Theta _j + \epsilon, ..., \Theta _n) - J(\Theta _1, ..., \Theta _j - \epsilon, ..., \Theta _n)} {2 \epsilon}
$$

مقدار کوچک ϵ (epsilon) مانند $\epsilon = 10 ^ {-4}$ ، تضمین می‌کند که
ریاضیات به درستی کار می‌کنند،
اگر مقدار ϵ خیلی کوچک باشد امکان دارد
که با مشکلات عددی مواجه شویم.

از این رو، ما فقط اپسیلون را به ماتریس
$\Theta _j$ اضافه یا کم می‌کنیم.
در اکتاو می‌توانیم آن را به صورت زیر انجام دهیم:

<div align="left">

```
;epsilon = 1e-4
,for i = 1:n
  ;thetaPlus = theta
  ;thetaPlus(i) += epsilon
  ;thetaMinus = theta
  ;thetaMinus(i) -= epsilon
  gradApprox(i) = (J(thetaPlus) - J(thetaMinus))/(2*epsilon)
;end
```

</div>


قبلا نحوه محاسبه deltaVector را مشاهده کردیم،
و بعد از محاسبه بردار gradApprox در بالا
می‌توانیم آن را چک کنیم $gradApprox \approx deltaVector$ .


زمانی که یک بار تأیید شد که الگوریتم پس انتشار شما درست کار می‌کند،
دیگر نیازی به محاسبه مجدد gradApprox نیست،
زیرا که قطعه کد محاسبه gradApprox می‌تواند بسیار کند باشد!


