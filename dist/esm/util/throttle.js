/**
 * 节流函数
 * @param func 自定义函数
 * @param interval 时间
 * @returns
 */
function throttle(func, interval) {
  var timer;
  return function () {
    if (!timer) {
      func();
      timer = setTimeout(function () {
        timer = null;
      }, interval);
    }
  };
}
export default throttle;
