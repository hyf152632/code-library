calc()

The calc() CSS function lets you perform calculations when specifying CSS property values.   
It can be used anywhere a <length>, <frequency>, <angle>, <time>, <number>, or <integer> is allowed.  

/* property: calc(expression) */
width: calc(100% - 80px);

请不要忘记在 calc() 函数 内部的 - 和 + 运算符的两侧各加 一个空白符，否则会产生解析错 误！  
这个规则如此怪异，是为了 向前兼容：未来，在 calc() 内部 可能会允许使用关键字，而这些 关键字可能会包含连字符（即减号）。  