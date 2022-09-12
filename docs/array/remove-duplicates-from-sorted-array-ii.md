---
title: Remove Duplicates from Sorted Array II
---

### 描述

Follow up for "Remove Duplicates": What if duplicates are allowed at most twice?

For example, given sorted array `A = [1,1,1,2,2,3]`, your function should return length = `5`, and A is now `[1,1,2,2,3]`

### 分析

加一个变量记录一下元素出现的次数即可。这题因为是已经排序的数组，所以一个变量即可解决。如果是没有排序的数组，则需要引入一个 hashmap 来记录出现次数。

### 代码 1

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
# Remove Duplicates from Sorted Array II
# Time complexity: O(n), Space Complexity: O(1)
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        N = 2
        if len(nums) <= N:
            return len(nums)

        slow = N
        for fast in range(N, len(nums)):
            if nums[fast] != nums[slow-N]:
                nums[slow] = nums[fast]
                slow += 1

        return slow
```

</TabItem>
<TabItem value="java">

```java
// Remove Duplicates from Sorted Array II
// Time complexity: O(n), Space Complexity: O(1)
public class Solution {
    public int removeDuplicates(int[] nums) {
        final int N = 2;
        if (nums.length <= N) return nums.length;

        int slow = N;
        for (int fast = N; fast < nums.length; fast++){
            if (nums[fast] != nums[slow - N])
                nums[slow++] = nums[fast];
        }

        return slow;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove Duplicates from Sorted Array II
// Time complexity: O(n), Space Complexity: O(1)
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        const int N = 2;
        if (nums.size() <= N) return nums.size();

        int slow = N;
        for (int fast = N; fast < nums.size(); fast++){
            if (nums[fast] != nums[slow-N])
                nums[slow++] = nums[fast];
        }

        return slow;
    }
};
```

</TabItem>
</Tabs>

### 代码 2

下面是一个更简洁的版本。上面的代码略长，不过扩展性好一些，例如将`occur < 2`改为`occur < 3`，就变成了允许重复最多 3 次。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Remove Duplicates from Sorted Array II
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public int removeDuplicates(int[] nums) {
        int n = nums.length;
        int index = 0;
        for (int i = 0; i < n; ++i) {
            if (i > 0 && i < n - 1 && nums[i] == nums[i - 1] && nums[i] == nums[i + 1])
                continue;

            nums[index++] = nums[i];
        }
        return index;
    }
};

```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove Duplicates from Sorted Array II
// Time Complexity: O(n), Space Complexity: O(1)
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        const int n = nums.size();
        int index = 0;
        for (int i = 0; i < n; ++i) {
            if (i > 0 && i < n - 1 && nums[i] == nums[i - 1] && nums[i] == nums[i + 1])
                continue;

            nums[index++] = nums[i];
        }
        return index;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Remove Duplicates from Sorted Array](remove-duplicates-from-sorted-array.md)
- [Remove Element](remove-element.md)
- [Move Zeroes](move-zeroes.md)
- [Remove Duplicates from Sorted List](../linked-list/remove-duplicates-from-sorted-list.md)
