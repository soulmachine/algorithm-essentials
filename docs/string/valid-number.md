---
title: Valid Number
---

### 描述

Validate if a given string is numeric.

Some examples:

```
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
```

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.

### 分析

细节实现题。

本题的功能与标准库中的`strtod()`功能类似。

### 有限自动机

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
// Valid Number
// finite automata，时间复杂度O(n)，空间复杂度O(n)
public class Solution {
    public boolean isNumber(String s) {
        int[][] transitionTable  = new int[][] {
            { -1, 0, 3, 1, 2, -1 }, // next states for state 0
            { -1, 8, -1, 1, 4, 5 },     // next states for state 1
            { -1, -1, -1, 4, -1, -1 },     // next states for state 2
            { -1, -1, -1, 1, 2, -1 },     // next states for state 3
            { -1, 8, -1, 4, -1, 5 },     // next states for state 4
            { -1, -1, 6, 7, -1, -1 },     // next states for state 5
            { -1, -1, -1, 7, -1, -1 },     // next states for state 6
            { -1, 8, -1, 7, -1, -1 },     // next states for state 7
            { -1, 8, -1, -1, -1, -1 }     // next states for state 8
        };

        int state = 0;
        for (int i = 0; i < s.length(); ++i) {
            final char ch = s.charAt(i);
            InputType inputType = InputType.INVALID;

            if (Character.isSpaceChar(ch))
                inputType = InputType.SPACE;
            else if (ch == '+' || ch == '-')
                inputType = InputType.SIGN;
            else if (Character.isDigit(ch))
                inputType = InputType.DIGIT;
            else if (ch == '.')
                inputType = InputType.DOT;
            else if (ch == 'e' || ch == 'E')
                inputType = InputType.EXPONENT;

            // Get next state from current state and input symbol
            state = transitionTable[state][inputType.ordinal()];

            // Invalid input
            if (state == -1) return false;
        }
        // If the current state belongs to one of the accepting (final) states,
        // then the number is valid
        return state == 1 || state == 4 || state == 7 || state == 8;

    }
    enum InputType {
        INVALID,    // 0
        SPACE,      // 1
        SIGN,       // 2
        DIGIT,      // 3
        DOT,        // 4
        EXPONENT,   // 5
        NUM_INPUTS  // 6
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Valid Number
// @author 龚陆安 (http://weibo.com/luangong)
// finite automata，时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    bool isNumber(const string& s) {
        enum InputType {
            INVALID,    // 0
            SPACE,      // 1
            SIGN,       // 2
            DIGIT,      // 3
            DOT,        // 4
            EXPONENT,   // 5
            NUM_INPUTS  // 6
        };
        const int transitionTable[][NUM_INPUTS] = {
                -1, 0, 3, 1, 2, -1, // next states for state 0
                -1, 8, -1, 1, 4, 5,     // next states for state 1
                -1, -1, -1, 4, -1, -1,     // next states for state 2
                -1, -1, -1, 1, 2, -1,     // next states for state 3
                -1, 8, -1, 4, -1, 5,     // next states for state 4
                -1, -1, 6, 7, -1, -1,     // next states for state 5
                -1, -1, -1, 7, -1, -1,     // next states for state 6
                -1, 8, -1, 7, -1, -1,     // next states for state 7
                -1, 8, -1, -1, -1, -1,     // next states for state 8
                };

        int state = 0;
        for (auto ch : s) {
            InputType inputType = INVALID;
            if (isspace(ch))
                inputType = SPACE;
            else if (ch == '+' || ch == '-')
                inputType = SIGN;
            else if (isdigit(ch))
                inputType = DIGIT;
            else if (ch == '.')
                inputType = DOT;
            else if (ch == 'e' || ch == 'E')
                inputType = EXPONENT;

            // Get next state from current state and input symbol
            state = transitionTable[state][inputType];

            // Invalid input
            if (state == -1) return false;
        }
        // If the current state belongs to one of the accepting (final) states,
        // then the number is valid
        return state == 1 || state == 4 || state == 7 || state == 8;

    }
};
```

</TabItem>
</Tabs>
