---
title: Design Browser History
---

### 描述

TODO

### 分析

TODO

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
<TabItem value="python">

```python
# TODO
```

</TabItem>
<TabItem value="java">

```java
class BrowserHistory {
    private Stack<String> history;
    private Stack<String> future;

    public BrowserHistory(String homepage) {
        history = new Stack<>();
        future = new Stack<>();
        history.push(homepage);
    }

    public void visit(String url) {
        history.push(url);
        future = new Stack<>();
    }

    public String back(int steps) {
        while(history.size() > 1 && steps > 0){
            future.push(history.pop());
            steps--;
        }

        return history.peek();
    }

    public String forward(int steps) {
        while(future.size() > 0 && steps > 0){
            history.push(future.pop());
            steps--;
        }

        return history.peek();
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
