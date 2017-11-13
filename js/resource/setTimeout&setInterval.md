下面是一个clearTimeout实际应用的例子。有些网站会实时将用户在文本框的输入，通过Ajax方法传回服务器，jQuery的写法如下。
$('textarea').on('keydown', ajaxAction);
这样写有一个很大的缺点，就是如果用户连续击键，就会连续触发keydown事件，造成大量的Ajax通信。这是不必要的，而且很可能会发生性能问题。正确的做法应该是，设置一个门槛值，表示两次Ajax通信的最小间隔时间。如果在设定的时间内，发生新的keydown事件，则不触发Ajax通信，并且重新开始计时。如果过了指定时间，没有发生新的keydown事件，将进行Ajax通信将数据发送出去。
这种做法叫做debounce（防抖动）方法，用来返回一个新函数。只有当两次触发之间的时间间隔大于事先设定的值，这个新函数才会运行实际的任务。假定两次Ajax通信的间隔不小于2500毫秒，上面的代码可以改写成下面这样。
$('textarea').on('keydown', debounce(ajaxAction, 2500))
利用setTimeout和clearTimeout，可以实现debounce方法，该方法用于防止某个函数在短时间内被密集调用。具体来说，debounce方法返回一个新版的该函数，这个新版函数调用后，只有在指定时间内没有新的调用，才会执行，否则就重新计时。
function debounce(fn, delay){
  var timer = null; // 声明计时器
  return function(){
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
    }, delay);
  };
}

// 用法示例
var todoChanges = _.debounce(batchLog, 1000);
Object.observe(models.todo, todoChanges);
现实中，最好不要设置太多个setTimeout和setInterval，它们耗费CPU。比较理想的做法是，将要推迟执行的代码都放在一个函数里，然后只对这个函数使用setTimeout或setInterval。  

setTimeout(f, 0)有几个非常重要的用途。它的一大应用是，可以调整事件的发生顺序。  
比如，网页开发中，某个事件先发生在子元素，然后冒泡到父元素，即子元素的事件回调函数，会早于父元素的事件回调函数触发。如果，我们先让父元素的事件回调函数先发生，就要用到setTimeout(f, 0)。
var input = document.getElementsByTagName('input[type=button]')[0];

input.onclick = function A() {
  setTimeout(function B() {
    input.value +=' input';
  }, 0)
};

document.body.onclick = function C() {
  input.value += ' body'
};
上面代码在点击按钮后，先触发回调函数A，然后触发函数C。在函数A中，setTimeout将函数B推迟到下一轮Loop执行，这样就起到了，先触发父元素的回调函数C的目的了。
用户自定义的回调函数，通常在浏览器的默认动作之前触发。比如，用户在输入框输入文本，keypress事件会在浏览器接收文本之前触发。因此，下面的回调函数是达不到目的的。
document.getElementById('input-box').onkeypress = function(event) {
  this.value = this.value.toUpperCase();
}
上面代码想在用户输入文本后，立即将字符转为大写。但是实际上，它只能将上一个字符转为大写，因为浏览器此时还没接收到文本，所以this.value取不到最新输入的那个字符。只有用setTimeout改写，上面的代码才能发挥作用。
document.getElementById('my-ok').onkeypress = function() {
  var self = this;
  setTimeout(function() {
    self.value = self.value.toUpperCase();
  }, 0);
}
上面代码将代码放入setTimeout之中，就能使得它在浏览器接收到文本之后触发。
由于setTimeout(f,0)实际上意味着，将任务放到浏览器最早可得的空闲时段执行，所以那些计算量大、耗时长的任务，常常会被放到几个小部分，分别放到setTimeout(f,0)里面执行。