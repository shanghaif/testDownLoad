import { getAction, postAction, base64Upload} from '@/api/manage'
import message from 'ant-design-vue/es/message'
import html2canvas from 'html2canvas'

const api = {
  initTag: "/application/material/Tabs/getData",
  getComponentList: "/application/online/component/getComponentList",
  getComponentsById: "application/online/component/getComponentsById",
  getComponentById: "application/online/component/getComponentById",
  deleteComponent: "/application/online/component/delete",
  insertUpdateList: "application/online/component/insertUpdateList",
  clone: "/application/online/component/clone",
}

// 组件api
//显示提示框
export function showSubmitModel (projectId) {return showSubmitModal(projectId)}

//获取组件列表
export function getComponentList (param) {return getAction(api.getComponentList, param)}
//获取组件 通过projectId
export function getComponentsById (param) {return getAction(api.getComponentsById, param)}
//获取组件 通过id
export function getComponentById (param) {return getAction(api.getComponentById, param)}
//克隆组件
export function clone (param) { return msg(postAction(api.clone, param), '克隆成功！')}
//初始化标签
export function initTag (param) {return getAction(api.initTag, param)}

// 保存 canvas
export function savecanvas(clazz) {
  let canvas = document.querySelector(clazz);
  return html2canvas(canvas, {scale: 2, logging: false, useCORS: true}).then(function (canvas) {
    let type = 'png';
    let imgData = canvas.toDataURL(type);
    // 照片格式处理
    let _fixType = function (type) {
      type = type.toLowerCase().replace(/jpg/i, 'jpeg');
      let r = type.match(/png|jpeg|bmp|gif/)[0];
      return 'image/' + r;
    };
    imgData = imgData.replace(_fixType(type), 'image/octet-stream');
    var b64 = imgData.substring(31);
    return base64Upload(b64)
  });
}
export function showSubmitModal(projectId){
  return getAction('application/online/component/getComponentsById', {projectId: projectId,}).then(res => {
    var data = {};
    if(res.success){
      res.result.forEach(item => {
          let modal = [{name: item.name,data: JSON.parse(item.data)}];
          let modalDetail = {title: "操作", okText : "确认", cancelText : "取消" }
          data = {modal,modalDetail};
      })
      data.index = 0;
      data.success = true;
      return data;
    }else{
      data.success = false;
      return data;
    }
  });
}


// 统一消息提示
function msg(action, msg){
  return action.then(res => {
    if (res.success) {
      message.success(msg)
    } else {
      message.error(res.message)
    }
    return res;
  })
}