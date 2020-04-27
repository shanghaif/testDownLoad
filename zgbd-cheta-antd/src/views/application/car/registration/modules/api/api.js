import { getAction,postAction } from '@/api/manage'

// 保存出车登记记录
const saveDispatch = (params) => postAction("/application/car/dispatch/doDispatch",params);
// 保存回车登记记录
const saveReturn = (params) => postAction("/application/car/dispatch/doReturn",params);
//行车登记列表
const getdispatchData = (params) => getAction("/application/car/dispatch/getData",params);







export {
  saveDispatch,
  saveReturn,
  getdispatchData


}