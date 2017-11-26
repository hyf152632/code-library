嵌套路由的<router-link>中的to属性，应该是动态绑定的写成:to='/goods/title'这样的形式

编程式路由
$router.push('name')
$router.push({path:'name'})
$router.push({path:'name?a=123'})
$router.push({path:'name',query:{a=123}})
$router.go(1)

接收路由传参：
$route.query.a
this.$route.query.addressId

命名路由
如果给路由添加了名字，那么通过在<router-link>中动态绑定to属性,即：v-bind:to='{name:routeName}'就可以完成跳转

命名路由中传入路由参数
<router-link :to='{name:'name',params:{id:123}}'>跳转</router-link>  
<router-link :to='{path:'orderConfirm',query:{'addressId':selectedAddrId}}'>next</router-link>

路由配置项 
linkActiveClass
• 类型: string
默认值: "router-link-active"
全局配置 <router-link> 的默认『激活 class 类名』。参考 router-link
export defaulf new Router({
    linkActiveClass:'actived',
})

router-link ：
tag='div'
决定router-link会被渲染成什么元素，默认渲染成<a>

