---
title: Remove All Adjacent Duplicates in String
---

### 描述

TODO

### 分析

TODO

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

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
// Remove All Adjacent Duplicates In String
// Time complexity: O(N)
// Space complexity: O(N)
class Solution {
    public String removeDuplicates(String s) {
        final int N = s.length();
        Stack<Character> stk = new Stack<>();
        stk.push(s.charAt(0));
        for(int i = 1; i < N; i++){
            if(!stk.isEmpty() && stk.peek() == s.charAt(i)){
                stk.pop();
            } else {
                stk.push(s.charAt(i));
            }
        }

        StringBuilder sb = new StringBuilder();
        while(!stk.isEmpty()){
            sb.append(stk.pop());
        }
        sb.reverse();
        return sb.toString();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove All Adjacent Duplicates In String
// Time complexity: O(N)
// Space complexity: O(N)
class Solution {
public:
    string removeDuplicates(const string &s) {
        const int N = s.length();
        stack<char> stk;
        stk.push(s[0]);
        for (int i = 1; i < N; i++) {
            const char c = s[i];
            if (!stk.empty() && stk.top() == c) {
                stk.pop();
            } else {
                stk.push(c);
            }
        }
        string result;
        while (!stk.empty()) {
            const char c = stk.top(); stk.pop();
            result.push_back(c);
        }
        std::reverse(result.begin(), result.end());
        return result;
    }
};
```

</TabItem>
</Tabs>
