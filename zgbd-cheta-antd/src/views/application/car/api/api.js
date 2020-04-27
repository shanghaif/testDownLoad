import { getAction,postAction } from '@/api/manage'


// 公共 获取车型
const getModelType = (params) => getAction("/application/car/base/getModelType",params);
// 获取车型
const getCarType = (params) => getAction("/application/car/base/getCarType",params);
// 获取项目
const getProject = (params) => getAction("/application/car/base/getOrganList",params);
// 获取智能终端
const getTerminal = (params) => getAction("/application/car/base/getTerminal",params);
// 获取传感器/设备
const getEquipment = (params) => getAction("/application/car/base/getEquipment",params);

// 车务 加油登记
const insertOrUpdate = (params) => getAction("/application/car/vehicle/refuel/insertOrUpdate",params);

// 车辆信息 保存铭牌信息
const saveCarNameplate = (params) => postAction("/application/car/account/saveCarNameplate",params);
// 保存车辆信息
const saveAccount = (params) => postAction("/application/car/account/saveAccount",params);
// 获取车辆列表
const getCarData = (params) => getAction("/application/car/account/getData",params);

//运行管理 GPS 获取报警信息
const getAlarm = (params) => getAction("/application/car/gps/getAlarm",params);



export {
  insertOrUpdate,
  getModelType,
  getCarType,
  getProject,
  getTerminal,

  getEquipment,

  saveCarNameplate,
  saveAccount,
  getCarData,

  getAlarm

}