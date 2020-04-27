export function getDataItem(name, type) {
  let data = {
    'Search' : `[{
      "isDelete" : false,
      "components" : [],
      "library" : [
        {
          "name": "c-search",
          "space":"24",
          "data" : {
            "fields" : [
              {"fieldName" : "cardType"}
            ],
            "enterButton" : true,
            "title" : "",
            "width" : "200"
          }
        },
        {
          "name": "c-search",
          "space":"24",
          "data" : {
            "fields" : [
              {"fieldName" : "cardType"}
            ],
            "enterButton" : false,
            "title" : "",
            "width" : "200"
          }
        }
      ]
    }]`,
    //FormElement
    'FormElement' : `[{
        "isDelete" : false,
        "components": [],
        "library": [
           { 
              "name": "c-input",
              "space":"12",
              "data": {
                  "item": {
                      "label": "车牌号",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "attr": {
                      "placeholder": "请输入值"
                  },
                   "bind": {
                        "fieldName": "input",
                        "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                    }
              }
          },  { 
              "name": "c-carNo",
              "space":"12",
              "data": {
                  "item": {
                      "label": "车牌号",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "attr": {
                      "placeholder": "请输入车牌号！"
                  },
                  "bind": {
                      "fieldName": "carNo",
                      "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          },
          { 
              "name": "c-organ",
              "space":"12",
              "data": {
                  "item": {
                      "label": "所属项目",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "attr": {
                      
                  },
                   "bind": {
                        "fieldName": "organId",
                        "rules": { "rules": [{ "required": true, "message": "请选择机构!" }] }
                    }
              }
            }, 
          { 
              "name": "CRadio",
              "space":"12",
              "data": {
                  "item": {
                      "label": "单选按钮",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "attr": {
                      "placeholder": "请输入值"
                  },
                   "options": [
                      {
                          "key": "1",
                          "value": "A项目"
                      },
                      {
                          "key": "2",
                          "value": "B项目"
                      }
                  ],
                  "bind": {
                       "moren":"1",
                      "fieldName": "radio-group",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }],"initialValue": "1" }
                  }
              }
          },{ 
              "name": "CRadioInput",
              "space":"12",
              "data": {
                  "item": {
                      "label": "加油方式",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "attr": {
                      "placeholder": "请输入值"
                  },
                   "options": [
                      {
                          "key": "油卡",
                          "value": "油卡",
                          "fieldName": "a-input",
                          "rules": { "rules": [{ "required": true, "message": "请输入值!" }],"initialValue": "油卡" }
                      },
                      {
                          "key": "现金",
                          "value": "现金",
                          "fieldName": "a-input",
                          "rules": { "rules": [{ "required": true, "message": "请输入值!" }],"initialValue": "现金" }
                      }
                  ],
                  "bind": {
                      "fieldNameNO": "cradNumber",
                      "fieldName": "a-input",
                       "rulesNO": { "rules": [{ "required": true, "message": "请选择输入卡号或加油编号!" }] },
                       "rules":{"rules": [{ "required": true, "message": "请选择输入卡号或加油编号!" }],"initialValue": "油卡" }
                      
                  }
              }
          },{ 
              "name": "CIconText",
              "space":"12",
              "data": {
                  "item": {
                      "label": "aaaaaaaaa",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                     
                  },
                  "attr": {
                      "label": "年限",
                      "text":"备注",
                      "placeholder": "请输入值"
                  },
                  "bind": {
                      "minNumber":"1",
                      "maxNumber":"10",
                      "fieldName": "input",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          },{ 
              "name": "CInputNumber",
              "space":"12",
              "data": {
                  "item": {
                      "label": "年限",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                     
                  },
                  "attr": {
                      "label": "年限",
                      "text":"备注",
                      "placeholder": "请输入值"
                  },
                  "bind": {
                      "minNumber":"1",
                      "maxNumber":"10",
                      "fieldName": "input",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          },{ 
              "name": "c-carNumber",
              "space":"12",
              "data": {
                  "item": {
                      "label": "车牌号码",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "attr": {
                      "placeholder": "请输入值"
                  },
                  "bind": {
                      "value": "",
                      "fieldName": "carNumber",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          },{
              "name": "c-select",
              "space":"12",
              "data": {
                  "item": {
                      "label": "车辆品牌",
                       "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "attr": {
                      "placeholder": "请选择值"
                  },
                  "bind": {
                      "fieldName": "select",
                      "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  },
                  "options": [
                  {"key": "jack", "value": "Jack"},
                  {"key": "lucy", "value": "Lucy"}
                  ]
              }
          }, { 
              "name": "c-enclosure",
              "space":"12",
              "data": {
                  "item": {
                      "label": "下载附件",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "attr": {
                      "text": "点击下载"
                  },
                  "bind": {
                      "fieldName": "enclosure",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          }, { 
              "name": "c-download",
              "space":"12",
              "data": {
                  "item": {
                      "label": "下载附件",
                     "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "attr": {
                  
                  },
                  "context": {
                      "text": "点击下载"
                  },
                  "bind": {
                      "fieldName": "download",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          },
          {
              "name": "c-date",
              "space":"12",
              "data": {
                  "attr": {
                      
                  },
                  "item": {
                      "label": "日期时间",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "bind": {
                      "fieldName": "date",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          },{
              "name": "CDatePicker",
              "space":"12",
              "data": {
                  "attr": {
                      "placeholder" : "Select month"
                  },
                  "item": {
                      "label": "月份选择",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "bind": {
                      "fieldName": "datePicker",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!!" }] }
                  }
              }
          },
          {
              "name": "c-check",
              "space":"12",
              "data": {
                  "attr": {
                      
                  },
                  "item": {
                      "label": "车型",
                     "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "options": [
                      {
                          "key": "1",
                          "value": "大型车"
                      },
                      {
                          "key": "2",
                          "value": "小型车"
                      }
                  ],
                  "bind": {
                      "moren":"1",
                      "fieldName": "check",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          },
          {
              "name": "c-switch",
              "space":"12",
              "data": {
                  "attr": {
                      
                  },
                  "item": {
                      "label": "报警",
                       "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "bind": {
                      "fieldName": "switch",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          },
          
          {
              "name": "c-upload",
              "space":"12",
              "data": {
                  "attr": {
                     "icon" : "upload",
                     "shape" : "square"
                  },
                  "item": {
                      "label": "上传车身照",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "bind": {
                      "fieldName": "upload",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          },{
              "name": "CUploadWork",
              "space":"12",
              "data": {
                  "attr": {
                      
                  },
                  "item": {
                      "label": "上传",
                       "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "bind": {
                      "fieldName": "uploadWork",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  },
                  "context" : {
                      "title": "单击或拖动文件到此区域以上载",
                      "desc": "支持单次或批量上传"
                  }
              }
          },{
              "name": "CUploadProject",
              "space":"12",
              "data": {
                  "attr": {
                      
                  },
                  "item": {
                      "label": "上传",
                       "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "bind": {
                      "fieldName": "uploadWork",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  },
                  "context" : {
                      "title": "单击或拖动文件到此区域以上载",
                      "desc": "支持单次或批量上传"
                  }
              }
          },{
              "name": "c-textarea",
              "space":"12",
              "data": {
                  "attr": {
                       "placeholder": "请输入值"
                  },
                  "item": {
                      "label": "备注",
                     "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "bind": {
                      "fieldName": "check",
                      "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          }, { 
              "name": "CInputSelect",
              "space":"12",
              "data": {
                  "item": {
                      "label": "加油方式",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                     
                  },
                  "attr": {
                      "placeholder": "请输入值"
                  },
                  "bind": {
                      "fieldName": "input",
                      "cradType": "cradType",
                      "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          } ,{ 
              "name": "CDateInterval",
              "space":"12",
              "data": {
                  "item": {
                      "label": "日期区间",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                     
                  },
                  "attr": {
                      "placeholder": "请输入值"
                  },
                  "bind": {
                      "fieldName": "range-picker",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          },{ 
              "name": "CTimeSelect",
              "space":"12",
              "data": {
                  "item": {
                      "label": "时间选择",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                     
                  },
                  "attr": {
                      "placeholder": "请输入值"
                  },
                  "bind": {
                      "fieldName": "time-picker",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          },{ 
              "name": "CCity",
              "space":"12",
               "data": {
                  "item": {
                      "label": "城市",
                       "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                  },
                  "attr": {
                      "placeholder": "请选择"
                  },
                  "bind": {
                      "fieldName": "select",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  },
                  "options": [
                  {"key": "广州", "value": "广州"},
                  {"key": "上海", "value": "上海"}
                  ]
              }
          },{ 
              "name": "CLifeDayMonth",
              "space":"12",
              "data": {
                  "item": {
                      "label": "",
                      "labelCol": { "span" : "6" },
                      "wrapperCol": {"span": "14"}
                     
                  },
                  "attr": {
                      "placeholder": "请输入值"
                  },
                  "bind": {
                   "select" : "right",
                      "fieldName": "input",
                       "rules": { "rules": [{ "required": true, "message": "请输入值!" }] }
                  }
              }
          }
          
          
         
         
          
         
      ]
    }]`,
     // 加油
    'OilCar': `[{
          "titleOne":"卡余额",
          "titleTwo" : "75,000",
          "titlea":"总金额",
          "titleaa" : "25,000",
          "titleb":"充值支出",
          "titlebb" : "75,000",
          "titlec":"现金支出",
          "titlecc" : "25,000"
    }]`,
    'Select': `[{
          "titleOne":"25,000",
          "titleTwo" : "总金额",
           "select" : "1"
    }]`,
    'Ring': `[{
            "colorList" : ["#78AEF9", "#93BFFA"],
          "colorOne" : "#78AEF9",
           "colorTwo" : "#93BFFA",
          "titleTwo" : "总金额",
           "numberOne" : "油卡总数",
           "numberTwo" : "可用油卡",
           "numberThree" : "借出数量"
    }]`,
    'OilPrice': `[{
          "color": "red",
          "numberOne":"29",
          "numberTwo" : "#",
           "numberThree" : "08.88",
            "select" : "1"
    }]`,
      'NewlyAdded': `[{
          "colorOne" : "#7588E4",
          "colorTwo" : "#FF850B",
          "colorThree" : "#28C995",
          "colorFour": "#7776FF",
          
          "legendDate" : ["油卡加油","现金加油","加油量"],
          "numberOne":"29",
          "numberTwo" : "#",
           "numberThree" : "08.88",
            "select" : "#"
    }]`,
    'Curve': `[{
          "colorOne" : "#7588E4",
          "colorTwo" : "#FF850B",
          "colorThree" : "#28C995",
          "day" : ["11-11","11-12","11-13","11-14","11-15","11-16","11-17"],
          "number" :["1200", "1400", "1008", "1411","1000", "1118", "1322"],
          "value" : ["1200", "1400", "808", "811", "626", "488","1600"],      
               
      "legendDate" : ["今日","昨日"],
          "numberOne":"29",
          "numberTwo" : "#",
           "numberThree" : "08.88",
            "select" : "#"
    }]`,
    'CurveWork': `[{
          "colorOne" : "#7588E4",
          "colorTwo" : "#FF850B",
          "colorThree" : "#28C995",
          "day" : ["11-11","11-12","11-13","11-14","11-15","11-16","11-17"],
          "number" :["1200", "1400", "1008", "1411","1000", "1118", "1322"],
          "legendDate" : ["今日"],
          "numberOne":"29",
          "numberTwo" : "#",
           "numberThree" : "08.88",
            "select" : "#"
    }]`,
    'CurveOne': `[{
          "colorOne" : "#7588E4",
          "colorTwo" : "#FF850B",
          "colorThree" : "#28C995",
          "day" : ["11-11","11-12","11-13","11-14","11-15","11-16","11-17"],
          "number" :["1200", "1400", "1008", "1411","1000", "1118", "1322"],
          "value" : ["1200", "1400", "808", "811", "626", "488","1600"],      
          "legendDate" : ["今日","昨日"],
          "numberOne":"29",
          "numberTwo" : "#",
           "numberThree" : "08.88",
            "select" : "#"
    }]`,
    'Navigation': `[{
    }]`,
    'Public': `[{
          "title":"我是标题"
    }]`,
    'DatePicker': `[{
          "select":"1",
          "text":"文本",
          "texta":"日",
          "textb":"月",
           "DateOne":"1",
           "DateTwo":"1",
          "button":"1"
    }]`,
    'Blank': `[{
          "list" : [],
         "isButtonDelete" :false,
         "select" : "1",
         "buttons" : [
        {
         "title" : "按钮",
         "bind"  : {
           "type"  : "default",
           "icon"  : "default",
           "size"  : "default",
           "shape" : ""
         },
         "type"  : "default",
         "icon"  : "default",
         "size"  : "default",
         "shape" : "",
         "modalDetail" : {
            "title" : "车牌登记",
            "okText" : "确认",
            "cancelText" : "取消"
         },
         "modal" : [{
            "name" : "Form",
            "data" : [{"ifDelete":false,"gutter":"16","library":[{"title":"车牌号码:","name":"a-input","space":"12","property":{"placeholder":"请输入","childrens":[{}]}},{"title":"车辆所属:","name":"a-input","space":"12","property":{"placeholder":"请输入内容"}},{"title":"期限时间:","name":"a-select","space":"12","property":{"placeholder":"请选择","childrens":[{"name":"a-select-option","title":"1个月","value":"1"},{"name":"a-select-option","value":"2","title":"2个月"},{"name":"a-select-option","value":"3","title":"3个月"}]}},{"title":"预计完成:","name":"a-date-picker","space":"12","property":{"placeholder":"请选择日期"}},{"title":"审批人:","name":"a-input","space":"12","property":{"placeholder":"请输入内容"}},{"title":"抄送人:","name":"a-input","space":"12","property":{"placeholder":"请输入内容"}}],"components":[{"title":"输入框","name":"a-input","space":"24","property":{"placeholder":"请输入内容"}},{"title":"选择框","name":"a-select","space":"24","property":{"placeholder":"请选择","childrens":[{"name":"a-select-option","title":"1个月","value":"1"},{"name":"a-select-option","value":"2","title":"2个月"},{"name":"a-select-option","value":"3","title":"3个月"}]}},{"title":"日期框","name":"a-date-picker","space":"24","property":{"placeholder":"请选择日期"}},{"title":"日期框","name":"a-range-picker","space":"24","property":{}},{"title":"输入框","name":"a-textarea","space":"24","property":{"placeholder":"请输入内容"}}]},{"space":24},{"gutterKey":0,"current":0}]
         }]
        }
      ],
      "shapes" : [{
          "title" : "方形",
          "shape" : ""
        },
        {
          "title" : "圆形",
          "shape" : "circle"
        }
      ],
      "sizes" : [
        {
          "title" : "默认",
          "size" : "default"
        },
        {
          "title" : "小",
          "size" : "small"
        },{
          "title" : "大",
          "size" : "large"
        }
      ],
      "buttonsStyle":[
        {
          "title" : "默认",
          "type" : "default"
         },
         {
          "title" : "蓝色",
          "type" : "primary"
         },
         {
          "title" : "危险",
          "type" : "danger"
         },
         {
          "title" : "虚线",
          "type" : "dashed"
         },
         {
          "title" : "链接",
          "type" : "link"
         }
      ],
      "icons":[
         {"icon":"plus-square"},{"icon":"plus-circle"},{"icon":"setting"},{"icon":"diff"},{"icon":"swap"},
         {"icon":"minus"},{"icon":"check"},{"icon":"copy"},{"icon":"form"},{"icon":"edit"},{"icon":"plus"}
      ]
     }]`,
    'OilPriceBlock': `[{
          "selecta":"广州",
          "selectb":"上海",
          "selectc":"杭州",
          "topa":"今日油价",
          "topb":"购买油卡",
          "topc":"充值油卡",
          
          
            "numberOnea":"29",
            "numberTwoa" : "#",
           "numberThreea" : "08.88",
           "numberOneb":"29",
           "numberTwob" : "#",
           "numberThreeb" : "08.88",
           "numberOnec":"29",
            "numberTwoc" : "#",
           "numberThreec" : "08.88",
           "numberOned":"29",
           "numberTwod" : "#",
           "numberThreed" : "08.88",
            "select" : "1"
    }]`,
    //tabs
    'ButtonTwo': `[{
      "isButtonDelete" :false,
       "select" : "right",
       "buttons" : [
        {
         "title" : "按钮",
         "bind"  : {
           "type"  : "default",
           "icon"  : "default",
           "size"  : "default",
           "shape" : ""
         },
         "type"  : "default",
         "icon"  : "default",
         "size"  : "default",
         "shape" : "",
         "modalDetail" : {
            "title" : "车牌登记",
            "okText" : "确认",
            "cancelText" : "取消"
         },
         "modal" : [{
            "name" : "Form",
            "data" : [{"ifDelete":false,"gutter":"16","library":[{"title":"车牌号码:","name":"a-input","space":"12","property":{"placeholder":"请输入","childrens":[{}]}},{"title":"车辆所属:","name":"a-input","space":"12","property":{"placeholder":"请输入内容"}},{"title":"期限时间:","name":"a-select","space":"12","property":{"placeholder":"请选择","childrens":[{"name":"a-select-option","title":"1个月","value":"1"},{"name":"a-select-option","value":"2","title":"2个月"},{"name":"a-select-option","value":"3","title":"3个月"}]}},{"title":"预计完成:","name":"a-date-picker","space":"12","property":{"placeholder":"请选择日期"}},{"title":"审批人:","name":"a-input","space":"12","property":{"placeholder":"请输入内容"}},{"title":"抄送人:","name":"a-input","space":"12","property":{"placeholder":"请输入内容"}}],"components":[{"title":"输入框","name":"a-input","space":"24","property":{"placeholder":"请输入内容"}},{"title":"选择框","name":"a-select","space":"24","property":{"placeholder":"请选择","childrens":[{"name":"a-select-option","title":"1个月","value":"1"},{"name":"a-select-option","value":"2","title":"2个月"},{"name":"a-select-option","value":"3","title":"3个月"}]}},{"title":"日期框","name":"a-date-picker","space":"24","property":{"placeholder":"请选择日期"}},{"title":"日期框","name":"a-range-picker","space":"24","property":{}},{"title":"输入框","name":"a-textarea","space":"24","property":{"placeholder":"请输入内容"}}]},{"space":24},{"gutterKey":0,"current":0}]
         }]
        }
      ],
      "shapes" : [{
          "title" : "方形",
          "shape" : ""
        },
        {
          "title" : "圆形",
          "shape" : "circle"
        }
      ],
      "sizes" : [
        {
          "title" : "默认",
          "size" : "default"
        },
        {
          "title" : "小",
          "size" : "small"
        },{
          "title" : "大",
          "size" : "large"
        }
      ],
      "buttonsStyle":[
        {
          "title" : "默认",
          "type" : "default"
         },
         {
          "title" : "蓝色",
          "type" : "primary"
         },
         {
          "title" : "危险",
          "type" : "danger"
         },
         {
          "title" : "虚线",
          "type" : "dashed"
         },
         {
          "title" : "链接",
          "type" : "link"
         }
      ],
      "icons":[
         {"icon":"plus-square"},{"icon":"plus-circle"},{"icon":"setting"},{"icon":"diff"},{"icon":"swap"},
         {"icon":"minus"},{"icon":"check"},{"icon":"copy"},{"icon":"form"},{"icon":"edit"},{"icon":"plus"}
      ]
     }]`,

    //tabs
    'DiversifTabs': `[{
      "isDelete" :false,
      "isButtonDelete" :false,
      "tabs" : [
        {"title" : "标签页"},
        {"title" : "标签页"},
        {"title" : "标签页"}
      ],
      "buttons" : [
        {
         "title" : "按钮",
         "type"  : "",
         "icon"  : "",
         "size"  : "",
         "shape" : "",
         "modalDetail" : {
            "title" : "车牌登记",
            "okText" : "确认",
            "cancelText" : "取消"
         },
         "modal" : [{
            "name" : "Form",
            "data" : [{"ifDelete":false,"gutter":"16","library":[{"title":"车牌号码:","name":"a-input","space":"12","property":{"placeholder":"请输入","childrens":[{}]}},{"title":"车辆所属:","name":"a-input","space":"12","property":{"placeholder":"请输入内容"}},{"title":"期限时间:","name":"a-select","space":"12","property":{"placeholder":"请选择","childrens":[{"name":"a-select-option","title":"1个月","value":"1"},{"name":"a-select-option","value":"2","title":"2个月"},{"name":"a-select-option","value":"3","title":"3个月"}]}},{"title":"预计完成:","name":"a-date-picker","space":"12","property":{"placeholder":"请选择日期"}},{"title":"审批人:","name":"a-input","space":"12","property":{"placeholder":"请输入内容"}},{"title":"抄送人:","name":"a-input","space":"12","property":{"placeholder":"请输入内容"}}],"components":[{"title":"输入框","name":"a-input","space":"24","property":{"placeholder":"请输入内容"}},{"title":"选择框","name":"a-select","space":"24","property":{"placeholder":"请选择","childrens":[{"name":"a-select-option","title":"1个月","value":"1"},{"name":"a-select-option","value":"2","title":"2个月"},{"name":"a-select-option","value":"3","title":"3个月"}]}},{"title":"日期框","name":"a-date-picker","space":"24","property":{"placeholder":"请选择日期"}},{"title":"日期框","name":"a-range-picker","space":"24","property":{}},{"title":"输入框","name":"a-textarea","space":"24","property":{"placeholder":"请输入内容"}}]},{"space":24},{"gutterKey":0,"current":0}]
         }]
        }
      ],
      "shapes" : [
        {"title" : "方形","shape" : ""},
        {"title" : "圆形","shape" : "circle"}
      ],
      "sizes" : [
        {"title" : "默认","size" : "default"},
        {"title" : "小","size" : "small"},
        {"title" : "大","size" : "large"}
      ],
      "buttonsStyle":[
        {"title" : "默认","type" : "default"},
        {"title" : "蓝色","type" : "primary"},
        {"title" : "危险","type" : "danger"},
        {"title" : "虚线","type" : "dashed"},
        {"title" : "链接","type" : "link"}
      ],
      "icons":[
         {"icon":"plus-square"},{"icon":"plus-circle"},{"icon":"setting"},{"icon":"diff"},{"icon":"swap"},
         {"icon":"minus"},{"icon":"check"},{"icon":"copy"},{"icon":"form"},{"icon":"edit"},{"icon":"plus"}
      ],
      "list" : [
        [],[],[]
      ]
    }]`,
    //车审
    'ViolationSonOne': `[{
    "title" : "违章查询金额",
    "button" : "充值",
    "visible" : "visible",
    "content" : {
      "sign" : "￥",
      "price" : "768,00"
      
     },
    "foot" : {
      "price" : "￥1208.00",
      "desc" : "本月已支出",
      "priceTwo" : "￥1628.00",
      "descTwo" : "上月支出"
     }
    }]`,

    'ViolationSonTwo': `[{
      "percent" : "30",
      "ifPercent" : "1",
     "desc" : "事故数",
     "title" : "事故数",
      "content" :{
        
        "content" : "已处理",
        "sign" : "%",
        "value" : "399"
      },
      "data" : [
        { "year": "2001", "population" : 41.8 },
        { "year": "2002", "population" : 38 },
        { "year": "2003", "population" : 33.7 },
        { "year": "2004", "population" : 30.7},
        { "year": "2005", "population" : 25.8 },
        { "year": "2006", "population" : 31.7 },
        { "year": "2007", "population" : 33 },
        { "year": "2008", "population" : 46 },
        { "year": "2009", "population" : 38.3 },
        { "year": "2010", "population" : 28 },
        { "year": "2011", "population" : 42.5 },
        { "year": "2012", "population" : 30.3 }
      ]
    }]`,
    'ViolationSonThree': `[{
      "one" : "逾期未审",
      "two" : "468",
      "percent" : "35"
    }]`,

    //保险
    'InsuranceSonThree': `[{
        "imgs" : [
          {"img":"http://www.zgjiuan.cn/file/cheta/8c0e1ef5f96a47789afe1d4037b5a12d.png"},
          {"img":"http://www.zgjiuan.cn/file/cheta/8c0e1ef5f96a47789afe1d4037b5a12d.png"},
          {"img":"http://www.zgjiuan.cn/file/cheta/8c0e1ef5f96a47789afe1d4037b5a12d.png"},
          {"img":"http://www.zgjiuan.cn/file/cheta/8c0e1ef5f96a47789afe1d4037b5a12d.png"}
        ]
    }]`,
    //保养
    'MaintenanceSonFive': `[{
        "topTwo" : "未投保统计",
        "two" : {
          "per":"10000",
          "format" : "75",
          "num" : "2000",
          "desc" : "逾期未续保",
          "numTwo" : "2500",
          "descTwo" : "未登记"
        }
    }]`,

    "MaintenanceTop": `[{
      "numberOne":"5,6800",
      "numberTwo":"即将到期"
    }]`,
    "MaintenanceSonSix": `[{
      "numberOne":"5,6800",
      "numberTwo":"即将到期"
    }]`,
    'MaintenanceTableThree': `[{
      "ifTime" : "1",
       "timeOne" : "近一周",
       "timeTwo" : "近一月",
       "timeThree" : "近一年",
      "titleOne" : "年审提醒",
      "titleTwo":"625",
      "titleThree" : "在保车辆数"
    }]`,
    'MaintenanceSonOne': `[{
       
      
        "top" : "保养指数",
        "content" : {
          "ifLeft" : "1",
          "ifRight" : "1",
          "color" : "#000000",
          "per":"100",
          "format" : "78",
          "width" : "186",
          "date" : "2019-09-06",
          "start" : "0",
          "content" : "保养指数",
          "end" : "100"
        },
        "footer" : {
          "title" : "保养指数一般，建议及时进入保养", 
          "desc" : "需要添加保养的车辆增多，请及时添加保养", 
          "look" : "立即计划"
        }
    }]`,
    'MaintenanceSonTwo': `[{
       "date" : "2019-10-01",
       "url" : "http://www.zgjiuan.cn/file/cheta/69ea7fef13d74efab7b05f38ca1e78c0.png",
       "one" : "625",
       "two" : "在保车辆数",
       "ifDate" : "1"
    }]`,
    'MaintenanceSonThree': `[{
         "left" : {
            "one" : "已逾期134",
            "oneLine" : "45",
            "two" : "本周内36",
            "twoLine" : "20",
            "three" : "本月内166",
            "threeLine" : "50"
         },
         "right" : {
            "title" : "339",
            "value" : "推荐保养车辆"
         }
    }]`,
    'MaintenanceSonFour': `[{
    
    }]`,

    // Card
    'Card': `[{
      "mark": "临时牌车辆数",
      "markOne": "上牌中：",
      "markTwo": "未登记上牌：",
      "numberOne": "6000",
      "numberTwo": "4000"
      }]`,
    // CardOne
    'CardOne': `[{
      "title": "自编号：自编号",
      "title1": "车牌号：",
      "text1": "粤Ace11",
      "title2": "状态：",
      "text2": "",
      "title3": "车辆类型：",
      "text3": "全气动干式吸尘车",
      "title4": "车架号：",
      "text4": "车架号",
       "title5": "发动机号：",
      "text5": "发动机号",
      "title6": "所属：",
      "text6": "车塔车联网服务公司"
      
      }]`,

    // ListModifiable
    'ListModif': `[{
       "isFlow": false,
       "columnsUrl" : "" ,
       "dataUrl" : "" ,
       "flowId" : "" ,
       "flowName" : "" ,
       "actionType" : "1" ,
       "statusType" : "1",
       "join" : "加入计划" ,
       "delay" : "延迟保养" ,
       "detail" : "详情" ,
       "urge": "催办",
       "materials": "材料",
       "close": "结案",
       "edit": "编辑",
       "renewal": "续保",
       "addCoverage": "增加险种",
       "columns" : [{
                "title": "序号",
                "dataIndex": "num",
                "key": "num",
                "align": "center"
            },
            {
                "title": "车牌号",
                "dataIndex": "carId",
                "key": "carId",
                "align": "center",
                "scopedSlots": {
                    "customRender": "carId"
                },
                "filedKey": "carId"
            },
            {
                "title": "加油人",
                "dataIndex": "user",
                "key": "user",
                "align": "center",
                "scopedSlots": {
                    "customRender": "user"
                },
                "filedKey": "user"
            },
            {
                "title": "油品",
                "dataIndex": "oils",
                "key": "oils",
                "align": "center",
                "scopedSlots": {
                    "customRender": "oils"
                },
                "filedKey": "oils"
            },
            {
                "title": "数量（L)",
                "dataIndex": "count",
                "key": "count",
                "align": "center",
                "scopedSlots": {
                    "customRender": "count"
                },
                "filedKey": "count"
            },
            {
                "title": "金额",
                "dataIndex": "money",
                "key": "money",
                "align": "center",
                "scopedSlots": {
                    "customRender": "money"
                },
                "filedKey": "money"
            },
            {
                "title": "加油站",
                "dataIndex": "gasStation",
                "key": "gasStation",
                "align": "center",
                "scopedSlots": {
                    "customRender": "gasStation"
                },
                "filedKey": "gasStation"
            },
            {
                "title": "加油时间",
                "dataIndex": "refuelTime",
                "key": "refuelTime",
                "align": "center",
                "scopedSlots": {
                    "customRender": "refuelTime"
                },
                "filedKey": "refuelTime"
            },
            {
                "title": "状态",
                "dataIndex": "status",
                "key": "status",
                "align": "center",
                "scopedSlots": {
                    "customRender": "status"
                },
                "filedKey": "status"
            },
            {
                "title": "操作",
                "dataIndex": "action",
                "key": "action",
                "align": "center",
                "scopedSlots": {
                    "customRender": "action"
                },
                "filedKey": "action"
            }],
       "data" : [
          {
            "num": 1,
            "companyCode":"粤ADU1456",
            "carId":"粤ADU145",
            "cardid":"10011440023761352",
            "user":"刘翔翔",
            "oils":"0号普通柴油",
            "count":"108.42",
            "money":"4000",
            "gasStation":"中石化加油站",
            "refuelTime":"2019-02-09  15:30:00",
            "penalty":"￥3500.00",
            "handle":"审批",
            "currentHandle":"加入安排",
            "status":"审核中"
          },{
            "num": 2,
            "companyCode":"粤ADU145",
            "carId":"粤ADU145",
            "cardid":"10011440023761352",
            "user":"刘翔翔",
            "oils":"0号普通柴油",
            "count":"108.42",
            "money":"4000",
            "gasStation":"中石化加油站",
            "refuelTime":"2019-02-09  15:30:00",
            "penalty":"￥1000.00",
            "handle":"",
            "currentHandle":"登记更新",
            "status":"待审核"
          },{
            "num": 3,
            "companyCode":"粤ADU145",
            "carId":"粤ADU145",
            "cardid":"10011440023761352",
            "user":"刘翔翔",
            "oils":"0号普通柴油",
            "count":"108.42",
            "money":"4000",
            "gasStation":"中石化加油站",
            "refuelTime":"2019-02-09  15:30:00",
            "penalty":"￥4000.00",
            "handle":"填单",
            "currentHandle":"加入安排",
            "status":"审核通过"
          },{
            "num": 4,
            "companyCode":"粤ADU145",
            "carId":"粤ADU145",
            "cardid":"10011440023761352",
            "user":"刘翔翔",
            "oils":"0号普通柴油",
            "count":"108.42",
            "money":"4000",
            "gasStation":"中石化加油站",
            "refuelTime":"2019-02-09  15:30:00",
            "penalty":"￥2000.00",
            "handle":"填单",
            "currentHandle":"登记更新",
            "status":"审核驳回"
          },{
            "num": 5,
            "companyCode":"粤ADU145",
            "carId":"粤ADU145",
            "cardid":"10011440023761352",
            "user":"刘翔翔",
            "oils":"0号普通柴油",
            "count":"108.42",
            "money":"4000",
            "gasStation":"中石化加油站",
            "refuelTime":"2019-02-09  15:30:00",
            "penalty":"￥2000.00",
            "handle":"填单",
            "currentHandle":"登记更新",
            "status":"审核驳回"
          },{
            "num": 6,
            "companyCode":"粤ADU145",
            "carId":"粤ADU145",
            "cardid":"10011440023761352",
            "user":"刘翔翔",
            "oils":"0号普通柴油",
            "count":"108.42",
            "money":"4000",
            "gasStation":"中石化加油站",
            "refuelTime":"2019-02-09  15:30:00",
            "penalty":"￥1000.00",
            "handle":"",
            "currentHandle":"登记更新",
            "status":"待审核"
          },{
            "num": 7,
            "companyCode":"粤ADU145",
            "carId":"粤ADU145",
            "cardid":"10011440023761352",
            "user":"刘翔翔",
            "oils":"0号普通柴油",
            "count":"108.42",
            "money":"4000",
            "gasStation":"中石化加油站",
            "refuelTime":"2019-02-09  15:30:00",
            "penalty":"￥4000.00",
            "handle":"填单",
            "currentHandle":"加入安排",
            "status":"审核通过"
          }
       ],
        "flow": {},
        "elements": [],
        "library": [
          {
              "name": "c-button",
              "data": {
                 
              }
          },
          {
              "name": "c-dropdown",
              "data": {
                 
              }
          },
          {
              "name": "c-href",
              "data": {
      
              }
          },
          {
              "name": "c-span",
              "data": {
                 
              }
          },
          {
              "name": "c-vertical",
              "data": {
                  
              }
          }
        ]
    }]`,

    // List
    'List': `[{
       "detail" : "详情" , 
       "columns" : [
         {
            "title": "序号",
            "dataIndex": "num",
            "key": 1,
            "scopedSlots": {},
            "align": "center",
            "sorter": false
        },
        {
            "title": "平台代号",
            "dataIndex": "companyCode",
            "key": 2,
            "scopedSlots": {},
            "align": "center",
            "sorter": false
        },
        {
            "title": "车牌号",
            "dataIndex": "carId",
            "key": 3,
            "scopedSlots": {},
            "align": "center",
            "sorter": false
        },
        {
            "title": "自编号",
            "dataIndex": "sinceNumber",
            "key": 4,
            "scopedSlots": {},
            "align": "center",
            "sorter": false
        },
        {
            "title": "车辆类型",
            "dataIndex": "cartype",
            "key": 5,
            "scopedSlots": {},
            "align": "center",
            "sorter": false
        },
        {
            "title": "购买日期",
            "dataIndex": "buyTime",
            "key": 6,
            "scopedSlots": {},
            "align": "center",
            "sorter": false
        },
        {
            "title": "状态",
            "dataIndex": "status",
            "key": 7,
            "scopedSlots": {},
            "align": "center",
            "sorter": false
        }],
       "data" : [{
            "num":"1",
            "companyCode":"粤ADU1456",
            "carId":"粤ADU145",
            "sinceNumber":"粤ADU145",
            "cartype":"cartype",
            "buyTime":"buyTime",
            "status":"审核中"
        },{
            "num":"2",
            "companyCode":"粤ADU145",
            "carId":"粤ADU145",
            "sinceNumber":"粤ADU145",
            "cartype":"cartype",
            "buyTime":"buyTime",
            "status":"审核中"
        },{
            "num":"3",
            "companyCode":"粤ADU145",
            "carId":"粤ADU145",
            "sinceNumber":"粤ADU145",
            "cartype":"cartype",
            "buyTime":"buyTime",
            "status":"审核中"
        },{
            "num":"4",
            "companyCode":"粤ADU145",
            "carId":"粤ADU145",
            "sinceNumber":"粤ADU145",
            "cartype":"cartype",
            "buyTime":"buyTime",
            "status":"审核完成"
       }],
       "flow" : {}
    }]`,
    // ListOne
    'ListRepair': `[{
      "title": "基本信息"
      }]`,
    'ListOne': `[{
      "title": "基本信息",
      "title1": "车牌号  ：",
      "registrationNO": "粤A-8888",
       "title2": "品牌车型：",
      "brandType": "五菱牌L2W6446JY",
       "title3": "车辆类型：",
      "carType": "洒水车",
       "title4": "车架号  ：",
      "chassisNumber": "LZWADA309340",
       "title5": "发动机号：",
      "engineNumber": "LGAXHE30931452",
      
       "title6": "购车价格：",
       "buyVehiclePrice": "120.88万",
        "title7": "税费总计：",
        "buyVehicleRevenue": "10.2万",
       "title8": "供应商  ：",
        "supplier": "粤峰高新",
       "title9": "购买日期：",
        "buyDate": "2012-03-06(7年2月年龄)",
       "title10": "车辆归属：",
        "vehicleOwnerShip": "",
      
       "title11": "状  态  ：",
       "state": "维修",
        "title12": "所属项目：",
        "projectOwner": "天河环卫作业",
       "title13": "保险险种：",
        "insurance": "交强险、商业险",
      
       "title14": "招牌信息：",
        "details": "详细>>",
        "driver": "司  机  ：",
        "title15": "主驾驶-",
         "mainDriver": "张三",
        "mainte1": "13888088808",
         "detailed1": "[详情]",
        "title16": "副驾驶-",
       "colDriver": "李四",
       "title17": "详细信息",
        "mainte2": "13888088808",
         "detailed2": "[详情]"
      }]`,
    'ListTwo': `[{
      "title": "入网安全",
      "title1": "入网时间：",
      "setupDate": "6000",
      "title2": "服务期限：",
      "setupDateEnd": "6000",
      "title3": "  服务费：",
      "serviceCharge": "临时牌车辆数",
      "title4": "围栏限定：",
      "fenceLimits": "临时牌车辆数",
      "title5": "非作业速度限定：",
      "NonOperationalSpeedLimit": "6000",
      "title6": "作业速度限定 ：",
      "operationSpeedLimit": "6000"
    }]`,
    'ifShow': `{
     
    }`,
    'ButtonOne': `[{
     "ifRadioOne": "1",
     "ifRadioTwo": "1",
     "ifRadioThree": "1",
     "ifRadioFour": "1",
       "ifOne": "1",
       "ifTwo": "2",
       "ifThree": "2",
       "ifFour": "2",
      "title11": "车牌号 ：",
      "title12": "车牌号 ：",
      "title13": "日期 ：",
      "title14": "日期 ：",
      "title15": "日期 ：",
      "title16": "日期 ：",
      "title17": "下拉框 ：",
      "title18": "下拉框 ：",
      "dateOne": "2019-05-19",
      "titleTemp": "DDD",
      "title3": "DDD",
      "title4": "AAA",
      "title5": "BBB",
      "title6": "CCC",
      "title7": "EEE",
      "title8": "FFF",
      "title9": "GGG"
    }]`,
    'ViolationSonFour': `[{
      "color" : ["#F5222D", "#FAAD14"],
      "colorOne" : ["#F5222D","#F5222D"],
     "titleOne": "在修车辆",
     "titleTwo": "在修列表",
     "titleThree": "786",
     "titleFour": "在线修车辆增多，请关注维修进度！",
     "bgcolor":"red",
     
     "data" :  [{
        "year": "1700",
        "exports": "300",
        "imports": "0"
      }, {
        "year": "1710",
        "exports": "600",
        "imports": "0"
      }, {
      
        "year": "1720",
        "exports": "560",
        "imports": "0"
      }, {
        "year": "1730",
        "exports": "650",
        "imports": "0"
      }, {
        "year": "1740",
        "exports": "550",
        "imports": "0"
      }, {
        "year": "1750",
        "exports": "780",
        "imports": "0"
      }, {
        "year": "1760",
        "exports": "670",
        "imports": "0"
      }, {
        "year": "1770",
        "exports": "580",
        "imports": "0"
      }, {
        "year": "1780",
        "exports": "620",
        "imports": "0"
      }, {
        "year": "1790",
        "exports": "650",
        "imports": "0"
      }, {
        "year": "1800",
        "exports": "420",
        "imports": "0"
      }, {
        "year": "1810",
        "exports": "520",
        "imports": "0"
      }, {
        "year": "1820",
        "exports": "400",
        "imports": "0"
      }], 
       "scale" : [{
          "dataKey":"value",
          "min": "0",
          "max": "1000"
        },{
          "dataKey":"range",
          "min": "0",
         " max": "1000"
        }]
    }]`,
    'ListThree': `[{
      "styleColor":{
      "font-size":"16px",
      "font-family":"Microsoft YaHei",
      "font-weight":"bold",
      "color":"rgba(51,51,51,1)"
      },
     "titleOne": "维修项目/配件排名",
     "titleTwo": "在修列表",
     "titleThree": "786",
     "titleFour": "请关注维修进度！",
     "data" : [
        {
          "key": "1",
          "ranking": "1",
          "name": "更换发动机",
          "address": "168"
        }, {
          "key": "2",
          "ranking": "2",
          "name": "拆装发动机总成",
          "address": "141"
        }, {
          "key": "3",
          "ranking":" 3",
          "name": "更换变速箱",
          "address": "28"
        }, {
         "key": "4",
            "ranking":" 4",
            "name": "发动机大修",
            "address": "82"
        }, {
          "key": "5",
            "ranking": "5",
            "name": "大梁校正",
            "address": "54"
        }, {
          "key": "6",
          "ranking": "6",
          "name": "全车钣金",
          "address": "67"
        }, {
          "key": "7",
          "ranking": "7",
          "name": "维修变速箱",
          "address": "82"
        }, {
          "key": "8",
          "ranking": "8",
          "name": "更换发动机",
          "address": "26"
        }, {
          "key": "9",
          "ranking": "9",
          "name": "拆装发动机总成",
          "address": "24"
        }, {
          "key": "10",
          "ranking": "10",
          "name": "更换变速箱",
          "address": "19"
        }
     ],
     
     "columns" : [
        {
          "title": "排名",
          "dataIndex": "ranking",
          "scopedSlots": { 
          "customRender": "ranking" 
          }
        },{
          "title": "维修项目/配件排名",
          "dataIndex": "name"
        }, {
          "title": "总次数",
          "dataIndex": "address"
        }
     ]
    }]`,
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