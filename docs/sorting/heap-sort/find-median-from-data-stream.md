---
title: Find Median from Data Stream
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
// Find Median from Data Stream
// Space complexity: On(n)
class MedianFinder {
public:
    // Time complexity: O(logn)
    void addNum(int num) {
        low.push(num);

        high.push(low.top()); // balancing step
        low.pop();

        if (low.size() < high.size()) { // maintain size property
            low.push(high.top());
            high.pop();
        }
    }

    // Time complexity: O(1)
    double findMedian() {
        // low.size() can only be greater or equal to high.size(), see line 12
        return low.size() > high.size() ? low.top() : ((double) low.top() + high.top()) * 0.5;
    }

private:
    priority_queue<int> low;                             // max heap
    priority_queue<int, vector<int>, greater<int>> high; // min heap
};
```

</TabItem>
</Tabs>
