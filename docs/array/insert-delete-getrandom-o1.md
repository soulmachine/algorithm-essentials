---
title: Insert Delete GetRandom O(1)
---

### 描述

TODO

### 分析

乍一看似乎用一个hashset就可以搞定，但是hashset无法在常数时间内获取随机数，所以只能另辟蹊径。

正解是用一个一维数组和一个 HashMap，其中数组用来保存数字，HashMap 用来建立每个数字和其在数组中的位置之间的映射，

* 对于插入操作，先看这个数字是否已经在 HashMap 中存在，如果存在的话直接返回 false，不存在的话，将其插入到数组的末尾，然后建立数字和其位置的映射。
* 删除操作是比较 tricky 的，还是要先判断其是否在 HashMap 里，如果没有，直接返回 false。由于 HashMap 的删除是常数时间的，而数组并不是，为了使数组删除也能常数级，实际上将要删除的数字和数组的最后一个数字调换个位置，然后修改对应的 HashMap 中的值，这样只需要删除数组的最后一个元素即可，保证了常数时间内的删除。
* 返回随机数对于数组来说就很简单了，只要随机生成一个位置，返回该位置上的数字即可。

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
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Insert Delete GetRandom O(1)
class RandomizedSet {
public:
    RandomizedSet() {}

    bool insert(int val) {
        if (m.count(val)) return false;
        nums.push_back(val);
        m[val] = nums.size() - 1;
        return true;
    }

    bool remove(int val) {
        if (!m.count(val)) return false;
        int last = nums.back();
        // swap val and last
        m[last] = m[val];
        nums[m[val]] = last;
        nums.pop_back();
        m.erase(val);
        return true;
    }

    int getRandom() {
        return nums[rand() % nums.size()];
    }

private:
    vector<int> nums;
    unordered_map<int, int> m; // num -> index
};
```

</TabItem>
</Tabs>
