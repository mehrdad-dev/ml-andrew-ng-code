---
title: "اشکال زدایی گرادیان"
date: 2020-09-09T22:03:11+04:30
draft: false
weight : 40
---

در این قسمت در مورد تکنیک هایی برای اطمینان 
از درستی کار <span class="top-dict" data-tipso="gradient descent">گرادیان کاهشی</span> صحبت مـی‌کنیم.
و در ادامه در مورد نحوه انتخاب مقدار پارامتر آلفا.

همانطور که می‌دانیم کار گرادیان کاهشی پیدا کردن
مقدار تتا برای ما است تا تابع هزینه مینیمم شود.
می‌خواهیم  نمودار تابع $J$ بر حسب دفعات انــــجام 
گرادیان کاهشی را رسم کنیم و تا متوجه بشویم که
گرادیان کاهشی عملکرد درستی دارد یا نه!

به این ترتیب نموداری به 
این شکل خواهیم داشت:
![دوره یادگیری ماشین دانشگاه استنفورد به فارسی](../images/image72.png?width=15pc)

می‌بینیم که احتملا گرادیان
کاهشی درست کار مـی‌کند
چون بعد از هر بار انجام مقدار $J$ کاهش می‌یابد!

همـچنین مـی‌توانیم از <span class="top-dict" data-tipso="automatic convergence test">آزمون همگرایی خودکار</span> استفاده کنیم، به این صورت که اگر $J$ بعد از هر تکرار 
کاهشی کمتر از $E= 10^{-3}$ داشته باشد، اعلام همگرایی
می‌کنیم، که تعیین مقدار این آستانه سخت است!

اگر چنین نموداری داشتیم
یعنی گرادیان کـاهـشـی به
درستی کار نمی‌کند:

![دوره یادگیری ماشین دانشگاه استنفورد به فارسی](../images/image74.png?width=15pc)

و معمولا به این معنی است که باید از مقدار آلفا
کوچک تری استفاده کنیم.

و در شکل زیر می‌بینیم 
که بزرگی بیش از حد آلفا
باعث واگرایی شده است.
که هیـچوقت به مینیمم
نمی‌رسد!

![دوره یادگیری ماشین دانشگاه استنفورد به فارسی](../images/image75.png?width=15pc)

و گاهی اوقات نیز ممکن اسـت به شکل زیر باشد
که باید مقدار آلفا را کاهش دهیم و اگر مقدار آلفا
بیش از حد کوچک باشد، گرادیان کاهشی دیر تر به
همگرایی می‌رسد.

![دوره یادگیری ماشین دانشگاه استنفورد به فارسی](../images/image77.png?width=20pc)

متوجه می‌شویم که مقدار خوب برای آلفا مقداری 
است که در هر بار تکرار الگوریتم گرادیان کاهشی،
تابع هزینه $J$ کاهش یابد.