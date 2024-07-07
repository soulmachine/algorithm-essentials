---
title: Missing Element in Sorted Array
---

```java
// https://www.cnblogs.com/cnoodle/p/13193731.html
class Solution {
    public int missingElement(int[] nums, int k) {
        int start = 0;
        int end = nums.length - 1;
        int missing = nums[end] - nums[start] - (end - start);
        // corner case
        if (k > missing) {
            return nums[end] + (k - missing);
        }

        // normal case
        while (start + 1 < end) {
            int mid = start + (end - start) / 2;
            missing = nums[mid] - nums[start] - (mid - start);
            if (missing < k) {
                k -= missing;
                start = mid;
            } else {
                end = mid;
            }
        }
        return nums[start] + k;
    }
}
```