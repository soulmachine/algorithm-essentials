## Generate Parentheses 


### 描述

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given `n = 3`, a solution set is:

```
"((()))", "(()())", "(())()", "()(())", "()()()"
```


### 分析

小括号串是一个递归结构，跟单链表、二叉树等递归结构一样，首先想到用递归。

一步步构造字符串。当左括号出现次数`<n`时，就可以放置新的左括号。当右括号出现次数小于左括号出现次数时，就可以放置新的右括号。


### 代码1

{% codesnippet "./code/generate-parentheses-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 代码2

另一种递归写法，更加简洁。

{% codesnippet "./code/generate-parentheses-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目

* [Valid Parentheses](valid-parentheses.md)
* [Longest Valid Parentheses](longest-valid-parentheses.md)
