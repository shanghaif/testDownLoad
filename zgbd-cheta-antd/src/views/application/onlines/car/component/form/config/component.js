import Draggable from 'vuedraggable';

export default {
  components : {
    //form组件
    COrgan: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Organ'], resolve),

    CInput: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Input'], resolve),
    CCarNumber: (resolve) => require(['@/views/application/onlines/car/component/form/modules/CarNumber'], resolve),
    CCarNo: (resolve) => require(['@/views/application/onlines/car/component/form/modules/CarNo'], resolve),
    CSelect: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Select'], resolve),
    CUpload: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Upload'], resolve),
    CUploadWork: (resolve) => require(['@/views/application/onlines/car/component/form/modules/UploadWork'], resolve),
    CDate: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Date'], resolve),
    CDatePicker: (resolve) => require(['@/views/application/onlines/car/component/form/modules/DatePicker'], resolve),
    CCheck: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Check'], resolve),
    CSwitch: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Switch'], resolve),

    CFileUpload: (resolve) => require(['@/views/application/onlines/car/component/form/modules/FileUpload'], resolve),
    CDownload: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Download'], resolve),
    CInputSelect: (resolve) => require(['@/views/application/onlines/car/component/form/modules/InputSelect'], resolve),
    CLifeDayMonth: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Select'], resolve),
    CEnclosure: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Enclosure'], resolve),
    CDateInterval: (resolve) => require(['@/views/application/onlines/car/component/form/modules/DateInterval'], resolve),
    CTimeSelect: (resolve) => require(['@/views/application/onlines/car/component/form/modules/TimeSelect'], resolve),
    CUploadProject: (resolve) => require(['@/views/application/onlines/car/component/form/modules/UploadProject'], resolve),
    CInputNumber: (resolve) => require(['@/views/application/onlines/car/component/form/modules/InputNumber'], resolve),
    CTextarea: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Textarea'], resolve),

    CCity: (resolve) => require(['@/views/application/onlines/car/component/form/modules/City'], resolve),
    CIconText: (resolve) => require(['@/views/application/onlines/car/component/form/modules/IconText'], resolve),
    CRadio: (resolve) => require(['@/views/application/onlines/car/component/form/modules/Radio'], resolve),
    CRadioInput: (resolve) => require(['@/views/application/onlines/car/component/form/modules/RadioInput'], resolve),
    Draggable: Draggable
  },
}