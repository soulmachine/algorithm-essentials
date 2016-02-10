## Longest Common Prefix


### 描述

Write a function to find the longest common prefix string amongst an array of strings.


### 分析

从位置0开始，对每一个位置比较所有字符串，直到遇到一个不匹配。


### 纵向扫描

{% codesnippet "./code/longest-common-prefix-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 横向扫描

```cpp
// Longest Common Prefix
// 横向扫描，每个字符串与第0个字符串，从左到右比较，直到遇到一个不匹配，
// 然后继续下一个字符串
// 时间复杂度O(n1+n2+...)
class Solution {
public:
    string longestCommonPrefix(vector<string> &strs) {
        if (strs.empty()) return "";

        int right_most = strs[0].size() - 1;
        for (size_t i = 1; i < strs.size(); i++)
            for (int j = 0; j <= right_most; j++)
                if (strs[i][j] != strs[0][j])  // 不会越界，请参考string::[]的文档
                    right_most = j - 1;

        return strs[0].substr(0, right_most + 1);
    }
};
```
