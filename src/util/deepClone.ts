function deepClone(obj: any) {
  // 判断是否为复杂类型
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let clone: any = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

export default deepClone;
