## Edit Distance


### 描述

Given two words `word1` and `word2`, find the minimum number of steps required to convert `word1` to `word2`. (each operation is counted as 1 step.)

You have the following 3 operations permitted on a word:

* Insert a character
* Delete a character
* Replace a character


### 分析

设状态为`f[i][j]`，表示`A[0,i]`和`B[0,j]`之间的最小编辑距离。设`A[0,i]`的形式是`str1c`，`B[0,j]`的形式是`str2d`，

1. 如果`c==d`，则`f[i][j]=f[i-1][j-1]`；
1. 如果`c!=d`，

    1. 如果将c替换成d，则`f[i][j]=f[i-1][j-1]+1`；
    1. 如果在c后面添加一个d，则`f[i][j]=f[i][j-1]+1`；
    1. 如果将c删除，则`f[i][j]=f[i-1][j]+1`；


### 动规

{% codesnippet "./code/edit-distance-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 动规+滚动数组

{% codesnippet "./code/edit-distance-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}
