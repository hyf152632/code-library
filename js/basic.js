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

let addEvent = document.addEventListener ? 
    function(elem,type,listener,useCapture=false) {
        elem.addEventListener(type,listener,useCapture);
    } : 
    function(elem,type,listener,useCapture) {
        elem.attachEvent('on' + type, listener);
    };

//ajax请求参数序列化
function serialize(data) {
    if(!data) return '';
    let pairs = [];
    for (let name in data) {
        if(!data.hasOwnProperty(name)) continue;
        if(typeof data[name] === 'function') continue;
        let value = data[name].toString();
        name = encodeURIComponent(name);
        value = encodeURIComponent(value);
        pairs.push(name + '=' + value);
    }
    return pairs.join('&');
}

xhr.open('post','example.json',true);
xhr.send(serialize(formdata));

//读取cookie
function getCookie() {
    let cookie = {};
    let all = document.cookie;
    if(all === '')
        return cookie;
    let list = all.split(';');
    list.forEach((item) => {
        let p = item.indexOf('=');
        let name = item.substring(0,p);
        name = decodeURIComponent(name);
        let value = item.substring(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    })
    return cookie;
}
//设置/修改cookie
function setCookie(name,value,expires,path,domain,secure) {
    let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if(expires)
        cookie += ';expires=' + expires.toGMTString();
    if(path)
        cookie += ';path=' + path;
    if(domain)
        cookie += ';domain' + domain;
    if(secure)
        cookie += ';secure' + secure;
    document.cookie = cookie;
}

//删除cookie
function removeCookie(name, path, domain) {
    document.cookie = `name=${name};path=${path};domain=${domain};max-age=0`;
}

//动画函数
let animation = function(ele,attr,from,to) {
    let distance = Math.abs(to - from);
    let stepLength = distance/100;
    let sign = (to - from)/distance;
    let offset = 0;
    let step = function() {
        let tmpOffset = offset + stepLength;
        if(tmpOffset < distance) {
            ele.style[attr] = from + tmpOffset*sign + 'px';
            offset = tmpOffset;
        } else {
            ele.style[attr] = to + 'px';
            clearInterval(intervalID);
        }
    }
    ele.style[attr] = from + 'px';
    let intervalID = setInterval(step,10);
}

//开，关新窗口
let w = window.open('subwin.html','subwin','width=400,height=350,status=yes,resizable=yes');
w.close();


//如何判断某变量是否为数组数据类型
if (typeof Array.isArray === "undefined") {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === "[object Array]"
    };
}

window.location.href
// 得到和使用的是完整的url，比如window.location.href = "www.baidu.com”表示的是重新定向，页面跳转
// 到新的页面。也可以通过window.location.href得到a标签的完整的href，比如 < a href = "#book" > 如果使用href，那
// 么可以得到完整的链接（url）

window.location.hash
// 得到的是锚链接。相比如href, 通过window.location.hash并不会跳转到新的链接，只会在当前链接里面
// 改变锚链。并且如果有 < a href = "#book" > 通过window.location.hash得不到完整的链接（URL），仅仅得到#book.


