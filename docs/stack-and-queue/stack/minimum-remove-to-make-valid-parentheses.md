---
title: Minimum Remove to Make Valid Parentheses
---

### 描述

TODO

### 分析

设置一个stack，碰到左括号，入栈；碰到右括号时，如果栈顶元素是左括号，弹出，否则压入右括号。遍历结束后，栈里残留的括号（包括左括号和右括号）都是需要删除的。

### 代码

#### 栈

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
<TabItem value="python">

```python
# TODO
```

</TabItem>
<TabItem value="java">

```java
// Minimum Remove to Make Valid Parentheses
// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
    public String minRemoveToMakeValid(String s) {
        Stack<Integer> stack = new Stack<>();
        for(int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if(c == '(') {
                stack.push(i);
            } else if(c == ')') {
                if(!stack.isEmpty() && s.charAt(stack.peek()) == '(') {
                    stack.pop();
                }  else {
                    stack.push(i);
                }
            }
        }
        
        HashSet<Integer> removeSet = new HashSet<>();
        while(!stack.isEmpty()) {
            removeSet.add(stack.pop());
        }
        
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < s.length(); i++) {
            if(!removeSet.contains(i)) {
                sb.append(s.charAt(i));
            }
        }
        return sb.toString();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>
</Tabs>

#### 优化版本

可以吧上面的代码优化一下，把栈和hashset消除掉，空间复杂度虽然还是O(n)，但是常量变小了。

用两个变量 `left` 和 `right`，分别表示左右括号的个数。先遍历一遍给定字符串s，统计出所有的右括号的个数。然后再次遍历给定字符串s，若遇左扩号了，判断若此时 `left` 和 `right` 相等了，说明后面没有多余的右括号了，此时的左括号就是非法的，则直接跳过，否则就让 `left` 自增1。若遇到右括号了，则 `right` 先自减1，因为 `right` 表示的是后面还有的右括号的个数，若此时 `left` 等于0了，说明前面没有对应的左括号了，则直接跳过，否则 `left` 自减1。对于所有没有 continue 的情况，则均加入到结果 `result` 中，表示对应的字母，或者左右括号就是合法的

<Tabs
defaultValue="cpp"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# TODO
```

</TabItem>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Minimum Remove to Make Valid Parentheses
// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
public:
    string minRemoveToMakeValid(string s) {
        string result;
        int left = 0, right = 0;
        for (char c : s) {
            if (c == ')') ++right;
        }
        for (char c : s) {
            if (c == '(') {
                if (left == right) continue;
                ++left;
            } else if (c == ')') {
                --right;
                if (left == 0) continue;
                --left;
            }
            result += c;
        }
        return result;
    }
};
```

</TabItem>
</Tabs>
