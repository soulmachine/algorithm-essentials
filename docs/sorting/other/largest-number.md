---
title: Largest Number
---

### 描述

Given a list of non negative integers, arrange them such that they form the largest number.

For example, given `[3, 30, 34, 5, 9]`, the largest formed number is `9534330`.

Note: The result may be very large, so you need to return a string instead of an integer.

### 分析

把每个整数变成字符串，然后按字符串逆序排序(`s2.compareTo(s1)`)，最后连接成一个字符串，就是答案了。

不过，有一种特殊情况，例如 `[3, 30]`，按照上述规则，会得到`303`，实际上`330`更大。

我们需要更改一下排序规则，变成 `(s2+s1).compareTo(s1+s2)`，就能正确处理上述情况了。

排完序后一个一个连起来就好。注意，如果第一个字符串是"0", 说明后面的字符串都是"0"，没必要把所有的"0"连接起来，直接返回"0"即可。

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
// Largest number
// Time complexity: O(nlogn)
// Time complexity: O(n)
class Solution {
    private class LargerNumberComparator implements Comparator<String> {
        @Override
        public int compare(String a, String b) {
            String order1 = a + b;
            String order2 = b + a;
           return order2.compareTo(order1);
        }
    }

    public String largestNumber(int[] nums) {
        String[] strs = new String[nums.length];
        for (int i = 0; i < nums.length; i++) {
            strs[i] = String.valueOf(nums[i]);
        }
        Arrays.sort(strs, new LargerNumberComparator());
        if (strs[0].equals("0")) return "0";

        // concat
        StringBuffer sb = new StringBuffer();
        for (String s : strs) {
            sb.append(s);
        }
        return sb.toString();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Largest number
// Time complexity: O(nlogn)
// Time complexity: O(n)
class Solution {
public:
    string largestNumber(vector<int>& nums) {
        vector<string> strs;
        std::transform(nums.cbegin(), nums.cend(), std::back_inserter(strs), [&](int x) {
            return std::to_string(x);
        });
        std::sort(strs.begin(), strs.end(), [&](const string& s1, const string &s2) {
            return (s2+s1) < (s1+s2);
        });
        if (strs[0] == "0") return "0";
        return std::accumulate(strs.begin(), strs.end(), std::string(""));
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Largest number
# Time complexity: O(nlogn)
# Time complexity: O(n)
class Solution:
    def largestNumber(self, nums: list[int]) -> str:
        def compare(a: str, b: str) -> int:
            order1 = a + b
            order2 = b + a
            return -1 if order1 < order2 else 1

        strs = [str(num) for num in nums]
        strs.sort(key=functools.cmp_to_key(compare))
        if strs[0] == "0":
            return "0"

        # concat
        return "".join(strs)
```

</TabItem>
</Tabs>
