/**
 * 防抖函数
 * @param func 自定义函数
 * @param delay 延迟时间
 * @returns
 */
function debounce(func, delay) {
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(this, args);
    }, delay);
  };
}
