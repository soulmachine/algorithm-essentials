---
title: Frog Jump
---

### 描述

A frog is crossing a river. The river is divided into x units and at each unit there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.

Given a list of stones' positions (in units) in sorted ascending order, determine if the frog is able to cross the river by landing on the last stone. Initially, the frog is on the first stone and assume the first jump must be 1 unit.

If the frog's last jump was k units, then its next jump must be either k - 1, k, or k + 1 units. Note that the frog can only jump in the forward direction.

**Note**:

- The number of stones is ≥ 2 and is < 1,100.
- Each stone's position will be a non-negative integer < $2^{31}$.
- The first stone's position is always 0.

**Example 1**:

> **[0,1,3,5,6,8,12,17]**
>
> There are a total of 8 stones.  
> The first stone at the 0th unit, second stone at the 1st unit,  
> third stone at the 3rd unit, and so on...  
> The last stone at the 17th unit.
>
> **Return true**. The frog can jump to the last stone by jumping  
> 1 unit to the 2nd stone, then 2 units to the 3rd stone, then  
> 2 units to the 4th stone, then 3 units to the 6th stone,  
> 4 units to the 7th stone, and 5 units to the 8th stone.

**Example 2**:

> [0,1,2,3,4,8,9,11]
>
> **Return false**. There is no way to jump to the last stone as
> the gap between the 5th and 6th stone is too large.

### 分析

用一个 HashMap, key 为石头的位置，value 是一个整数集合, 其中每个整数表示 jumpsize, 表示可以通过大小为 jumpsize 的一跳可以到达当前石头位置。

首先初始化该 HashMap, 位置 0 对应 value 为一个包含 0 的集合，其余都初始化为空集。接下来，遍历整个石头列表，对每个石头，遍历 value 中每个 jumpsize，判断位置 currentPosition + newjumpsize 是否存在于 HashMap 中，对于每个 jumpsizej，newjumpsize 分别为 jumpsize-1, jumpsize，jumpsize+1。如果找到了，就在对应的 value 集合里新增 newjumpsize。重复这个过程直到结束。如果在结束的时候，最后一个位置对应的集合非空，那也就意味着我们可以到达终点，如果还是空集那就意味着不能到达终点。

时间复杂度 O($n^2$)，因为有两层循环。空间复杂度 O($n^2$)，因为 HashMap 最大可以涨到$n^2$。

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
<TabItem value="python">

```python
# Frog Jump
# Dynamic programming
# Time Complexity: O(n^2), Space Complexity : O(n^2)
class Solution:
    def canCross(self, stones: List[int]) -> bool:
        m = {}
        for i in range(len(stones)):
            m[stones[i]] = set()
        m[0].add(0)

        for i in range(len(stones)):
            for k in m[stones[i]]:
                for step in range(k-1, k+2):
                    if step > 0 and (stones[i] + step) in m:
                        m[stones[i] + step].add(step)
        return len(m[stones[-1]]) > 0
```

</TabItem>
<TabItem value="java">

```java
// Frog Jump
// Dynamic programming
// Time Complexity: O(n^2), Space Complexity : O(n^2)
class Solution {
    public boolean canCross(int[] stones) {
        Map<Integer, Set<Integer>> map = new HashMap<>();
        for (int i = 0; i < stones.length; i++) {
            map.put(stones[i], new HashSet<Integer>());
        }
        map.get(0).add(0);

        for (int i = 0; i < stones.length; i++) {
            for (int k : map.get(stones[i])) {
                for (int step = k - 1; step <= k + 1; step++) {
                    if (step > 0 && map.containsKey(stones[i] + step)) {
                        map.get(stones[i] + step).add(step);
                    }
                }
            }
        }
        return map.get(stones[stones.length - 1]).size() > 0;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Frog Jump
// Dynamic programming
// Time Complexity: O(n^2), Space Complexity : O(n^2)
class Solution {
public:
    bool canCross(vector<int>& stones) {
        unordered_map<int, unordered_set<int>> map;
        for (int i = 0; i < stones.size(); i++) {
            map[stones[i]] = unordered_set<int>();
        }
        map[0].insert(0);

        for (int i = 0; i < stones.size(); i++) {
            for (int k : map[stones[i]]) {
                for (int step = k - 1; step <= k + 1; step++) {
                    if (step > 0 && map.count(stones[i] + step)) {
                        map[stones[i] + step].insert(step);
                    }
                }
            }
        }
        return map[stones[stones.size() - 1]].size() > 0;
    }
};

```

</TabItem>
</Tabs>
