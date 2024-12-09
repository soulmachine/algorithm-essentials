---
title: Reorganize String
---

### 描述

TODO

### 分析

TODO

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
// https://www.cnblogs.com/grandyang/p/8799483.html
class Solution {
public:
    string reorganizeString(string S) {
        string result = "";
        unordered_map<char, int> m;
        priority_queue<pair<int, char>> q; // max heap
        for (char c : S) ++m[c];
        for (auto a : m) {
            if (a.second > (S.size() + 1) / 2) return "";
            q.push({a.second, a.first});
        }
        while (q.size() >= 2) {
            auto t1 = q.top(); q.pop();
            auto t2 = q.top(); q.pop();
            result.push_back(t1.second);
            result.push_back(t2.second);
            if (--t1.first > 0) q.push(t1);
            if (--t2.first > 0) q.push(t2);
        }
        if (!q.empty()) result.push_back(q.top().second);
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# No Java code was provided to translate.

Use `pass` as a placeholder in Python when there's no code yet:

def todo():
    pass
```

</TabItem>
</Tabs>

### 相关题目

- [Meeting Rooms](../../array/meeting-rooms.md)
