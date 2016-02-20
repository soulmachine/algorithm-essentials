## Path Sum II


### 描述

Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and `sum = 22`,

```
          5
         / \
        4   8
       /   / \
      11  13  4
     /  \    / \
    7    2  5   1
```

return

```
[
   [5,4,11,2],
   [5,8,4,5]
]
```


### 分析

跟上一题相比，本题是求路径本身。且要求出所有结果，左子树求到了满意结果，不能return，要接着求右子树。

### 代码


{% codesnippet "./code/path-sum-ii."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目


* [Path Sum](path-sum.md)
