Hammer.js
常见手势封装

iscroll.js
移动端position:fix + overflow:scroll的救星

velocity.js
复杂动画序列实现，不仅限于dom

video.js
类似于原生video标签的使用方式，对低级浏览器回退到flash播放

Utility
函数增强：
underscore.js
size:16.5k

Lodash
size:50k
是underscore的高性能版本，方法大部分是runtime编译出来的。

遇到浮点数误差问题时可以直接使用https://github.com/dt-fe/number-precision

巧用匿名函数重构你的代码
https://iammapping.com/the-good-things-of-fn/

jQuery插件：  
表单验证插件——validate
该插件自带包含必填、数字、URL在内容的验证规则，即时显示异常信息，此外，还允许自定义验证规则，插件调用方法如下：
$(form).validate({options})
其中form参数表示表单元素名称，options参数表示调用方法时的配置对象，所有的验证规则和异常信息显示的位置都在该对象中进行设置。
例如，当点击表单中的“提交”按钮时，调用validate插件验证用户名输入是否符合规则，并将异常信息显示在页面中
http://www.imooc.com/data/jquery.validate.js
http://www.imooc.com/data/jquery.validate.messages_cn.js  

表单插件——form
通过表单form插件，调用ajaxForm()方法，实现ajax方式向服务器提交表单数据，并通过方法中的options对象获取服务器返回数据，调用格式如下：
$(form). ajaxForm ({options})
其中form参数表示表单元素名称；options是一个配置对象，用于在发送ajax请求过程，设置发送时的数据和参数。
例如，在页面中点击“提交”按钮，调用form插件的  
http://www.imooc.com/data/jquery.form.js  

图片放大镜插件——jqzoom
在调用jqzoom图片放大镜插件时，需要准备一大一小两张一样的图片，在页面中显示小图片，当鼠标在小图片中移动时，调用该插件的jqzoom()方法，显示与小图片相同的大图片区域，从而实现放大镜的效果，调用格式如下：
$(linkimage).jqzoom({options})
其中linkimage参数为包含图片的<a>元素名称，options为插件方法的配置对象。
例如，在页面中，添加一个被<a>元素包含的图片元素，当在图片元素中移动鼠标时，在图片的右边，将显示放大后的所选区域效果  
http://www.imooc.com/data/jquery.jqzoom.js  

cookie插件——cookie
使用cookie插件后，可以很方便地通过cookie对象保存、读取、删除用户的信息，还能通过cookie插件保存用户的浏览记录，它的调用格式为：
保存：$.cookie(key，value)；读取：$.cookie(key)，删除：$.cookie(key，null)
其中参数key为保存cookie对象的名称，value为名称对应的cookie值。
例如，当点击“设置”按钮时，如果是“否保存用户名”的复选框为选中状态时，则使用cookie对象保存用户名，否则，删除保存的cookie用户名  
http://www.imooc.com/data/jquery.cookie.js  

搜索插件——autocomplete
搜索插件的功能是通过插件的autocomplete()方法与文本框相绑定，当文本框输入字符时，绑定后的插件将返回与字符相近的字符串提示选择，调用格式如下：
$(textbox).autocomplete(urlData,[options]);
其中，textbox参数为文本框元素名称，urlData为插件返回的相近字符串数据，可选项参数options为调用插件方法时的配置对象。
例如，当用户在文本框输入内容时，调用搜索插件的autocomplete()方法返回与输入内容相匹配的字符串数据，显示在文本框下，提示选择  
当文本框与搜索插件相绑定后，输入任意字符时，都将返回与之相匹配的字符串，提示用户选择，文本框在空白双击时，显示全部提示信息。
http://www.imooc.com/data/jquery.autocomplete.js  

右键菜单插件——contextmenu
右键菜单插件可以绑定页面中的任意元素，绑定后，选中元素，点击右键，便通过该插件弹出一个快捷菜单，点击菜单各项名称执行相应操作，调用代码如下：
$(selector).contextMenu(menuId,{options});
Selector参数为绑定插件的元素，meunId为快捷菜单元素，options为配置对象。
例如，选中页面<textarea>元素，点击右键，弹出插件绑定的快捷菜单，点击菜单中的各个选项，便在页面中显示操作的对应名称。
http://www.imooc.com/data/jquery.contextmenu.js  

拖曳插件——draggable
拖曳插件draggable的功能是拖动被绑定的元素，当这个jQuery UI插件与元素绑定后，可以通过调用draggable()方法，实现各种拖曳元素的效果，调用格式如下：
$(selector). draggable({options})
options参数为方法调用时的配置对象，根据该对象可以设置各种拖曳效果，如“containment”属性指定拖曳区域，“axis”属性设置拖曳时的坐标方向。
例如，在页面中的<div>元素中添加两个子类<div>，通过与拖曳插件绑定，这两个子类<div>元素只能在外层的父<div>元素中任意拖曳  
http://www.imooc.com/data/jquery-ui-1.9.2.min.js  

拖曳排序插件——sortable
拖曳排序插件的功能是将序列元素（例如<option>、<li>）按任意位置进行拖曳从而形成一个新的元素序列，实现拖曳排序的功能，它的调用格式为：
$(selector).sortable({options});
selector参数为进行拖曳排序的元素，options为调用方法时的配置对象，
例如，在页面中，通过加载sortable插件将<ul>元素中的各个<li>表项实现拖曳排序的功能

面板折叠插件——accordion
面板折叠插件可以实现页面中指定区域类似“手风琴”的折叠效果，即点击标题时展开内容，再点另一标题时，关闭已展开的内容，调用格式如下：
$(selector).accordion({options});
其中，参数selector为整个面板元素，options参数为方法对应的配置对象。
例如，通过accordion插件展示几个相同区域面板的折叠效果  

选项卡插件——tabs
使用选项卡插件可以将<ul>中的<li>选项定义为选项标题，在标题中，再使用<a>元素的“href”属性设置选项标题对应的内容，它的调用格式如下：
$(selector).tabs({options});
selector参数为选项卡整体外围元素，该元素包含选项卡标题与内容，options参数为tabs()方法的配置对象，通过该对象还能以ajax方式加载选项卡的内容。
例如，在页面中，添加选项卡的标题和内容元素，并绑定tabs插件，当点击标题时，以选项卡的方式切内容  

菜单工具插件——menu
菜单工具插件可以通过<ul>创建多级内联或弹出式菜单，支持通过键盘方向键控制菜单滑动，允许为菜单的各个选项添加图标，调用格式如下：
$(selector).menu({options});
selector参数为菜单列表中最外层<ul>元素，options为menu()方法的配置对象。
例如，在页面中，通过<ul>元素内联的方式构建一个三层结构的导航菜单，并将最外层<ul>元素通过menu()方法绑定插件，实现导航菜单的功能