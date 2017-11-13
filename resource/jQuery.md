实例解析jQuery中proxy()函数的用法

            
作者：Aaron  字体：[增加 减小] 类型：转载 时间：2016-05-24 我要评论
                
proxy()主要用于在同样的上下文语境中指向另一个对象,下面我们就以实例解析jQuery中proxy()函数的用法,需要的朋友可以参考下
                
jQuery.proxy(),接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文(context )语境。
jQuery.proxy( function, context )
function将要改变上下文语境的函数。
context函数的上下文语境(`this`)会被设置成这个 object 对象。
jQuery.proxy( context, name )
context函数的上下文语境会被设置成这个 object 对象。
name将要改变上下文语境的函数名(这个函数必须是前一个参数 ‘context' 对象的属性)
这个方法通常在向一个元素上附加事件处理函数时，上下文语境实际是指向另一个对象的情况下使用。
另外，jQuery 能够确保即使你绑定的函数是经过 jQuery.proxy() 处理过的函数，你依然可以用原先的函数来正确地取消绑定。
参数：
function：Function类型需要更改上下文对象的函数。
context：任意类型指定为函数设置的上下文对象。
name：String类型需要更改上下文对象的函数名称(它应该是context的一个属性)。
additionalArguments 可选/任意类型指定调用该函数时需要传入的参数，参数可以有任意多个。
注意事项：
参数additionalArguments是从 jQuery 1.6 开始支持的。
该方法非常适用于在附加事件处理函数时，将事件处理函数的上下文指向另一个对象。此外，jQuery确保：即使你使用jQuery.proxy()返回的"代理"函数来绑定事件，如果你在解除绑定时传入原函数，jQuery仍然可以正确解除绑定。
从jQuery 1.9 开始，如果context为null或undefined，则"代理"函数的上下文不会发生更改。这将允许jQuery.proxy()只传入函数的参数，而不更改函数的上下文。
实例
我们先看个例子：
//正常的this使用
$('#Haorooms').click(function() {

  // 这个this是我们所期望的，当前元素的this.

  $(this).addClass('aNewClass');

});
//并非所期望的this
$('#Haorooms').click(function() {

  setTimeout(function() {

     // 这个this指向的是settimeout函数内部，而非之前的html元素

    $(this).addClass('aNewClass');

  }, 1000);

});

这时候怎么办呢，通常的一种做法是这样的：
$('#Haorooms').click(function() {
  var that = this;  //设置一个变量，指向这个需要的this

  setTimeout(function() {

     // 这个this指向的是settimeout函数内部，而非之前的html元素

    $(that).addClass('aNewClass');

  }, 1000);

});

但是，在使用了jquery框架的情况下， 有一种更好的方式，就是使用$.proxy函数。
有两种语法：
jQuery.proxy( function, context )
/**function将要改变上下文语境的函数。
** context函数的上下文语境(`this`)会被设置成这个 object 对象。
**/

jQuery.proxy( context, name )
/**context函数的上下文语境会被设置成这个 object 对象。
**name将要改变上下文语境的函数名(这个函数必须是前一个参数 ‘context' **对象的属性)
**/

上面的例子使用这种方式就可以修改成：
$('#Haorooms').click(function() {

  setTimeout($.proxy(function() {

    $(this).addClass('aNewClass'); 

  }, this), 1000);

});

jQuery取消ajax请求的方法_jquery

                                                                                        
                
本文实例讲述了jQuery取消ajax请求的方法。分享给大家供大家参考。具体分析如下：
这里需要注意的是，在ajax请求未响应之前可以用xhr.abort()取消，但如果请求已经到达了服务器端，这样做的结果仅仅是让浏览器不再监听这个请求的响应，但服务器端仍然会进行处理
var xhr = $.ajax({
  type: "POST",
  url: "test.php",
  data: "name=test",
  success: function(msg){
    alert( msg );
  }
});

//取消请求
xhr.abort()

使用serialize()方法序列化表单元素值
使用serialize()方法可以将表单中有name属性的元素值进行序列化，生成标准URL编码文本字符串，直接可用于ajax请求，它的调用格式如下：
$(selector).serialize()
其中selector参数是一个或多个表单中的元素或表单元素本身。  

使用ajax()方法加载服务器数据
使用ajax()方法是最底层、功能最强大的请求服务器数据的方法，它不仅可以获取服务器返回的数据，还能向服务器发送请求并传递数值，它的调用格式如下：
jQuery.ajax([settings])或$.ajax([settings])
其中参数settings为发送ajax请求时的配置对象，在该对象中，url表示服务器请求的路径，data为请求时传递的数据，dataType为服务器返回的数据类型，success为请求成功的执行的回调函数，type为发送数据请求的方式，默认为get。  

使用ajaxStart()和ajaxStop()方法
ajaxStart()和ajaxStop()方法是绑定Ajax事件。ajaxStart()方法用于在Ajax请求发出前触发函数，ajaxStop()方法用于在Ajax请求完成后触发函数。它们的调用格式为：
$(selector).ajaxStart(function())和$(selector).ajaxStop(function())
其中，两个方法中括号都是绑定的函数，当发送Ajax请求前执行ajaxStart()方法绑定的函数，请求成功后，执行ajaxStop ()方法绑定的函数。
例如，在调用ajax()方法请求服务器数据前，使用动画显示正在加载中，当请求成功后，该动画自动隐藏  

检测两个节点的包含关系
调用名为$.contains的工具函数，能检测在一个DOM节点中是否包含另外一个DOM节点，如果包含，返回true，否则，返回false值，调用格式为：
$.contains (container, contained);
参数container表示一个DOM对象节点元素，用于包含其他节点的容器，contained是另一个DOM对象节点元素，用于被其他容器所包含。
例如，通过$.contains()函数，检测两个节点对象间是否存在包含关系，并将检测的结果显示在页面中  








