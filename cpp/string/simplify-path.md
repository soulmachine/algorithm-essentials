## Simplify Path


### 描述

Given an absolute path for a file (Unix-style), simplify it.

For example, 

* path = `"/home/"`, => `"/home"` 
* path = `"/a/./b/../../c/"`, => `"/c"`

Corner Cases:

* Did you consider the case where path = `"/../"`? 

    In this case, you should return `"/"`.

*  Another corner case is the path might contain multiple slashes `'/'` together, such as `"/home//foo/"`.

    In this case, you should ignore redundant slashes and return `"/home/foo"`.


### 分析

很有实际价值的题目。


### 代码

{% codesnippet "./code/simplify-path."+book.suffix, language=book.suffix %}{% endcodesnippet %}
