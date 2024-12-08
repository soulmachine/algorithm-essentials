"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2285],{47237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"graph/network-delay-time","title":"Network Delay Time","description":"\u63cf\u8ff0","source":"@site/docs/graph/network-delay-time.md","sourceDirName":"graph","slug":"/graph/network-delay-time","permalink":"/en/graph/network-delay-time","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Network Delay Time"},"sidebar":"docs","previous":{"title":"Graph Valid Tree","permalink":"/en/graph/graph-valid-tree"},"next":{"title":"Path with Maximum Probability","permalink":"/en/graph/path-with-maximum-probability"}}');var s=t(74848),r=t(28453),i=t(11470),l=t(19365);const o={title:"Network Delay Time"},c=void 0,d={},h=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function u(e){const n={a:"a",annotation:"annotation",blockquote:"blockquote",br:"br",code:"code",h3:"h3",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,s.jsxs)(n.p,{children:["There are ",(0,s.jsx)(n.code,{children:"N"})," network nodes, labelled ",(0,s.jsx)(n.code,{children:"1"})," to ",(0,s.jsx)(n.code,{children:"N"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Given ",(0,s.jsx)(n.code,{children:"times"}),", a list of travel times as ",(0,s.jsx)(n.strong,{children:"directed"})," edges ",(0,s.jsx)(n.code,{children:"times[i] = (u, v, w)"}),", where ",(0,s.jsx)(n.code,{children:"u"})," is the source node, ",(0,s.jsx)(n.code,{children:"v"})," is the target node, and ",(0,s.jsx)(n.code,{children:"w"})," is the time it takes for a signal to travel from source to target."]}),"\n",(0,s.jsxs)(n.p,{children:["Now, we send a signal from a certain node ",(0,s.jsx)(n.code,{children:"K"}),". How long will it take for all nodes to receive the signal? If it is impossible, return ",(0,s.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example 1"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(66142).A+"",width:"217",height:"239"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Input"}),": times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Output"}),": 2"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"N"})," will be in the range ",(0,s.jsx)(n.code,{children:"[1, 100]"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"K"})," will be in the range ",(0,s.jsx)(n.code,{children:"[1, N]"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The length of ",(0,s.jsx)(n.code,{children:"times"})," will be in the range ",(0,s.jsx)(n.code,{children:"[1, 6000]"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["All edges ",(0,s.jsx)(n.code,{children:"times[i] = (u, v, w)"})," will have ",(0,s.jsx)(n.code,{children:"1 <= u, v <= N"})," and ",(0,s.jsx)(n.code,{children:"0 <= w <= 100"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u9898\u53ef\u4ee5\u62bd\u8c61\u4e3a\uff1a\u7ed9\u5b9a\u56fe ",(0,s.jsx)(n.code,{children:"G"})," \u548c\u6e90\u9876\u70b9 ",(0,s.jsx)(n.code,{children:"v"}),"\uff0c\u627e\u5230\u4ece ",(0,s.jsx)(n.code,{children:"v"})," \u81f3\u56fe\u4e2d\u6240\u6709\u9876\u70b9\u7684\u6700\u77ed\u8def\u5f84\u3002\u8fd9\u662f\u7ecf\u5178\u7684\u5355\u6e90\u6700\u77ed\u8def\u5f84\u95ee\u9898\uff0c\u7528 Dijkstra \u7b97\u6cd5\u3002\u65f6\u95f4\u590d\u6742\u5ea6 ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"E"}),(0,s.jsx)(n.mi,{children:"log"}),(0,s.jsx)(n.mo,{children:"\u2061"}),(0,s.jsx)(n.mi,{children:"V"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(E\\log V)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsxs)(n.span,{className:"mop",children:["lo",(0,s.jsx)(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"V"}),(0,s.jsx)(n.mo,{children:"+"}),(0,s.jsx)(n.mi,{children:"E"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(V+E)"})]})})}),(0,s.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.jsx)(n.span,{className:"mbin",children:"+"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})]})]}),"\uff0c",(0,s.jsx)(n.code,{children:"V"})," \u4e3a\u9876\u70b9\u4e2a\u6570\uff0c",(0,s.jsx)(n.code,{children:"E"})," \u4e3a\u8fb9\u6761\u6570\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,s.jsxs)(i.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,s.jsx)(l.A,{value:"java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// Network Delay Time\n// Dijkstra\n// Time Complexity: O(ElogN), Space Complexity: O(N + E)\nclass Solution {\n    public int networkDelayTime(int[][] times, int N, int K) {\n        // adjacency list, map<vertex_id, map<vertex_id, weight>>\n        Map<Integer, Map<Integer,Integer>> graph = new HashMap<>();\n        for(int[] time : times){\n            graph.putIfAbsent(time[0], new HashMap<>());\n            graph.get(time[0]).put(time[1], time[2]);\n        }\n\n        Map<Integer, Integer> dist = dijkstra(graph, K);\n\n        return dist.size() == N ? Collections.max(dist.values()) : -1;\n    }\n\n    /** Standard Dijkstra algorithm.\n     *\n     @param graph Adjacency list, map<vertex_id, map<vertex_id, weight>>.\n     @param start The starting vertex ID.\n     @return dist, map<vertex_id, distance>.\n     */\n    private static Map<Integer, Integer> dijkstra(Map<Integer, Map<Integer,Integer>> graph, int start) {\n        // map<vertex_id, distance>\n        Map<Integer, Integer> dist = new HashMap<>();\n        // vertex_id -> father_vertex_id\n        Map<Integer, Integer> father = new HashMap<>();\n\n        // pair<distance, vertex_id>, min heap, sorted by distance from start to vertex_id\n        Queue<Pair<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> a.getKey() - b.getKey());\n\n        // from start to start itself\n        pq.offer(new Pair(0, start));\n        dist.put(start, 0);\n\n        while(!pq.isEmpty()){\n            final int u = pq.poll().getValue();\n            if (!graph.containsKey(u)) continue; // leaf node\n\n            for(int v : graph.get(u).keySet()){\n                final int w = graph.get(u).get(v);\n                if (!dist.containsKey(v) || dist.get(u)+ w < dist.get(v)) {\n                    final int shorter = dist.get(u)+ w;\n                    dist.put(v, shorter);\n                    father.put(v, u);\n                    pq.offer(new Pair(shorter, v));\n                }\n            }\n        }\n\n        return dist;\n    }\n}\n"})})}),(0,s.jsx)(l.A,{value:"cpp",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"// TODO\n"})})}),(0,s.jsx)(l.A,{value:"python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Network Delay Time\n# Dijkstra\n# Time Complexity: O(ElogN), Space Complexity: O(N + E)\nclass Solution:\n    def networkDelayTime(self, times: list[list[int]], N: int, K: int) -> int:\n        # adjacency list, map<vertex_id, map<vertex_id, weight>>\n        graph = {}\n        for u, v, w in times:\n            if u not in graph:\n                graph[u] = {}\n            graph[u][v] = w\n\n        dist = self.dijkstra(graph, K)\n\n        return max(dist.values()) if len(dist) == N else -1\n\n    def dijkstra(self, graph: dict, start: int) -> dict:\n        """Standard Dijkstra algorithm.\n\n        Args:\n            graph: Adjacency list, map<vertex_id, map<vertex_id, weight>>.\n            start: The starting vertex ID.\n        Returns:\n            dist: map<vertex_id, distance>.\n        """\n        # map<vertex_id, distance>\n        dist = {}\n        # vertex_id -> father_vertex_id\n        father = {}\n\n        # pair<distance, vertex_id>, min heap, sorted by distance from start to vertex_id\n        pq = [(0, start)]\n        dist[start] = 0\n\n        while pq:\n            d, u = heapq.heappop(pq)\n            if d > dist[u]:\n                continue\n            if u not in graph:  # leaf node\n                continue\n\n            for v, w in graph[u].items():\n                if v not in dist or dist[u] + w < dist[v]:\n                    shorter = dist[u] + w\n                    dist[v] = shorter\n                    father[v] = u\n                    heapq.heappush(pq, (shorter, v))\n\n        return dist\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/en/graph/path-with-maximum-probability",children:"Path with Maximum Probability"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>b});var a=t(96540),s=t(34164),r=t(23104),i=t(56347),l=t(205),o=t(57485),c=t(31682),d=t(70679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=u(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,h]=p({queryString:t,groupId:s}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),v=(()=>{const e=c??x;return m({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function A(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==a&&(c(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function I(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,j.jsx)(A,{...n,...e}),(0,j.jsx)(f,{...n,...e})]})}function b(e){const n=(0,g.A)();return(0,j.jsx)(I,{...e,children:h(e.children)},String(n))}},66142:(e,n,t)=>{t.d(n,{A:()=>a});const a="data:image/png;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);