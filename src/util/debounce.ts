/**
 * 防抖函数
 * @param func 自定义函数
 * @param delay 延迟时间
 * @returns
 */
function debounce(func: any, delay: any): any {
  let timer: any;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(function (this: any) {
      func.apply(this, args);
    }, delay);
  };
}
