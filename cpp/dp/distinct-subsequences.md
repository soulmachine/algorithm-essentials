## Distinct Subsequences


### 描述

Given a string `S` and a string `T`, count the number of distinct subsequences of `T` in `S`.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, `"ACE"` is a subsequence of `"ABCDE"` while `"AEC"` is not).

Here is an example:
`S` = `"rabbbit"`, `T` = `"rabbit"`

Return 3.


### 分析

设状态为`f(i,j)`，表示`T[0,j]`在`S[0,i]`里出现的次数。首先，无论`S[i]`和`T[j]`是否相等，若不使用`S[i]`，则`f(i,j)=f(i-1,j)`；若`S[i]==T[j]`，则可以使用`S[i]`，此时`f(i,j)=f(i-1,j)+f(i-1, j-1)`。


### 代码

{% codesnippet "./code/distinct-subsequences."+book.suffix, language=book.suffix %}{% endcodesnippet %}
