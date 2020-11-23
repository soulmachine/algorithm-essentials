---
title: 最常用的数据结构
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 定长数组

<Tabs
defaultValue="python"
groupId="data-structures"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
arr = [0] * 10
```

</TabItem>
<TabItem value="java">

```java
int[] arr = new int[10];
```

</TabItem>
<TabItem value="cpp">

```cpp
vector<int> arr(10);
```

</TabItem>
</Tabs>

### 动态数组

<Tabs
defaultValue="python"
groupId="data-structures"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
l = []
# Add a new element at tail
l.append(1)
```

</TabItem>
<TabItem value="java">

```java
List<Integer> l = new ArrayList<>();
// Add a new element at tail
l.add(1);
```

</TabItem>
<TabItem value="cpp">

```cpp
vector<int> l;
// Add a new element at tail
l.push_back(1);
```

</TabItem>
</Tabs>

### 单链表

<Tabs
defaultValue="python"
groupId="data-structures"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# To mimic singly linked list, always operate at head
l = deque()
# insert at head, time complexity O(1)
l.appendleft(7)
# access head, time complexity O(1)
l[0]
# remove head, time complexity O(1)
l.popleft()
```

</TabItem>
<TabItem value="java">

```java
// LinkedList is actually a doubly-linked list, to mimic singly linked list, always operate at head
LinkedList<Integer> l = new LinkedList<>();
// insert at head, time complexity O(1)
l.offerFirst(7)
// access head, time complexity O(1)
l.peekFirst()
// remove head, time complexity O(1)
l.pollFirst()
```

</TabItem>
<TabItem value="cpp">

```cpp
// std::list uses std::deque by default, to mimic singly linked list, always operate at head
list<int> l;
// insert at head, time complexity O(1)
l.push_front(7);
// access head, time complexity O(1)
l.front();
// remove head, time complexity O(1)
l.pop_front();
```

</TabItem>
</Tabs>

### 双向链表

<Tabs
defaultValue="python"
groupId="data-structures"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
q = deque()
# insert at tail, time complexity O(1)
q.push(7)
# access tail, time complexity O(1)
q[-1]
# remove tail, time complexity O(1)
q.pop()
# insert at head, time complexity O(1)
q.pushleft(7)
# access head, time complexity O(1)
q[0]
# remove head, time complexity O(1)
q.popleft()
```

</TabItem>
<TabItem value="java">

```java
Deque<Integer> q = new ArrayDeque<>();
// insert at tail, time complexity O(1)
q.offerLast(7)
// access tail, time complexity O(1)
q.peekLast()
// remove tail, time complexity O(1)
q.pollLast()
// insert at head, time complexity O(1)
q.offerFirst(7)
// access head, time complexity O(1)
q.peekFirst()
// remove head, time complexity O(1)
q.pollFirst()
```

</TabItem>
<TabItem value="cpp">

```cpp
deque<int> q;
// insert at tail, time complexity O(1)
q.push_back(7)
// access tail, time complexity O(1)
q.back()
// remove tail, time complexity O(1)
q.pop_back()
// insert at head, time complexity O(1)
q.push_front(7)
// access head, time complexity O(1)
q.front()
// remove head, time complexity O(1)
q.pop_front()
```

</TabItem>
</Tabs>

### 栈

<Tabs
defaultValue="python"
groupId="data-structures"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# To mimic stack, always operate at tail
s = deque()
s.append(7)
s[-1]
s.pop()
```

</TabItem>
<TabItem value="java">

```java
Stack<Integer> s = new Stack<>();
s.push(7)
s.peek();
s.pop()
s.empty()
```

</TabItem>
<TabItem value="cpp">

```cpp
stack<int>  s;
s.push(7)
s.top();
s.pop()
```

</TabItem>
</Tabs>

### 队列

<Tabs
defaultValue="python"
groupId="data-structures"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# To mimic a FIFO queue, push at tail, pop at head
q = deque()
q.append(7)
q[0]
q.popleft()
len(q) == 0
```

</TabItem>
<TabItem value="java">

```java
Queue<Integer> q = new LinkedList<>();
q.offer(7);
q.peek();
q.poll();
q.isEmpty();
```

</TabItem>
<TabItem value="cpp">

```cpp
queue<int> q;
s.push_back(7)
s.front();
s.pop_front();
s.empty()
```

</TabItem>
</Tabs>

### 优先队列（堆）

<Tabs
defaultValue="python"
groupId="data-structures"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# min heap by default
pq = []
heapq.heappush(pq, 7)
pq[0]
heapq.heappop(pq)
len(pq) == 0
```

</TabItem>
<TabItem value="java">

```java
// min heap by default
PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.offer(7);
pq.peek();
pq.poll();
pq.isEmpty();
```

</TabItem>
<TabItem value="cpp">

```cpp
// max heap by default
priority_queue<int> pq;
pq.push(7)
pq.top();
pq.pop();
pq.empty()
```

</TabItem>
</Tabs>

### HashMap

<Tabs
defaultValue="python"
groupId="data-structures"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
m = {}
```

</TabItem>
<TabItem value="java">

```java
Map<String, Integer> m = new HashMap<>();
```

</TabItem>
<TabItem value="cpp">

```cpp
unordered_map<string, int> m;
```

</TabItem>
</Tabs>

### HashSet

<Tabs
defaultValue="python"
groupId="data-structures"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
s = set()
```

</TabItem>
<TabItem value="java">

```java
Set<Integer> m = new HashSet<>();
```

</TabItem>
<TabItem value="cpp">

```cpp
unordered_set<int> s;
```

</TabItem>
</Tabs>
