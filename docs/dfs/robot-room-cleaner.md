---
title: Robot Room Cleaner
---

### 描述

Given a robot cleaner in a room modeled as a grid.

Each cell in the grid can be empty or blocked.

The robot cleaner with 4 given APIs can move forward, turn left or turn right. Each turn it made is 90 degrees.

When it tries to move into a blocked cell, its bumper sensor detects the obstacle and it stays on the current cell.

Design an algorithm to clean the entire room using only the 4 given APIs shown below.

```java
interface Robot {
  // returns true if next cell is open and robot moves into the cell.
  // returns false if next cell is obstacle and robot stays on the current cell.
  boolean move();

  // Robot will stay on the same cell after calling turnLeft/turnRight.
  // Each turn will be 90 degrees.
  void turnLeft();
  void turnRight();

  // Clean the current cell.
  void clean();
}
```

**Example**:

> **Input**:  
> room = [  
> [1,1,1,1,1,0,1,1],  
> [1,1,1,1,1,0,1,1],  
> [1,0,1,1,1,1,1,1],  
> [0,0,0,1,0,0,0,0],  
> [1,1,1,1,1,1,1,1]  
> ],  
> row = 1,  
> col = 3
>
> **Explanation**:  
> All grids in the room are marked by either 0 or 1.  
> 0 means the cell is blocked, while 1 means the cell is accessible.  
> The robot initially starts at the position of row=1, col=3.  
> From the top left corner, its position is one row below and three columns right.

Notes:

1. The input is only given to initialize the room and the robot's position internally. You must solve this problem "blindfolded". In other words, you must control the robot using only the mentioned 4 APIs, without knowing the room layout and the initial robot's position.
1. The robot's initial position will always be in an accessible cell.
1. The initial direction of the robot will be facing up.
1. All accessible cells are connected, which means the all cells marked as 1 will be accessible by the robot.
   Assume all four edges of the grid are all surrounded by wall.

### 分析

深搜。

1. 如何表示状态？ 机器人当前位置和朝向，可以完整刻画它的当前状态，用 `(x, y, d)`表示
1. 如何扩展状态？机器人在当前位置，可以按照时钟方向，解决四个方向的子问题。
1. 如何判断重复？用一个`HashSet<Pair<Integer, Integer>>` 来记录已经访问过的单元

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
// Robot Room Cleaner
// Time Complexity: O(n-m), Space Complexity: O(n-m)
class Solution {
    // going clockwise : 0: 'up', 1: 'right', 2: 'down', 3: 'left'
    private int[][] directions = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
    private Set<Pair<Integer, Integer>> visited = new HashSet<>();
    private Robot robot;

    public void cleanRoom(Robot robot) {
        this.robot = robot;
        dfs(0, 0, 0);
    }

    private void goBack() {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }

    private void dfs(int x, int y, int d) {
        // clean current cell
        visited.add(new Pair(x, y));
        robot.clean();

        // clean four directions, clockwise
        for (int i = 0; i < 4; ++i, robot.turnRight()) {
          int newD = (d + i) % 4;
          int newRow = x + directions[newD][0];
          int newCol = y + directions[newD][1];

          if (!visited.contains(new Pair(newRow, newCol)) && robot.move()) {
              dfs(newRow, newCol, newD);
              goBack();
          }
        }
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
# Robot Room Cleaner
# Time Complexity: O(n-m), Space Complexity: O(n-m)
class Solution:
    def __init__(self):
        # going clockwise : 0: 'up', 1: 'right', 2: 'down', 3: 'left'
        self.directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        self.visited = set()
        self.robot = None

    def cleanRoom(self, robot):
        self.robot = robot
        self.dfs(0, 0, 0)

    def goBack(self):
        self.robot.turnRight()
        self.robot.turnRight()
        self.robot.move()
        self.robot.turnRight()
        self.robot.turnRight()

    def dfs(self, x, y, d):
        # clean current cell
        self.visited.add((x, y))
        self.robot.clean()

        # clean four directions, clockwise
        for i in range(4):
            newD = (d + i) % 4
            newRow = x + self.directions[newD][0]
            newCol = y + self.directions[newD][1]

            if (newRow, newCol) not in self.visited and self.robot.move():
                self.dfs(newRow, newCol, newD)
                self.goBack()
            self.robot.turnRight()
```

</TabItem>
</Tabs>
