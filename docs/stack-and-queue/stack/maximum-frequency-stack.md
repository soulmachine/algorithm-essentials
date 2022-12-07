---
title: Maximum Frequency Stack
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
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// https://www.cnblogs.com/grandyang/p/10989417.html
class FreqStack {
public:
    FreqStack() {}
    
    void push(int x) {
        mxFreq = max(mxFreq, ++freq[x]);
        m[freq[x]].push_back(x);
    }
    
    int pop() {
        int x = m[mxFreq].back(); 
        m[mxFreq].pop_back();
        if (m[freq[x]--].empty()) --mxFreq;
        return x;
    }
    
private:
    int mxFreq;
    unordered_map<int, int> freq;
    unordered_map<int, vector<int>> m;
};
```

</TabItem>
</Tabs>
