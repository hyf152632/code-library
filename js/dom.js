export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

export function addClass(el, className) {
    if (hasClass(el, className)) {
        return
    }

    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

export function getData(el, name, val) {
    const prefix = 'data-'
    if (val) {
        return el.setAttribute(prefix + name, val)
    }
    return el.getAttribute(prefix + name)
}

//url参数拼接
function JoinParam(url,data) {
    function param(data) {
        let url = ''
        for (var k in data) {
            let value = data[k] !== undefined ? data[k] : ''
            url += '&' + k + '=' + encodeURIComponent(value)
        }
        return url ? url.substring(1) : ''
    }
    return url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
}

//Touch.pageX
//The Touch.pageX read - only property returns the X coordinate of the touch point relative to the viewport, including any scroll offset.

//Touch.clientX
//The Touch.clientX read - only property returns the X coordinate of the touch point relative to the viewport, not including any scroll offset.

//Touch.screenX
//Returns the X coordinate of the touch point relative to the screen, not including any scroll offset.


//ParentNode.children
//Node.children is a read - only property that returns a live HTMLCollection of the child elements of Node.

