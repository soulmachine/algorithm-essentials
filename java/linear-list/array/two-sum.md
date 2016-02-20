## Two Sum


### 描述

Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input:  `numbers={2, 7, 11, 15}, target=9`

Output: `index1=1, index2=2`


### 分析

方法1：暴力，复杂度$$O(n^2)$$，会超时

方法2：hash。用一个哈希表，存储每个数对应的下标，复杂度`O(n)`.

方法3：先排序，然后左右夹逼，排序$$O(n\log n)$$，左右夹逼`O(n)`，最终$$O(n\log n)$$。但是注意，这题需要返回的是下标，而不是数字本身，因此这个方法行不通。


### 代码

{% codesnippet "./code/two-sum."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目

* [3Sum](3sum.md)
* [3Sum Closest](3sum-closest.md)
* [4Sum](4sum.md)
