//css
<style>
p{line-height: 200px;}
</style>

//html
<p >网易一线资深工程师</p>
就用
element.sheet.cssRule[0].style.lineHeight
如果是行内样式的话
<p style="line-height: 200px;">网易一线资深工程师</p>

就用
element.style.lineHeight

如果内部样式表
<style>
.m-nav{font-size: 14px;}
.m-nav li{width: 100px;padding-left: 20px;}
</style>
对应的DOM节点是element，那么要获取样式表中第二条规则中padding-left的属性值, 以下是实现这个操作对应的代码，请补全代码:
element.sheet.cssRules[1].style._
解：paddingLeft

element.style.borderColor = 'red';
            element.style.color = 'red';

function updateStyle(){
            var element = $('mobile');
            element.style.cssText = 'border-color:red;color:red;';
}

function updateStyle(){
            var element = $('mobile');

            element.className += ' invalid';
        }

window.getComputedStyle(element).color


