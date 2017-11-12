export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

//兼容IE6,7,8
function getElementByClassName(root,className) {
    if(root.getElementByClassName) {
        return root.getElementByClassName(className);
    }else{
        let elements = root.getElementsByTagName('*');
        let result = [];
        result = elements.map((el,className) => {
            if(hasClass(el,className)){
                return el;
            }
        })
    }
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

//promise封装ajax.get
function get(url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}

// use:
get('story.json').then(function (response) {
    console.log("Success!", response);
}, function (error) {
    console.error("Failed!", error);
})