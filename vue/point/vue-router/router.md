//全局守卫
main.js: 
``` javascript
router.beforeEach((to, from, next) => {
    if(sessionStorage.getItem('token') !== null){
        next()
    }else if(to.name !== 'login'){
        next({ name: 'login' })//跳转到登录页
    }else{
        next()
    }
})
```

//编程式路由  
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: 123 }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
注意：如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：

const userId = 123
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
同样的规则也适用于 router-link 组件的 to 属性。  

## router.replace
router.replace(location, onComplete?, onAbort?)

跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

            声明式	                            编程式
<router-link :to="..." replace>	        router.replace(...)
