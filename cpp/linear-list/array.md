# 数组

## Remove Duplicates from Sorted Array

### 描述

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example, Given input array `A = [1,1,2]`,

Your function should return length = 2, and `A` is now `[1,2]`.


### 分析

无


### 代码1


{% if book.cpp %}
  {% codesnippet "./code/remove-duplicates-from-sorted-array-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 代码2

{% if book.cpp %}
  {% codesnippet "./code/remove-duplicates-from-sorted-array-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 代码3

{% if book.cpp %}
  {% codesnippet "./code/remove-duplicates-from-sorted-array-3.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Remove Duplicates from Sorted Array II](#remove-duplicates-from-sorted-array-ii)


## Remove Duplicates from Sorted Array II

### 描述

Follow up for "Remove Duplicates": What if duplicates are allowed at most twice?

For example, given sorted array `A = [1,1,1,2,2,3]`, your function should return length = `5`, and A is now `[1,1,2,2,3]`


### 分析

加一个变量记录一下元素出现的次数即可。这题因为是已经排序的数组，所以一个变量即可解决。如果是没有排序的数组，则需要引入一个hashmap来记录出现次数。


### 代码1

{% if book.cpp %}
  {% codesnippet "./code/remove-duplicates-from-sorted-array-ii-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 代码2

下面是一个更简洁的版本。上面的代码略长，不过扩展性好一些，例如将\fn{occur < 2}改为\fn{occur < 3}，就变成了允许重复最多3次。

{% if book.cpp %}
  {% codesnippet "./code/remove-duplicates-from-sorted-array-ii-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Remove Duplicates from Sorted Array](#remove-duplicates-from-sorted-array)

