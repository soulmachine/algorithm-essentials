## Rotate Image


### 描述

You are given an `n × n` 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?


### 分析

首先想到，纯模拟，从外到内一圈一圈的转，但这个方法太慢。

如下图，首先沿着副对角线翻转一次，然后沿着水平中线翻转一次。

![Rotate image](../../images/rotate-image.png)

或者，首先沿着水平中线翻转一次，然后沿着主对角线翻转一次。


### 代码1

{% if book.cpp %}
  {% codesnippet "./code/rotate-image-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 代码2


{% if book.cpp %}
  {% codesnippet "./code/rotate-image-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}
