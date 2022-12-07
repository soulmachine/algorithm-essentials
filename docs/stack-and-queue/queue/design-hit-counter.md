---
title: Design Hit Counter
---

### 描述

TODO

### 分析

TODO

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 队列

每来一个timestamp就入队列，查询的时候，把5分钟之前的时间戳全部删掉，队列的大小就是最近5分钟的点击数。

<Tabs
defaultValue="cpp"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Design Hit Counter 
public class HitCounter {

    private Queue<Integer> queue;

    public HitCounter() {
        queue = new LinkedList<>();
    }

    // O(1)
    public void hit(int timestamp) {
        queue.offer(timestamp);
    }

    // O(n)
    public int getHits(int timestamp) {
        while (!queue.isEmpty() && queue.peek() <= timestamp - 300) {
            queue.poll();
        }

        return queue.size();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Design Hit Counter
class HitCounter {
public:
    HitCounter() {}

    // O(1)
    void hit(int timestamp) {
        q.push(timestamp);
    }

    // O(n)
    int getHits(int timestamp) {
        while(!q.empty() && q.front() <= timestamp-300) {
            q.pop();
        }
        return q.size();
    }

private:
    queue<int> q;
};
```

</TabItem>
</Tabs>

#### 循环队列

本题只需要保存5分钟之内的信息，可以用一个固定长度为300的数组来保存每秒的计数器，每次点击一下，就把时间戳对300取模，把该位置的计数器增一。

不过此处有个问题，5分钟之后，来了一个点击事件，该时间戳对应的位置，不应该继续增一，而是应该重置为1。如何区分新旧2个时间戳呢？可以再开一个固定长度为300的数组来保存时间戳，每次来一个点击事件，把时间戳对300取余，然后看此位置中的时间戳是否与当前时间戳相同，如果相同，则把计数器增一，如果不同，说明5分钟已过，把计数器重置为1。

<Tabs
defaultValue="cpp"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Design Hit Counter 
public class HitCounter {
    private static int N = 300; // time window
    private int[] ts = new int[N];
    private int[] hits = new int[N];

    public HitCounter() {}

    // O(1)
    public void hit(int timestamp) {
        int idx = timestamp % N;
        if (ts[idx] != timestamp) {
            ts[idx] = timestamp;
            hits[idx] = 1;
        } else {
            ++hits[idx];
        }
    }

    // O(1)
    public int getHits(int timestamp) {
        int count = 0;
        for (int i = 0; i < N; ++i) {
            if (timestamp - ts[i] < N) {
                count += hits[i];
            }
        }
        return count;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Design Hit Counter
class HitCounter {
public:
    HitCounter() {}

    // O(1)
    void hit(int timestamp) {
        int idx = timestamp % N;
        if (ts[idx] != timestamp) {
            ts[idx] = timestamp;
            hits[idx] = 1;
        } else {
            ++hits[idx];
        }
    }

    // O(1)
    int getHits(int timestamp) {
        int count = 0;
        for (int i = 0; i < N; ++i) {
            if (timestamp - ts[i] < N) {
                count += hits[i];
            }
        }
        return count;
    }

private:
    const int N = 300; // time window
    vector<int> ts = vector<int>(N);
    vector<int> hits = vector<int>(N);
};
```

</TabItem>
</Tabs>
