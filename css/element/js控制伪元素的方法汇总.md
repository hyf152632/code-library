JS控制伪元素的方法汇总  

JS控制伪元素的方法汇总

            
作者：凳子  字体：[增加 减小] 类型：转载 时间：2016-04-06 我要评论
                
本文给大家介绍js控制伪元素的方法汇总，本文涉及到获取伪元素属性值的方法，本文介绍的非常详细，具有参考借鉴价值，感兴趣的朋友一起学习吧
                
一. 缘由：
本文源于在OSC社区中，有人提问如何用jq获取伪元素。我第一想法是强大的CSS Query应该可以获取伪元素吧。
然而事实上，CSS Query并不能。即我们不能通过$(“:before”)、$(dom).find(“:before”)或document.querySelector(“:before”)来获取:before伪元素。
为此，我不得不重新了解伪元素（Pseudo-elements）。为什么不能用JS直接获取伪元素呢？
譬如::before和::after伪元素，用于在CSS渲染中向元素的头部或尾部插入内容，它们不受文档约束，也不影响文档本身，只影响最终样式。这些添加的内容不会出现在DOM中，仅仅是在CSS渲染层中加入。
事实上， 伪元素可以被浏览器渲染，但本身并不是DOM元素。它不存在于文档中，所以JS无法直接操作它。 而jQuery的选择器都是基于DOM元素的，因此也并不能直接操作伪元素。
那该怎样操作伪元素的样式呢？
为此，我决定好好总结一下JS控制伪元素的方法，方便以后查用。
二. 伪元素有哪些：
首先，先简单说一下伪元素都有哪些。伪元素有六个，分别是 ::after、::before、::first-line、::first-letter、::selection、::backdrop 。
在各大网页中最常用的伪元素，是::after和::before。
这几个伪元素的语意可参考我的另外一篇文章《CSS伪元素选择器 总结》。
在CSS3中，建议伪元素使用两个冒号(::)语法，而不是一个冒号 (:)，目的是为了区分伪类和伪元素。大多数浏览器都支持这两种表示语法。只有 ::selection 永远只能以两个冒号开头(::)。因为IE8只支持单冒号的语法，所以，如果你想兼容IE8，保险的做法是使用单冒号。
三. 获取伪元素的属性值：
获取伪元素的属性值可以使用 window.getComputedStyle() 方法，获取伪元素的CSS样式声明对象。然后利用getPropertyValue方法或直接使用键值访问都可以获取对应的属性值。
语法：window.getComputedStyle(element[, pseudoElement])
参数如下：
element（Object）：伪元素的所在的DOM元素；
pseudoElement（String）：伪元素类型。可选值有：”:after”、”:before”、”:first-line”、”:first-letter”、”:selection”、”:backdrop”；
举个栗子：
// CSS代码
#myId:before {
content: "hello world!";
display: block;
width: 100px;
height: 100px;
background: red;
}
// HTML代码
<div id="myId"></div>
// JS代码
var myIdElement = document.getElementById("myId");
var beforeStyle = window.getComputedStyle(myIdElement, ":before");
console.log(beforeStyle); // [CSSStyleDeclaration Object]
console.log(beforeStyle.width); // 100px
console.log(beforeStyle.getPropertyValue("width")); // 100px
console.log(beforeStyle.content); // "hello world!"
备注：
1.getPropertyValue()和直接使用键值访问，都可以访问CSSStyleDeclaration Object。它们两者的区别有：
对于float属性，如果使用键值访问，则不能直接使用getComputedStyle(element, null).float，而应该是cssFloat与styleFloat；
直接使用键值访问，则属性的键需要使用驼峰写法，如：style.backgroundColor；
使用getPropertyValue()方法不必可以驼峰书写形式（不支持驼峰写法），例如：style.getPropertyValue(“border-top-color”)；
getPropertyValue()方法在IE9+和其他现代浏览器中都支持；在IE6~8中，可以使用getAttribute()方法来代替；
2.伪元素默认是”display: inline”。如果没有定义display属性，即使在CSS中显式设置了width的属性值为固定的大小如”100px”，但是最后获取的width值仍是”auto”。这是因为行内元素不能自定义设置宽高。解决办法是给伪元素修改display属性为”block”、”inline-block”或其他。
四. 更改伪元素的样式：
方法1. 更换class来实现伪元素属性值的更改：
举个栗子：
// CSS代码
.red::before { 
content: "red"; 
color: red; 
}
.green::before { 
content: "green"; 
color: green;
}
// HTML代码
<div class="red">内容内容内容内容</div>
// jQuery代码
$(".red").removeClass('red').addClass('green');
方法2. 使用CSSStyleSheet的insertRule来为伪元素修改样式：
举个栗子：
document.styleSheets[0].addRule('.red::before','color: green'); // 支持IE document.styleSheets[0].insertRule('.red::before { color: green }', 0); // 支持非IE的现代浏览器
方法3. 在 <head> 标签中插入 <style> 的内部样式：
var style = document.createElement("style"); 
document.head.appendChild(style); 
sheet = style.sheet; 
sheet.addRule('.red::before','color: green'); // 兼容IE浏览器
sheet.insertRule('.red::before { color: green }', 0); // 支持非IE的现代浏览器
或者用jQuery：
$('<style>.red::before{color:green}</style>').appendTo('head');
五. 修改伪元素的content的属性值：
方法1. 使用CSSStyleSheet的insertRule来为伪元素修改样式：
var latestContent = "修改过的内容";
var formerContent = window.getComputedStyle($('.red'), '::before').getPropertyValue('content'); document.styleSheets[0].addRule('.red::before','content: "' + latestContent + '"'); document.styleSheets[0].insertRule('.red::before { content: "' + latestContent + '" }', 0);
方法2. 使用DOM元素的data-*属性来更改content的值：
// CSS代码
.red::before {
content: attr(data-attr);
color: red;
}
// HTML代码
<div class="red" data-attr="red">内容内容内容内容</div>
// JacaScript代码
$('.red').attr('data-attr', 'green');
六. :before和:after伪元素的常见用法总结：
1. 利用content属性，为元素添加内容修饰：
1） 添加字符串：
使用引号包括一段字符串，将会向元素内容中添加字符串。栗子：
a:after { content: "after content"; }
2） 使用attr()方法，调用当前元素的属性的值：
栗子：
a:after { content: attr(href); }
a:after { content: attr(data-attr); }
3）使用url()方法，引用多媒体文件：
栗子：
a::before { content: url(logo.png); }
4) 使用counter()方法，调用计时器：
栗子：
h:before { counter-increment: chapter; cotent: "Chapter " counter(chapter) ". " }
2. 清除浮动：
.clear-fix { *overflow: hidden; *zoom: 1; }
.clear-fix:after { display: table; content: ""; width: 0; clear: both; }
3. 特效妙用：
// CSS代码
a {
position: relative;
display: inline-block;
text-decoration: none;
color: #000;
font-size: 32px;
padding: 5px 10px;
}
a::before, a::after { 
content: "";
transition: all 0.2s;
}
a::before { 
left: 0;
}
a::after { 
right: 0;
}
a:hover::before, a:hover::after { 
position: absolute;
}
a:hover::before { content: "\5B"; left: -20px; }
a:hover::after { content: "\5D"; right: -20px; }
// HTML代码
<a href="#">我是个超链接</a>
4. 特殊形状的实现：
举个栗子：（譬如对话气泡）
// CSS代码
.tooltip {
position: relative;
display: inline-block;
padding: 5px 10px;
background: #80D4C8;
}
.tooltip:before {
content: "";
display: block;
position: absolute;
left: 50%;
margin-left: -5px;
bottom: -5px;
width: 0; 
height: 0; 
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-top: 5px solid #80D4C8;
}
// HTML代码
<div class="tooltip">I'm a tooltip.</div>
:before 和 :after 伪元素结合更多CSS3强大的特性，还可完成非常多有趣的特效和 hack ，这里权当抛砖引玉。
六. 一点小小建议：
伪元素的content属性很强大，可以写入各种字符串和部分多媒体文件。但是伪元素的内容只存在于CSS渲染树中，并不存在于真实的DOM中。所以为了SEO优化，最好不要在伪元素中包含与文档相关的内容。
修改伪元素的样式，建议使用通过更换class来修改样式的方法。因为其他两种通过插入行内CSSStyleSheet的方式是在JavaScript中插入字符代码，不利于样式与控制分离；而且字符串拼接易出错。
修改伪元素的content属性的值，建议使用利用DOM的data-*属性来更改。
以上所述是小编给大家介绍的JS控制伪元素的方法汇总，希望对大家有所帮助！