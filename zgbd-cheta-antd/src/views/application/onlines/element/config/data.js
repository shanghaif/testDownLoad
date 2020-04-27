export function getDataItem(name, type) {
  let data = {

    //tableA
    'TableA': `[{
       "columns" : [{
                "title": "平台代号",
                "dataIndex": "companyCode",
                "key": "companyCode"
            },
            {
                "title": "车牌号",
                "dataIndex": "carId",
                "key": "carId"
            },
            {
                "title": "自编号",
                "dataIndex": "sinceNumber",
                "key": "sinceNumber"
            },
            {
                "title": "车辆类型",
                "dataIndex": "cartype",
                "key": "cartype"
            },
            {
                "title": "购买日期",
                "dataIndex": "buyTime",
                "key": "buyTime"
            },
            {
                "title": "状态",
                "dataIndex": "status",
                "key": "status",
                "scopedSlots": {
                    "customRender": "status"
                },
                "filedKey": "status"
            }],
       "data" : [{
                "companyCode":"粤ADU1456",
                "carId":"粤ADU145",
                "sinceNumber":"粤ADU145",
                "cartype":"cartype",
                "buyTime":"buyTime"
            },{
                "companyCode":"粤ADU145",
                "carId":"粤ADU145",
                "sinceNumber":"粤ADU145",
                "cartype":"cartype",
                "buyTime":"buyTime"
            },{
                "companyCode":"粤ADU145",
                "carId":"粤ADU145",
                "sinceNumber":"粤ADU145",
                "cartype":"cartype",
                "buyTime":"buyTime"
            },{
                "companyCode":"粤ADU145",
                "carId":"粤ADU145",
                "sinceNumber":"粤ADU145",
                "cartype":"cartype",
                "buyTime":"buyTime"
       }],
       "flow" : {
  
          }
}]`,
    'ComponentA': `[{
      "top": {
        "chartTitle": "总销售额",
        "total": "￥136,560"
      },
      "content": {
        "type": "trend",
        "props": [{
          "flag": "up",
          "term": "销售额",
          "text": "12%"
        },{
          "flag": "down",
          "term": "日同比",
          "text": "11%"
        }]
      },
      "footer": "日均销售额 ￥ 234.56"
    },
    {
      "top": {
        "chartTitle": "访问量",
        "total": "8,846"
      },
      "content": {
        "type": "mini-area"
      },
      "footer": "日访问量 1,234"
    },
    {
      "top": {
        "chartTitle": "支付笔数",
        "total": "6560"
      },
      "content": {
        "type": "mini-bar"
      },
      "footer": "转化率 60%"
    },
    {
      "top": {
        "chartTitle": "运营活动效果",
        "total": "78%"
      },
      "content": {
        "type": "mini-progress",
        "props": {
          "target": 80,
          "percentage": 78
        }
      },
      "footer": "同周比 12%"
    }
  ]
    `
  }
  let json = data[name];
  if (type === 'json') {
    return json;
  }
  if (json) {
    return JSON.parse(json)
  }
  return '';
}