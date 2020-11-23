---
title: Top K Frequent Words
---

### 描述

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

**Example 1**:

> **Input**: ["i", "love", "leetcode", "i", "love", "coding"], k = 2  
> **Output**: ["i", "love"]  
> **Explanation**: "i" and "love" are the two most frequent words.  
> Note that "i" comes before "love" due to a lower alphabetical order.

**Example 2**:

> **Input**: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4  
> **Output**: ["the", "is", "sunny", "day"]  
> **Explanation**: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

**Note**:

- You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
- Input words contain only lowercase letters.

**Follow up**: Try to solve it in O(n log k) time and O(n) extra space.

### 分析

本题与 [Top K Frequent Elements](top-k-frequent-elements.md) 一模一样。

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
// Top K Frequent Words
// HashMap + Min Heap
// Time Complexity: O(nlogk), Space Complexity: O(n+k)
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        Map<String, Integer> m = new HashMap<>();
        for (String s: words) {
          m.merge(s, 1, Integer::sum);
        }

        // Min heap, sorted by frequency
        PriorityQueue<String> pq = new PriorityQueue<>(
            (x, y) -> m.get(x) == m.get(y)? y.compareTo(x) : m.get(x) - m.get(y));

        for (String s: m.keySet()) {
          pq.offer(s);
          if (pq.size() > k) pq.poll();
        }

        String[] top = new String[k];
        for(int i = k - 1; i >= 0; --i) {
            top[i] = pq.poll();
        }
        return Arrays.asList(top);
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

- [Top K Frequent Elements](top-k-frequent-elements.md)
