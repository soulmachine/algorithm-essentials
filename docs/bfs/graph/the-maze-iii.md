---
title: The Maze III
---

### 描述

There is a **ball** in a maze with empty spaces and walls. The ball can go through empty spaces by rolling **up** (u), **down** (d), **left** (l) or **right** (r), but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction. There is also a **hole** in this maze. The ball will drop into the hole if it rolls on to the hole.

Given the **ball position**, the **hole position** and the **maze**, find out how the ball could drop into the hole by moving the shortest distance. The distance is defined by the number of **empty spaces** traveled by the ball from the start position (excluded) to the hole (included). Output the moving **directions** by using 'u', 'd', 'l' and 'r'. Since there could be several different shortest ways, you should output the **lexicographically smallest** way. If the ball cannot reach the hole, output "impossible".

The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The ball and the hole coordinates are represented by row and column indexes.

**Example 1**:

<img src="/img/maze_2_example_1.png" width="70%" />

> **Input 1**: a maze represented by a 2D array
>
> 0 0 0 0 0  
> 1 1 0 0 1  
> 0 0 0 0 0  
> 0 1 0 0 1  
> 0 1 0 0 0
>
> **Input 2**: ball coordinate (rowBall, colBall) = (4, 3)  
> **Input 3**: hole coordinate (rowHole, colHole) = (0, 1)
>
> **Output**: "lul"
>
> **Explanation**: There are two shortest ways for the ball to drop into the hole.  
> The first way is left -> up -> left, represented by "lul".  
> The second way is up -> left, represented by 'ul'.  
> Both ways have shortest distance 6, but the first way is lexicographically smaller because 'l' < 'u'. So the output is "lul".

**Example 2**:

<img src="/img/maze_2_example_2.png" width="70%" />

> **Input 1**: a maze represented by a 2D array
>
> 0 0 0 0 0  
> 1 1 0 0 1  
> 0 0 0 0 0  
> 0 1 0 0 1  
> 0 1 0 0 0
>
> **Input 2**: ball coordinate (rowBall, colBall) = (4, 3)  
> **Input 3**: hole coordinate (rowHole, colHole) = (3, 0)
>
> **Output**: "impossible"
>
> **Explanation**: The ball cannot reach the hole.

**Note**:

1. There is only one ball and one hole in the maze.
1. Both the ball and hole exist on an empty space, and they will not be at the same position initially.
1. The given maze does not contain border (like the red rectangle in the example pictures), but you could assume the border of the maze are all walls.
1. The maze contains at least 2 empty spaces, and the width and the height of the maze won't exceed 30.

### 分析

求最短路径，很显然，用 BFS。

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
TODO
```

</TabItem>
<TabItem value="java">

```java
// The Maze III
// BFS
// Time complexity : O(m*n*max(m,n))
// Space complexity : O(mn)
public class Solution {
    public String findShortestWay(int[][] maze, int[] ball, int[] hole) {
        final int M = maze.length, N = maze[0].length;
        State[][] states = new State[M][N];
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                states[i][j] = new State();
            }
        }

        final int[][] dirs={{-1, 0}, {1, 0},{0, -1}, {0, 1}}; // up, down, left, right
        final char[] names=new char[] {'u', 'd', 'l', 'r'};

        Queue<int[]> q = new LinkedList<>();
        states[ball[0]][ball[1]].distance = 0;
        q.offer(ball);
        while (!q.isEmpty()) {
            int[] cur = q.poll();
            int x = cur[0], y = cur[1];
            if (x == hole[0] && y == hole[1]) continue;

            for (int i = 0; i < 4; i++) { // try four directions
                final int[] dir = dirs[i];
                int newX = x, newY = y;
                int dx = dir[0], dy = dir[1];
                State newState = new State(states[x][y].distance, states[x][y].path + names[i]);
                // walk until hit wall or meet the hole
                while (0 <= newX + dx && newX + dx < M && 0 <= newY + dy && newY + dy < N && maze[newX + dx][newY + dy] == 0) {
                    newX += dx;
                    newY += dy;
                    newState.distance++;
                    if (newX == hole[0] && newY == hole[1]) break;
                }
                if (newState.compareTo(states[newX][newY]) < 0) {
                    states[newX][newY] = newState;
                    q.offer(new int[] {newX, newY});
                }
            }
        }

        return states[hole[0]][hole[1]].distance == Integer.MAX_VALUE ? "impossible" : states[hole[0]][hole[1]].path;
    }

    static class State implements Comparable<State> {
        int distance; // distance between start and this point
        String path; // path from start to this point

        public State() {
            this.distance =Integer.MAX_VALUE;
            this.path ="";
        }
        public State(int distance, String path) {
            this.distance = distance;
            this.path = path;
        }

        @Override
        public int compareTo(State other) {
            if (this.distance == other.distance) {
                return this.path.compareTo(other.path);
            } else {
                return this.distance - other.distance;
            }
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
TODO
```

</TabItem>
</Tabs>

### 相关题目

- [The Maze](the-maze.md)
- [The Maze II](the-maze-ii.md)
