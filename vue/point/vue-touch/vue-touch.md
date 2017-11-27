npm 引入 vue-touch
## npm

Available through npm as vue-touch. As this version is currently in BETA, you have to install with the next tag.

npm install vue-touch@next
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})


main.js中：
let VueTouch = require('vue-touch);
Vue.use(VueTouch,{name: 'v-touch'})    //这样就可以通过<v-touch>标签使用vue-touch了  

vue-touch其实封装了 hammer.js的方法 其实我们这里介绍的也就是他几个事件；详情可以搜索 hammer.js的文档;  

## Using the <v-touch> component

<!-- Renders a div element by default -->
<v-touch v-on:swipeleft="onSwipeLeft">Swipe me!</v-touch>

<!-- Render as other elements with the 'tag' prop -->
<v-touch tag="a" v-on:tap="onTap">Tap me!</v-touch>


