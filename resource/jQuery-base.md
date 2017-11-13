环境搭建
进入官方网站获取最新的版本 http://jquery.com/download/  ，这里需要注意 jQuery 分 2 个系列版本 1.x 与 2.x，主要的区别在于 2.x 不再兼容 IE6、7、8浏览器，这样做的目的是为了兼容移动端开发。由于减少了一些代码，使得该版本比 jQuery 1.x 更小、更快。
如果开发者比较在意老版本 IE 用户，只能使用 jQuery 1.9 及之前的版本了。我们这本课程为了兼容性问题，使用的是 1.9 版本。jQuery 每一个系列版本分为：压缩版(compressed) 与 开发版(development)，我们在开发过程中使用开发版（开发版本便于代码修改及调试），项目上线发布使用压缩版（因为压缩版本体积更小，效率更快）。
 jQuery是一个JavaScript脚本库，不需要特别的安装，只需要我们在页面 <head> 标签内中，通过 script 标签引入 jQuery 库即可。
<script type="text/javascript">
            $(document).ready(function() {
                    $("div").html("您好！通过慕课网学习jQuery才是最佳的途径。");
            });
    </script>
代码分析：
$(document).ready 的作用是等页面的文档（document）中的节点都加载完毕后，再执行后续的代码，因为我们在执行代码的时候，可能会依赖页面的某一个元素，我们要确保这个元素真正的的被加载完毕后才能正确的使用。

jQuery对象与DOM对象
普通处理，通过标准JavaScript处理：
var p = document.getElementById('imooc');
p.innerHTML = '您好！通过慕课网学习jQuery才是最佳的途径';
p.style.color = 'red';
jQuery的处理：
var $p = $('#imooc');
$p.html('您好！通过慕课网学习jQuery才是最佳的途径').css('color','red');
通过$('#imooc')方法会得到一个$p的jQuery对象，$p是一个类数组对象。这个对象里面包含了DOM对象的信息，然后封装了很多操作方法，调用自己的方法html与css，得到的效果与标准的JavaScript处理结果是一致的。
通过标准的JavaScript操作DOM与jQuyer操作DOM的对比，我们不难发现：
1. 通过jQuery方法包装后的对象，是一个类数组对象。它与DOM对象完全不同，唯一相似的是它们都能操作DOM。
2. 通过jQuery处理DOM的操作，可以让开发者更专注业务逻辑的开发，而不需要我们具体知道哪个DOM节点有那些方法，也不需要关心不同浏览器的兼容性问题，我们通过jQuery提供的API进行开发，代码也会更加精短。

jQuery对象转化成DOM对象
var $div = $('div') //jQuery对象
var div = $div[0] //转化成DOM对象
div.style.color = 'red' //操作dom对象的属性
用jQuery找到所有的div元素（3个），因为jQuery对象也是一个数组结构，可以通过数组下标索引找到第一个div元素，通过返回的div对象，调用它的style属性修改第一个div元素的颜色。这里需要注意的一点是，数组的索引是从0开始的，也就是第一个元素下标是0
过jQuery自带的get()方法
jQuery对象自身提供一个.get() 方法允许我们直接访问jQuery对象中相关的DOM节点，get方法中提供一个元素的索引：
var $div = $('div') //jQuery对象
var div = $div.get(0) //通过get方法，转化成DOM对象
div.style.color = 'red' //操作dom对象的属性
其实我们翻开源码，看看就知道了，get方法就是利用的第一种方式处理的，只是包装成一个get让开发者更直接方便的使用。

DOM对象转化成jQuery对象
var div = document.getElementsByTagName('div'); //dom对象
var $div = $(div); //jQuery对象
var $first = $div.first(); //找到第一个div元素
$first.css('color', 'red'); //给第一个元素设置颜色
通过getElementsByTagName获取到所有div节点的元素，结果是一个dom合集对象，不过这个对象是一个数组合集(3个div元素)。通过$(div)方法转化成jQuery对象，通过调用jQuery对象中的first与css方法查找第一个元素并且改变其颜色。

id选择器：一个用来查找的ID，即元素的id属性
$( "#id" )

类选择器：
$( ".class" )

<script type="text/javascript">
        //通过原生方法处理
        //样式是可以多选的，所以得到的是一个合集
        //需要通过循环给合集中每一个元素修改样式
        var divs = document.getElementsByClassName('aaron');
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.border = "3px solid blue";
        }
    </script>

    <script type="text/javascript">
        //通过jQuery直接传入class
        //class选择器可以选择多个元素
        $(".imooc").css("border", "3px solid red");
    </script>

元素选择器：根据给定（html）标记名称选择所有的元素
描述：
$( "element" )
搜索指定元素标签名的所有节点，这个是一个合集的操作。同样的也有原生方法getElementsByTagName()函数支持

jQuery选择器之全选择器（*选择器）
在CSS中，经常会在第一行写下这样一段样式
* {padding: 0; margin: 0;}
通配符*意味着给所有的元素设置默认的边距。jQuery中我们也可以通过传递*选择器来选中文档页面中的元素
描述：
$( "*" )
抛开jQuery，如果要获取文档中所有的元素，通过document.getElementsByTagName()中传递"*"同样可以获取到
不难发现，id、class、tag都可以通过原生的方法获取到对应的节点，但是我们还需要考虑一个兼容性的问题，我这里顺便提及一下，比如:
1. IE会将注释节点实现为元素，所以在IE中调用getElementsByTagName里面会包含注释节点，这个通常是不应该的
2. getElementById的参数在IE8及较低的版本不区分大小写
3. IE7及较低的版本中，表单元素中，如果表单A的name属性名用了另一个元素B的ID名并且A在B之前，那么getElementById会选中A
4. IE8及较低的版本，浏览器不支持getElementsByClassName

jQuery选择器之层级选择器
选择器中的层级选择器就是用来处理这种关系
子元素 后代元素 兄弟元素 相邻元素
通过一个列表，对比层级选择器的区别
仔细观察层级选择器之间还是有很多相似与不同点
1. 层级选择器都有一个参考节点
2. 后代选择器包含子选择器的选择的内容
3. 一般兄弟选择器包含相邻兄弟选择的内容
4. 相邻兄弟选择器和一般兄弟选择器所选择到的元素，必须在同一个父元素下

jQuery选择器之基本筛选选择器
筛选选择器的用法与CSS中的伪元素相似，选择器用冒号“：”开头，通过一个列表，看看基本筛选器的描述：
注意事项：
1. :eq(), :lt(), :gt(), :even, :odd 用来筛选他们前面的匹配表达式的集合元素，根据之前匹配的元素在进一步筛选，注意jQuery合集都是从0开始索引
2. gt是一个段落筛选，从指定索引的下一个开始，gt(1) 实际从2开始

//:not 选择所有元素去除不匹配给定的选择器的元素
        //选中所有紧接着没有checked属性的input元素后的p元素，赋予颜色
        $("input:not(:checked) + p").css("background-color", "#CD00CD");

jQuery选择器之内容筛选选择器
基本筛选选择器针对的都是元素DOM节点，如果我们要通过内容来过滤，jQuery也提供了一组内容筛选选择器，当然其规则也会体现在它所包含的子元素或者文本内容上
内容过滤器描述如下表：
注意事项：
1. :contains与:has都有查找的意思，但是contains查找包含“指定文本”的元素，has查找包含“指定元素”的元素
2. 如果:contains匹配的文本包含在元素的子元素中，同样认为是符合条件的。
3. :parent与:empty是相反的，两者所涉及的子元素，包括文本节点

<script type="text/javascript">
        //查找所有class='div'中DOM元素中包含"contains"的元素节点
        //并且设置颜色
        $(".div:contains(':contains')").css("color", "#CD00CD");
        $(".div:contains('hahaha')").css("color","#ccc");
    </script>

    <script type="text/javascript">
        //查找所有class='div'中DOM元素中包含"span"的元素节点
        //并且设置颜色
        $(".div:has(span)").css("color", "blue");
    </script>

<script type="text/javascript">
       //选择所有包含子元素或者文本的a元素
       //增加一个蓝色的边框
       $("a:parent").css("border", "3px groove blue");
    </script>

    <script type="text/javascript">
       //找到a元素下面的所有空节点(没有子元素)
       //增加一段文本与边框
       $("a:empty").text(":empty").css("border", "3px groove red"); 
    </script>

jQuery选择器之可见性筛选选择器
元素有显示状态与隐藏状态，jQuery根据元素的状态扩展了可见性筛选选择器:visible与:hidden
描述如下：
:hidden选择器，不仅仅包含样式是display="none"的元素，还包括隐藏表单、visibility等等

我们有几种方式可以隐藏一个元素：
1. CSS display的值是none。
2. type="hidden"的表单元素。
3. 宽度和高度都显式设置为0。
4. 一个祖先元素是隐藏的，该元素是不会在页面上显示
5. CSS visibility的值是hidden
6. CSS opacity的指是0
如果元素中占据文档中一定的空间,元素被认为是可见的。
可见元素的宽度或高度，是大于零。
元素的visibility: hidden 或 opacity: 0被认为是可见的，因为他们仍然占用空间布局。

jQuery选择器之属性筛选选择器
属性选择器让你可以基于属性来定位一个元素。可以只指定该元素的某个属性，这样所有使用该属性而不管它的值，这个元素都将被定位，也可以更加明确并定位在这些属性上使用特定值的元素，这就是属性选择器展示它们的威力的地方。
描述如下：
浏览器支持：
* [att=val]、[att]、[att|=val]、[att~=val]  属于CSS 2.1规范
* [ns|attr]、[att^=val]、[att*=val]、[att$=val] 属于CSS3规范
* [name!="value"]  属于jQuery 扩展的选择器
CSS选择器无论CSS2.1版本还是CSS3版本，IE7和IE8都支持，webkit、Gecko核心及Opera也都支持，只有IE6以下浏览器才不支持
在这么多属性选择器中[attr="value"]和[attr*="value"]是最实用的
[attr="value"]能帮我们定位不同类型的元素，特别是表单form元素的操作，比如说input[type="text"],input[type="checkbox"]等
[attr*="value"]能在网站中帮助我们匹配不同类型的文件

jQuery选择器之子元素筛选选择器
子元素筛选选择器不常使用，其筛选规则比起其它的选择器稍微要复杂点
子元素筛选选择器描述表：
注意事项：
1. :first只匹配一个单独的元素，但是:first-child选择器可以匹配多个：即为每个父级元素匹配第一个子元素。这相当于:nth-child(1)
2. :last 只匹配一个单独的元素， :last-child 选择器可以匹配多个元素：即，为每个父级元素匹配最后一个子元素
3. 如果子元素只有一个的话，:first-child与:last-child是同一个
4.  :only-child匹配某个元素是父元素中唯一的子元素，就是说当前子元素是父元素中唯一的元素，则匹配
5. jQuery实现:nth-child(n)是严格来自CSS规范，所以n值是“索引”，也就是说，从1开始计数，:nth-child(index)从1开始的，而eq(index)是从0开始的
6. nth-child(n) 与 :nth-last-child(n) 的区别前者是从前往后计算，后者从后往前计算
jQuery选择器之表单元素选择器
无论是提交还是传递数据，表单元素在动态交互页面的作用是非常重要的。jQuery中专门加入了表单选择器，从而能够极其方便地获取到某个类型的表单元素
表单选择器的具体方法描述：
注意事项：
除了input筛选选择器，几乎每个表单类别筛选器都对应一个input元素的type值。大部分表单类别筛选器可以使用属性筛选器替换。比如 $(':password') == $('[type=password]')
jQuery选择器之表单对象属性筛选选择器
除了表单元素选择器外，表单对象属性筛选选择器也是专门针对表单元素的选择器，可以附加在其他选择器的后面，主要功能是对所选择的表单元素进行筛选
表单筛选选择器的描述：
注意事项：
1. 选择器适用于复选框和单选框，对于下拉框元素, 使用 :selected 选择器
2. 在某些浏览器中，选择器:checked可能会错误选取到<option>元素，所以保险起见换用选择器input:checked，确保只会选取<input>元素
jQuery选择器之特殊选择器this
相信很多刚接触jQuery的人，很多都会对$(this)和this的区别模糊不清，那么这两者有什么区别呢？
this是JavaScript中的关键字，指的是当前的上下文对象，简单的说就是方法/属性的所有者
下面例子中，imooc是一个对象，拥有name属性与getName方法,在getName中this指向了所属的对象imooc
var imooc = {
name:"慕课网",
getName:function(){
//this,就是imooc对象
return this.name;
}
}
imooc.getName(); //慕课网
当然在JavaScript中this是动态的，也就是说这个上下文对象都是可以被动态改变的(可以通过call,apply等方法)，具体的大家可以查阅相关资料
同样的在DOM中this就是指向了这个html元素对象，因为this就是DOM元素本身的一个引用
假如给页面一个P元素绑定一个事件:
p.addEventListener('click',function(){
//this === p
//以下两者的修改都是等价的
this.style.color = "red";
p.style.color = "red";
},false);
通过addEventListener绑定的事件回调中，this指向的是当前的dom对象，所以再次修改这样对象的样式，只需要通过this获取到引用即可
 this.style.color = "red"
但是这样的操作其实还是很不方便的，这里面就要涉及一大堆的样式兼容，如果通过jQuery处理就会简单多了，我们只需要把this加工成jQuery对象
换成jQuery的做法：
$('p').click(function(){
//把p元素转化成jQuery的对象
var $this= $(this)
$this.css('color','red')
})
通过把$()方法传入当前的元素对象的引用this，把这个this加工成jQuery对象，我们就可以用jQuery提供的快捷方法直接处理样式了
总体：
this，表示当前的上下文对象是一个html对象，可以调用html对象所拥有的属性和方法。
$(this),代表的上下文对象是一个jquery的上下文对象，可以调用jQuery的方法和属性值。

分析一段复杂的选择器：
$("#menu_con div.tag dd > p:first-child")
这段组合的选择器表达式用到了几个之前学到的选择器：ID、Class、元素、层级、子元素筛选器
当用到筛选器 :first-child的时候我们就知道了，这肯定是一组合集，意味着p元素是有多个，而且是分布在不同父元素dd里面的

jQuery的属性与样式之.attr()与.removeAttr()
每个元素都有一个或者多个特性，这些特性的用途就是给出相应元素或者其内容的附加信息。如：在img元素中，src就是元素的特性，用来标记图片的地址。
操作特性的DOM方法主要有3个，getAttribute方法、setAttribute方法和removeAttribute方法，就算如此在实际操作中还是会存在很多问题，这里先不说。而在jQuery中用一个attr()与removeAttr()就可以全部搞定了，包括兼容问题
jQuery中用attr()方法来获取和设置元素属性,attr是attribute（属性）的缩写，在jQuery DOM操作中会经常用到attr()
attr()有4个表达式
1. attr(传入属性名)：获取属性的值
2. attr(属性名, 属性值)：设置属性的值
3. attr(属性名,函数值)：设置属性的函数值
4. attr(attributes)：给指定元素设置多个属性值，即：{属性名一: “属性值一” , 属性名二: “属性值二” , … … }
removeAttr()删除方法
.removeAttr( attributeName ) : 为匹配的元素集合中的每个元素中移除一个属性（attribute）
优点：
attr、removeAttr都是jQuery为了属性操作封装的，直接在一个 jQuery 对象上调用该方法，很容易对属性进行操作，也不需要去特意的理解浏览器的属性名不同的问题
注意的问题：
dom中有个概念的区分：Attribute和Property翻译出来都是“属性”，《js高级程序设计》书中翻译为“特性”和“属性”。简单理解，Attribute就是dom节点自带的属性
例如：html中常用的id、class、title、align等：
<div id="immooc" title="慕课网"></div>
而Property是这个DOM元素作为对象，其附加的内容，例如,tagName, nodeName, nodeType,, defaultChecked, 和 defaultSelected 使用.prop()方法进行取值或赋值等
获取Attribute就需要用attr，获取Property就需要用prop


<script type="text/javascript">
        //找到第一个input，通过attr设置属性value的值
        $(":input:first").attr('value','.attr( attributeName, value )')
    </script>

    <script type="text/javascript">
        //找到第二个input，通过attr获取属性value的值
        $("input:eq(1)").attr('value')
    </script>

    <script type="text/javascript">
        //找到第三个input，通过使用一个函数来设置属性
        //可以根据该元素上的其它属性值返回最终所需的属性值
        //例如，我们可以把新的值与现有的值联系在一起：
        $("input:eq(2)").attr('value',function(i, val){
            return '通过function设置' + val
        })
    </script>

    <script type="text/javascript">
        //找到第四个input，通过使用removeAttr删除属性
        $("input:eq(3)").removeAttr('value')
    </script>

jQuery的属性与样式之html()及.text()
读取、修改元素的html结构或者元素的文本内容是常见的DOM操作，jQuery针对这样的处理提供了2个便捷的方法.html()与.text()
.html()方法 
获取集合中第一个匹配元素的HTML内容 或 设置每一个匹配元素的html内容，具体有3种用法：
1. .html() 不传入值，就是获取集合中第一个匹配元素的HTML内容
2. .html( htmlString )  设置每一个匹配元素的html内容
3. .html( function(index, oldhtml) ) 用来返回设置HTML内容的一个函数
注意事项：
.html()方法内部使用的是DOM的innerHTML属性来处理的，所以在设置与获取上需要注意的一个最重要的问题
，
这个操作是针对整个HTML内容（不仅仅只是文本内容）
.text()方法
得到匹配元素集合中每个元素的文本内容结合，包括他们的后代，或设置匹配元素集合中每个元素的文本内容为指定的文本内容。，具体有3种用法：
1. .text() 得到匹配元素集合中每个元素的合并文本，包括他们的后代
2. .text( textString ) 用于设置匹配元素内容的文本
3. .text( function(index, text) ) 用来返回设置文本内容的一个函数
注意事项：
.text()结果返回一个字符串，包含所有匹配元素的合并文本
.html与.text的异同:
1. .html与.text的方法操作是一样，只是在具体针对处理对象不同
2. .html处理的是元素内容，.text处理的是文本内容
3. .html只能使用在HTML文档中，.text 在XML 和 HTML 文档中都能使用
4. 如果处理的对象只有一个子文本节点，那么html处理的结果与text是一样的
5. 火狐不支持innerText属性，用了类似的textContent属性，.text()方法综合了2个属性的支持，所以可以兼容所有浏览器

<script type="text/javascript">
        //显示出html方法获取到的内容
        //.html()是整个html文档结构
        $('p:first').html( $(".first-div").html() ) 
    </script>


    <script type="text/javascript">
        //显示出text方法获取到的内容
        //.text()是文本内容的合集
        $('p:last').text( $(".first-div").text() ) 
    </script>


    <script type="text/javascript">
        //通过.text()方法替换文本内容
        $(".left a:first").text('替换第一个a元素的内容')
    </script>


    <script type="text/javascript">
        //通过.html()方法替换html结构
        $(".left div:first").html('整个div的子节点都被替换了')
    </script>


    <script type="text/javascript">
        //通过.text()的回调，获取原本的内容，修改，在重新赋值
        $(".left a:first").text(function(idnex,text){
            return '增加新的文本内容' + text
        })
    </script>

jQuery的属性与样式之.val()
jQuery中有一个.val()方法主要是用于处理表单元素的值，比如 input, select 和 textarea。
.val()方法
1. .val()无参数，获取匹配的元素集合中第一个元素的当前值
2. .val( value )，设置匹配的元素集合中每个元素的值
3. .val( function ) ，一个用来返回设置值的函数
 注意事项：
1. 通过.val()处理select元素， 当没有选择项被选中，它返回null
2. .val()方法多用来设置表单的字段的值
3. 如果select元素有multiple（多选）属性，并且至少一个选择项被选中， .val()方法返回一个数组，这个数组包含每个选中选择项的值
 
.html(),.text()和.val()的差异总结：  
1. .html(),.text(),.val()三种方法都是用来读取选定元素的内容；只不过.html()是用来读取元素的html内容（包括html标签），.text()用来读取元素的纯文本内容，包括其后代元素，.val()是用来读取表单元素的"value"值。其中.html()和.text()方法不能使用在表单元素上,而.val()只能使用在表单元素上；另外.html()方法使用在多个元素上时，只读取第一个元素；.val()方法和.html()相同，如果其应用在多个元素上时，只能读取第一个表单元素的"value"值，但是.text()和他们不一样，如果.text()应用在多个元素上时，将会读取所有选中元素的文本内容。
2. .html(htmlString),.text(textString)和.val(value)三种方法都是用来替换选中元素的内容，如果三个方法同时运用在多个元素上时，那么将会替换所有选中元素的内容。
3. .html(),.text(),.val()都可以使用回调函数的返回值来动态的改变多个元素的内容。

<script type="text/javascript">
        //单个select，返回第一个
        $("p").text( $("#single").val() )
    </script>

    <script type="text/javascript">
        //多个select被选择，返回["imocc", "博客园"]
        $("p").text( $("#multiple").val() ) 
    </script>


    <script type="text/javascript">
        //选择一个表单，修改value的值
        $("input[type='text']").val('修改表单的字段') 
    </script>

jQuery的属性与样式之增加样式.addClass()
通过动态改变类名（class），可以让其修改元素呈现出不同的效果。在HTML结构中里，多个class以空格分隔，当一个节点（或称为一个标签）含有多个class时，DOM元素响应的className属性获取的不是class名称的数组，而是一个含有空格的字符串，这就使得多class操作变得很麻烦。同样的jQuery开发者也考虑到这种情况，增加了一个.addClass()方法，用于动态增加class类名
.addClass( className )方法
1. .addClass( className ) : 为每个匹配元素所要增加的一个或多个样式名
2. .addClass( function(index, currentClass) ) : 这个函数返回一个或更多用空格隔开的要增加的样式名
注意事项：
.addClass()方法不会替换一个样式类名。它只是简单的添加一个样式类名到元素上
简单的描述下：在p元素增加一个newClass的样式
<p class="orgClass">
$("p").addClass("newClass")
那么p元素的class实际上是 class="orgClass newClass"样式只会在原本的类上继续增加，通过空格分隔

<script type="text/javascript"> 
        //class=left下div元素增加一个新的样式，增加背景颜色
        $('.left div').addClass('newClass')
    </script>

    <script type="text/javascript"> 

        //通过className(fucntion)方法
        //这个函数返回一个或更多用空格隔开的要增加的样式名。
        //接收index 参数表示元素在匹配集合中的索引位置和html 参数表示元素上原来的 HTML 内容

        //找到所有的div，然后通过addClass设置颜色，根据返回的className的判断，
        $("div").addClass(function(index,className) {

            //找到类名中包含了imooc的元素
            if(-1 !== className.indexOf('imooc')){
                //this指向匹配元素集合中的当前元素
                $(this).addClass('imoocClass')
            }
        });
    </script>


jQuery的属性与样式之删除样式.removeClass()
jQuery通过.addClass()方法可以很便捷的增加样式。如果需要样式之间的切换，同样jQuery提供了一个很方便的.removeClass()，它的作用是从匹配的元素中删除全部或者指定的class
.removeClass( )方法
1. .removeClass( [className ] )：每个匹配元素移除的一个或多个用空格隔开的样式名
2. .removeClass( function(index, class) ) ： 一个函数，返回一个或多个将要被移除的样式名
注意事项
如果一个样式类名作为一个参数,只有这样式类会被从匹配的元素集合中删除 。 如果没有样式名作为参数，那么所有的样式类将被移除

<script type="text/javascript"> 
        //class=left下div元素删除newClass样式
        $('.left div').removeClass('newClass')
    </script>


    <script type="text/javascript"> 
        //.removeClass() 方法允许我们指定一个函数作为参数，返回将要被删除的样式
        $('.right > div:first').removeClass(function(index,className){

            //className = aa bb imoocClass
            //把div的className赋给下一个兄弟元素div上作为它的class
            $(this).next().addClass(className)

            //删除自己本身的imoocClass
            return 'imoocClass'
        })


    </script>


jQuery的属性与样式之切换样式.toggleClass()
在做某些效果的时候，可能会针对同一节点的某一个样式不断的切换，也就是addClass与removeClass的互斥切换，比如隔行换色效果
jQuery提供一个toggleClass方法用于简化这种互斥的逻辑，通过toggleClass方法动态添加删除Class，一次执行相当于addClass，再次执行相当于removeClass
.toggleClass( )方法：在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或值切换属性。即：如果存在（不存在）就删除（添加）一个类
1. .toggleClass( className )：在匹配的元素集合中的每个元素上用来切换的一个或多个（用空格隔开）样式类名
2. .toggleClass( className, switch )：一个布尔值，用于判断样式是否应该被添加或移除
3. .toggleClass( [switch ] )：一个用来判断样式类添加还是移除的 布尔值
4. .toggleClass( function(index, class, switch) [, switch ] )：用来返回在匹配的元素集合中的每个元素上用来切换的样式类名的一个函数。接收元素的索引位置和元素旧的样式类作为参数
注意事项：
1. toggleClass是一个互斥的逻辑，也就是通过判断对应的元素上是否存在指定的Class名，如果有就删除，如果没有就增加
2. toggleClass会保留原有的Class名后新增，通过空格隔开

<script type="text/javascript">
    //给所有的tr元素加一个class="c"的样式
    $("#table tr").toggleClass("c");
    </script>
    <script type="text/javascript">
    //给所有的偶数tr元素切换class="c"的样式
    //所有基数的样式保留，偶数的被删除
    $("#table tr:odd").toggleClass("c");
    </script>
    <script type="text/javascript">
    //第二个参数判断样式类是否应该被添加或删除
    //true，那么这个样式类将被添加;
    //false，那么这个样式类将被移除
    //所有的奇数tr元素，应该都保留class="c"样式
    $("#table tr:even").toggleClass("c", true); //这个操作没有变化，因为样式已经是存在的
    </script>

jQuery的属性与样式之样式操作.css()
通过JavaScript获取dom元素上的style属性，我们可以动态的给元素赋予样式属性。在jQuery中我们要动态的修改style属性我们只要使用css()方法就可以实现了
.css() 方法：获取元素样式属性的计算值或者设置元素的CSS属性
获取：
1. .css( propertyName ) ：获取匹配元素集合中的第一个元素的样式属性的计算值
2. .css( propertyNames )：传递一组数组，返回一个对象结果
设置：
1.  .css(propertyName, value )：设置CSS
2. .css( propertyName, function )：可以传入一个回调函数，返回取到对应的值进行处理
3. .css( properties )：可以传一个对象，同时设置多个样式
注意事项：
1. 浏览器属性获取方式不同，在获取某些值的时候都jQuery采用统一的处理，比如颜色采用RBG，尺寸采用px
2. .css()方法支持驼峰写法与大小写混搭的写法，内部做了容错的处理
3. 当一个数只被作为值（value）的时候， jQuery会将其转换为一个字符串，并添在字符串的结尾处添加px，例如 .css("width",50}) 与 .css("width","50px"})一样

<script type="text/javascript">
        //background-color:blue; => rgb(0, 0, 255)
        //颜色都会转化成统一的rgb标示
        $('p:eq(0)').text( $('.first').css('background-color') )

    </script>

    <script type="text/javascript">
        //字体大小都会转化成统px大小 em=>px
        $('p:eq(1)').text( $('.first').css('font-size') )
    </script>

    <script type="text/javascript">
        //获取尺寸，传入CSS属性组成的一个数组
        //{width: "60px", height: "60px"}    
        var value = $('.first').css(['width','height']);
        //因为获取的是一个对象，取到对应的值
        $('p:eq(2)').text( 'widht:' + value.width +  ' height:' +value.height )
    </script>


<script type="text/javascript">
        //多种写法设置颜色
        $('.fourth').css("background-color","red")
        $('.fifth').css("backgroundColor","yellow")
    </script>

    <script type="text/javascript">
        //多种写法设置字体大小
        $('.fourth').css("font-size","15px")
        $('.fifth').css("fontSize","0.9em")
    </script>


    <script type="text/javascript">
        //获取到指定元素的宽度，在回调返回宽度值
        //通过处理这个value，重新设置新的宽度
        $('.sixth').css("width",function(index,value){
            //value带单位，先分解
            value = value.split('px');
            //返回一个新的值，在原有的值上，增加50px
            return (Number(value[0] + 50) + value[1]);
        })
    </script>

    <script type="text/javascript">
        //合并设置,通过对象传设置多个样式
        $('.seventh').css({
            "font-size" :"15px",
            "background-color" :"#40E0D0",
            "border"     : "1px solid red"
        })
    </script>

jQuery的属性与样式之.css()与.addClass()设置样式的区别
对于样式的设置，我们学了addClass与css方法，那么两者之间有什么区别？
可维护性：
.addClass()的本质是通过定义个class类的样式规则，给元素添加一个或多个类。css方法是通过JavaScript大量代码进行改变元素的样式
通过.addClass()我们可以批量的给相同的元素设置统一规则，变动起来比较方便，可以统一修改删除。如果通过.css()方法就需要指定每一个元素是一一的修改，日后维护也要一一的修改，比较麻烦
灵活性：
通过.css()方式可以很容易动态的去改变一个样式的属性，不需要在去繁琐的定义个class类的规则。一般来说在不确定开始布局规则，通过动态生成的HTML代码结构中，都是通过.css()方法处理的
样式值：
.addClass()本质只是针对class的类的增加删除，不能获取到指定样式的属性的值，.css()可以获取到指定的样式值。
样式的优先级：
css的样式是有优先级的，当外部样式、内部样式和内联样式同一样式规则同时应用于同一个元素的时候，优先级如下
外部样式 < 内部样式 < 内联样式
1. .addClass()方法是通过增加class名的方式，那么这个样式是在外部文件或者内部样式中先定义好的，等到需要的时候在附加到元素上
2. 通过.css()方法处理的是内联样式，直接通过元素的style属性附加到元素上的
通过.css方法设置的样式属性优先级要高于.addClass方法
总结：
.addClass与.css方法各有利弊，一般是静态的结构，都确定了布局的规则，可以用addClass的方法，增加统一的类规则
如果是动态的HTML结构，在不确定规则，或者经常变化的情况下，一般多考虑.css()方式

<script type="text/javascript"> 
        //给所有的div统一增加边框
        $('div').addClass("addBorder");
    </script>

    <script type="text/javascript"> 
        //class=left下div元素增加一个新的样式，增加背景颜色
        $('.aaron').addClass("newClass");
    </script>

    <script type="text/javascript"> 
        //通过css覆盖addClass方式设置背景色
        $('.aaron').css({
            "background-color":"yellow"
            })
    </script>


jQuery的属性与样式之元素的数据存储
html5 dataset是新的HTML5标准，允许你在普通的元素标签里嵌入类似data-*的属性，来实现一些简单数据的存取。它的数量不受限制，并且也能由JavaScript动态修改，也支持CSS选择器进行样式设置。这使得data属性特别灵活，也非常强大。有了这样的属性我们能够更加有序直观的进行数据预设或存储。那么在不支持HTML5标准的浏览器中，我们如何实现数据存取?  jQuery就提供了一个.data()的方法来处理这个问题
使用jQuery初学者一般不是很关心data方式，这个方法是jquery内部预用的，可以用来做性能优化，比如sizzle选择中可以用来缓存部分结果集等等。当然这个也是非常重要的一个API了，常常用于我们存放临时的一些数据，因为它是直接跟DOM元素对象绑定在一起的
jQuery提供的存储接口
jQuery.data( element, key, value ) //静态接口,存数据
jQuery.data( element, key ) //静态接口,取数据
.data( key, value ) //实例接口,存数据
.data( key )
 
//实例接口,存数据
2个方法在使用上存取都是通一个接口，传递元素，键值数据。在jQuery的官方文档中，建议用.data()方法来代替。
我们把DOM可以看作一个对象，那么我们往对象上是可以存在基本类型，引用类型的数据的，但是这里会引发一个问题，可能会存在循环引用的内存泄漏风险
通过jQuery提供的数据接口，就很好的处理了这个问题了，我们不需要关心它底层是如何实现，只需要按照对应的data方法使用就行了
同样的也提供2个对应的删除接口，使用上与data方法其实是一致的，只不过是一个是增加一个是删除罢了
jQuery.removeData( element [, name ] )
.removeData( [name ] )
参考右边的代码区域，2个代码段分别描述了静态与实例data的使用

<script type="text/javascript">
    $('.left').click(function() {
        var ele = $(this);
        //通过$.data方式设置数据
        $.data(ele, "a", "data test")
        $.data(ele, "b", {
            name : "慕课网"
        })
        //通过$.data方式取出数据
        var reset = $.data(ele, "a") + "</br>" + $.data(ele, "b").name
        ele.find('span').append(reset)
    })
    </script>
    <script type="text/javascript">
    $('.right').click(function() {
        var ele = $(this);
        //通过.data方式设置数据
        ele.data("a", "data test")
        ele.data("b", {
            name: "慕课网"
        })
        //通过.data方式取出数据
        var reset = ele.data("a") + "</br>" + ele.data("b").name
        ele.find('span').append(reset)
    })
    </script>












