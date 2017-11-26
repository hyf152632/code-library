标记原生dom  使用ref属性:
ref= 'elName'
获取原生dom  this.$refs.elName
@click="functionName($event)"
$event可以获取到原生的event
$nextTick   可以保证dom已经渲染完，所以操作dom的操作，要在它的回掉函数中进行。
