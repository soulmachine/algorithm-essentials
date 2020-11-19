---
title: All O(1) Data Structure
---

### 描述

Implement a data structure supporting the following operations:

1. `Inc(Key)` - Inserts a new key with value 1. Or increments an existing key by 1. Key is 1. guaranteed to be a **non-empty** string.
1. `Dec(Key)` - If Key's value is 1, remove it from the data structure. Otherwise decrements an existing key by 1. If the key does not exist, this function does nothing. Key is guaranteed to be a **non-empty** string.
1. `GetMaxKey()` - Returns one of the keys with maximal value. If no element exists, return an empty string "".
1. `GetMinKey()` - Returns one of the keys with minimal value. If no element exists, return an empty string "".

Challenge: Perform all these in O(1) time complexity.

### 分析

跟 [LRU Cache](lru-cache)很类似，用两个 HashMap 和一个双向链表。

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
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>
</Tabs>

### 相关题目

- [LRU Cache](lru-cache.md)
