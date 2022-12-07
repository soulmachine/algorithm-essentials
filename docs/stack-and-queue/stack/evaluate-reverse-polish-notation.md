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

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 递归版

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
// Recursive
// Time Complexity: O(n)，Space Complexity: O(n)
class Solution {
    private int top;

    public int evalRPN(String[] tokens) {
        top = tokens.length-1;
        return dfs(tokens);
    }

    public int dfs(String[] tokens) {
        String token = tokens[top--];
        if (!"+-*/".contains(token)) {
            return Integer.parseInt(token);
        } else {
            int y = dfs(tokens);
            int x = dfs(tokens);
            switch (token) {
                case "+": return x + y;
                case "-": return x - y;
                case "*": return x * y;
                default: return x / y;
            }
        }
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
    int evalRPN(vector<string>& tokens) {
        const string& token = tokens.back(); tokens.pop_back();
        if (string("+-*/").find(token) == string::npos) {
            return std::stoi(token);
        } else {
            int y = evalRPN(tokens);
            int x = evalRPN(tokens);
            switch(token[0]) {
                case '+' : return x + y;
                case '-' : return x - y;
                case '*' : return x * y;
                default:   return x / y;
            }
        }
    }
};
```

</TabItem>
</Tabs>

#### 栈

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
        stack<int64_t> s; // use 64-bit to avoid overflow when x*y
        for (auto token : tokens) {
            if (string("+-*/").find(token) == string::npos) {
                s.push(std::stoi(token));
            } else {
                int64_t y = s.top(); s.pop();
                int64_t x = s.top(); s.pop();
                switch(token[0]) {
                    case '+' : x += y; break;
                    case '-' : x -= y; break;
                    case '*' : x *= y; break;
                    default:   x /= y;
                }
                s.push(x);
            }
        }
        return (int)s.top();
    }
};
```

</TabItem>
</Tabs>
