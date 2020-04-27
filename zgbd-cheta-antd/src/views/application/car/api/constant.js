export default {
  'TRAVEL': {
    desc: '行驶',
    color: '#1CC09FFF',
    image: 'car_green',
  },
  'CAR_NORMAL': {
    desc: '正常',
    color: '#1CC09FFF',
    image: 'car_green',
  },
  'OFF_LINE': {
    desc: '离线',
    color: '#999999FF',
    image: 'car_grey',
  },
  'DORMANCY': {
    desc: '休眠',
    color: '#999999FF',
    image: 'car_blue',
  },
  'STOP': {
    desc: '停止',
    color: '#FE7617FF',
    image: 'car_orange',
  },
  '':{
    key:'',
    color: '#39c9a9',
    text: '监控中的车辆',
    status:'监控中',
    type:"allSum"
},
  'ASSIGNMENT':{
    key:'ASSIGNMENT',
    color: '#6688FF',
    text: '外派中的车辆',
    status:'外派中',
    type:"assignmentSum",
    image: 'car_green',
},
  'LEAVE':{
    key:'LEAVE',
    color: '#FFA720',
    text: '闲置中的车辆',
    status:'闲置中',
    type:"leaveSum",
    image: 'car_grey',

},
  'UNUSUAL':{
    key:'UNUSUAL',
    color: '#FF7373',
    text: '异常中的车辆',
    status:'异常中',
    type:"unusualSum",
    image: 'car_orange',
},
  'APPLY':{
    key:'APPLY',
    color: '#AFB530',
    text: '待调度的车辆',
    status:'待调度',
    type:"applySum"
  },





}