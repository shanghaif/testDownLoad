import Mock from 'mockjs'
import message from 'ant-design-vue/es/message'
//车辆离线统计报表
const outLine = [
  {id:'1',carNumber:'粤A88888',user:'刘阿帅',offLineDay:'10天',offLine:'2018-02-18',type:'作业车', mileage:'10',consumption:'100',totalTime:'20',ACCTotalTime:'20',attendanceDay:'30',createTime:'2018-02-18',},
  {id:'2',carNumber:'粤A88888',user:'刘阿帅',offLineDay:'10天',offLine:'2018-02-18',type:'作业车', mileage:'10',consumption:'100',totalTime:'20',ACCTotalTime:'20',attendanceDay:'30',createTime:'2018-02-18',},
  {id:'3',carNumber:'粤A88888',user:'刘阿帅',offLineDay:'10天',offLine:'2018-02-18',type:'作业车', mileage:'10',consumption:'100',totalTime:'20',ACCTotalTime:'20',attendanceDay:'30',createTime:'2018-02-18',},
  {id:'4',carNumber:'粤A88888',user:'刘阿帅',offLineDay:'10天',offLine:'2018-02-18',type:'作业车', mileage:'10',consumption:'100',totalTime:'20',ACCTotalTime:'20',attendanceDay:'30',createTime:'2018-02-18',},
];
//加油地点核查报表
const positionCheck = [
  { id:'1',type: '小汽车',parkingReal:'广东省广州市新塘大街102号',mobileFactory:'广州大街汽车厂',flameoutTime:'2019-04-25',factoryTime:'2019-04-25',userName:'李思',handle:'没啥了',remark:'没啥了',stopDistance:'2米',businessType: '加油',cardNumber: '1000114400005543709',date: '2019-04-25 09:13:11',isException: false,licenseNumber: '粤A312HN',money: '322.76',operator:'高欣琳',quantity: '49.58',refulPlace: '广州爱德加油站',refulType: '92号汽油(国Ⅵ)',unitPrice: '6.51',automobileFactory: '东寰汽车维修中心',customerName: '邮政速递广州北区分公司',time: '2019-04-13',vehicleId: '55083069ffffffc935305d0e0b5ee135'},
  { id:'2',type: '小汽车',parkingReal:'广东省广州市新塘大街102号',mobileFactory:'广州大街汽车厂',flameoutTime:'2019-04-25',factoryTime:'2019-04-25',userName:'李思',handle:'没啥了',remark:'没啥了',stopDistance:'2米',businessType: '加油',cardNumber: '1000114400005543709',date: '2019-04-25 09:13:11',isException: false,licenseNumber: '粤A312HN',money: '322.76',operator:'高欣琳',quantity: '49.58',refulPlace: '广州爱德加油站',refulType: '92号汽油(国Ⅵ)',unitPrice: '6.51',automobileFactory: '东寰汽车维修中心',customerName: '邮政速递广州北区分公司',time: '2019-04-13',vehicleId: '55083069ffffffc935305d0e0b5ee135'},
  { id:'3',type: '小汽车',parkingReal:'广东省广州市新塘大街102号',mobileFactory:'广州大街汽车厂',flameoutTime:'2019-04-25',factoryTime:'2019-04-25',userName:'李思',handle:'没啥了',remark:'没啥了',stopDistance:'2米',businessType: '加油',cardNumber: '1000114400005543709',date: '2019-04-25 09:13:11',isException: false,licenseNumber: '粤A312HN',money: '322.76',operator:'高欣琳',quantity: '49.58',refulPlace: '广州爱德加油站',refulType: '92号汽油(国Ⅵ)',unitPrice: '6.51',automobileFactory: '东寰汽车维修中心',customerName: '邮政速递广州北区分公司',time: '2019-04-13',vehicleId: '55083069ffffffc935305d0e0b5ee135'},
  { id:'4',type: '小汽车',parkingReal:'广东省广州市新塘大街102号',mobileFactory:'广州大街汽车厂',flameoutTime:'2019-04-25',factoryTime:'2019-04-25',userName:'李思',handle:'没啥了',remark:'没啥了',stopDistance:'2米',businessType: '加油',cardNumber: '1000114400005543709',date: '2019-04-25 09:13:11',isException: false,licenseNumber: '粤A312HN',money: '322.76',operator:'高欣琳',quantity: '49.58',refulPlace: '广州爱德加油站',refulType: '92号汽油(国Ⅵ)',unitPrice: '6.51',automobileFactory: '东寰汽车维修中心',customerName: '邮政速递广州北区分公司',time: '2019-04-13',vehicleId: '55083069ffffffc935305d0e0b5ee135'},
];

//油位分析
const refuelAnalyze = [
  {id:'1',carNumber: '粤A88888',changeTime: '2019-04-25 09:13:11',refuelChange: '10',changeSpace: '10米',changeTotal: '322.76',position:'广东省广州市新塘大街'},
  {id:'2',carNumber: '粤A88888',changeTime: '2019-04-25 09:13:11',refuelChange: '10',changeSpace: '10米',changeTotal: '322.76',position:'广东省广州市新塘大街'},
  {id:'3',carNumber: '粤A88888',changeTime: '2019-04-25 09:13:11',refuelChange: '10',changeSpace: '10米',changeTotal: '322.76',position:'广东省广州市新塘大街'},
  {id:'4',carNumber: '粤A88888',changeTime: '2019-04-25 09:13:11',refuelChange: '10',changeSpace: '10米',changeTotal: '322.76',position:'广东省广州市新塘大街'}
  ];

//超速报警
const police = [
  { id:'1',user: '张三',type: '小汽车',carNumber: '粤A88888',policeTime: '2019-04-25 09:13:11',speed: '10',info: '超速了',speedCount: '10米',maxSpeed: '322.76',site:'广东省广州市新塘大街'},
  { id:'2',user: '张三',type: '小汽车',carNumber: '粤A88888',policeTime: '2019-04-25 09:13:11',speed: '10',info: '超速了',speedCount: '10米',maxSpeed: '322.76',site:'广东省广州市新塘大街'},
  { id:'3',user: '张三',type: '小汽车',carNumber: '粤A88888',policeTime: '2019-04-25 09:13:11',speed: '10',info: '超速了',speedCount: '10米',maxSpeed: '322.76',site:'广东省广州市新塘大街'},
  { id:'4',user: '张三',type: '小汽车',carNumber: '粤A88888',policeTime: '2019-04-25 09:13:11',speed: '10',info: '超速了',speedCount: '10米',maxSpeed: '322.76',site:'广东省广州市新塘大街'},
  ];

//超时停靠报表
const timeOut = [
  { id:'1',carNumber: '粤A88888',belongUnit: '广东省广州市新塘大街',startTime: '2019-04-25 09:13:11',entTime: '2019-04-25 09:13:11',type: '超速',site:'广东省广州市新塘大街'},
  { id:'2',carNumber: '粤A88888',belongUnit: '广东省广州市新塘大街',startTime: '2019-04-25 09:13:11',entTime: '2019-04-25 09:13:11',type: '超速',site:'广东省广州市新塘大街'},
  { id:'3',carNumber: '粤A88888',belongUnit: '广东省广州市新塘大街',startTime: '2019-04-25 09:13:11',entTime: '2019-04-25 09:13:11',type: '超速',site:'广东省广州市新塘大街'},
  { id:'4',carNumber: '粤A88888',belongUnit: '广东省广州市新塘大街',startTime: '2019-04-25 09:13:11',entTime: '2019-04-25 09:13:11',type: '超速',site:'广东省广州市新塘大街'},
  ];

//运动空闲报表
const run = [
  { id:'1',carNumber: '粤A88888',type: '小汽车',totalTime: '20分钟',leisureDuration: '15分钟',runTime: '100分钟',totalDistance:'20'},
  { id:'2',carNumber: '粤A88888',type: '小汽车',totalTime: '20分钟',leisureDuration: '15分钟',runTime: '100分钟',totalDistance:'20'},
  { id:'3',carNumber: '粤A88888',type: '小汽车',totalTime: '20分钟',leisureDuration: '15分钟',runTime: '100分钟',totalDistance:'20'},
  { id:'4',carNumber: '粤A88888',type: '小汽车',totalTime: '20分钟',leisureDuration: '15分钟',runTime: '100分钟',totalDistance:'20'},
  ];

//站点出入记录
const taskHository = [
  { id:'1',carNumber: '粤A88888',date: '2019-04-26 09:13:11',entryTime: '2019-04-26 08:13:11',leaveTime: '2019-04-26 09:13:11',status: '正常',site:'广东省广州市新塘大街',task:'20'},
  { id:'2',carNumber: '粤A88888',date: '2019-04-26 09:13:11',entryTime: '2019-04-26 08:13:11',leaveTime: '2019-04-26 09:13:11',status: '正常',site:'广东省广州市新塘大街',task:'20'},
  { id:'3',carNumber: '粤A88888',date: '2019-04-26 09:13:11',entryTime: '2019-04-26 08:13:11',leaveTime: '2019-04-26 09:13:11',status: '正常',site:'广东省广州市新塘大街',task:'20'},
  { id:'4',carNumber: '粤A88888',date: '2019-04-26 09:13:11',entryTime: '2019-04-26 08:13:11',leaveTime: '2019-04-26 09:13:11',status: '正常',site:'广东省广州市新塘大街',task:'20'},
];

//行车记录
const runCarHository = [
  { id:'1',carNumber: '粤A88888',startRun: '2019-04-25 09:13:11',entRun: '2019-04-26 09:13:11',runTIme: '2019-04-25 09:13:11',mileage:'20',site:'广东省广州市新塘大街',stopTime:'2019-04-25 09:13:11',position: '广东省广州市新塘大街',startTime: '2019-04-25 09:13:11',entTime: '2019-04-26 09:13:11',unit: '2019-04-25 09:13:11',totalTime: '2019-04-25 09:13:11',opration:'编辑',realSite:'广东省广州市新塘大街',realTime:'2019-04-25 09:13:11',time:'2019-04-25 09:13:11',isException: '正常',exceptionStaus: '正常'},
  { id:'2',carNumber: '粤A88888',startRun: '2019-04-25 09:13:11',entRun: '2019-04-26 09:13:11',runTIme: '2019-04-25 09:13:11',mileage:'20',site:'广东省广州市新塘大街',stopTime:'2019-04-25 09:13:11',position: '广东省广州市新塘大街',startTime: '2019-04-25 09:13:11',entTime: '2019-04-26 09:13:11',unit: '2019-04-25 09:13:11',totalTime: '2019-04-25 09:13:11',opration:'编辑',realSite:'广东省广州市新塘大街',realTime:'2019-04-25 09:13:11',time:'2019-04-25 09:13:11',isException: '正常',exceptionStaus: '正常'},
  { id:'3',carNumber: '粤A88888',startRun: '2019-04-25 09:13:11',entRun: '2019-04-26 09:13:11',runTIme: '2019-04-25 09:13:11',mileage:'20',site:'广东省广州市新塘大街',stopTime:'2019-04-25 09:13:11',position: '广东省广州市新塘大街',startTime: '2019-04-25 09:13:11',entTime: '2019-04-26 09:13:11',unit: '2019-04-25 09:13:11',totalTime: '2019-04-25 09:13:11',opration:'编辑',realSite:'广东省广州市新塘大街',realTime:'2019-04-25 09:13:11',time:'2019-04-25 09:13:11',isException: '正常',exceptionStaus: '正常'},
  { id:'4',carNumber: '粤A88888',startRun: '2019-04-25 09:13:11',entRun: '2019-04-26 09:13:11',runTIme: '2019-04-25 09:13:11',mileage:'20',site:'广东省广州市新塘大街',stopTime:'2019-04-25 09:13:11',position: '广东省广州市新塘大街',startTime: '2019-04-25 09:13:11',entTime: '2019-04-26 09:13:11',unit: '2019-04-25 09:13:11',totalTime: '2019-04-25 09:13:11',opration:'编辑',realSite:'广东省广州市新塘大街',realTime:'2019-04-25 09:13:11',time:'2019-04-25 09:13:11',isException: '正常',exceptionStaus: '正常'},
];

const data = [
  {id: 1, name: '测试'}
];

Mock.mock(/\/temporary\/outline/, 'get', () => {
  return outLine;
})
Mock.mock(/\/temporary\/positioncheck/, 'get', () => {
  return positionCheck;
})
Mock.mock(/\/temporary\/refuelanalyze/, 'get', () => {
  return refuelAnalyze;
})
Mock.mock(/\/temporary\/police/, 'get', () => {
  return police;
})
Mock.mock(/\/temporary\/timeout/, 'get', () => {
  return timeOut;
})
Mock.mock(/\/temporary\/taskhository/, 'get', () => {
  return taskHository;
})
Mock.mock(/\/temporary\/run/, 'get', () => {
  return run;
})
Mock.mock(/\/temporary\/runcarhository/, 'get', () => {
  return runCarHository;
})

// 统一消息提示
export function msg(result, msg){
    let data = {};
    data.message = msg;
    data.result = result;
    return data;
}