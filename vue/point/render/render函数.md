virtual DOM

普通DOM
```html 
<div id='main'>
    <p>文本内容</p>
    <p>文本内容</p>
</div>    
```  

Virtual DOM  
//一个标准的js对象
var vNode = {
    tag: 'div',
    attributes: {
        id: 'main'
    },
    children: [
        // p 节点
    ]
}

vue源码virtual


const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)   // createElemtent函数的第一个参数，可以是一个html元素字符串，也可以是一个组件
})