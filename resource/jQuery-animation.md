动画  
jQuery中隐藏元素的hide方法
让页面上的元素不可见，一般可以通过设置css的display为none属性。但是通过css直接修改是静态的布局，如果在代码执行的时候，一般是通过js控制元素的style属性，这里jQuery提供了一个快捷的方法.hide()来达到这个效果
$elem.hide()
提供参数：
.hide( options )
当提供hide方法一个参数时，.hide()就会成为一个动画方法。.hide()方法将会匹配元素的宽度，高度，以及不透明度，同时进行动画操作
快捷参数：
.hide("fast / slow")
这是一个动画设置的快捷方式，'fast' 和 'slow' 分别代表200和600毫秒的延时，就是元素会执行200/600毫秒的动画后再隐藏
注意：
jQuery在做hide操作的时候，是会保存本身的元素的原始属性值，再之后通过对应的方法还原的时候还是初始值。比如一个元素的display属性值为inline，那么隐藏再显示时，这个元素将再次显示inline。一旦透明度 达到0，display样式属性将被设置为none，这个元素将不再在页面中影响布局

<script type="text/javascript">
        //点击buttom1 直接隐藏
        $("button:first").click(function() {
            $("#a1").hide()
        });
        </script>


        <h4>测试一</h4>
        <div id="a2">hide动画操作</div>
        <button>hide带动画</button>
        <script type="text/javascript">
        //点击buttom2 执行动画隐藏
        $("button:last").click(function() {
            $("#a2").hide({
                duration: 300,
                complete: function() {
                    alert('执行3000ms动画完毕')
                }
            })
        });
        </script>

 $("button:last").click(function() {
            $("#a2").hide(
                "fast",
                function() {
                    alert('执行3000ms动画完毕')
                }
            )
        });

jQuery中显示元素的show方法
css中有display:none属性，同时也有display:block，所以jQuery同样提供了与hide相反的show方法
方法的使用几乎与hide是一致的，hide是让元素显示到隐藏，show则是相反，让元素从隐藏到显示
看一段代码：使用上一致，结果相反
$('elem').hide(3000).show(3000)
让元素执行3秒的隐藏动画，然后执行3秒的显示动画。
show与hide方法是非常常用的，但是一般很少会基于这2个属性执行动画，大多情况下还是直接操作元素的显示与隐藏为主
注意事项：
* show与hide方法是修改的display属性，通过是visibility属性布局需要通过css方法单独设置
* 如果使用!important在你的样式中，比如display: none !important，如果你希望.show()方法正常工作，必须使用.css('display', 'block !important')重写样式
* 如果让show与hide成为一个动画，那么默认执行动画会改变元素的高度，高度，透明度

<script type="text/javascript">

    //点击button
    //执行3秒隐藏
    //执行3秒显示
    $("button").click(function() {
        $("#a1").hide(3000).show(3000)
    });

    </script>

$("#a1").stop().hide(3000).show(3000)
//stop（） 用于避免动画执行过程中反复触发

//语法结构
$("#div").stop();//停止当前动画，继续下一个动画
$("#div").stop(true);//清除元素的所有动画
$("#div").stop(false, true);//让当前动画直接到达末状态 ，继续下一个动画
$("#div").stop(true, true);//清除元素的所有动画，让当前动画直接到达末状态

jQuery中显示与隐藏切换toggle方法
show与hide是一对互斥的方法。需要对元素进行显示隐藏的互斥切换，通常情况是需要先判断元素的display状态，然后调用其对应的处理方法。比如显示的元素，那么就要调用hide，反之亦然。 对于这样的操作行为，jQuery提供了一个便捷方法toggle用于切换显示或隐藏匹配元素
基本的操作：toggle();
这是最基本的操作，处理元素显示或者隐藏，因为不带参数，所以没有动画。通过改变CSS的display属性，匹配的元素将被立即显示或隐藏，没有动画。
* 如果元素是最初显示，它会被隐藏
* 如果隐藏的，它会显示出来
display属性将被储存并且需要的时候可以恢复。如果一个元素的display值为inline，然后是隐藏和显示，这个元素将再次显示inline
提供参数：.toggle( [duration ] [, complete ] )
同样的提供了时间、还有动画结束的回调。在参数对应的时间内，元素会发生显示/隐藏的改变，在改变的过程中会把元素的高、宽、不透明度进行一系列动画效果。这个元素其实就是show与hide的方法
直接定位：.toggle(display)
直接提供一个参数，指定要改变的元素的最终效果
其实就是确定是使用show还是hide方法
if ( display === true ) {
  $( "elem" ).show();
} else if ( display === false ) {
  $( "elem" ).hide();
}

有个bug，如果你不停地点击按钮事件会累积的。
$(".left").stop().toggle(3000)就好了

jQuery中下拉动画slideDown
对于隐藏的元素，在将其显示出来的过程中，可以对其进行一些变化的动画效果。之前学过了show方法，show方法在显示的过程中也可以有动画，但是.show()方法将会匹配元素的宽度，高度，以及不透明度，同时进行动画操作。这里将要学习一个新的显示方法slideDown方法
.slideDown()：用滑动动画显示一个匹配元素
.slideDown()方法将给匹配元素的高度的动画，这会导致页面的下面部分滑下去，弥补了显示的方式
常见的操作，提供一个动画是时间，然后传递一个回调，用于知道动画是什么时候结束
.slideDown( [duration ] [, complete ] )
持续时间（duration）是以毫秒为单位的，数值越大，动画越慢，不是越快。字符串 'fast' 和 'slow' 分别代表200和600毫秒的延时。如果提供任何其他字符串，或者这个duration参数被省略，那么默认使用400 毫秒的延时。
具体使用：
$("ele").slideDown(1000, function() {
//等待动画执行1秒后,执行别的动作....
});
注意事项：
* 下拉动画是从无到有，所以一开始元素是需要先隐藏起来的，可以设置display:none
* 如 果提供回调函数参数，callback会在动画完成的时候调用。将不同的动画串联在一起按顺序排列执行是非常有用的。这个回调函数不设置任何参数，但是 this会设成将要执行动画的那个DOM元素，如果多个元素一起做动画效果，那么要非常注意，回调函数会在每一个元素执行完动画后都执行一次，而不是这组 动画整体才执行一次
jQuery中上卷动画slideUp
对于显示的元素，在将其隐藏的过程中，可以对其进行一些变化的动画效果。之前学过了hide方法，hide方法在显示的过程中也可以有动画，但 是.hide()方法将为匹配元素的宽度，高度，以及不透明度，同时进行动画操作。这里将要学习一个新的显示方法slideUp方法
最简单的使用：不带参数
$("elem").slideUp();
这个使用的含义就是：找到元素的高度，然后采用一个下滑动画让元素一直滑到隐藏，当高度为0的时候，也就是不可见的时，修改元素display 样式属性被设置为none。这样就能确保这个元素不会影响页面布局了
带参数：
.slideUp( [duration ] [, easing ] [, complete ] )
同样可以提供一个时间，然后可以使用一种过渡使用哪种缓动函数，jQuery默认就2种，可以通过下载插件支持。最后一个动画结束的回调方法。
因为动画是异步的，所以要在动画之后执行某些操作就必须要写到回调函数里面，这里要特别注意
jQuery中上卷下拉切换slideToggle
slideDown与slideUp是一对相反的方法。需要对元素进行上下拉卷效果的切换，jQuery提供了一个便捷方法slideToggle用滑动动画显示或隐藏一个匹配元素
基本的操作：slideToggle();
这是最基本的操作，获取元素的高度，使这个元素的高度发生改变，从而让元素里的内容往下或往上滑。
提供参数：.slideToggle( [duration ] ,[ complete ] )
同样的提供了时间、还有动画结束的回调。在参数对应的时间内，元素会完成动画，然后出发回调函数
同时也提供了时间的快速定义，字符串 'fast' 和 'slow' 分别代表200和600毫秒的延时
slideToggle("fast")
slideToggle("slow")
注意：
* display属性值保存在jQuery的数据缓存中，所以display可以方便以后可以恢复到其初始值
* 当一个隐藏动画后，高度值达到0的时候，display 样式属性被设置为none，以确保该元素不再影响页面布局
jQuery中淡出动画fadeOut
让元素在页面不可见，常用的办法就是通过设置样式的display:none。除此之外还可以一些类似的办法可以达到这个目的。这里要提一个透明度的方法，设置元素透明度为0，可以让元素不可见，透明度的参数是0~1之间的值，通过改变这个值可以让元素有一个透明度的效果。常见的淡入淡出动画正是这样的原理。
fadeOut()函数用于隐藏所有匹配的元素，并带有淡出的过渡动画效果
所谓"淡出"隐藏的，元素是隐藏状态不对作任何改变，元素是可见的，则将其隐藏。
.fadeOut( [duration ], [ complete ] )
通过不透明度的变化来实现所有匹配元素的淡出效果，并在动画完成后可选地触发一个回调函数。这个动画只调整元素的不透明度，也就是说所有匹配的元素的高度和宽度不会发生变化。
字符串 'fast' 和 'slow' 分别代表200和600毫秒的延时。如果提供任何其他字符串，或者这个duration参数被省略，那么默认使用400毫秒的延时


<body>
    <h2>fadeOut</h2>
    <p>测试文字淡入效果</p>
    <p>慕课网,专注分享</p>
    淡出的隐藏效果：
    <select id="animation">
        <option value="1">fadeOut( )</option>
        <option value="2">fadeOut( "slow" )</option>
        <option value="3">fadeOut( 3000 )</option>
        <option value="4">fadeOut( 1000, complete )</option>
        <option value="5">fadeOut( 1000, "linear" )</option>
        <option value="6">fadeOut( options )</option>
    </select>

    </br></br>

    <input id="btnFadeOut" type="button" value="点击淡出隐藏" />
    <input id="btnShow" type="button" value="显示" />

    <script type="text/javascript">
    //【显示】按钮
    $("#btnShow").click(function() {
        $("p").show();
    });

    //【隐藏】按钮
    $("#btnFadeOut").click(function() {
        var v = $("#animation").val();
        if (v == "1") {
            $("p").fadeOut();
        } else if (v == "2") {
            $("p").fadeOut("slow");
        } else if (v == "3") {
            $("p").fadeOut(3000);
        } else if (v == "4") {
            $("p").fadeOut(2000, function() {
                alert("隐藏完毕!");
            });
        } else if (v == "5") {
            $("p").fadeOut(1000, "linear");
        } else if (v == "6") {
            $("p").fadeOut({
                duration: 1000
            });
        }
    });
    </script>
</body>
.val()方法，当没设置value属性时，获取的是<option>中的文本，如“ <option>慕课网</option>”获取到的是“慕课网”；
设置了value属性的话，获取到就是value的值，如“<option value=‘imooc’>慕课网</option>”获取到的是“imooc”而不是“慕课网”了。
jQuery中淡入动画fadeIn
fadeOut是淡出效果，相反的还有淡入效果fadeIn,方法使用上两者都是一致的，只是结果相反
.fadeIn( [duration ], [ complete ] )
* duration：指定过渡动画运行多长时间(毫秒数)，默认值为400。该参数也可以为字符串"fast"(=200)或"slow"(=600)。
* 元素显示完毕后需要执行的函数。函数内的this指向当前DOM元素。
fadeIn()函数用于显示所有匹配的元素，并带有淡入的过渡动画效果。
注意：
* 淡入的动画原理：操作元素的不透明度从0%逐渐增加到100%
* 如果元素本身是可见的，不对其作任何改变。如果元素是隐藏的，则使其可见
jQuery中淡入淡出切换fadeToggle
fadeToggle()函数用于切换所有匹配的元素，并带有淡入/淡出的过渡动画效果。之前也学过toggle、slideToggle 也是类似的处理方式
fadeToggle切换fadeOut与fadeIn效果，所谓"切换"，即如果元素当前是可见的，则将其隐藏(淡出)；如果元素当前是隐藏的，则使其显示(淡入)。
常用语法：.fadeToggle( [duration ] ,[ complete ] )
可选的 duration 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。 可选的 callback 参数是 fadeToggle完成后所执行的函数名称。
fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果。
jQuery中淡入效果fadeTo
淡入淡出fadeIn与fadeOut都是修改元素样式的opacity属性，但是他们都有个共同的特点，变化的区间要么是0，要么是1
fadeIn：淡入效果，内容显示，opacity是0到1
fadeOut：淡出效果，内容隐藏，opacity是1到0
如果要让元素保持动画效果，执行opacity = 0.5的效果时，要如何处理？
如果不考虑CSS3，我们用JS实现的话，基本就是通过定时器，在设定的时间内一点点的修改opacity的值，最终为0.5，原理虽说简单，但是总不如一键设置这么舒服，jQuery提供了fadeTo方法，可以让改变透明度一步到位
语法
.fadeTo( duration, opacity ,callback)
必需的 duration参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。可选的 callback 参数是该函数完成后所执行的函数名称。
jQuery中toggle与slideToggle以及fadeToggle的比较
操作元素的显示和隐藏可以有几种方法。
例如：
* 改变样式display为none
* 设置位置高度为0
* 设置透明度为0
都能达到这个目的，并且针对这样的处理jQuery都提供了各自的方法。show/hide、sildeDown/sildeUp、fadeIn/fadeOut。除此之外，还引入了toggle、sildeToggle以及fadeToggle切换方法
toggle、sildeToggle以及fadeToggle的区别：
* toggle：切换显示与隐藏效果
* sildeToggle：切换上下拉卷滚效果
* fadeToggle：切换淡入淡出效果
当然细节上还是有更多的不同点:

toggle与slideToggle细节区别：
* toggle：动态效果为从右至左。横向动作，toggle通过display来判断切换所有匹配元素的可见性
* slideToggle：动态效果从下至上。竖向动作，slideToggle 通过高度变化来切换所有匹配元素的可见性
fadeToggle方法
* fadeToggle() 方法在 fadeIn() 和 fadeOut() 方法之间切换。
* 元素是淡出显示的，fadeToggle() 会使用淡入效果显示它们。
* 元素是淡入显示的，fadeToggle() 会使用淡出效果显示它们。
* 注释：隐藏的元素不会被完全显示（不再影响页面的布局）
jQuery中动画animate(上)
有些复杂的动画通过之前学到的几个动画函数是不能够实现，这时候就需要强大的animate方法了
操作一个元素执行3秒的淡入动画，对比一下2组动画设置的区别
$(elem).fadeOut(3000)
$(elem).animate({
opacity:0
},3000)
显而易见，animate方法更加灵活了，可以精确的控制样式属性从而执行动画
语法：
.animate( properties ,[ duration ], [ easing ], [ complete ] )
.animate( properties, options )
.animate()方法允许我们在任意的数值的CSS属性上创建动画。2种语法使用，几乎差不多了，唯一必要的属性就是一组CSS属性键值对。这组属性和用于设置.css()方法的属性键值对类似，除了属性范围做了更多限制。第二个参数开始可以单独传递多个实参也可以合并成一个对象传递了
参数分解：
properties：一个或多个css属性的键值对所构成的Object对象。要特别注意所有用于动画的属性必须是数字的，除非另有说明；这些属性如果不是数字的将不能使用基本的jQuery功能。比如常见的，border、margin、padding、width、height、font、left、top、right、bottom、wordSpacing等等这些都是能产生动画效果的。background-color很明显不可以，因为参数是red或者GBG这样的值，非常用插件，否则正常情况下是不能只用动画效果的。注意，CSS 样式使用 DOM 名称（比如 "fontSize"）来设置，而非 CSS 名称（比如 "font-size"）。
特别注意单位，属性值的单位像素（px）,除非另有说明。单位em 和 %需要指定使用
.animate({
left: 50,
width: '50px'
opacity: 'show',
fontSize: "10em",
}, 500);
除了定义数值，每个属性能使用'show', 'hide', 和 'toggle'。这些快捷方式允许定制隐藏和显示动画用来控制元素的显示或隐藏
.animate({
width: "toggle"
});
如果提供一个以+= 或 -=开始的值，那么目标值就是以这个属性的当前值加上或者减去给定的数字来计算的
.animate({
left: '+=50px'
}, "slow");
duration时间
动画执行的时间，持续时间是以毫秒为单位的；值越大表示动画执行的越慢，不是越快。还可以提供'fast' 和 'slow'字符串，分别表示持续时间为200 和 600毫秒。
easing动画运动的算法
jQuery库中默认调用 swing。如果需要其他的动画算法，请查找相关的插件
complete回调
动画完成时执行的函数，这个可以保证当前动画确定完成后发会触发
jQuery中动画animate(下)
animate在执行动画中，如果需要观察动画的一些执行情况，或者在动画进行中的某一时刻进行一些其他处理，我们可以通过animate提供的第二种设置语法，传递一个对象参数，可以拿到动画执行状态一些通知
.animate( properties, options )
options参数
* duration - 设置动画执行的时间
* easing - 规定要使用的 easing 函数，过渡使用哪种缓动函数
* step：规定每个动画的每一步完成之后要执行的函数
* progress：每一次动画调用的时候会执行这个回调，就是一个进度的概念
* complete：动画完成回调
其中最关键的一点就是：
如果多个元素执行动画，回调将在每个匹配的元素上执行一次，不是作为整个动画执行一次
列出常用的方式：
$('#elem').animate({
    width: 'toggle', 
    height: 'toggle'
  }, {
    duration: 5000,
    specialEasing: {
      width: 'linear',
      height: 'easeOutBounce'
    },
    complete: function() {
      $(this).after('<div>Animation complete.</div>');
    }
  });
jQuery中停止动画stop
动画在执行过程中是允许被暂停的，当一个元素调用.stop()方法，当前正在运行的动画（如果有的话）立即停止
语法：
.stop( [clearQueue ], [ jumpToEnd ] )
.stop( [queue ], [ clearQueue ] ,[ jumpToEnd ] )
stop还有几个可选的参数，简单来说可以这3种情况
* .stop(); 停止当前动画，点击在暂停处继续开始
* .stop(true); 如果同一元素调用多个动画方法，尚未被执行的动画被放置在元素的效果队列中。这些动画不会开始，直到第一个完成。当调用.stop()的时候，队列中的下一个动画立即开始。如果clearQueue参数提供true值,那么在队列中的动画其余被删除并永远不会运行
* .stop(true,true); 当前动画将停止，但该元素上的 CSS 属性会被立刻修改成动画的目标值
简单的说：参考下面代码、
$("#aaron").animate({
height: 300
}, 5000)
$("#aaron").animate({
width: 300
}, 5000)
$("#aaron").animate({
opacity: 0.6
}, 2000)
1. stop()：只会停止第一个动画，第二个第三个继续
2. stop(true)：停止第一个、第二个和第三个动画
3. stop(true ture)：停止动画，直接跳到第一个动画的最终状态 
jQuery中each方法的应用
jQuery中有个很重要的核心方法each，大部分jQuery方法在内部都会调用each，其主要的原因的就是jQuery的实例是一个元素合集
如下：找到所有的div，并且都设置样式，css只是一个方法，所以内部会调用each处理这个div的合集，给每个div都设置style属性
$('div').css(...)
jQuery的大部分方法都是针元素合集的操作，所以jQuery会提供$(selector).each()来遍历jQuery对象
.each只是处理jQuery对象的方法，jQuery还提供了一个通用的jQuery.each方法，用来处理对象和数组的遍历
语法
jQuery.each(array, callback )
jQuery.each( object, callback )
第一个参数传递的就是一个对象或者数组，第二个是回调函数
$.each(["Aaron", "慕课网"], function(index, value) {
//index是索引,也就是数组的索引
//value就是数组中的值了
});
each就是for循环方法的一个包装，内部就是通过for遍历数组与对象，通过回调函数返回内部迭代的一些参数，第一个参数是当前迭代成员在对象或数组中的索引值(从0开始计数)，第二个参数是当前迭代成员(与this的引用相同
jQuery.each()函数还会根据每次调用函数callback的返回值来决定后续动作。如果返回值为false，则停止循环(相当于普通循环中的break)；如果返回其他任何值，均表示继续执行下一个循环。
$.each(["Aaron", "慕课网"], function(index, value) {
return false; //停止迭代
});
 
jQuery方法可以很方便的遍历一个数据，不需要考虑这个数据是对象还是数组

<script type="text/javascript">
    $("#exec").click(function() {
        var v = $("#animation").val();
        var $aaron = $("#aaron");
        $aaron.empty();
        if (v == "1") {

            // 遍历数组元素
            $.each(['Aaron', '慕课网'], function(i, item) {
                $aaron.append("索引=" + i + "; 元素=" + item);
            });
        } else if (v == "2") {
            // 遍历对象属性
            $.each({
                name: "张三",
                age: 18
            }, function(property, value) {
                $aaron.append("属性名=" + property + "; 属性值=" + value);
            });
        } 
    });
    </script>

jQuery中查找数组中的索引inArray
在PHP有in_array()判断某个元素是否存在数组中，JavaScript却没有，但是jQuery封装了inArray()函数判断元素是否存在数组中。注意了：在ECMAScript5已经有数据的indexOf方法支持了，但是jQuery保持了版本向下兼容，所以封装了一个inArray方法
jQuery.inArray()函数用于在数组中搜索指定的值，并返回其索引值。如果数组中不存在该值，则返回 -1。
语法：
jQuery.inArray( value, array ,[ fromIndex ] )
用法非常简单，传递一个检测的目标值，然后传递原始的数组，可以通过fromIndex规定查找的起始值，默认数组是0开始
例如：在数组中查找值是5的索引
$.inArray(5,[1,2,3,4,5,6,7]) //返回对应的索引：4
注意：
如果要判断数组中是否存在指定值，你需要通过该函数的返回值不等于(或大于)-1来进行判断
jQuery中去空格神器trim方法
页面中，通过input可以获取用户的输入值，例如常见的登录信息的提交处理。用户的输入不一定是标准的，输入一段密码：'  1123456  "，注意了： 密码的前后会留空，这可能是用户的无心的行为，但是密码确实又没错，针对这样的行为，开发者应该要判断输入值的前后是否有空白符、换行符、制表符这样明显的无意义的输入值。
jQuery.trim()函数用于去除字符串两端的空白字符
这个函数很简单，没有多余的参数用法
需要注意：
* 移除字符串开始和结尾处的所有换行符，空格(包括连续的空格)和制表符（tab）
* 如果这些空白字符在字符串中间时，它们将被保留，不会被移除
jQuery中DOM元素的获取get方法
jQuery是一个合集对象，如果需要单独操作合集中的的某一个元素，可以通过.get()方法获取到
以下有3个a元素结构：
<a>1</a>
<a>2</a>
<a>3</a>
通过jQuery获取所有的a元素合集$("a")，如果想进一步在合集中找到第二2个dom元素单独处理，可以通过get方法
语法：
.get( [index ] )
注意2点
1. get方法是获取的dom对象，也就是通过document.getElementById获取的对象
2. get方法是从0开始索引
所以第二个a元素的查找： $(a).get(1)
负索引值参数
get方法还可以从后往前索引，传递一个负索引值，注意的负值的索引起始值是-1
同样是找到第二元素，可以传递 $(a).get(-2) 
jQuery中DOM元素的获取index方法
get方法是通过已知的索引在合集中找到对应的元素。如果反过来，已知元素如何在合集中找到对应的索引呢？
.index()方法，从匹配的元素中搜索给定元素的索引值，从0开始计数。
语法：参数接受一个jQuery或者dom对象作为查找的条件
.index()
.index( selector )
.index( element )
* 如果不传递任何参数给 .index() 方法，则返回值就是jQuery对象中第一个元素相对于它同辈元素的位置
* 如果在一组元素上调用 .index() ，并且参数是一个DOM元素或jQuery对象， .index() 返回值就是传入的元素相对于原先集合的位置
* 如果参数是一个选择器， .index() 返回值就是原先元素相对于选择器匹配元素的位置。如果找不到匹配的元素，则 .index() 返回 -1
简单来说：
<ul>
<a></a>
<li id="test1">1</li>
<li id="test2">2</li>
<li id="test3">3</li>
</ul>
$("li").index() 没有传递参数，反正的结果是1，它的意思是返回同辈的排列循序，第一个li之前有a元素,同辈元素是a开始为0，所以li的开始索引是1
如果要快速找到第二个li在列表中的索引,可以通过如下2种方式处理
$("li").index(document.getElementById("test2")) //结果：1
$("li").index($("#test2"))  //结果:1