---
title: Pascal's Triangle II
---

### 描述

Given an index `k`, return the `k`-th row of the Pascal's triangle.

For example, given `k = 3`,

Return `[1,3,3,1]`.

Note: Could you optimize your algorithm to use only `O(k)` extra space?

### 分析

滚动数组。

#### 代码

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
// Pascal's Triangle II
// 滚动数组，时间复杂度O(n^2)，空间复杂度O(n)
public class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> array = new ArrayList<>();
        for (int i = 0; i <= rowIndex; i++) {
            for (int j = i - 1; j > 0; j--){
                array.set(j, array.get(j - 1) + array.get(j));
            }
            array.add(1);
        }
        return array;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// LeetCode, Pascal's Triangle II
// 滚动数组，时间复杂度O(n^2)，空间复杂度O(n)
class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> array;
        for (int i = 0; i <= rowIndex; i++) {
            for (int j = i - 1; j > 0; j--){
                array[j] = array[j - 1] + array[j];
            }
            array.push_back(1);
        }
        return array;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Pascal's Triangle](pascals-triangle.md)
