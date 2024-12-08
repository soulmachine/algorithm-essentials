---
title: Task Scheduler
---

### 描述

Given a characters array `tasks`, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer `n` that represents the cooldown period between two **same tasks** (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.

**Example 1**:

> **Input**: tasks = ["A","A","A","B","B","B"], n = 2  
> **Output**: 8  
> **Explanation**:  
> A -> B -> idle -> A -> B -> idle -> A -> B  
> There is at least 2 units of time between any two same tasks.

**Example 2**:

> **Input**: tasks = ["A","A","A","B","B","B"], n = 0  
> **Output**: 6  
> **Explanation**: On this case any permutation of size 6 would work since n = 0.  
> ["A","A","A","B","B","B"]  
> ["A","B","A","B","A","B"]  
> ["B","B","B","A","A","A"]  
> ...  
> And so on.

**Example 3**:

> **Input**: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2  
> **Output**: 16  
> **Explanation**:  
> One possible solution is  
> A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

**Constraints**:

- $1 \leq task.length \leq $10^4$
- tasks[i] is upper-case English letter.
- The integer `n` is in the range `[0, 100]`.

### 分析

想要最小化总时间，就要尽可能的减小空闲的时间。假设某个任务出现的次数最多，用`f_max`表示，那么空闲时间理论上最大值就是 `(f_max-1) * n`，我们可以往这 `n-1`个空挡中，尽可能的插入别的任务。每一轮循环，选择频率最高的任务，在每个空挡中都插入该任务，并把该任务的频率减掉`f_max-1`。这是典型的贪心策略。

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
// Task Scheduler
// Time Complexity: O(n), Space Complexity: O(1)
class Solution {
    public int leastInterval(char[] tasks, int n) {
        // frequencies of the tasks
        int[] m = new int[26];
        for (int t : tasks) m[t - 'A']++;
        Arrays.sort(m);

        int f_max = m[25];
        int idle_time = (f_max - 1) * n;

        for (int i = 24; i >= 0 && idle_time > 0; --i) {
            idle_time -= Math.min(f_max - 1, m[i]);
        }
        idle_time = Math.max(0, idle_time);

        return idle_time + tasks.length;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>

<TabItem value="python">

```python
# Task Scheduler
# Time Complexity: O(n), Space Complexity: O(1)
def leastInterval(tasks: list[str], n: int) -> int:
    # frequencies of the tasks
    m = [0] * 26
    for t in tasks:
        m[ord(t) - ord('A')] += 1
    m.sort()

    f_max = m[25]
    idle_time = (f_max - 1) * n

    for i in range(24, -1, -1):
        if idle_time <= 0:
            break
        idle_time -= min(f_max - 1, m[i])
    idle_time = max(0, idle_time)

    return idle_time + len(tasks)
```

</TabItem>
</Tabs>
