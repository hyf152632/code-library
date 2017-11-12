//array.find
//The find() method returns the value of the first element in the array that satisfies the provided testing function. 
//Otherwise undefined is returned.
function isBigEnough(element) {
    return element >= 15;
}
[12, 5, 8, 130, 44].find(isBigEnough); // 130

//array.findIndex
//The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
//Otherwise -1 is returned.
function isBigEnough(element) {
    return element >= 15;
}
[12, 5, 8, 130, 44].findIndex(isBigEnough);
// index of 4th element in the Array is returned,
// so this will result in '3'

//默认导出一个class
export default class Singer {
    constructor({ id, name }) {
        this.id = id
        this.name = name
        this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
    }
}

export default class Song {
    //对象解构
    // constructor({ id, mid, singer, name, album, duration, image, url } = {}) {
    constructor({ id, mid, singer, name, album, duration, image, url }) {
        this.id = id
        this.mid = mid
        this.singer = singer
        this.name = name
        this.album = album
        this.duration = duration
        this.image = image
        this.url = url
    }
}

//使用
export function createSong(musicData) {
    return new Song({
        id: musicData.songid,
        mid: musicData.songmid,
        singer: filterSinger(musicData.singer),
        name: musicData.songname,
        album: musicData.albumname,
        duration: musicData.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
    })
}

//洗牌函数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle(arr) {
    let _arr = arr.slice()
    for (let i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i)
        let t = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = t
    }
    return _arr
}

//节流函数
export function debounce(func, delay) {
    let timer

    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

//Object.assign
//The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
//It will return the target object.
Object.assign(target, ...sources)

//Merging objects
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };
var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.

//Merging objects with same properties
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };
var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

//axios发起ajax请求
axios.get(url, {
    params: data
}).then((res) => {
    return Promise.resolve(res.data)
})

// string.match
// Return value
// An Array containing the entire match result and any parentheses - captured matched results; null if there were no matches.




