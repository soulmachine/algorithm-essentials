---
title: Majority Element II
---

### 描述

Given an integer array of size `n`, find all elements that appear more than `⌊ n/3 ⌋` times.

Follow-up: Could you solve the problem in linear time and in O(1) space?

**Example 1**:

> **Input**: nums = [3,2,3]  
> **Output**: [3]

**Example 2**:

> **Input**: nums = [1] > **Output**: [1]

**Example 3**:

> **Input**: nums = [1,2] > **Output**: [1,2]

**Constraints**:

- 1 \leq nums.length \leq 5 \times 10^4
- -10^9 \leq nums[i] \leq 10^9

### 分析

给定一个长度为`n`的数组，我们知道下面一些结论是成立的：

- 最多只有**一个**元素能出现超过 `⌊n/2⌋` 次.
- 最多只有**两个**元素能出现超过 `⌊n/3⌋` 次.
- 最多只有**三个**元素能出现超过 `⌊n/4⌋` 次.

以此类推。

Boyer-Moore 投票算法就是依据上面的原理而实现的。

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
# Majority Element II
# Time Complexity: O(nlogn), Space Complexity: O(1)
class Solution(object):
    def majorityElement(self, nums: List[int])->List[int]:
        # 1st pass
        count1, count2 = 0, 0
        # candidates must be initalized to different values
        candidate1, candidate2 = 0, 1

        for num in nums:
            if candidate1 == num:
                count1 += 1
            elif candidate2 == num:
                count2 += 1
            elif count1 == 0:
                candidate1 = num
                count1 = 1
            elif count2 == 0:
                candidate2 = num
                count2 = 1
            else:
                count1 -= 1
                count2 -= 1

        # 2nd pass
        result = []
        for c in [candidate1, candidate2]:
            if nums.count(c) > len(nums)/3:
                result.append(c)

        return result
```

</TabItem>
<TabItem value="java">

```java
// Majority Element II
// Time Complexity: O(nlogn), Space Complexity: O(1)
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        // 1st pass
        int count1 = 0, count2 = 0;
        // candidates must be initalized to different values
        int candidate1 = 0, candidate2 = 1;

        for (int num : nums) {
            if (candidate1 == num) {
                count1++;
            } else if (candidate2 == num) {
                count2++;
            } else if (count1 == 0) {
                candidate1 = num;
                count1 = 1;
            } else if (count2 == 0) {
                candidate2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        // 2nd pass
        List<Integer> result = new ArrayList<>();
        count1 = 0;
        count2 = 0;
        for (int num : nums) {
            if (candidate1 == num) count1++;
            if (candidate2 == num) count2++;
        }

        if (count1 > nums.length/3) result.add(candidate1);
        if (count2 > nums.length/3) result.add(candidate2);

        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Majority Element II
// Time Complexity: O(nlogn), Space Complexity: O(1)
class Solution {
public:
    vector<int> majorityElement(const vector<int>& nums) {
        // 1st pass
        int count1 = 0, count2 = 0;
        // candidates must be initalized to different values
        int candidate1 = 0, candidate2 = 1;

        for (int num : nums) {
            if (candidate1 == num) {
                count1++;
            } else if (candidate2 == num) {
                count2++;
            } else if (count1 == 0) {
                candidate1 = num;
                count1 = 1;
            } else if (count2 == 0) {
                candidate2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        // 2nd pass
        vector<int> result;
        for (int c : vector<int>{candidate1, candidate2}) {
            if (std::count(nums.begin(), nums.end(), c) > nums.size()/3) {
                result.push_back(c);
            }
        }

        return result;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Majority Element](majority-element.md)
