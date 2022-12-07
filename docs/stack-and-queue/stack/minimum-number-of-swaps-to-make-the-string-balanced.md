---
title: Minimum Number of Swaps to Make the String Balanced
---

### 描述

TODO

### 分析

设置一个stack，碰到左括号，入栈；碰到右括号时，如果栈大于0，弹出一个左括号，如果栈为空，说明当前右括号非法。遍历结束后，查看栈里有多少个元素，取其一半，即为所需要的交换次数，如果栈里有奇数个左括号，则向上取整。

实际代码中，不需要真的创建一个栈，用一个整数 `count`来表示栈里左括号的个数，`count++`表示入栈, `count--`表示出栈。

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
// Minimum Number of Swaps to Make the String Balanced
// Time complexity: O(n)
// Space complexity: O(1)
class Solution {
    public int minSwaps(String s) {
        int count = 0;
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if(c == '['){
                count++;
            } else if(count > 0){
                count--;
            }
        }

        return (count + 1) / 2;
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

### 相关题目

- [Minimum Add to Make Parentheses Valid](minimum-add-to-make-parentheses-valid.md)
