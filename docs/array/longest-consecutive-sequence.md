---
title: Longest Consecutive Sequence
---

### 描述

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given `[100, 4, 200, 1, 3, 2]`,
The longest consecutive elements sequence is `[1, 2, 3, 4]`. Return its length: 4.

Your algorithm should run in `O(n)` complexity.

### 分析

如果允许$$O(n \log n)$$的复杂度，那么可以先排序，可是本题要求`O(n)`。

由于序列里的元素是无序的，又要求`O(n)`，首先要想到用哈希表。

用一个哈希表存储所有出现过的元素，对每个元素，以该元素为中心，往左右扩张，直到不连续为止，记录下最长的长度。可以对这个过程略作优化，只需往右扩张：对每个元素`x`，先看一下`x-1`是否在hashset中存在，若不存在，说明左边有个断点，`x`是新片段的起点，只需向右扩张。

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
# Longest Consecutive Sequence
# Time Complexity: O(n)，Space Complexity: O(n)
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        s = set(nums)
        longest = 0

        for num in s:
            if num-1 not in s:
                current_num = num
                length = 1

                while current_num+1 in s:
                    current_num += 1
                    length +=1

                longest = max(longest, length)

        return longest
```

</TabItem>
<TabItem value="java">

```java
// Longest Consecutive Sequence
// Time Complexity: O(n)，Space Complexity: O(n)
class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> s = new HashSet<Integer>();
        for (int num : nums) {
            s.add(num);
        }

        int longest = 0;

        for (int num : s) {
            if (!s.contains(num-1)) {
                int currentNum = num;
                int length = 1;

                while (s.contains(currentNum+1)) {
                    currentNum += 1;
                    length += 1;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Longest Consecutive Sequence
// Time Complexity: O(n)，Space Complexity: O(n)
class Solution {
public:
    int longestConsecutive(const vector<int> &nums) {
        unordered_set<int> my_set;
        for (auto i : nums) my_set.insert(i);

        int longest = 0;
        for (auto i : nums) {
            if (my_set.find(i - 1) == my_set.end()) { // gap exists, a new streak starts
                int length = 0;
                for (int j = i; my_set.find(j) != my_set.end(); j++) {
                    length += 1;
                }
                longest = max(longest, length);
            }
        }
        return longest;
    }
};
```

</TabItem>
</Tabs>
