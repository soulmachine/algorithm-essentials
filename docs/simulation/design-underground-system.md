---
title: Design Underground System
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
# Design Underground System
class UndergroundSystem:

    def __init__(self):
        self.checkin_dict = {}
        self.travel_time = collections.defaultdict(int)
        self.travel_cnt = collections.defaultdict(int)
        

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.checkin_dict[id] = (stationName,t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        startStation,start_t = self.checkin_dict[id]
        self.travel_time[(startStation,stationName)] += t - start_t
        self.travel_cnt[(startStation,stationName)] += 1
        

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        return self.travel_time[(startStation,endStation)]/self.travel_cnt[(startStation,endStation)]

```

</TabItem>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>
</Tabs>
