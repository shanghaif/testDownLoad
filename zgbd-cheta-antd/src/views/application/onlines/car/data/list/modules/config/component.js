import Draggable from 'vuedraggable';

export default {
  components : {
    //页面展示
    //图形化报表组件
    Curve: (resolve) => require(['@/views/application/onlines/car/component/graph/Curve'], resolve),

    RefuelCardAction: (resolve) => require(['@/views/application/onlines/car/data/list/modules/refuel/CardAction'], resolve),
    RefuelAction: (resolve) => require(['@/views/application/onlines/car/data/list/modules/refuel/Action'], resolve),
    RepairAction: (resolve) => require(['@/views/application/onlines/car/data/list/modules/repair/Action'], resolve),

    Detail: (resolve) => require(['@/views/application/onlines/car/data/list/modules/maintain/Detail'], resolve),
    PlanOperation: (resolve) => require(['@/views/application/onlines/car/data/list/modules/maintain/PlanOperation'], resolve),
    RecommendOperation: (resolve) => require(['@/views/application/onlines/car/data/list/modules/maintain/RecommendOperation'], resolve),
    RegisterOperation: (resolve) => require(['@/views/application/onlines/car/data/list/modules/maintain/RegisterOperation'], resolve),
    RegisterStatus: (resolve) => require(['@/views/application/onlines/car/data/list/modules/maintain/RegisterStatus'], resolve),

    SerialNumber: (resolve) => require(['@/views/application/onlines/car/data/list/modules/SerialNumber'], resolve),
    Speed: (resolve) => require(['@views/application/onlines/car/data/list/modules/postalStatements/Speed'], resolve),
    EndSpeed: (resolve) => require(['@views/application/onlines/car/data/list/modules/postalStatements/EndSpeed'], resolve),
    SpeedList: (resolve) => require(['@views/application/onlines/car/data/list/modules/postalStatements/SpeedList'], resolve),
    ConcatString: (resolve) => require(['@/views/application/onlines/car/data/list/modules/postalStatements/ConcatString'], resolve),

    SecondsToHour: (resolve) => require(['@/views/application/onlines/car/data/list/modules/postalStatements/SecondsToHour'], resolve),

    //轨迹回放
    Replaying: (resolve) => require(['@views/application/onlines/car/data/list/modules/postalStatements/Replaying'], resolve),
    OnCarAction: (resolve) => require(['@/views/application/onlines/car/data/list/modules/postalStatements/OnCarAction'], resolve),
    Draggable: Draggable
  },
  data : [
    { title: '序号 ( 1~10)', component: 'SerialNumber' },
    { title: '数组转字符串( [ ] " -> replace null)', component: 'ConcatString' },
    { title: '秒数转时分秒( 150 -> 2分30秒)', component: 'SecondsToHour' },
    { title: '解析起点纬度(lo,la) or (slo,sla)', component: 'Speed' },
    { title: '解析结束点纬度(elo,ela)', component: 'EndSpeed' },
    { title: '解析纬度数组 (str:lo,la,lo,la...)', component: 'SpeedList' },
    { title: '轨迹回放（carId）', component: 'Replaying' },
    { title: '邮政停车未熄火action', component: 'OnCarAction' },
    { title: '加油操作', component: 'RefuelAction' },
    { title: '加油油卡操作', component: 'RefuelCardAction' },
    { title: '维修操作', component: 'RepairAction' },
    { title: '保养详细', component: 'Detail' },
    { title: '保养计划操作', component: 'PlanOperation' },
    { title: '保养推荐操作', component: 'RecommendOperation' },
    { title: '保养登记操作', component: 'RegisterOperation' },
    { title: '保养登记状态', component: 'RegisterStatus' },
  ]
}