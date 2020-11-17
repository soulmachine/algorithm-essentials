---
title: Evaluate Reverse Polish Notation
---

### 描述

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are `+, -, *, /`. Each operand may be an integer or another expression.

Some examples:

```
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
```

### 分析

逆波兰表达式是典型的递归结构，所以可以用递归来求解，也可以用栈来求解。

### 递归版

递归的写法，C++版可以 AC，但 Java 版会爆栈`StackOverflowError`，所以 Java 只能用栈来解决。

```java
// Evaluate Reverse Polish Notation
// 递归，时间复杂度O(n)，空间复杂度O(logn)
// StackOverflowError
class Solution {
    public int evalRPN(final String[] tokens) {
        return evalRPN(tokens, tokens.length - 1);
    }
    private static int evalRPN(final String[] tokens, int i) {
        if (i < 0) return 0;
        int x, y;
        final String token = tokens[i--];
        if (isOperator(token))  {
            y = evalRPN(tokens, i--);
            x = evalRPN(tokens, i--);

            switch (token.charAt(0)) {
                case '+': x += y; break;
                case '-': x -= y; break;
                case '*': x *= y; break;
                default: x /= y;
            }
        } else  {
            x = Integer.parseInt(token);
        }
        return x;
    }
    private static boolean isOperator(final String op) {
        return op.length() == 1 && OPS.indexOf(op) != -1;
    }
    private static String OPS = new String("+-*/");
}
```

### 栈

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
// Evaluate Reverse Polish Notation
// UsingStack
// Time Complexity: O(n)，Space Complexity: O(n)
class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> s = new Stack<>();
        for (String token : tokens) {
            if (!"+-*/".contains(token)) {
                s.push(Integer.valueOf(token));
            } else {
                int y = s.pop();
                int x = s.pop();
                switch (token) {
                    case "+": x += y; break;
                    case "-": x -= y; break;
                    case "*": x *= y; break;
                    default: x /= y;
                }
                s.push(x);
            }
        }
        return s.peek();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Evaluate Reverse Polish Notation
// UsingStack
// Time Complexity: O(n)，Space Complexity: O(n)
class Solution {
public:
    int evalRPN(vector<string> &tokens) {
        stack<int> s;
        for (auto token : tokens) {
            if (string("+-*/").find(token) == string::npos) {
                s.push(std::stoi(token));
            } else {
                int y = s.top(); s.pop();
                int x = s.top(); s.pop();
                switch(token[0]) {
                    case '+' : x += y; break;
                    case '-' : x -= y; break;
                    case '*' : x *= y; break;
                    default:   x /= y;
                }
                s.push(x);
            }
        }
        return s.top();
    }
};
```

</TabItem>
</Tabs>
