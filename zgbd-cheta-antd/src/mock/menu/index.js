import Mock from 'mockjs';

let hwSearch = JSON.parse(localStorage.getItem('hwSearch'));

var tpl = {
  "id": "2ae6dabfb2a84a70ac3495ec1da6389a",
  "parentId": "",
  "name": "车塔AI",
  "url": "/AI",
  "component": "application/home/workplace/Index",
  "alwaysShow": true,
  "icon": "area-chart",
  "isLeaf": 1,
  "group": "企业服务",
  "key": "2ae6dabfb2a84a70ac3495ec1da6389a",
  "children": [],
  "meta": {
    "icon": "area-chart",
    "title": "车塔AI"
  },
  "path": "/AI",
  "componentId": "b8c85c0814e84e7b9e2d108e1167bdae",
  "componentName": "通用二级菜单",
}

var childrenTpl = {
  "createTime": "2019-11-12 09:35:04.0",
  "createBy": null,
  "updateTime": "2019-11-12 10:14:45.0",
  "updateBy": null,
  "id": "744b2db2bf8d4bb7aa0407cbd6f32801",
  "parentId": "2ae6dabfb2a84a70ac3495ec1da6389a",
  "name": "企业大脑",
  "url": "/AI/Reminder",
  "component": "layouts/IframePageView",
  "skipUrl": null,
  "redirect": null,
  "menuType": 1,
  "perms": null,
  "sortNo": 0,
  "alwaysShow": true,
  "icon": "",
  "isLeaf": 1,
  "hidden": false,
  "description": null,
  "delFlag": 0,
  "group": "企业服务",
  "key": "744b2db2bf8d4bb7aa0407cbd6f32801",
  "children": [],
  "meta": {
    "icon": "",
    "title": "企业大脑"
  },
  "path": "/AI/Reminder",
  "componentId": "e586dee11e8b441ca9a4c1a77bdd5943",
  "componentName": null,
  "projectImg": null,
  "status": "Y",
  "menuHidden": false
}

var menus = [{
    name:'大数据BI',
    id: 'hadoop',
    icon: 'radar-chart',
    children: [
      {name: 'BI', id: 'hadoop_BI', url: '//hwproject/zgbd_hw_project/web/wisdomEnterprise/BI.html'},
      {name: '决策', id: 'hadoop_decision', url: '//hwproject/zgbd_hw_project/web/wisdomEnterprise/IoT.html'},
      {name: '业务', id: 'hadoop_professionalWork', url: '//hwproject/zgbd_hw_project/web/wisdomEnterprise/professionalWork.html'},
      {name: '成本', id: 'hadoop_cost', url: '//hwproject/zgbd_hw_project/web/wisdomEnterprise/cost.html'},
      {name: '服务', id: 'hadoop_service', url: '//hwproject/zgbd_hw_project/web/wisdomEnterprise/service.html'},
      {name: '预警', id: 'hadoop_earlyWarning', url: '//hwproject/zgbd_hw_project/web/wisdomEnterprise/earlyWarning.html'},
      {name: '车辆', id: 'hadoop_car', url: '//hwproject/zgbd_hw_project/web/wisdomEnterprise/car.html'},
      {name: '人员', id: 'hadoop_personnel', url: '//hwproject/zgbd_hw_project/web/wisdomEnterprise/personnel.html'},
    ]
  },
  {
    name:'行政管理',
    id: 'administrativeManagement',
    icon: 'reconciliation',
    children: [
      {
        name: '企业管理',
        id: 'administrativeManagement_company',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '公告新闻', id: 'announcementNews', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '组织架构', id: 'organizationStructure', url: '//hwproject/zgbd_hw_project/web/system/organList.jsp' + hwSearch},
          {name: '会议通知', id: 'meetingNotice', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
      {
        name: '行政管理',
        id: 'administrativeManagement_administrative',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '物品领用', id: 'itemsRecipients', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '用车申请', id: 'applicationVehicle', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
      {
        name: '工作汇报',
        id: 'work_report',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '工作汇报', id: 'workReport', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
      {
        name: '合同管理',
        id: 'contractManagement',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '合同管理', id: 'contract', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
    ]
  },
  {
    name:'人事管理',
    id: 'personnelManagement',
    icon: 'solution',
    children: [
      {
        name: '人事管理',
        id: 'personnelManagement_personnel',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '职务管理', id: 'job', url: '//hwproject/zgbd_hw_project/web/positionmanagement/position.html' + hwSearch},
          {name: '人员管理', id: 'people', url: '//hwproject/zgbd_hw/web/everesource/personal.html' + hwSearch},
          {name: '人才招聘', id: 'talentRecruitment', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
      {
        name: '考勤管理',
        id: 'personnelManagement_attendance',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '加班管理', id: 'overtime', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '请假管理', id: 'askForLeave', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '出差管理', id: 'businessTrip', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '外出管理', id: 'goOutside', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '支援管理', id: 'support', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '考勤统计', id: 'attendanceStatistics', url: '//hwproject/zgbd_hw/web/signIn/attendance.html' + hwSearch},
        ]
      },
      {
        name: '外勤管理',
        id: 'personnelManagement_legwork',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '外勤定位设置', id: 'positioningSet', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '外勤定位监控', id: 'positioningMonitoring', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '外勤轨迹回放', id: 'trajectoryPlayback', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '外勤在线统计', id: 'onlineStatistics', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
      {
        name: '企业培训',
        id: 'enterpriseTraining',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '项目经理培训', id: 'projectManager', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '驾驶安全学习', id: 'drivingSafety', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '职业技能培训', id: 'vocationalSkills', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
    ]
  },
  {
    name:'市场管理',
    id: 'marketManagement',
    icon: 'pie-chart',
    children: [
      {
        name: '客户管理',
        id: 'marketManagement_client',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '客户资料管理', id: 'dataManagement', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '客户拜访记录', id: 'visitRecord', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
      {
        name: '外勤管理',
        id: 'marketManagement_legwork',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '外勤定位设置 ', id: 'marketManagement_positioningSet', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '外勤定位监控 ', id: 'marketManagement_positioningMonitoring', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '外勤轨迹回放 ', id: 'marketManagement_trajectoryPlayback', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '外勤在线统计 ', id: 'marketManagement_onlineStatistics', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      }
    ]
  },
  {
    name:'项目管理',
    id: 'projectManagement',
    icon: 'apartment',
    children: [
      {
        name: '项目管理',
        id: 'projectManagement_project',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '项目资料', id: 'projectData', url: '//hwproject/zgbd_hw/web/project/project.html' + hwSearch},
          {name: '网格化管理', id: 'gridManagement', url: '//hwproject/zgbd_hw/web/work/hwwork.html' + hwSearch},
          {name: '路线管理', id: 'lineManagement', url: '//hwproject/zgbd_hw/web/work/hwwork.html' + hwSearch},
          {name: '资源管理', id: 'resourceManagement', url: '//hwproject/zgbd_hw/web/everesource/evesource.html' + hwSearch},
        ]
      },
      {
        name: '排班管理',
        id: 'projectManagement_scheduling',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '分组管理', id: 'groupingManagement', url: '//hwproject/zgbd_hw/web/project/project.html' + hwSearch},
          {name: '车辆排班', id: 'vehicleScheduling', url: '//hwproject/zgbd_hw/web/work/hwwork.html' + hwSearch},
          {name: '人员排班', id: 'personnelScheduling', url: '//hwproject/zgbd_hw/web/work/hwwork.html' + hwSearch},
        ]
      },
      {
        name: '车辆管理',
        id: 'projectManagement_car',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '作业进度管理', id: 'scheduleManagement_car', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '运力空闲管理', id: 'spareCapacityManagement', url: '//hwproject/zgbd_voc/jsps/webReport/generalReport.html' + hwSearch},
          {name: '异常管理', id: 'abnormalManagement', url: '//hwproject/zgbd_voc/jsps/webReport/vehiclethreeoff.html' + hwSearch},
          {name: '行车分析', id: 'trafficAnalysis', url: '//hwproject/zgbd_voc/jsps/webReport/runReport.html' + hwSearch},
          {name: '停车分析', id: 'parkingAnalysis', url: '//hwproject/zgbd_voc/jsps/webReport/runReport.html' + hwSearch},
          {name: '水耗分析', id: 'waterConsumptionAnalysis', url: '//hwproject/zgbd_voc/jsps/webReport/waterReport.html' + hwSearch},
          {name: '未按时停车', id: 'FailureToStopOnTime', url: '//hwproject/zgbd_voc/jsps/vehicle/reporttimetostop.jsp' + hwSearch},
          {name: '报警分析', id: 'alarmAnalysis', url: '//hwproject/zgbd_voc/jsps/webReport/operateReport.html' + hwSearch},
          {name: '里程油耗报表', id: 'oilWearReport', url: '//hwproject/zgbd_voc/jsps/webReport/mileageStatistics.html' + hwSearch},
        ]
      },
      {
        name: '人员管理',
        id: 'projectManagement_personnel',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '作业进度管理 ', id: 'scheduleManagement_personnel', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '周期考勤', id: 'cycleAttendance', url: '//hwproject/zgbd_hw_project/web/personnelManagement/cycleAttendanceStatistics.html' + hwSearch},
          {name: '周期考勤设置', id: 'cycleAttendanceSet', url: '//hwproject/zgbd_hw_project/web/personnelManagement/cycleAttendanceSet.html' + hwSearch},
          {name: '人员考勤统计', id: 'personnelAttendanceStatistics', url: '//hwproject/zgbd_hw/web/signIn/attendance.html' + hwSearch},
        ]
      },
      {
        name: '协同办公',
        id: 'cooperativeOffice',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '作业监察 ', id: 'workSupervision', url: '//hwproject/zgbd_hw/web/business/workSupervision.html' + hwSearch},
          {name: '监察统计分析', id: 'supervisoryStatisticalAnalysis', url: '//hwproject/zgbd_hw_project/web/cooperativeOffice/supervisoryStatisticalAnalysis.html' + hwSearch},
        ]
      },
    ]
  },
  {
    name:'资产管理',
    icon: 'gold',
    id: 'assetsManagement',
    children: [
      {
        name: '台账管理',
        id: 'assetsManagement_standingBook',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '车辆台账', id: 'standingBook_car', url: '//hwproject/zgbd_hw/web/ledger/ledger.html' + hwSearch},
          {name: '非车辆台账', id: 'standingBook_else', url: '//hwproject/zgbd_hw/web/ledger/notvehicle.html' + hwSearch},
        ]
      },
      {
        name: '车务管理',
        id: 'assetsManagement_traffic',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '新车上牌', id: 'carRegistration', url: '//hwproject/zgbd_hw/web/ledger/vehicleregister.html' + hwSearch},
          {name: '车辆投保', id: 'vehicleInsurance', url: '//hwproject/zgbd_hw/web/business/carinsurance.html' + hwSearch},
          {name: '车辆年审', id: 'vehicleAnnualVerification', url: '//hwproject/zgbd_hw/web/annual/verification.html' + hwSearch},
          {name: '车辆违章', id: 'vehiclesRegulations', url: '//hwproject/zgbd_hw/web/assets/peccancy.html' + hwSearch},
          {name: '理赔管理', id: 'claimsManagement', url: '//hwproject/zgbd_hw/web/ledger/vehicleClaims.html' + hwSearch},
          {name: '车辆调度', id: 'vehicleScheduling', url: '//hwproject/zgbd_hw/web/ledger/vehicledispatch.html' + hwSearch},
          {name: '闲置报备', id: 'idleReport', url: '//hwproject/zgbd_hw/web/leave/vehicleunused.html' + hwSearch},
        ]
      },
      {
        name: '油耗管理',
        id: 'assetsManagement_oilWear',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '加油管理', id: 'refuelManagement', url: '//hwproject/zgbd_hw/web/oilfee/oilfee.html' + hwSearch},
          {name: '油位分析', id: 'oilLevelAnalysis', url: '//hwproject/zgbd_hw/web/oilfee/oilfeeanalysis.html' + hwSearch},
          {name: '耗油统计', id: 'oilWearStatistics', url: '//hwproject/zgbd_hw/web/oilfee/statisticalAnalysis.html' + hwSearch},
          {name: '里程油耗报表 ', id: 'oilWearReportForms', url: '//hwproject/zgbd_voc/jsps/webReport/mileageStatistics.html' + hwSearch},
        ]
      },
      {
        name: '维修保养',
        id: 'assetsManagement_maintenance',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '车辆维修管理', id: 'maintenanceManagement_vehicle', url: '//hwproject/zgbd_hw/web/ledger/vehiclerepair.html' + hwSearch},
          {name: '非车辆维修管理', id: 'maintenanceManagement_else', url: '//hwproject/zgbd_hw/web/ledger/assetRepair.html' + hwSearch},
          {name: '车辆保养管理', id: 'vehicleMaintenanceManagement', url: '//hwproject/zgbd_hw/web/ledger/vehicleupkeep.html' + hwSearch},
        ]
      },
      {
        name: '事务提醒',
        id: 'assetsManagement_seRalarms',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '事务提醒', id: 'seRalarms', url: '//hwproject/zgbd_hw/web/tips/trafficWarn.html' + hwSearch},
          {name: '提醒设置', id: 'remindSet', url: '//hwproject/zgbd_hw/web/tips/tips.html' + hwSearch},
        ]
      },
      {
        name: '资产分析',
        id: 'assetsManagement_assetAnalysis',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '车辆安装分析', id: 'vehicleInstallationAnalysis', url: '//hwproject/zgbd_hw/web/ledger/ledger.html' + hwSearch},
          {name: '车辆闲置分析', id: 'idleVehicleAnalysis', url: '//hwproject/zgbd_hw/web/leave/leave.html' + hwSearch},
          {name: '理赔分析 ', id: 'claimsAnalysis', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '维修分析 ', id: 'maintenanceAnalysis', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '保养分析 ', id: 'upkeepAnalysis', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
    ]
  },
  {
    name:'采购管理',
    icon: 'shopping',
    id: 'purchasingManagement',
    children: [
      {
        name: '采购管理',
        id: 'purchasingManagement_purchasing',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '设备类型', id: 'deviceType', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '设备资料', id: 'equipmentInformation', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '设备采购', id: 'equipmentProcurement', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '采购统计', id: 'procurementStatistics', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
      {
        name: '库存管理',
        id: 'purchasingManagement_inventory',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '库存清点 ', id: 'inventoryCheck', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '入库管理 ', id: 'stockManagement', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '出库管理 ', id: 'warehouseManagement', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
      {
        name: '付款管理',
        id: 'purchasingManagement_payment',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '运维报表 ', id: 'OpsReport', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '费用核算 ', id: 'accountingExpenses', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      }
    ]
  },
  {
    name:'财务管理',
    id: 'financialManagement',
    icon: 'account-book',
    children: [
      {
        name: '财务管理',
        id: 'financialManagement_financial',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '项目回款', id: 'projectReceivable', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '运营成本', id: 'operatingCosts', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '人员工资', id: 'salary', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '费用预支', id: 'feesInAdvance', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
      {
        name: '报销管理',
        id: 'financialManagement',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '邮费报销 ', id: 'postageReimburse', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '维修报销 ', id: 'maintenanceReimburse', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      }
    ]
  },
  {
    name:'物联网管理',
    id: 'IoTManagement',
    icon: 'dribbble',
    children: [
      {
        name: '车辆监控',
        id: 'vehicleMonitoring',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '定位监控', id: 'positioningMonitoring_car', url: '//hwproject/zgbd_voc/jsps/vehicle/monitorRealtimevehiclenewMass.jsp' + hwSearch},
          {name: '视频监控', id: 'videoSurveillance_car', url: '//hwproject/zgbd_hw/web/videoobj/videomonitor.html' + hwSearch},
          {name: '轨迹回放', id: 'trackPlayback_car', url: '//hwproject/zgbd_voc/jsps/vehicle/monitorTrackvehiclenew.jsp' + hwSearch},
          {name: '同步轨迹回放', id: 'syncTrackPlayback_car', url: '//hwproject/zgbd_voc/jsps/vehiclenew/monitorTrackvehiclenew.jsp' + hwSearch},
          {name: '视频回放', id: 'videoPlayback_car', url: '//hwproject/zgbd_hw/jsps/monitor/videoTrackvehicle.jsp' + hwSearch},
        ]
      },
      {
        name: '人员监控',
        id: 'personnelMonitoring',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '定位监控 ', id: 'positioningMonitoring_personnel', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '轨迹回放 ', id: 'trackPlayback_personnel', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
      {
        name: '环境监控',
        id: 'environmentMonitoring',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '中转站监控', id: 'transferStationMonitoring', url: '//hwproject/zgbd_hw/web/hk/hk.html' + hwSearch},
          {name: '垃圾桶监控 ', id: 'TrashMonitoring', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '地埋桶监控 ', id: 'buriedBarrelsMonitoring', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '公厕监控 ', id: 'publicToiletMonitoring', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
          {name: '大气监测 ', id: 'ambientMonitoring', url: '//hwproject/zgbd_hw_project/web/tips/developing.html'},
        ]
      },
      {
        name: '预警设置',
        id: 'warningSet',
        url: '//hwproject/zgbd_hw_project/web/tips/developing.html',
        children: [
          {name: '电子围栏设置', id: 'electricFenceSet', url: '//hwproject/zgbd_hw/web/monitorMana/warnsetting.html' + hwSearch},
          {name: '偏离线路设置', id: 'offtrackSet', url: '//hwproject/zgbd_hw/web/monitorMana/warnsetting.html' + hwSearch},
          {name: '超速设置', id: 'overspeedSet', url: '//hwproject/zgbd_hw/web/monitorMana/warnsetting.html' + hwSearch},
        ]
      }

    ]
  }
];



Mock.mock(/\/hwmenu\/getData/, 'get', () => {
  var res = {
    code: 400,
    message: "查询成功！",
    success: true,
    timestamp: "2020-03-14 17:57:43",
    result: []
  };
  menus.forEach((item) => {
    var menu = Object.assign({}, tpl, {
      id: item.id,
      url: item.id,
      key: item.id,
      path: item.id,
      name: item.name,
      meta: {title: item.name, icon: item.icon},
      children: []
    })
    if (item.children) {
      item.children.forEach((inner) => {
        var childrenItem = Object.assign({}, childrenTpl, {
          id: inner.id,
          parentId: item.id,
          url: inner.id,
          key: inner.id,
          path: inner.id,
          name: inner.name,
          meta: {title: inner.name, url: inner.url},
          children: []
        })
        if(inner.children){
          inner.children.forEach((subInner) => {
            console.log(subInner.url)
            var subItem = Object.assign({}, childrenTpl, {
              id: subInner.id,
              parentId: inner.id,
              url: subInner.id,
              key: subInner.id,
              path: subInner.id,
              name: subInner.name,
              meta: {title: subInner.name, url: subInner.url},
              children: []
            })
            childrenItem.children.push(subItem);
          })
        }
        menu.children.push(childrenItem);
      })
    }
    res.result.push(menu);
  })
  return res;
})