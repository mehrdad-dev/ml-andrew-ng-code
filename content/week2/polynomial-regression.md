---
title: "رگرسیون چند جمله ای"
date: 2020-09-09T22:12:45+04:30
draft: false
weight : 50
---

### <span class="top-dict" data-tipso="polynomial regression">رگرسیون چند جمله ای</span>

تابع فرضیه $h$ می‌تواند خطی نباشد، اگر تناسب خوبی
با داده های ما ندارد، 
می‌توانیم برای تغییر منحنی تابع از توابع چند جمله ای
استفاده کنیم تا به تناسب بهتری برای داده ها برسیم.

فرض کنید که تابع فرضیه ما $ h_\theta(x) = \theta_0 + \theta_1 x_1$ باشد
بنابراین می‌توانیم ویژگی جدیدی بر پایه ویژگی $x_1$
اضافه کنیم تا به تابعی <span class="top-dict" data-tipso="quadratic">درجه دو</span> برسیم:

$$ {\color{Blue} h_\theta(x) = \theta_0 + \theta_1 x_1 + \theta_2 x_1^2}$$

یا به تابعی <span class="top-dict" data-tipso="cubic">درجه سه</span>:
$$ {\color{Green} h_\theta(x) = \theta_0 + \theta_1 x_1 + \theta_2 x_1^2 + \theta_3 x_1^3}$$

![image78.png](../images/image78.png?width=25pc)

به طور مثال برای تابع درجه سه می‌نویسیم:

![image79.png](../images/image79.png?width=25pc)

همچنین می‌توانیم از نمودار <span class="top-dict" data-tipso="square root">ریشه دوم</span>
استفاده کنیم:

$$ h_\theta(x) = \theta_0 + \theta_1 x_1 + \theta_2 \sqrt{x}$$

توجه کنید بعد از اینکه ویژگی های جدید خود را به 
این روش اضافه کردید، انجام <span class="top-dict" data-tipso="Feature Scaling">مقیاس بندی ویژگی</span> برای
برای ویژگی ها یا همان متغیر ها خیلی مهم است!