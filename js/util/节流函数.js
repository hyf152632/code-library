//对要调用的函数，延迟执行，而且，如果多次调用，实际上只会执行一次，因为每次执行前会清空
function debounce(func,delay) {
    let timer
    return function(...args) {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this,args)
        },delay)
    }
}

