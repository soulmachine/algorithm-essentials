---
title: Basic Calculator III
---

### 描述

TODO

### 分析

这道题是前面2道题的综合体，既有乘除又有括号。最经典的做法是用两个栈，一个数字栈，一个操作符栈。

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
// Basic Calculator III
public class Solution {
    private static Map < Character, Integer > priority = new HashMap < > () {
        {
            put('(', 1);
            put('+', 2);
            put('-', 2);
            put('*', 3);
            put('/', 3);
        }
    };

    public int calculate(String s) {
        final int N = s.length();
        Stack < Integer > nums = new Stack < > ();
        Stack < Character > ops = new Stack < > ();
        for (int i = 0; i < N; i++) {
            char c = s.charAt(i);
            if (Character.isDigit(c)) {
                int num = 0;
                while (i < N && Character.isDigit(s.charAt(i))) {
                    num = num * 10 + (s.charAt(i++) - '0');
                }
                nums.push(num);
                i--;
            } else if (c == '(') {
                ops.push(c);
            } else if (c == ')') {
                while (ops.peek() != '(') {
                    calc(nums, ops);
                }
                ops.pop(); // pop '('
            } else if (c == '+' || c == '-' || c == '*' || c == '/') {
                while (!ops.isEmpty() && priority.get(ops.peek()) >= priority.get(c)) {
                    calc(nums, ops);
                }
                ops.push(c);
            } else {
                // c == ' ', do nothing
            }
        }
        while (!ops.isEmpty()) {
            calc(nums, ops);
        }
        return nums.pop();
    }

    private static void calc(Stack < Integer > nums, Stack < Character > ops) {
        int b = nums.pop(), a = nums.pop();
        int result = 0;
        switch (ops.pop()) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }
        nums.push(result);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Basic Calculator III
class Solution {
public:
    int calculate(const string &s) {
        const int N = s.length();
        stack<int> nums;
        stack<char> ops;
        for (int i = 0; i < N; i++) {
            const char c = s[i];
            if (isdigit(c)) {
                int num = 0;
                while (i < N && isdigit(s[i])) {
                    num = num * 10 + (s[i++] - '0');
                }
                nums.push(num);
                i--;
            } else if (c == '(') {
                ops.push(c);
            } else if (c == ')') {
                while (ops.top() != '(') {
                    calc(nums, ops);
                }
                ops.pop(); // pop '('
            } else if (c == '+' || c == '-' || c == '*' || c == '/') {
                while (!ops.empty() && priority[ops.top()] >= priority[c]) {
                    calc(nums, ops);
                }
                ops.push(c);
            } else {
                // c == ' ', do nothing
            }
        }
        while (!ops.empty()) {
            calc(nums, ops);
        }
        return nums.top();
    }
private:
    void calc(stack<int> &nums, stack<char> &ops) {
        int b = nums.top(); nums.pop();
        int a = nums.top(); nums.pop();
        int result = 0;
        int op = ops.top(); ops.pop();
        switch (op) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }
        nums.push(result);
    }
private:
    unordered_map<char, int> priority = {{'(', 1}, {'+', 2}, {'-', 2},{'*', 3}, {'/', 3}};
};
```

</TabItem>

<TabItem value="python">

```python
# Basic Calculator III
class Solution:
    priority = {
        '(': 1,
        '+': 2,
        '-': 2,
        '*': 3,
        '/': 3
    }

    def calculate(self, s: str) -> int:
        N = len(s)
        nums = []
        ops = []
        i = 0
        while i < N:
            c = s[i]
            if c.isdigit():
                num = 0
                while i < N and s[i].isdigit():
                    num = num * 10 + int(s[i])
                    i += 1
                nums.append(num)
                i -= 1
            elif c == '(':
                ops.append(c)
            elif c == ')':
                while ops[-1] != '(':
                    self.calc(nums, ops)
                ops.pop()  # pop '('
            elif c in '+-*/':
                while ops and self.priority.get(ops[-1]) >= self.priority.get(c):
                    self.calc(nums, ops)
                ops.append(c)
            else:
                # c == ' ', do nothing
                pass
            i += 1

        while ops:
            self.calc(nums, ops)
        return nums.pop()

    @staticmethod
    def calc(nums, ops):
        b = nums.pop()
        a = nums.pop()
        op = ops.pop()
        if op == '+':
            result = a + b
        elif op == '-':
            result = a - b
        elif op == '*':
            result = a * b
        else:  # op == '/'
            result = a // b
        nums.append(result)
```

</TabItem>
</Tabs>

- [Basic Calculator](basic-calculator.md)
- [Basic Calculator II](basic-calculator-ii.md)
- [Build Binary Expression Tree From Infix Expression](build-binary-expression-tree-from-infix-expression.md)
