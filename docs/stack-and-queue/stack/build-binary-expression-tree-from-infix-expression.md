---
title: Build Binary Expression Tree From Infix Expression
---

### 描述

TODO

### 分析

这题与[Basic Calculator III](basic-calculator-iii.md)很类似，唯一的不同是输出结果上，本题是输出一棵树，后者只需要输出一个计算结果。所以本题的代码也很类似，设置两个栈，一个数字栈，一个操作符栈，不过数字栈里存放的是二叉树节点。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="cpp"
values={[
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

    public Node expTree(String s) {
        final int N = s.length();
        Stack < Node > nums = new Stack < > ();
        Stack < Character > ops = new Stack < > ();
        for (int i = 0; i < N; i++) {
            char c = s.charAt(i);
            if (Character.isDigit(c)) {
                nums.push(new Node(c));
            } else if (c == '(') {
                ops.push(c);
            } else if (c == ')') {
                while (ops.peek() != '(') {
                    combine(ops, nums);
                }
                ops.pop(); // pop '('
            } else if (c == '+' || c == '-' || c == '*' || c == '/') {
                while (!ops.isEmpty() && priority.get(ops.peek()) >= priority.get(c)) {
                    combine(ops, nums);
                }
                ops.push(c);
            } else {
                // c == ' ', do nothing
            }
        }
        while (!ops.isEmpty()) {
            combine(ops, nums);
        }
        return nums.pop();
    }
    
    private void combine(Stack<Character> ops, Stack<Node> nums) {
        Node root = new Node(ops.pop());
        root.right = nums.pop();
        root.left = nums.pop();
    
        nums.push(root);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Build Binary Expression Tree From Infix Expression
class Solution {
public:
    Node* expTree(const string &s) {
        const int N = s.length();
        stack<Node*> nums;
        stack<char> ops;
        for (int i = 0; i < N; i++) {
            const char c = s[i];
            if (isdigit(c)) {
                nums.push(new Node(c));
            } else if (c == '(') {
                ops.push(c);
            } else if (c == ')') {
                while (ops.top() != '(') {
                    combine(ops, nums);
                }
                ops.pop(); // pop '('
            } else if (c == '+' || c == '-' || c == '*' || c == '/') {
                while (!ops.empty() && priority[ops.top()] >= priority[c]) {
                    combine(ops, nums);
                }
                ops.push(c);
            } else {
                // c == ' ', do nothing
            }
        }
        while (!ops.empty()) {
            combine(ops, nums);
        }
        return nums.top();
    }
private:
    void combine(stack<char> &ops, stack<Node*> &nums) {
        Node *root = new Node(ops.top()); ops.pop();
        root->right = nums.top(); nums.pop();
        root->left = nums.top(); nums.pop();
        nums.push(root);
    }
private:
    unordered_map<char, int> priority = {{'(', 1}, {'+', 2}, {'-', 2},{'*', 3}, {'/', 3}};
};
```

</TabItem>
</Tabs>

### 相关题目

- [Basic Calculator](basic-calculator.md)
- [Basic Calculator II](basic-calculator-ii.md)
- [Basic Calculator III](basic-calculator-iii.md)
