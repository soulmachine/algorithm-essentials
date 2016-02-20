## N-Queens


### 描述

The **n-queens puzzle** is the problem of placing n queens on an `n × n` chessboard such that no two queens attack each other.

![Eight Queens](../images/8-queens.png)

Given an integer `n`, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space respectively.

For example,
There exist two distinct solutions to the 4-queens puzzle:

```
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
```


### 分析

经典的深搜题。

设置一个数组 `vector<int> C(n, 0)`, `C[i]` 表示第i行皇后所在的列编号，即在位置 `(i, C[i])`上放了一个皇后，这样用一个一维数组，就能记录整个棋盘。


### 代码1

{% codesnippet "./code/n-queens-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 代码2

{% codesnippet "./code/n-queens-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目

* [N-Queens II](n-queens-ii.md)
