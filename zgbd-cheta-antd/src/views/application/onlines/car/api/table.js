

/**
 * 表格合并相同字段
 * @param {*} data   [后台数据]
 * @param {*} key    [要合并的字段]
 * @param {*} target [后台数据对应的index]
 * @param {*} isDate [是否是日期格式] true or false
 * @returns 合并的行数
 * method of 获取合并的行数
 */
export function getRowSpanCount(data, key, target,isDate) {
  if (!Array.isArray(data)) return 1;
  data = data.map(_ => _[key]); // 只取出筛选项
  if(isDate){for (let i = 0; i < data.length; i++) {data[i] = data[i].substring(0,10);}} //如果是日期的话截取前面11位
  let preValue = data[0];
  const res = [[preValue]]; // 放进二维数组里
  let index = 0; // 二维数组下标
  for (let i = 1; i < data.length; i++) {
    if (data[i] === preValue) { // 相同放进二维数组
      res[index].push(data[i]);
    } else { // 不相同二维数组下标后移
      index += 1;
      res[index] = [];
      res[index].push(data[i]);
      preValue = data[i];
    }
  }
  const arr = [];
  res.forEach((_) => {
    const len = _.length;
    for (let i = 0; i < len; i++) {
      arr.push(i === 0 ? len : 0);
    }
  });
  return arr[target];
}