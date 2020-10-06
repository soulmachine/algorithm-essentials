---
title: Largest Number
---

### 描述

Given a list of non negative integers, arrange them such that they form the largest number.

For example, given `[3, 30, 34, 5, 9]`, the largest formed number is `9534330`.

Note: The result may be very large, so you need to return a string instead of an integer.

### 分析

这题可以先把每个整数变成字符串，得到一个字符串数组，然后把这个数组按特定规则排个序，顺序输出即可。

### 代码

```java
// Largest Number
// Time Complexity: O(n), Space Complexity: O(n)
public class Solution {
    public String largestNumber(int[] nums) {
        final String[] strings = new String[nums.length];
        for (int i = 0; i < nums.length; ++i) {
            strings[i] = String.valueOf(nums[i]);
        }
        Arrays.sort(strings, (String s1, String s2) -> {
            String leftRight = s1 + s2;
            String rightLeft = s2 + s1;
            return -leftRight.compareTo(rightLeft);
        });


        StringBuilder sb = new StringBuilder();
        for (final String s : strings) {
            sb.append(s);
        }

        while(sb.charAt(0)=='0' && sb.length()>1){
            sb.deleteCharAt(0);
        }

        return sb.toString();
    }
}
```
