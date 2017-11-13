# form
## 配置表单  
![set-form](../img/set-form.png)  
## 表单验证  
![valiate-form](../img/validate-form.png)  

获取表单：  
let pizzaForm = document.forms.pizza;  

获取元素： 
![get-ele](../img/get-ele.png)  

表单重置：  
fileForm.reset()  

本地图片预览  
![input-file](../img/input-file.png)  

select级联下拉选择器  
![cascade-select1](../img/cascade-select1.png)  
![cascade-select2](../img/cascade-select2.png)  

textarea@输入提示功能  
![textarea](../img/textarea-@.png)  

表单提交  
![summit](../img/summit-form.png)  

利用iframe实现表单的无刷新提交  
```html  
1. <iframe name="formsubmit" id="myFrame" style="display: none"></iframe>   
2. <!-- 将form表单提交的窗口指向隐藏的ifrmae,并通过ifrmae提交数据。 -->   
3. <form action="./login" method="POST" name="forphp" id="myForm"target="formsubmit">   
4.     <p><label for="uname">用户名：<input type="text" name="uname" id="uname"/> </label> </p>   
5.     <p><label for="pwd">密 码： <input type="password" name="pwd" id="pwd"/></label></p>    
6.     <p><input type="submit" value="登录" id="sub"/></p>   
7. </form>
8. <script type="text/javascript">
9.     var form  = document.getElementById('myForm');
10.     var frame = document.getElementById('myFrame');
11.     // 绑定onload事件
12.     addEvent(frame, 'load', function(event){ 
13.             try{
14.                 var result = JSON.parse(frame.contentWindow.document.body.textContent);
15.                 // 识别登录结果
16.                 if (result.code === 200){
17.                     callback(result.result.uname,result.result.psw);       
18.                 }
19.             }catch(er){
20.                 //捕获错误
21.             }
22.         }
23.     );
24.     //兼容IE注册事件
25.     function addEvent(node, type, handler){
26.            if (node.addEventListener){
27.                node.addEventListener(type, handler, false);
28.            }else if(node.attachEvent){
29.                node.attachEvent('on' + type, handler);
30.            }else{
31.                node['on' + type] = handler;
32.            }}
33.  
34.     function callback(a,b){
35.         var uname = document.getElementById('uname').value;
36.         var pwd = document.getElementById('pwd').value;
37.         if(uname == a && pwd == b ){
38.             alert('登录成功');
39.             form.reset();
40.         }
41.         else{
42.             alert('账号密码错误');
43.         }
44.     }
45. </script>
46. // ./login文件内容
47. // {
48. //     "code": 200,
49. //     "result":{
50. //         "uname":"admin",
51. //         "psw":"test"
52. //     }
```
