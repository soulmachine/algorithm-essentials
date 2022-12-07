---
title: Surrounded Regions
---

### 描述

Given a 2D board containing `'X'` and `'O'`, capture all regions surrounded by `'X'`.

A region is captured by flipping all `'O'`s into `'X'`s in that surrounded region .

For example,

```text
X X X X
X O O X
X X O X
X O X X
```

After running your function, the board should be:

```text
X X X X
X X X X
X X X X
X O X X
```

### 分析

广搜。从上下左右四个边界往里走，凡是能碰到的`'O'`，都是跟边界接壤的，应该保留。

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
// Surrounded Regions
// BFS，时间复杂度O(n)，空间复杂度O(n)
public class Solution {
    public void solve(char[][] board) {
        if (board.length == 0) return;

        final int m = board.length;
        final int n = board[0].length;
        for (int i = 0; i < n; i++) {
            bfs(board, 0, i);
            bfs(board, m - 1, i);
        }
        for (int j = 1; j < m - 1; j++) {
            bfs(board, j, 0);
            bfs(board, j, n - 1);
        }
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                if (board[i][j] == 'O')
                    board[i][j] = 'X';
                else if (board[i][j] == '+')
                    board[i][j] = 'O';
    }
    private static void bfs(char[][] board, int i, int j) {
        Queue<State> q = new LinkedList<>();
        final int m = board.length;
        final int n = board[0].length;

        final Function<State, Boolean> stateIsValid = (State s) -> {
            if (s.x < 0 || s.x >= m || s.y < 0 || s.y >= n ||
                    board[s.x][s.y] != 'O')
                return false;
            return true;
        };
        final Function<State, List<State>> stateExtend = (State s) -> {
            List<State> result = new ArrayList<>();
            final int x = s.x;
            final int y = s.y;
            // 上下左右
            State[] newStates = new State[]{new State(x-1, y),
                    new State(x+1,y),
                    new State(x,y-1),
                    new State(x,y+1)
            };
            for (int k = 0; k < 4; ++k) {
                if (stateIsValid.apply(newStates[k])) {
                    result.add(newStates[k]);
                }
            }
            return result;
        };
        State start = new State(i, j);
        if (stateIsValid.apply(start)) {
            board[i][j] = '+';
            q.offer(start);
        }
        while (!q.isEmpty()) {
            State cur = q.poll();
            List<State> newStates = stateExtend.apply(cur);
            for (State s : newStates) {
                // 既有标记功能又有去重功能
                board[s.x][s.y] = '+';
                q.offer(s);
            }
        }
    }
    static class State {
        private int x;
        private int y;
        public State(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Surrounded Regions
// BFS，时间复杂度O(MN)，空间复杂度O(MN)
class Solution {
public:
    void solve(vector<vector<char>> &board) {
        if (board.empty()) return;
        const int M = board.size(), N = board[0].size();
        // four borders
        for (int i = 0; i < N; i++) {
            bfs(board, 0, i);
            bfs(board, M - 1, i);
        }
        for (int j = 1; j < M - 1; j++) {
            bfs(board, j, 0);
            bfs(board, j, N - 1);
        }
        // restore
        for (int i = 0; i < M; i++)
            for (int j = 0; j < N; j++)
                if (board[i][j] == 'O')
                    board[i][j] = 'X';
                else if (board[i][j] == '+')
                    board[i][j] = 'O';
    }
private:
    typedef pair<int, int> state_t;

    void bfs(vector<vector<char>> &board, int i, int j) {
        queue<state_t> q;
        const int M = board.size(), N = board[0].size();

        // up, down, left, right
        const int dirs[][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        state_t start = {i, j};
        if (state_is_valid(board, start)) {
            board[i][j] = '+';
            q.push(start);
        }
        while (!q.empty()) {
            auto cur = q.front();
            q.pop();
            const int x = cur.first, y = cur.second;

            for (const auto &dir : dirs) {
                const state_t new_state = {x + dir[0], y + dir[1]};
                if (state_is_valid(board, new_state)) {
                    // 既有标记功能又有去重功能
                    board[new_state.first][new_state.second] = '+';
                    q.push(new_state);
                }
            }
        }
    }

    bool state_is_valid(const vector<vector<char>> &board, const state_t s) {
        const int M = board.size(), N = board[0].size();
        const int x = s.first, y = s.second;
        return 0 <= x && x < M && 0 <= y && y < N && board[x][y] == 'O';
    }
};
```

</TabItem>
</Tabs>
