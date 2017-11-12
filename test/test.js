function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffle(arr) {
    let _arr = arr.slice()
    for (let i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i)
        let t = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = t
    }
    return _arr
}

let shuffleA = shuffle([1,2,3,'a',4,5,6,7,8,11,9,10]);
shuffleA;




