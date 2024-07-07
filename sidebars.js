module.exports = {
  docs: [
    "introduction",
    {
      type: 'category',
      label: '广度优先搜索',
      link: { type: 'doc', id: "bfs/README" },
      items: [
        {
          type: 'category',
          label: '基于树的BFS',
          items: [
            "bfs/tree/binary-tree-level-order-traversal",
            "bfs/tree/binary-tree-level-order-traversal-ii",
            "bfs/tree/binary-tree-vertical-order-traversal",
            "bfs/tree/binary-tree-zigzag-level-order-traversal",
          ],
        },
        {
          type: 'category',
          label: '基于图的BFS',
          items: [
            "bfs/graph/word-ladder",
            "bfs/graph/word-ladder-ii",
            "bfs/graph/surrounded-regions",
            "bfs/graph/the-maze",
            "bfs/graph/the-maze-ii",
            "bfs/graph/the-maze-iii",
            "bfs/graph/diagonal-traverse-ii",
            "bfs/graph/nearest-exit-from-entrance-in-maze",
          ],
        },
        "bfs/bfs-summary",
      ],
    },
    {
      type: 'category',
      label: '深度优先搜索',
      link: { type: 'doc', id: "dfs/README" },
      items: [
        "dfs/additive-number",
        "dfs/palindrome-partitioning",
        "dfs/unique-paths",
        "dfs/unique-paths-ii",
        "dfs/n-queens",
        "dfs/n-queens-ii",
        "dfs/restore-ip-addresses",
        "dfs/combination-sum",
        "dfs/combination-sum-ii",
        "dfs/combination-sum-iii",
        "dfs/generate-parentheses",
        "dfs/sudoku-solver",
        "dfs/word-search",
        "dfs/android-unlock-patterns",
        "dfs/robot-room-cleaner",
        "dfs/dfs-summary",
      ],
    },
    {
      type: 'category',
      label: '双指针',
      link: { type: 'doc', id: "dual-pointers/README" },
      items: [
        {
          type: "category",
          label: "同向双指针",
          items: [
            "dual-pointers/remove-duplicates-from-sorted-array",
            "dual-pointers/remove-duplicates-from-sorted-array-ii",
            "dual-pointers/remove-element",
            "dual-pointers/move-zeroes",
          ],
        },
        {
          type: "category",
          label: "相向双指针",
          items: [
            "dual-pointers/2sum-ii",
            "dual-pointers/3sum",
            "dual-pointers/3sum-closest",
            "dual-pointers/3sum-smaller",
            "dual-pointers/4sum",
            "dual-pointers/container-with-most-water",
            "dual-pointers/trapping-rain-water",
            "dual-pointers/valid-palindrome",
            "dual-pointers/valid-palindrome-ii",
          ],
        },
        {
          type: "category",
          label: "背向双指针",
          items: [
            "dual-pointers/longest-palindromic-substring",
            "dual-pointers/longest-consecutive-sequence",
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '数组',
      items: [
        "array/2sum",
        "array/4sum-ii",
        "array/next-permutation",
        "array/permutation-sequence",
        "array/valid-sudoku",
        "array/rotate-image",
        "array/plus-one",
        "array/set-matrix-zeroes",
        "array/gas-station",
        "array/candy",
        "array/majority-element",
        "array/majority-element-ii",
        "array/rotate-array",
        "array/contains-duplicate",
        "array/contains-duplicate-ii",
        "array/contains-duplicate-iii",
        "array/product-of-array-except-self",
        "array/game-of-life",
        "array/increasing-triplet-subsequence",
        "array/meeting-rooms",
        "array/intersection-of-two-arrays",
        "array/intersection-of-two-arrays-ii",
        "array/insert-delete-getrandom-o1",
        "array/zigzag-iterator",
      ],
    },
    {
      type: 'category',
      label: '单链表',
      link: { type: 'doc', id: "linked-list/README" },
      items: [
        {
          type: "category",
          label: "快慢指针",
          items: [
            "linked-list/fast-slow-pointers",
            "linked-list/linked-list-cycle",
            "linked-list/linked-list-cycle-ii",
            "linked-list/middle-of-the-linked-list",
            "linked-list/intersection-of-two-linked-lists",
            "linked-list/remove-nth-node-from-end-of-list",
          ],
        },
        "linked-list/reverse-linked-list",
        "linked-list/reverse-linked-list-ii",
        "linked-list/odd-even-linked-list",
        "linked-list/add-two-numbers",
        "linked-list/add-two-numbers-ii",
        "linked-list/partition-list",
        "linked-list/remove-duplicates-from-sorted-list",
        "linked-list/remove-duplicates-from-sorted-list-ii",
        "linked-list/rotate-list",
        "linked-list/swap-nodes-in-pairs",
        "linked-list/reverse-nodes-in-k-group",
        "linked-list/copy-list-with-random-pointer",
        "linked-list/reorder-list",
        "linked-list/lru-cache",
        "linked-list/lfu-cache",
        "linked-list/first-unique-number",
        "linked-list/all-o1-data-structure",
        "linked-list/palindrome-linked-list",
        "linked-list/flatten-a-multilevel-doubly-linked-list",
      ],
    },
    {
      type: 'category',
      label: '二叉树',
      link: { type: 'doc', id: "binary-tree/README" },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "二叉树的遍历",
          link: { type: 'doc', id: "binary-tree/traversal/README" },
          items: [
            "binary-tree/traversal/binary-tree-preorder-traversal",
            "binary-tree/traversal/binary-tree-inorder-traversal",
            "binary-tree/traversal/binary-tree-postorder-traversal",
            "binary-tree/traversal/binary-tree-right-side-view",
            "binary-tree/traversal/invert-binary-tree",
            "binary-tree/traversal/binary-search-tree-iterator",
            "binary-tree/traversal/recover-binary-search-tree",
            "binary-tree/traversal/same-tree",
            "binary-tree/traversal/symmetric-tree",
            "binary-tree/traversal/balanced-binary-tree",
            "binary-tree/traversal/flatten-binary-tree-to-linked-list",
            "binary-tree/traversal/populating-next-right-pointers-in-each-node-ii",
          ],
        },
        {
          type: "category",
          label: "二叉树的构建",
          items: [
            "binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal",
            "binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal",
            "binary-tree/construction/construct-quad-tree",
          ],
        },
        {
          type: "category",
          label: "二叉查找树",
          items: [
            "binary-tree/bst/unique-binary-search-trees",
            "binary-tree/bst/unique-binary-search-trees-ii",
            "binary-tree/bst/validate-binary-search-tree",
            "binary-tree/bst/convert-sorted-array-to-binary-search-tree",
            "binary-tree/bst/convert-sorted-list-to-binary-search-tree",
            "binary-tree/bst/lca-of-bst",
            "binary-tree/bst/kth-smallest-element-in-a-bst",
          ],
        },
        {
          type: "category",
          label: "二叉树的递归",
          link: { type: 'doc', id: "binary-tree/recursion/README" },
          items: [
            "binary-tree/recursion/minimum-depth-of-binary-tree",
            "binary-tree/recursion/maximum-depth-of-binary-tree",
            "binary-tree/recursion/path-sum",
            "binary-tree/recursion/path-sum-ii",
            "binary-tree/recursion/binary-tree-maximum-path-sum",
            "binary-tree/recursion/populating-next-right-pointers-in-each-node",
            "binary-tree/recursion/sum-root-to-leaf-numbers",
            "binary-tree/recursion/lowest-common-ancestor-of-a-binary-tree",
            "binary-tree/recursion/lowest-common-ancestor-of-a-binary-tree-ii",
            "binary-tree/recursion/lowest-common-ancestor-of-a-binary-tree-iii",
            "binary-tree/recursion/serialize-and-deserialize-binary-tree",
            "binary-tree/recursion/print-binary-tree",
            "binary-tree/recursion/find-distance-in-a-binary-tree",
          ],
        },
        {
          type: "category",
          label: "线段树",
          items: [
            "binary-tree/segment-tree/range-sum-query-mutable",
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '栈和队列',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: "category",
          label: "栈",
          items: [
            "stack-and-queue/stack/min-stack",
            "stack-and-queue/stack/valid-parentheses",
            "stack-and-queue/stack/longest-valid-parentheses",
            "stack-and-queue/stack/largest-rectangle-in-histogram",
            "stack-and-queue/stack/evaluate-reverse-polish-notation",
            "stack-and-queue/stack/basic-calculator",
            "stack-and-queue/stack/basic-calculator-ii",
            "stack-and-queue/stack/basic-calculator-iii",
            "stack-and-queue/stack/build-binary-expression-tree-from-infix-expression",
            "stack-and-queue/stack/implement-stack-using-queues",
            "stack-and-queue/stack/median-of-data-stream",
            "stack-and-queue/stack/minimum-number-of-swaps-to-make-the-string-balanced",
            "stack-and-queue/stack/minimum-add-to-make-parentheses-valid",
            "stack-and-queue/stack/minimum-remove-to-make-valid-parentheses",
            "stack-and-queue/stack/remove-all-adjacent-duplicates-in-string",
            "stack-and-queue/stack/remove-all-adjacent-duplicates-in-string-ii",
            "stack-and-queue/stack/design-browser-history",
            "stack-and-queue/stack/asteroid-collision",
            "stack-and-queue/stack/maximum-frequency-stack",
            {
              type: "category",
              label: "单调栈",
              link: { type: 'doc', id: "stack-and-queue/stack/monotonic-stack/README" },
              items: [
                "stack-and-queue/stack/monotonic-stack/buildings-with-an-ocean-view",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "队列",
          items: [
            "stack-and-queue/queue/implement-queue-using-stacks",
            "stack-and-queue/queue/moving-average-of-data-stream",
            "stack-and-queue/queue/sliding-window-maximum",
            "stack-and-queue/queue/design-bounded-blocking-queue",
            "stack-and-queue/queue/design-circular-queue",
            "stack-and-queue/queue/design-hit-counter",
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '排序',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: "category",
          label: "插入排序",
          items: ["sorting/insertion-sort/insertion-sort-list"],
        },
        {
          type: "category",
          label: "归并排序",
          items: [
            "sorting/merge-sort/sort-list",
            "sorting/merge-sort/merge-two-sorted-arrays",
            "sorting/merge-sort/merge-two-sorted-lists",
            "sorting/merge-sort/merge-k-sorted-lists",
          ],
        },
        {
          type: "category",
          label: "快速排序",
          items: [
            "sorting/quick-sort/sort-colors",
            "sorting/quick-sort/kth-largest-element-in-an-array",
            "sorting/quick-sort/k-closest-points-to-origin",
          ],
        },
        {
          type: "category",
          label: "桶排序",
          link: { type: 'doc', id: "sorting/bucket-sort/README" },
          items: [
            "sorting/bucket-sort/first-missing-positive",
          ],
        },
        {
          type: "category",
          label: "计数排序",
          link: { type: 'doc', id: "sorting/counting-sort/README" },
          items: [
            "sorting/counting-sort/h-index",
          ],
        },
        {
          type: "category",
          label: "基数排序",
          link: { type: 'doc', id: "sorting/radix-sort/README" },
          items: ["sorting/radix-sort/maximum-gap"],
        },
        {
          type: "category",
          label: "堆排序",
          items: [
            "sorting/heap-sort/meeting-rooms-ii",
            "sorting/heap-sort/top-k-frequent-elements",
            "sorting/heap-sort/top-k-frequent-words",
            "sorting/heap-sort/find-median-from-data-stream",
            "sorting/heap-sort/reorganize-string",
          ],
        },
        {
          type: "category",
          label: "其他",
          items: ["sorting/other/largest-number"],
        },
        {
          type: "category",
          label: "小结",
          items: ["sorting/summary"],
        },
      ],
    },
    {
      type: 'category',
      label: '二分查找',
      items: [
        "search/search-for-a-range",
        "search/search-insert-position",
        "search/search-in-rotated-sorted-array",
        "search/search-in-rotated-sorted-array-ii",
        "search/search-a-2d-matrix",
        "search/search-a-2d-matrix-ii",
        "search/kth-smallest-element-in-a-sorted-matrix",
        "search/find-minimum-in-rotated-sorted-array",
        "search/find-minimum-in-rotated-sorted-array-ii",
        "search/median-of-two-sorted-arrays",
        "search/h-index-ii",
        "search/random-pick-with-weight",
        "search/leftmost-column-with-at-least-a-one",
      ],
    },
    {
      type: 'category',
      label: '暴力枚举法',
      items: [
        "brute-force/subsets",
        "brute-force/subsets-ii",
        "brute-force/permutations",
        "brute-force/permutations-ii",
        "brute-force/combinations",
      ],
    },
    {
      type: 'category',
      label: '分治法',
      items: ["divide-and-conquer/pow", "divide-and-conquer/sqrt"],
    },
    {
      type: 'category',
      label: '贪心法',
      items: [
        "greedy/jump-game",
        "greedy/jump-game-ii",
        "greedy/best-time-to-buy-and-sell-stock",
        "greedy/best-time-to-buy-and-sell-stock-ii",
        "greedy/longest-substring-without-repeating-characters",
        "greedy/patching-array",
        "greedy/task-scheduler",
        "greedy/two-city-scheduling",
      ],
    },
    {
      type: 'category',
      label: '动态规划',
      link: { type: 'doc', id: "dp/README" },
      items: [
        {
          type: "category",
          label: "背包问题",
          link: { type: 'doc', id: "dp/knapsack-problem/README" },
          items: [
            {
              type: "category",
              label: "0-1背包问题",
              link: { type: 'doc', id: "dp/knapsack-problem/zero-one-knapsack" },
              items: [
                "dp/knapsack-problem/partition-equal-subset-sum",
                "dp/knapsack-problem/ones-and-zeroes",
                "dp/knapsack-problem/last-stone-weight-ii",
                "dp/knapsack-problem/target-sum",
              ],
            },
            {
              type: "category",
              label: "完全背包问题",
              link: { type: 'doc', id: "dp/knapsack-problem/unbounded-knapsack" },
              items: [
                "dp/knapsack-problem/coin-change",
                "dp/knapsack-problem/coin-change-ii",
                "dp/knapsack-problem/perfect-squares",
                "dp/knapsack-problem/combination-sum-iv",
                "dp/knapsack-problem/word-break",
                "dp/knapsack-problem/word-break-ii",
              ],
            },
            {
              type: "category",
              label: "多重背包问题",
              link: { type: 'doc', id: "dp/knapsack-problem/bounded-knapsack" },
              items: [
              ],
            },
            "dp/knapsack-problem/summary",
          ],
        },
        "dp/climbing-stairs",
        "dp/triangle",
        "dp/maximum-subarray",
        "dp/maximum-sum-circular-subarray",
        "dp/maximum-subarray-sum-with-one-deletion",
        "dp/maximum-product-subarray",
        "dp/longest-increasing-subsequence",
        "dp/russian-doll-envelopes",
        "dp/palindrome-partitioning-ii",
        "dp/maximal-rectangle",
        "dp/maximal-square",
        "dp/best-time-to-buy-and-sell-stock-iii",
        "dp/best-time-to-buy-and-sell-stock-iv",
        "dp/best-time-to-buy-and-sell-stock-with-cooldown",
        "dp/interleaving-string",
        "dp/scramble-string",
        "dp/minimum-path-sum",
        "dp/edit-distance",
        "dp/decode-ways",
        "dp/distinct-subsequences",
        "dp/dungeon-game",
        "dp/house-robber",
        "dp/house-robber-ii",
        "dp/house-robber-iii",
        "dp/range-sum-query-immutable",
        "dp/range-sum-query-2d-immutable",
        "dp/frog-jump",
        "dp/longest-string-chain",
        "dp/longest-arithmetic-subsequence",
        "dp/perfect-squares",
        "dp/knight-dialer",
      ],
    },
    {
      type: 'category',
      label: '图',
      link: { type: 'doc', id: "graph/README" },
      items: [
        "graph/clone-graph",
        "graph/graph-valid-tree",
        "graph/network-delay-time",
        "graph/path-with-maximum-probability",
        "graph/all-paths-from-source-to-target",
        {
          type: "category",
          label: "并查集",
          link: { type: 'doc', id: "graph/ufs/README" },
          items: [
            "graph/ufs/number-of-connected-components-in-an-undirected-graph",
            "graph/ufs/number-of-provinces",
            "graph/ufs/number-of-islands",
            "graph/ufs/most-stones-removed-with-same-row-or-column",
            "graph/ufs/sentence-similarity-ii",
          ],
        },
        {
          type: "category",
          label: "拓扑排序",
          link: { type: 'doc', id: "graph/topological-sort/README" },
          items: [
            "graph/topological-sort/course-schedule",
            "graph/topological-sort/course-schedule-ii",
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '字符串',
      items: [
        "string/strstr",
        "string/atoi",
        "string/regular-expression-matching",
        "string/wildcard-matching",
        "string/longest-common-prefix",
        "string/valid-number",
        "string/integer-to-roman",
        "string/roman-to-integer",
        "string/count-and-say",
        "string/group-anagrams",
        "string/valid-anagram",
        "string/simplify-path",
        "string/length-of-last-word",
        "string/isomorphic-strings",
        "string/word-pattern",
        "string/decode-string",
        "string/greatest-common-divisor-of-strings",
        "string/largest-number",
      ],
    },
    {
      type: 'category',
      label: '位操作',
      items: [
        "bitwise-operations/reverse-bits",
        "bitwise-operations/repeated-dna-sequences",
        "bitwise-operations/number-of-1-bits",
        "bitwise-operations/gray-code",
        "bitwise-operations/single-number",
        "bitwise-operations/single-number-ii",
        "bitwise-operations/single-number-iii",
        "bitwise-operations/power-of-two",
        "bitwise-operations/missing-number",
        "bitwise-operations/maximum-product-of-word-lengths",
        "bitwise-operations/bitwise-and-of-numbers-range",
        "simulation/power-of-three",
        "simulation/rectangle-area",
      ],
    },
    {
      type: 'category',
      label: '数论',
      link: { type: 'doc', id: "number-theory/README" },
      items: [
        "number-theory/happy-number",
        "number-theory/ugly-number",
        "number-theory/ugly-number-ii",
        "number-theory/super-ugly-number",
        "number-theory/fraction-to-recurring-decimal",
        "number-theory/factorial-trailing-zeroes",
      ],
    },
    {
      type: 'category',
      label: '模拟',
      link: { type: 'doc', id: "simulation/README" },
      items: [
        "simulation/reverse-integer",
        "simulation/palindrome-number",
        "simulation/insert-interval",
        "simulation/merge-intervals",
        "simulation/employee-free-time",
        "simulation/minimum-window-substring",
        "simulation/add-binary",
        "simulation/add-strings",
        "simulation/multiply-strings",
        "simulation/substring-with-concatenation-of-all-words",
        "simulation/pascal-s-triangle",
        "simulation/pascal-s-triangle-ii",
        "simulation/spiral-matrix",
        "simulation/spiral-matrix-ii",
        "simulation/zigzag-conversion",
        "simulation/divide-two-integers",
        "simulation/text-justification",
        "simulation/max-points-on-a-line",
        "simulation/sparse-matrix-multiplication",
        "simulation/last-stone-weight",
        "simulation/minimum-moves-to-equal-array-elements",
        "simulation/string-compression",
        "simulation/design-underground-system",
        "simulation/candy-crush",
        "simulation/design-tic-tac-toe",
      ],
    },
    {
      type: 'category',
      label: '冷宫',
      link: { type: 'doc', id: "glacier/README" },
      items: [
        "glacier/consecutive-numbers-sum",
      ],
    },
    { 附录: ["data-structures", "java-collection"] },
  ],
};
