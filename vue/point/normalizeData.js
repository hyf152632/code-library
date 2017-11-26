function _normalizeSinger(list) {
    let map = {
        hot: {
            title:HOT_NAME,
            items:[]
        }
    }
    list.forEach((item,index) => {
        if(index < HOT_SINGER_LEN) {
            map.hot.items.push(new _normalizeSinger({
                id:item.Fsinger_mid,
                name:item.Fsinger_name
            }))
        }
        const key = item.Findex
        if(!map[key]) {
            map[key] = {
                title: key,
                items:[]
            }
        }
        map[key].itmes.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
        }))
    })
    //处理对象map得到有序列表
    let hot = []
    let ret = []
    for(let key in map) {
        let val = map[key]
        if(val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
        }else if(val.title === HOT_NAME) {
            hot.push(val)
        }
    }
    ret.sort((a,b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
    })
    return hot.concat(ret);
}

//从现有的数组中获取一个新数组，而且新得到的数组需要依赖这个现有的数组，
//所以定义一个计算属性，然后用map方法，返回一个新数组。
// computed: {
//     shortcutList() {
//         return this.data.map((group) => {
//             return group.title.substr(0,1)
//         })
//     }
// }

