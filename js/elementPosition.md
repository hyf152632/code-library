js获取对象位置的方法 

scrollHeight: 获取对象的滚动高度。
scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离
scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
scrollWidth:获取对象的滚动宽度
offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置
offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
event.clientX 相对文档的水平座标
event.clientY 相对文档的垂直座标
event.offsetX 相对容器的水平坐标
event.offsetY 相对容器的垂直坐标
document.documentElement.scrollTop 垂直方向滚动的值
event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量
以上主要指IE之中，FireFox差异如下：
IE6.0、FF1.06+：
clientWidth = width + padding
clientHeight = height + padding
offsetWidth = width + padding + border
offsetHeight = height + padding + border
IE5.0/5.5：
clientWidth = width – border
clientHeight = height – border
offsetWidth = width
offsetHeight = height
(需要提一下：CSS中的margin属性，与clientWidth、offsetWidth、clientHeight、offsetHeight均无关)  


js、jq获取对象位置 对象宽高 
1、滚动距离、宽高

scrollTop/scrollLeft/ 对象滚动条的上面/左边折卷的距离 
js写法: document.body.scrollTop || document.documentElement.scrollTop  
jq写法：$(window).scrollTop(); 
--------------------------------------------------------
scrollWidth/scrollHeight 滚动元素对象的实际内容的宽，不包边框的宽度，会随对象中内容的多少改变（内容多了可能会改变对象的实际宽度）
js写法: document.body.scrollWidth || document.documentElement.scrollWidth  
jq无此相关写法但是获取同等的高度 可以用:$(obj).innerHeight()获取对象的内容高度   包括补白 但不包括边框
2、相对位置、距离

offsetLeft、offsetTop 
对象离最近有定位属性的父级的左边距，如果都没有定位属性那默认为window
js写法: obj.offsetLeft、 
jq写法：$(obj).offset().left; 

jq扩展：获取匹配元素相对父元素的偏移 （会包含自身的补白和边框） position().top / postion().left方法
jq写法：$(obj).position().left;
------------------------------------------------------------------
offsetHeight 、offsetWidth
对象本身的高度（宽度）
js写法:obj.offsetHeight 获取到obj的高度 包括补白（margin、padding） 包括边框的高度
jq写法:$(obj).outerHeight()获取对象的内容高度   包括补白 也包括边框

扩展补充：
jq写法:$(obj).height()获取对象的内容高度   不包括补白和边框
jq写法:$(obj).innerHeight()获取对象的内容高度   包括补白 但不包括边框
3、可视距离、宽高

clientLeft，clientTop 
这两个返回的是元素周围边框的厚度,如果不指定一个边框,他的值就是
js写法:obj.clientLeft
jq无此相关写法 ，不过jq计算边框可以 用$(obj).outerHeight()-$(obj).innerHeight()计算得出
--------------------------------------------------------------------
clientHeight/clientWidth     
文档的document的可视区域的高度(宽度),包括补白 不包括边框
js写法：obj.clientHeight
jq无此属性的写法  不过要获取对象的高度不包括变宽 可用$(obj).innerHeight()
获取浏览器的可视宽度 
兼容写法：document.documentElement.clientHeight;
高级浏览器：window.document.documentElement.getBoundingClientRect().width 
4、坐标位置

相对文档
IE：event.clientX 、event.clientY //   
FF: event.pageX 、event.pageY       相对文档的水平座标（垂直座标）
相对容器
ie：event.offsetX，event.offsetY
FF：event.layerX和event.layerY   相对容器的水平坐标（垂直坐标 ）
获取浏览器在电脑屏幕中的位置
兼容性写法：    x = window.screenLeft || screenX;  y=window.screenTop || screenY;
获取鼠标在浏览器中的坐标   
$(obj).mousemove(function(e){
    var x=e.pageX;  这就是鼠标的x坐标  e.clientX貌似也可以
    var y=e.pageY;  这就是鼠标的y坐标
})
兼容写法：
1. function mousePos(e){   
2.     var x,y;   
3.     var e = e||window.event;   
4.     return {   
5.         x:e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,   
6.         y:e.clientY+document.body.scrollTop+document.documentElement.scrollTop   
7.     };   
8. }  
9. $('#box').mousemove(function(){  
10.     document.title=mousePos().x +"||" + mousePos().y;  
11. })  
function mousePos(e){ 
    var x,y; 
    var e = e||window.event; 
    return { 
        x:e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft, 
        y:e.clientY+document.body.scrollTop+document.documentElement.scrollTop 
    }; 
}

$('#box').mousemove(function(){
    document.title=mousePos().x +"||" + mousePos().y;
})

获取鼠标在容器中的坐标 
  document.getElementById('box').onclick=function(e){
    var x=e.offsetX || layerX;  这就是鼠标的x坐标
    var y=e.offsetY || layerY;  这就是鼠标的y坐标
  }   