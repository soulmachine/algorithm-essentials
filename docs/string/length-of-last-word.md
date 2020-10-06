---
title: Length of Last Word
---

### 描述

Given a string s consists of upper/lower-case alphabets and empty space characters `' '`, return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example,
Given `s = "Hello World"`,
return 5.

### 分析

模拟。先从右到左找到第一个字母，然后从右到左找到第一个非字母，二者的距离就是最后一个 word 的长度。

### 代码

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
// Length of Last Word
// 偷懒，用 STL
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int lengthOfLastWord(String s) {
        final Predicate isAlphabet = new Predicate() {
            @Override
            public boolean apply(char ch) {
                return Character.isAlphabetic(ch);
            }
        };
        final Predicate isNotAlphabet = new Predicate() {
            @Override
            public boolean apply(char ch) {
                return !Character.isAlphabetic(ch);
            }
        };
        int j = findIf(s, s.length() - 1, isAlphabet);
        int i = findIf(s, j, isNotAlphabet);
        return j - i;
    }

    interface Predicate {
        boolean apply(char ch);
    }
    // from right to left
    private static int findIf(final String s, int fromIndex, Predicate p) {
        for (int i = fromIndex; i >= 0; --i) {
            if (p.apply(s.charAt(i))) return i;
        }
        return -1;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Length of Last Word
// 偷懒，用 STL
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int lengthOfLastWord(const string& s) {
        auto first = find_if(s.rbegin(), s.rend(), ::isalpha);
        auto last = find_if_not(first, s.rend(), ::isalpha);
        return distance(first, last);
    }
};
```

</TabItem>
</Tabs>
