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
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },

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

<TabItem value="python">

```python
class Solution:
    def compress(self, chars: list[str]) -> int:
        letter = chars[0] # current letter
        count = 0 # current count

        index = 0 # current index
        for i in range(len(chars)):
            if chars[i] == letter: # meet duplicated char
                count += 1
            else: # meet new char
                index = self.replace(chars, letter, index, count)
                # reset
                letter = chars[i]
                count = 0
                # decreased by 1, so that i points to the new letter
                i -= 1

        # last time replace
        index = self.replace(chars, letter, index, count)
        return index

    # start from index, overwrite as letter+count
    def replace(self, chars: list[str], letter: str, index: int, count: int) -> int:
        chars[index] = letter
        index += 1
        if count > 1:
            for digit in str(count):
                chars[index] = digit
                index += 1
        # return the new index
        return index
```

</TabItem>
</Tabs>
