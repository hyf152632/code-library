img 的src 需要用绑定的形式,因为数据是通过异步请求到的,如果src写死的话,就拿不到值了.

防止内部的点击事件冒泡：
在内层添加一个@click.stop
<div @click.stop >