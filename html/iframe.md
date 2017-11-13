iframe用法总结  
<iframe>是框架的一种形式，也比较常用到。 
一：几个例子——演示iframe的基本用法
例1：
<iframe width=420 height=330 frameborder=0 scrolling=auto src="URL" mce_src="URL"></iframe>
不用多说了，iframe的各个属性含义如下：
width插入页的宽；
height插入页的高；
scrolling 是否显示页面滚动条（可选的参数为 auto、yes、no，如果省略这个参数，则默认为auto）；
frameborder  边框大小；
注意：URL建议用绝对路径；
传说中百DU用：<iframe width=0 height=0 frameborder=0 scrolling=auto src="WWW" mce_src="WWW" .webjx.com></iframe><br />黑了88*8。。。
例2：
如果一个页面里面有框架。。随便点页面里的连接，要求在这个<iframe> 里打开。在iframe 中加入name=** （**自己设定）.
<iframe name=**  ></iframe>
然后在修改默认打开模式，：网页HEAD中加上<a href="URL" mce_href="URL" target=**>或部分连接的目标框架设为（**）.
例3:
要插入一个页面。要求只拿中间一部分。其他的都不要，代码如下：
<iframe name=123  align=middle marginwidth=0 marginheight=0 vspace=-170 hspace=0 src="<a href=" mce_src="<a href="http://www.webjx.com/" mce_href="http://www.webjx.com/"><span style="color: #0000ff;" mce_style="color: #0000ff;"><span style="text-decoration: underline;" mce_style="text-decoration: underline;">http://www.webjx.com/</span></span></a>"  frameborder=no scrolling=no  width=776  height=2500></iframe>
控制插入页被框架覆盖的深度 marginwidth=0 marginheight=0；控制框架覆盖上部分的深度 vspace=-170 
scrolling滚动条要否（auto、yes、no）   frameborder框架的边框大小，width=776  height=2500此框架的大小。
例4:
    1、页面内加入iframe
<iframe width=420 height=330 frameborder=0 scrolling=auto src="URL" mce_src="URL"></iframe>，
scrolling表示是否显示页面滚动条，可选的参数为auto、yes、no，如果省略这个参数，则默认为auto。
　　2、超链接指向这个嵌入的网页，只要给这个iframe命名就可以了。方法是<iframe name=**>，例如我命名为aa，写入这句HTML语言<iframe width=420 height=330 name=aa frameborder=0 src="http://www.cctv.com" mce_src="http://www.cctv.com"></iframe>，然后，网页上的超链接语句应该写为：<a  href="URL" mce_href="URL" target=aa>
　　3、如果把frameborder设为1，效果就像文本框一样
　　透明的IFRAME的用法
　　必需IE5.5以上版本才支持
　　在transparentBody.htm文件的<body>标签中，我已经加入了style="background- color=transparent" 通过以下四种IFRAME的写法我想大概你对iframe背景透明效果的实现方法应该会有个清晰的了解：
<IFRAME ID="Frame1" SRC="transparentBody.htm" mce_SRC="transparentBody.htm" allowTransparency="true"></IFRAME>
<IFRAME ID="Frame2" SRC="transparentBody.htm" mce_SRC="transparentBody.htm" allowTransparency="true" STYLE="background-color: green" mce_STYLE="background-color: green"> </IFRAME>
<IFRAME ID="Frame3" SRC="transparentBody.htm" mce_SRC="transparentBody.htm"></IFRAME>
<IFRAME ID="Frame4" SRC="transparentBody.htm" mce_SRC="transparentBody.htm" STYLE="background-color: green" mce_STYLE="background-color: green"> </IFRAME>
 
二：（难点）设置iframe框架的背景色
a.htm  
  <mce:script type="text/JavaScript"><!--

function   setBG(){  
  var   strColor=document.bgColor;  
  frm.document.bgColor=strColor;  
  }  

// --></mce:script>  
  <body   style="background-color:red" mce_style="background-color:red"   onload='setBG()'>  
  <iframe   src="about:blank" mce_src="about:blank"   name=frm></iframe>

三：（难点）窗口与浮动帧之间的相互控制
在脚本语言与对象层次中，包含Iframe的窗口我们称之为父窗体，而浮动帧则称为子窗体，弄清这两者的关系很重要，因为要在父窗体中访问子窗体或相反都必须清楚对象层次，才能通过程序来访问并控制窗体。
　　    1、在父窗体中访问并控制子窗体中的对象
　　在父窗体中，Iframe即子窗体是document对象的一个子对象，可以直接在脚本中访问子窗体中的对象。
　　现在就有一个问题，即，我们怎样来控制这个Iframe，这里需要讲一下Iframe对象。当我们给这个标记设置了ID 属性后，就可通过文档对象模型DOM对Iframe所含的HTML进行一系列控制。
　　比如在example.htm里嵌入test.htm文件，并控制test.htm里一些标记对象：
　　<Iframe src="test.htm" mce_src="test.htm" id="test" width="250" height="200" scrolling="no" frameborder="0"></iframe>
    test.htm文件代码为:
　　<html>
　　　<body>
　　　　<h1 id="myH1">hello,my boy</h1>
　　　</body>
　　</html>
　　如我们要改变ID号为myH1的H1标记里的文字为hello,my dear，则可用:
　　document.myH1.innerText="hello,my dear"(其中，document可省)
　　在example.htm文件中，Iframe标记对象所指的子窗体与一般的DHTML对象模型一致，对对象访问控制方式一样，就不再赘述。
　　    2、在子窗体中访问并控制父窗体中对象
　　在子窗体中我们可以通过其parent即父（双亲）对象来访问父窗口中的对象。
　　如example.htm：
　　<html>
　　　<body onclick="alert(tt.myH1.innerHTML)">
　　　　<Iframe name="tt" src="frame1.htm" mce_src="frame1.htm" width="250" height="200" scrolling="no" frameborder="0"></iframe>
　　　　<h1 id="myH2">hello,my wife</h1>
　　　</body>
　　</html>
　　如果要在frame1.htm中访问ID号为myH2中的标题文字并将之改为"hello,my friend"，我们就可以这样写：
　　parent.myH2.innerText="hello,my friend"
    或者parent.document.getElementById("myH2").innerText="hello,my friend"
　　这里parent对象就代表当前窗体(example.htm所在窗体)，要在子窗体中访问父窗体中的对象，无一例外都通过parent对象来进行。

3:frame的一个子元素访问frame的另一个子元素
    例如：框架文件frame.html中嵌入了另外两个html文件
    <div styleClass="basewnd"> 
 <!-- 搜索 -->
 <div id="search" name="test" align="center" class="top_list_home">
  <iframe id="frameSearch" name="search" src="Search.html" mce_src="Search.html"  frameBorder="0" scrolling="no" width="195px" height="150px" marginheight="0" marginwidth="0"></iframe> 
 </div>
<!-- 单位目录树 -->
 <div align="center" class="welcome_tag_home">
  <iframe src="DirectoryTree.html" mce_src="DirectoryTree.html"  frameBorder="0" scrolling="no" width="195px" height="427px" marginheight="0" marginwidth="0"></iframe> 
 </div>
  </div>
那么现在要在DirectoryTree.html文件中访问Search.html文件中的一个id为section的<font></font>标签的innerHTML属性，则可以这样：
alert(parent.document.search.section.innerHTML),其中search是“搜索”div的id，或者：
alert(parent.document.getElementById("search").section.innerHTML),
或者也可以这样：
alert(parent.document.frames["frameSublist"].name)(这是直接访问iframe)
但是以上这些方法都不怎么好用，因为iframe不是标准HTML标签，因此这些方法总是时不时地失灵，因此最好使用下面的方法：
                                        obj = parent.document.getElementById("frameSearch").contentWindow
     obj=obj.document.getElementById("section")
                                        obj.innerHTML="大家好！"
这种方法屡试不爽，关于具体的介绍，见下面的第四节（用js访问操作iframe里的dom完全攻略！）
　　Iframe虽然内嵌在另一个HTML文件中，但它保持相对的独立，是一个“独立王国“哟，在单一HTML中的特性同样适用于浮动帧中。试想一下，通过Iframe标记，我们可将那些不变的内容以Iframe来表示，这样，不必重复写相同的内容，这有点象程序设计中的过程或函数，减省了多少繁琐的手工劳动！另外，至关重要的是，它使页面的修改更为可行，因为，不必因为版式的调整而修改每个页面，你只需修改一个父窗体的版式即可了。
        4:最适用的iframe内部和外部元素的访问方法（在各个浏览器中都适用，并且不会失灵，而上面介绍的那些方法中，很多用过一两次后就失灵了）
     请见下一个文本框。　　

四：（重重之点）用JS访问操作iframe里的dom完全攻略！
两个页面，一个页面是iframe所在页面(页面名称：iPage.html)，另一个页面是iframe属性src指向页面（页面名称：srcPage.html）。
iPage.html，<body>里dom：
<iframe id=“iId“ name=“iName“ src="“srcPage.html“" mce_src="“srcPage.html“" scrolling=“no“ frameborder=“0“></iframe>
srcPage.html，<body>里dom：
<h1>妹妹的一天</h1> 
<p>早上吃早点，中午约会吃饭，下午K歌，晚上和哥哥瞎折腾</p>
下面讨论ie下JS是怎么操作以上两个页面，再讨论firefox的做法，最后给出兼容ie,firefox浏览器操作iframe对象的方法。
一、ie下访问操作iframe里内容
大家都知道iframe是非标准html标签，它是由ie浏览器推出的多布局标签, 随后Mozilla也支持了这个标签。(闲话，嘿嘿)
1. ie通过document.frames["IframeName"]获取它，例子：我们在iPage.html里输出srcPage.html里h1的内容，JS如下，firefox下document.frames 没有定义错误提示：
window.onload = (function () { 
  alert(document.frames["iName"].document.getElementsByTagName(‘h1‘)[0].firstChild.data);});
2. ie另一种方法contentWindow获取它，代码： 
window.onload = (function () { 
 var iObj = document.getElementById(‘iId‘).contentWindow;
 alert(iObj.document.getElementsByTagName(‘h1‘)[0].firstChild.data);
});
此方法经过ie6,ie7,firefox2.0,firefox3.0测试都通过，好事啊！嘿嘿。（网上一查，发现Mozilla Firefox iframe.contentWindow.focus缓冲区溢出漏洞，有脚本注入攻击的危险。
后来听说可以在后台防止这样的事情发生，算是松了口气。不过还是希望firefox新版本可以解决这样的危险。）
3.改变srcPage.html里h1标题内容，代码：
iObj.document.getElementsByTagName(‘h1‘)[0].innerHTML=‘我想变成她一天的一部分‘;
通过contentWindow后访问里面的节点就和以前一样了。
二、firefox下访问操作iframe里内容
Mozilla支持通过IFrameElmRef.contentDocument访问iframe的document对象的W3C标准，通过标准可以少写一个document,代码：
var iObj = document.getElementById(‘iId‘).contentDocument; 
alert(iObj.getElementsByTagName(‘h1‘)[0].innerHTML=‘我想变成她一天的一部分‘); 
alert(iObj.getElementsByTagName(‘p‘)[0].firstChild.data);
兼容这两种浏览器的方法，现在也出来了，就是使用contentWindow这个方法。
嘿嘿！操作iframe是不是可以随心所欲了呢？如果还觉得不爽，你甚至可以重写iframe里的内容。
三、重写iframe里的内容
通过designMode（设置文档为可编辑设计模式）和contentEditable（设置内容为可编辑），你可以重写iframe里的内容。代码：
var iObj = document.getElementById(‘iId‘).contentWindow;
iObj.document.designMode = ‘On‘; 
iObj.document.contentEditable = true; 
iObj.document.open(); 
iObj.document.writeln(‘<html><head>‘); 
iObj.document.writeln(‘<mce:style><!--
body {background:#000;font-size:9pt;margin: 2px; padding: 0px;}
--></mce:style><style mce_bogus="1">body {background:#000;font-size:9pt;margin: 2px; padding: 0px;}</style>‘); 
iObj.document.writeln(‘</head><body></body></html>‘); 
iObj.document.close();
这两个对象的资料可参考：http://msdn.microsoft.com/en-us/library/ms533720(VS.85).aspx
四、iframe自适应高度
有了上面的原理要实现这个相当简单，就是把iframe的height值设置成它里面文档的height值就可以。代码：
window.onload = (function () { 
var iObj = document.getElementById(‘iId‘); 
iObj.height =  iObj.contentWindow.document.documentElement.scrollHeight;});
现在对JS操作iframe你已经有了全新的认识，说不定那天会因为这个有什么新的web技术名词，嘿嘿，臭美下！
PS:
1. Document.designMode ,Document.contentEditable在你这里的使用场景错了,他一般是应用在在线编辑器上的,如果你并不是开放给用户操作的话,根本没必要设置这个属性!
2. 另外之所以要用 window.onload,是因为页面加载中,iframe的加载顺序是在最后的,也就是说,在没用window.onload的情况下,在执行你那段js的时候iframe里的dom都还没加载到,这样自然是无输出的了
3. 如果是在两个不同的子域下，上面的代码需要做小的改动。
调用iframe的页面和被iframe的页面需要增加设置 document.domain 的代码，指明同一个根域即可。
参考资料：
https://developer.mozilla.org/cn/Migrate_apps_from_Internet_Explorer_to_Mozilla
http://msdn.microsoft.com/en-us/library/ms533690(VS.85).aspx
http://www.kuqin.com/webpagedesign/20080516/8536.html
http://www.nohack.cn/jsj/safe/2006-10-05/8156.html
此外，用DOM方法与jQuery方法结合的方式：
1.在父窗口中操作 选中IFRAME中的所有单选钮
$(window.frames["iframe1"].document).find("input[@type='radio']").attr("checked","true");
2.在IFRAME中操作 选中父窗口中的所有单选钮
$(window.parent.document).find("input[@type='radio']").attr("checked","true");
iframe框架的：<iframe src="test.html" mce_src="test.html" id="iframe1" width="700" height="300" frameborder="0" scrolling="auto"></iframe>
3.Try this: 
$("#myid", top.document); 
the top.document tells the selector to target the myid element which 
exists in the topmost document (your parent page).  In order for this 
to work, jquery must be loaded in the file which is viewed through the 
iframe. 
我的代码
$('#parentElem', top.document).append('<div class="imgbox" id="imgbox"><img class="img" src="pp.png" mce_src="pp.png" id="img"></div>');
--end--

五：用图片代替iframe的滚动条
<IFRAME frameBorder=0 frameSpacing=0 height=25 marginHeight=0 marginWidth=0 scrolling=no name=main src="/bgm/bgm.html" mce_src="bgm/bgm.html" width=300></IFRAME>
用了iframe后 发现滚动条不漂亮 想用2个图片来代替↑↓应该怎么实现呢？
回答：用下列代码替换网页的<title>..</title>
<SCRIPT LANGUAGE="javascript">
function scroll(n)
{temp=n;
Out1.scrollTop=Out1.scrollTop+temp;
if (temp==0) return;
setTimeout("scroll(temp)",80);
}
</SCRIPT>
<TABLE WIDTH="330">
<TR>
<TD WIDTH="304" VALIGN="TOP" ROWSPAN="2" >
<DIV ID=Out1 STYLE="width:100%; height:100;overflow: hidden ;border-style:dashed;border-width: 1px,1px,1px,1px;" mce_STYLE="width:100%; height:100;overflow: hidden ;border-style:dashed;border-width: 1px,1px,1px,1px;">
文字<BR> 文字<BR>
文字<BR>
文字<BR>
文字
<BR>
<BR>
</DIV>
</TD>
<TD WIDTH="14" VALIGN="TOP"><IMG SRC="photo/up0605.gif" mce_SRC="photo/up0605.gif" WIDTH="14" HEIGHT="20" onmouseover="scroll(-1)" onmouseout="scroll(0)" onmousedown="scroll(-3)" BORDER="0" ALT="按下鼠标速度会更快！"></TD>
</TR>
<TR>
<TD WIDTH="14" VALIGN="BOTTOM"><IMG SRC="photo/down0605.gif" mce_SRC="photo/down0605.gif" onmouseover="scroll(1)" onmouseout="scroll(0)"      onmousedown="scroll(3)" BORDER="0" WIDTH="15" HEIGHT="21" ALT="按下鼠标速度会更快！"></TD>
</TR>
</TABLE>
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
下面这段代码可以实现IFrame自适应高度，即随着页面的长度，自动适应以免除页面和IFrame同时出现滚动条。
源代码如下:
<mce:script type="text/javascript"><!--
//** iframe自动适应页面 **//
//输入你希望根据页面高度自动调整高度的iframe的名称的列表
//用逗号把每个iframe的ID分隔. 例如: ["myframe1", "myframe2"]，可以只有一个窗体，则不用逗号。
//定义iframe的ID
var iframeids=["test"]
//如果用户的浏览器不支持iframe是否将iframe隐藏 yes 表示隐藏，no表示不隐藏
var iframehide="yes"
function dyniframesize()
{
var dyniframe=new Array()
for (i=0; i<iframeids.length; i++)
{
if (document.getElementById)
{
//自动调整iframe高度
dyniframe[dyniframe.length] = document.getElementById(iframeids);
if (dyniframe && !window.opera)
{
dyniframe.style.display="block"
if (dyniframe.contentDocument && dyniframe.contentDocument.body.offsetHeight) //如果用户的浏览器是NetScape
dyniframe.height = dyniframe.contentDocument.body.offsetHeight;
else if (dyniframe.Document && dyniframe.Document.body.scrollHeight) //如果用户的浏览器是IE
dyniframe.height = dyniframe.Document.body.scrollHeight;
}
}
//根据设定的参数来处理不支持iframe的浏览器的显示问题
if ((document.all || document.getElementById) && iframehide=="no")
{
var tempobj=document.all? document.all[iframeids] : document.getElementById(iframeids)
tempobj.style.display="block"
}
}
}
if (window.addEventListener)
window.addEventListener("load", dyniframesize, false)
else if (window.attachEvent)
window.attachEvent("onload", dyniframesize)
else
window.onload=dyniframesize
// --></mce:script> 
六：iframe属性
属性 值 描述 DTD 
align left 
right 
top 
middle 
bottom 
 规定如何根据周围的文本来排列此框架。 TF 
frameborder 1 
0 
 规定是否显示框架的边框。 TF 
height pixels 
% 
 定义 iframe 的高度。 TF 
longdesc URL 描述此框架内容的长描述的URL。 TF 
marginheight pixels 定义 iframe 的顶部和底部的边距。 TF 
marginwidth pixels 定义 iframe 的左侧和右侧的边距。 TF 
name frame_name 规定 iframe 的唯一名称 （以便在脚本中使用）。 TF 
scrolling yes 
no 
auto 
 定义滚动条。 TF 
src URL 在 iframe 中显示文档的 URL。 TF 
width pixels 
% 
 定义 iframe 的宽度。 TF 
七：本人项目部分代码参考
以下是本人自己在实际项目开发时利用frame写的一段源代码，仅供参考：
主文件（框架）：
<html>
<head>
 <title>教育局资源管理系统</title>
 <mce:script src="resources/js/DirectoryTree/DirectoryTree.js" mce_src="resources/js/DirectoryTree/DirectoryTree.js"></mce:script>
 <mce:script src="resources/js/date.js" mce_src="resources/js/date.js"></mce:script>
 <link rel="stylesheet" type="text/css" href="resources/css/frame.css" mce_href="resources/css/frame.css">
 <link rel="stylesheet" type="text/css" href="resources/css/global.css" mce_href="resources/css/global.css">
 <mce:script language="javascript"><!--
  function setBgColor()
  {   
   var bg=document.bgColor   
   bottom.document.bgColor=bg   
  }

// --></mce:script>
</head>
<body bgcolor="#f9edff" onload="setBgColor()">
<div styleClass="basewnd">
 <!-- LOGO -->
 <div align="center" class="flag">
  <iframe src="resources/HTMLFolders/Logo.html" mce_src="resources/HTMLFolders/Logo.html"  frameBorder="0" scrolling="no" width="950px" height="115px" marginheight="0"></iframe> 
 </div>

<!-- 用户登陆 -->
 <div align="center" class="user">
  <iframe src="resources/HTMLFolders/UserLogin.html" mce_src="resources/HTMLFolders/UserLogin.html"  frameBorder="0" scrolling="no" width="195px" height="150px" marginheight="0" marginwidth="0"></iframe> 
 </div>

<!-- 搜索 -->
 <div id="search" name="test" align="center" class="top_list_home">
  <iframe id="frameSearch" name="search" src="resources/HTMLFolders/Search.html" mce_src="resources/HTMLFolders/Search.html"  frameBorder="0" scrolling="no" width="195px" height="150px" marginheight="0" marginwidth="0"></iframe> 
 </div>

<!-- 导航条 -->
 <div align="center" class="navigation">
  <iframe src="resources/HTMLFolders/Navigation.html" mce_src="resources/HTMLFolders/Navigation.html"  frameBorder="0" scrolling="no" width="950px" height="25px" marginheight="0" marginwidth="0"></iframe> 
 </div>


 <!-- 最新主题列表 -->
 <div align="center" class="newest_topic">
  <iframe src="resources/HTMLFolders/Sublist.html" mce_src="resources/HTMLFolders/Sublist.html" frameBorder="0" scrolling="no" width="540px" height="427px" marginheight="0" marginwidth="0"></iframe>
 </div>
 <!-- 单位目录树 -->
 <div align="center" class="welcome_tag_home">
  <iframe src="resources/HTMLFolders/DirectoryTree.html" mce_src="resources/HTMLFolders/DirectoryTree.html"  frameBorder="0" scrolling="no" width="195px" height="427px" marginheight="0" marginwidth="0"></iframe> 
 </div>
 <!-- 页尾 -->
 <div align="center" class="rights_home">
  <iframe id="bottom" name="bottom" src="resources/HTMLFolders/Bottom.html" mce_src="resources/HTMLFolders/Bottom.html"  frameBorder="0" scrolling="no" width="950px" height="100px" marginheight="0" marginwidth="0" allowTransparency="true" style="background-color: red" mce_style="background-color: red"></iframe> 
 </div>
</div>
</body>
</html>
被引用的文件UserLogin.html：
  <link rel="stylesheet" type="text/css" href="../css/global.css" mce_href="css/global.css">
  <table border="0" align="left" width="193" cellpadding="1" cellspacing="0" style="border-style:solid;border-width:1px;border-color:#eeeeee;" mce_style="border-style:solid;border-width:1px;border-color:#eeeeee;">
   <tr><td>
    <table border="0" align="left" width="190" cellpadding="0" cellspacing="0">
     <tr>
      <td align="left" valign="middle" width="20" height="25" class="tdfnt12px" background="../images/title_bar2.png" >

</td>
      <td align="left" valign="bottom" height="25" class="tdfnt12px" background="../images/title_bar2.png">
       <font style="height:18px;font-family:宋体;font-size:14px;"> <b>会员登录</b></font>
      </td>
     </tr>
    </table>
   </td></tr>
  </table>

<div id="divLogin" style="visibility:visible;position:absolute;left:10px;top:30px">
   <table border="0" align="left" width="193" cellpadding="1" cellspacing="0" style="border-style:solid;border-width:0px;border-color:#eeeeee;" mce_style="border-style:solid;border-width:0px;border-color:#eeeeee;">
    <tr>
     <td align="left" valign="bottom" height="45"><font class="normal">用户名：</font>
     <td valign="bottom"><input type="text" name="userAreaUserName" id="userAreaUserName" class="id" maxlength="16"/></td>
    </tr>
    <tr>
     <td align="left" height="40"><font class="normal">密码：</font>
     <td><input type="password" name="userAreaUserPwd" id="userAreaUserPwd" class="pwd" maxlength="16"/></td>
    </tr>
    <tr>
     <td align="center" colspan="2" class="tdfnt12px">
      <input type="submit" value="登录" style="color:black;border-color:skyblue;border-style:solid;border- width:0px;vertical-align:middle;font-family:宋体;width:68px;height:24px;background:url(resources/images/ButtonBg02.png);"/>
     </td>
    </tr>
   </table>
  </div>
现在假设“最新主题列表”文件中有一个超链接，点击其，包含“最新主题列表”的iframe就重新加载，此时需要利用javascript来实现：
<a href="" onclick="redirect(); return false">www.baidu.com</a>
<mce:script language="javascript"><!--
    function redirect()
    {
         parent.document.frames["frameSublist"].location.href="www.baidu.com"
    }
// --></mce:script>
本文来自CSDN博客，转载请标明出处：http://blog.csdn.net/BiologyPianoProgram/archive/2009/04/23/4103062.aspx
   