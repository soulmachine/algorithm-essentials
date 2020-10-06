---
title: Maximum Product Subarray
---

### 描述

Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array `[2,3,-2,4]`,
the contiguous subarray `[2,3]` has the largest product = `6`.

### 分析

这题跟“最大连续子序列和”非常类似，只不过变成了“最大连续子序列积”，所以解决思路也很类似。

仅仅有一个小细节需要注意，就是负负得正，两个负数的乘积是正数，因此我们不仅要跟踪最大值，还要跟踪最小值。

### 动规

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
// maximum-product-subarray
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int maxProduct(int[] nums) {
        int maxLocal = nums[0];
        int minLocal = nums[0];
        int global = nums[0];

        for(int i = 1; i < nums.length; i++){
            int temp = maxLocal;
            maxLocal = Math.max(Math.max(nums[i] * maxLocal, nums[i]), nums[i] * minLocal);
            minLocal = Math.min(Math.min(nums[i] * temp, nums[i]), nums[i] * minLocal);
            global = Math.max(global, maxLocal);
        }
        return global;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// maximum-product-subarray
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int maxLocal = nums[0];
        int minLocal = nums[0];
        int global = nums[0];

        for(int i = 1; i < nums.size(); i++){
            int temp = maxLocal;
            maxLocal = max(max(nums[i] * maxLocal, nums[i]), nums[i] * minLocal);
            minLocal = min(min(nums[i] * temp, nums[i]), nums[i] * minLocal);
            global = max(global, maxLocal);
        }
        return global;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Maximum Subarray](maximum-subarray.md)
- [Binary Tree Maximum Path Sum](../binary-tree/recursion/binary-tree-maximum-path-sum.md)
