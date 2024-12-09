---
title: Count and Say
---

### 描述

The count-and-say sequence is the sequence of integers beginning as follows:

```text
1, 11, 21, 1211, 111221, ...
```

`1` is read off as `"one 1"` or `11`.

`11` is read off as `"two 1s"` or `21`.

`21` is read off as `"one 2"`, then `"one 1"` or `1211`.

Given an integer `n`, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

### 分析

模拟。

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
// Count and Say
// @author 连城 (http://weibo.com/lianchengzju)
// 时间复杂度O(n^2)，空间复杂度O(n)
class Solution {
    public String countAndSay(int n) {
        String s = "1";

        while (--n > 0)
            s = getNext(s);

        return s;
    }

    String getNext(final String s) {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < s.length();) {
            int j = notEqual(s, i);
            sb.append(j - i);
            sb.append(s.charAt(i));
            i = j;
        }

        return sb.toString();
    }
    // find the first char that not equal to fromIndex
    private static int notEqual(final String s, int fromIndex) {
        final char target = s.charAt(fromIndex);
        int i = fromIndex;
        for (; i < s.length(); ++i) {
            if (s.charAt(i) != target) break;
        }
        return i;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Count and Say
// @author 连城 (http://weibo.com/lianchengzju)
// 时间复杂度O(n^2)，空间复杂度O(n)
class Solution {
public:
    string countAndSay(int n) {
        string s("1");

        while (--n)
            s = getNext(s);

        return s;
    }

    string getNext(const string &s) {
        stringstream ss;

        for (auto i = s.begin(); i != s.end(); ) {
            auto j = find_if(i, s.end(), bind1st(not_equal_to<char>(), *i));
            ss << distance(i, j) << *i;
            i = j;
        }

        return ss.str();
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Count and Say
# @author 连城 (http://weibo.com/lianchengzju)
# 时间复杂度O(n^2)，空间复杂度O(n)
class Solution:
    def countAndSay(self, n: int) -> str:
        s = "1"
        n -= 1
        while n > 0:
            s = self.getNext(s)
            n -= 1
        return s

    def getNext(self, s: str) -> str:
        result = []
        i = 0
        while i < len(s):
            j = self.notEqual(s, i)
            result.append(str(j - i))
            result.append(s[i])
            i = j
        return "".join(result)

    # find the first char that not equal to fromIndex
    @staticmethod
    def notEqual(s: str, fromIndex: int) -> int:
        target = s[fromIndex]
        i = fromIndex
        while i < len(s):
            if s[i] != target:
                break
            i += 1
        return i
```

</TabItem>
</Tabs>
