---
title: Largest Number
---

### 描述

TODO

### 分析

把数组里的每个整数转化为字符串，按字母顺序倒序排序，这样就就能保证"9"这类数组跑到前面，占据高位，从而使得连接而成的数字最大。

按字母顺序倒序排序， Comparator写成`s2.compare(s1)`即可，不过有一种特殊情况，例如 "30"和"3"，如果按照`s2.compare(s1)`进行比较，"30" 会被认为比"3" 大，但这里需要"3"排在"30"前面，因此，Comparator可以换一种写法，`(s2+s1).compareTo(s1+s2)`，就能处理这种特殊情况了。

排完序后一个一个连起来就好。注意，若首字母是"0"，说明结果本身就是0，没有必要把后面的 "00", "000" 都连上，直接返回0即可。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# TODO
```

</TabItem>
<TabItem value="java">

```java
// Largest Number
// Time complexity: O(nlogn)
// Space complexity: O(n)
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

        // Sort strings according to the custom comparator.
        Arrays.sort(strs, new LargerNumberComparator());

        // After sorted, if the largest number is `0`,
        // the entire number is zero.
        if (strs[0].equals("0")) {
            return "0";
        }

        // concat all numbers to build the final number
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
// TODO
```

</TabItem>
</Tabs>
