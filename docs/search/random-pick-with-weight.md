---
title: Random Pick with Weight
---

### 描述

You are given an array of positive integers `w` where `w[i]` describes the weight of `i`<sup>th</sup> index (0-indexed).

We need to call the function `pickIndex()` which **randomly** returns an integer in the range `[0, w.length - 1]`. pickIndex() should return the integer proportional to its weight in the `w` array. For example, for `w = [1, 3]`, the probability of picking the index `0` is `1 / (1 + 3) = 0.25` (i.e 25%) while the probability of picking the index `1` is `3 / (1 + 3) = 0.75` (i.e 75%).

More formally, the probability of picking index `i` is `w[i] / sum(w)`.

**Example 1**:

> **Input**:
> ["Solution","pickIndex"]  
> [[[1]],[]]  
> **Output**:  
> [null,0]
>
> **Explanation**:  
> Solution solution = new Solution([1]);  
> solution.pickIndex(); // return 0. Since there is only one single element on the array  
> the only option is to return the first element.

**Example 2**:

> **Input**:
> ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]  
> [[[1,3]],[],[],[],[],[]]  
> **Output**:  
> [null,1,1,1,1,0]
>
> **Explanation**:  
> Solution solution = new Solution([1, 3]);  
> solution.pickIndex(); // return 1. It's returning the second element (index = 1) that has probability of 3/4.  
> solution.pickIndex(); // return 1  
> solution.pickIndex(); // return 1  
> solution.pickIndex(); // return 1  
> solution.pickIndex(); // return 0. It's returning the first element (index = 0) that has probability of 1/4.
>
> Since this is a randomization problem, multiple answers are allowed so the following outputs can be considered correct :  
> [null,1,1,1,1,0]  
> [null,1,1,1,1,1]  
> [null,1,1,1,0,0]  
> [null,1,1,1,0,1]  
> [null,1,0,1,0,0]  
> ......  
> and so on.

**Constraints**:

- $1 \leq w.length \leq 10000$
- $1 \leq w[i] \leq 10^5$
- `pickIndex()` will be called at most 10000 times.

### 分析

先构造一个累加的概率数组，然后用二分查找。

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
// Random Pick with Weight
class Solution {
    private double[] p; // probability of each element

    // Time Complexity: O(n), Space Complexity: O(n)
    public Solution(int[] w) {
        double sum = 0;
        for(int x : w) sum += x;

        this.p = new double[w.length];
        for(int i = 0; i < w.length; i++){
            w[i] += (i == 0) ? 0 : w[i - 1];
            p[i] = w[i] / sum;
        }
    }

    // Time Complexity: O(logn), Space Complexity: O(1)
    public int pickIndex() {
        // upper bound
        return Math.abs(Arrays.binarySearch(this.p, Math.random())) - 1;
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
# Random Pick with Weight
from bisect import bisect_left
import random

class Solution:
    # Time Complexity: O(n), Space Complexity: O(n)
    def __init__(self, w: list[int]):
        self.p = [] # probability of each element
        sum_w = sum(w)
        curr_sum = 0
        for x in w:
            curr_sum += x
            self.p.append(curr_sum / sum_w)

    # Time Complexity: O(logn), Space Complexity: O(1)
    def pickIndex(self) -> int:
        # upper bound
        return bisect_left(self.p, random.random())
```

</TabItem>
</Tabs>

### 相关题目

- [Search Insert Position](search-insert-position.md)
