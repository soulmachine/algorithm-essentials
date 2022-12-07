---
title: Minimum Add to Make Parentheses Valid
---

### 描述

TODO

### 分析

这道题给了一个括号字符串，可能是非法的，让我们补充最少数量的半括号，使其变为合法的括号字符串。那么实际上只要统计出需要添加的左右括号个数即可，这里使用两个变量 left 和 right，分别表示需要的左右括号个数。遍历字符串S，若遇到左括号，说明此时需要右括号，则 right 自增1；若遇到了右括号，若此时 right 大于0，说明当前的右括号可以用来匹配之前的左括号，不需要另加右括号，所以此时 right 自减1；而若此时 right 为0，说明当前的右括号前面没有左括号可以跟其匹配，则此时 left 自增1，表示需要额外的左括号。最后返回 left+right 即为所求。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
class Solution {
public:
    int minAddToMakeValid(string s) {
        int left = 0, right = 0;
        for (char c : s) {
            if (c == '(') {
                ++right;
            } else if (right > 0) {
                --right;
            } else {
                ++left;
            }
        }
        return left + right;
    }
};
```

</TabItem>
</Tabs>
