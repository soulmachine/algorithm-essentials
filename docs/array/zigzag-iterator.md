---
title: Zigzag Iterator
---

### 描述

TODO

### 分析

细节实现题。


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
// Zigzag Iterator
public class ZigzagIterator {
    private Iterator<Integer> i, j, tmp;

    public ZigzagIterator(List<Integer> v1, List<Integer> v2) {
        j = v1.iterator();
        i = v2.iterator();
    }

    public int next() {
        if (j.hasNext()) { tmp = j; j = i; i = tmp; }
        return i.next();
    }

    public boolean hasNext() {
        return i.hasNext() || j.hasNext();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Zigzag Iterator
class ZigzagIterator {
public:
    ZigzagIterator(vector<int>& v1, vector<int>& v2) {
        j = v1.cbegin(), j_end = v1.cend();
        i = v2.cbegin(), i_end = v2.cend();
    }

    int next() {
        if (j != j_end) {std::swap(i, j); std::swap(i_end, j_end);}
        return *i++;
    }

    bool hasNext() {
        return i != i_end || j != j_end;
    }
private:
    vector<int>::const_iterator i, j, i_end, j_end;
};
```

</TabItem>

<TabItem value="python">

```python
# Zigzag Iterator
class ZigzagIterator:
    def __init__(self, v1, v2):
        self.j = iter(v1)
        self.i = iter(v2)
        self.tmp = None

    def next(self):
        if self.j.__length_hint__() > 0:
            self.tmp = self.j
            self.j = self.i
            self.i = self.tmp
        return next(self.i)

    def has_next(self):
        return self.i.__length_hint__() > 0 or self.j.__length_hint__() > 0
```

</TabItem>
</Tabs>
