## Search in Rotated Sorted Array II


### 描述

Follow up for "Search in Rotated Sorted Array": What if **duplicates** are allowed?

Would this affect the run-time complexity? How and why?

Write a function to determine if a given target is in the array.


### 分析

允许重复元素，则上一题中如果`A[m]>=A[l]`,那么`[l,m]`为递增序列的假设就不能成立了，比如`[1,3,1,1,1]`。

如果`A[m]>=A[l]`不能确定递增，那就把它拆分成两个条件：

* 若`A[m]>A[l]`，则区间`[l,m]`一定递增
* 若`A[m]==A[l]` 确定不了，那就`l++`，往下看一步即可。


### 代码

```cpp
// Search in Rotated Sorted Array II
// Time Complexity: O(n)，Space Complexity: O(1)
class Solution {
public:
    bool search(const vector<int>& nums, int target) {
        int first = 0, last = nums.size();
        while (first != last) {
            const int mid = first  + (last - first) / 2;
            if (nums[mid] == target)
                return true;
            if (nums[first] < nums[mid]) {
                if (nums[first] <= target && target < nums[mid])
                    last = mid;
                else
                    first = mid + 1;
            } else if (nums[first] > nums[mid]) {
                if (nums[mid] < target && target <= nums[last-1])
                    first = mid + 1;
                else
                    last = mid;
            } else
                //skip duplicate one
                first++;
        }
        return false;
    }
};
```


### 相关题目

* [Search in Rotated Sorted Array](search-in-rotated-sorted-array.md)
