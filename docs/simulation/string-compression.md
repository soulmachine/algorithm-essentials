---
title: String Compression
---

### 描述

TODO

### 分析

一道模拟题，纯体力活。

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
public class Solution {
    public int compress(char[] chars) {
        char letter = chars[0]; // current letter
        int count = 0; // current count
    
        int index = 0; // current index
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] == letter) { // meet duplicated char
                count++;
            } else { // meet new char
                index = replace(chars, letter, index, count);
                // reset
                letter = chars[i];
                count = 0;
                // decreased by 1, so that i points to the new letter
                i--;
            }
        }
        
        // last time replace
        index = replace(chars, letter, index, count);
        return index;
    }

    // start from index, overwrite as letter+count
    private int replace(char[] chars, char letter, int index, int count) {
        chars[index++] = letter;
        if (count > 1) {
            String charCount = String.valueOf(count);
            for (int j = 0; j < charCount.length(); j++) {
                chars[index++] = charCount.charAt(j);
            }
        }
        // return the new index
        return index;
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
