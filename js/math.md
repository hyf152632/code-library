它们的共同点是把数字转成字符串供展示使用。注意不要在计算的中间过程使用，只用于最终结果。
不同点：
    toPrecision：处理精度，精度从左至右第一个不为0的数开始数起。
    toFixed: 是小数点后指定位数取整，从小数点开始数起。
toFixed的bug：
1.005.toFixed(2)返回1.00而不是1.01
可以使用：
Math.round()解决
但是需要解决乘法和除法精度误差之后再使用Math.round

解决方案：
拿到1.4000000000000001这样的数据要展示时，使用toPrecision凑整并parseFloat转成数字后再显示。
parseFloat(1.400000000000001.toPrecision(12)) === 1.4   //true
封装成方法：
function strip(num,precision = 12 ) {
    return parseFloat(num.toPrecision(precision));
}
为什么选择 12 做为默认精度？这是一个经验的选择，一般选12就能解决掉大部分0001和0009问题，而且大部分情况下也够用了，如果你需要更精确可以调高。

数据运算类
对于运算类操作，如 +-*/，就不能使用 toPrecision 了。正确的做法是把小数转成整数后再运算。以加法为例：
/**
 * 精确加法
 */
function add(num1, num2) {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}
以上方法能适用于大部分场景。遇到科学计数法如 2.3e+1（当数字精度大于21时，数字会强制转为科学计数法形式显示）时还需要特别处理一下。
