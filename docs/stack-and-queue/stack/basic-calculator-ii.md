---
title: Basic Calculator II
---

### 描述

TODO

### 分析

TODO

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 栈

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
// Basic Calculator II
// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
    public int calculate(String s) {
        final int N = s.length();
        Stack<Integer> stk = new Stack<>();
        int n = 0; // current number
        char op = '+'; // current operation
        for (int i = 0; i < N; i++) {
            char ch = s.charAt(i); // current char
            if (Character.isDigit(ch)) {
                n = (n * 10) + (ch - '0');
            }
            if (isOp(ch) || i == N - 1) {
                if (op == '-') {
                    stk.push(-n);
                } else if (op == '+') {
                    stk.push(n);
                } else if (op == '*') {
                    int top = stk.pop();
                    stk.push(top * n);
                } else if (op == '/') {
                    int top = stk.pop();
                    stk.push(top / n);
                }
                op = ch;
                n = 0;
            }
        }
        int result = 0;
        while (!stk.empty()) {
            result += stk.pop();
        }
        return result;
    }
    
    private boolean isOp(char ch) {
        return ch == '+' || ch == '-' || ch == '*' || ch == '/';
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Basic Calculator II
// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
public:
    int calculate(string s) {
        const int N = s.length();
        stack<int> stk;
        int n = 0; // current number
        char op = '+'; // current operation
        for (int i = 0; i < N; i++) {
            char ch = s[i]; // current char
            if (isdigit(ch)) {
                n = (n * 10) + (ch - '0');
            } else if (is_op(ch) || i == N - 1) {
                if (op == '-') {
                    stk.push(-n);
                } else if (op == '+') {
                    stk.push(n);
                } else if (op == '*') {
                    int top = stk.top(); stk.pop();
                    stk.push(top * n);
                } else if (op == '/') {
                    int top = stk.top(); stk.pop();
                    stk.push(top / n);
                }
                op = ch;
                n = 0;
            }
        }
        int result = 0;
        while (!stk.empty()) {
            result += stk.top();
            stk.pop();
        }
        return result;
    }
private:
    bool is_op(char ch) {
        return ch == '+' || ch == '-' || ch == '*' || ch == '/';
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Basic Calculator II
# Time complexity: O(n)
# Space complexity: O(n)
class Solution:
    def calculate(self, s: str) -> int:
        N = len(s)
        stk = []
        n = 0  # current number
        op = '+'  # current operation
        for i in range(N):
            ch = s[i]  # current char
            if ch.isdigit():
                n = (n * 10) + (ord(ch) - ord('0'))
            if self.isOp(ch) or i == N - 1:
                if op == '-':
                    stk.append(-n)
                elif op == '+':
                    stk.append(n)
                elif op == '*':
                    top = stk.pop()
                    stk.append(top * n)
                elif op == '/':
                    top = stk.pop()
                    stk.append(int(top / n))
                op = ch
                n = 0
        result = 0
        while stk:
            result += stk.pop()
        return result

    def isOp(self, ch: str) -> bool:
        return ch in {'+', '-', '*', '/'}
```

</TabItem>
</Tabs>

上面的代码里有个小技巧，`n` 和 `op`初始化为 0 和 `+`，相当于在表达式前面插入了 `0+`，帮助简化代码。

#### 优化到常量空间

上面的代码，可以稍作优化，把栈消除掉。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Time complexity: O(n)
// Space complexity: O(1)
class Solution {
    public int calculate(String s) {
        final int N = s.length();
        int n = 0; // current number
        int last = 0; // last number
        int result = 0;
        char op = '+'; // current operation
        for (int i = 0; i < N; i++) {
            char ch = s.charAt(i); // current char
            if (Character.isDigit(ch)) {
                n = (n * 10) + (ch - '0');
            } else if (isOp(ch) || i == N - 1) {
                if (op == '+' || op == '-') {
                    result += last;
                    last = op == '+' ? n : -n;
                    stk.push(-n);
                } else if (op == '*') {
                    last *= n;
                } else if (op == '/') {
                    last /= n;
                }
                op = ch;
                n = 0;
            }
        }
        result += last;
        return result;
    }
    
    private boolean isOp(char ch) {
        return ch == '+' || ch == '-' || ch == '*' || ch == '/';
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Basic Calculator II
// Time complexity: O(n)
// Space complexity: O(1)
class Solution {
public:
    int calculate(string s) {
        const int N = s.length();
        int n = 0; // current number
        int last = 0; // last number
        int result = 0;
        char op = '+'; // current operation
        for (int i = 0; i < N; i++) {
            char ch = s[i]; // current char
            if (isdigit(ch)) {
                n = (n * 10) + (ch - '0');
            } else if (is_op(ch) || i == N - 1) {
                if (op == '+' || op == '-') {
                    result += last;
                    last = op == '+' ? n : -n;
                    stk.push(-n);
                } else if (op == '*') {
                    last *= n;
                } else if (op == '/') {
                    last /= n;
                }
                op = ch;
                n = 0;
            }
        }

        result += last;
        return result;
    }
private:
    bool is_op(char ch) {
        return ch == '+' || ch == '-' || ch == '*' || ch == '/';
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Time complexity: O(n)
# Space complexity: O(1)
class Solution:
    def calculate(self, s: str) -> int:
        N = len(s)
        n = 0  # current number
        last = 0  # last number
        result = 0
        op = '+'  # current operation
        for i in range(N):
            ch = s[i]  # current char
            if ch.isdigit():
                n = (n * 10) + (ord(ch) - ord('0'))
            elif self.isOp(ch) or i == N - 1:
                if op == '+' or op == '-':
                    result += last
                    last = n if op == '+' else -n
                elif op == '*':
                    last *= n
                elif op == '/':
                    last //= n
                op = ch
                n = 0
        result += last
        return result

    def isOp(self, ch: str) -> bool:
        return ch in {'+', '-', '*', '/'}
```

</TabItem>
</Tabs>

- [Basic Calculator](basic-calculator.md)
- [Basic Calculator III](basic-calculator-iii.md)
- [Build Binary Expression Tree From Infix Expression](build-binary-expression-tree-from-infix-expression.md)
