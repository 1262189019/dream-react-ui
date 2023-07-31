/**
 * 节流函数
 * @param func 自定义函数
 * @param interval 时间
 * @returns
 */
declare function throttle(func: Function, interval: number): Function;
export default throttle;
