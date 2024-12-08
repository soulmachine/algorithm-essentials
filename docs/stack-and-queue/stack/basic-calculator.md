---
title: Basic Calculator
---

### 描述

TODO

### 分析

典型的栈的题目，不过这道题属于hard级别，因为很难写对。

表达式中只有加减，没有乘除，那就不需要考虑优先级，于是这道题就变的简单很多了。我们需要一个栈来辅助计算，用个变量`sign`来表示当前的符号，遍历给字符串`s`，

* 如果遇到了数字，就用while循环把之后的数字都读进来，然后用`sign*num`来更新结果`res`；
* 如果遇到了加号，则`sign`赋为1；
* 如果遇到了减号，则`sign`赋为-1；
* 如果遇到了左括号，则把当前结果`res`和符号`sign`压入栈，`res`重置为0，`sign`重置为1；
* 如果遇到了右括号，结果`res`乘以栈顶的符号，栈顶元素出栈，结果`res`加上栈顶的数字，栈顶元素出栈。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },

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
// Basic Calculator
// Time complexity O(n), space complexity O(n)
class Solution {
public:
    int calculate(const string& s) {
        int res = 0, sign = 1, n = s.size();
        stack<int> stk;
        for (int i = 0; i < n; ++i) {
            const char c = s[i];
            if (isdigit(c)) {
                int num = 0;
                while (i < n && isdigit(s[i])) {
                    num = 10 * num + (s[i++] - '0');
                }
                res += sign * num;
                --i;
            } else if (c == '+') {
                sign = 1;
            } else if (c == '-') {
                sign = -1;
            } else if (c == '(') {
                stk.push(res);
                stk.push(sign);
                res = 0;
                sign = 1;
            } else if (c == ')') {
                res *= stk.top(); stk.pop();
                res += stk.top(); stk.pop();
            }
        }
        return res;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# No code provided to translate. Please provide the Java code you want translated to Python.
```

</TabItem>
</Tabs>

### 相关题目

- [Basic Calculator II](basic-calculator-ii.md)
- [Basic Calculator III](basic-calculator-iii.md)
- [Build Binary Expression Tree From Infix Expression](build-binary-expression-tree-from-infix-expression.md)
