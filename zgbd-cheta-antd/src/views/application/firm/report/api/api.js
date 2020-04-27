import { getAction, postAction, base64Upload } from '@/api/manage'
import { getPermissionList } from '@/api/api'
import message from 'ant-design-vue/es/message'
import html2canvas from 'html2canvas'

const api = {
  reportSystemEdit: '/application/firm/report/systemUpdate',
  reportSystemData: '/application/firm/report/getSystemData',
  reportColumns: '/application/firm/report/getColumns',
  reportOnlineEdit: '/application/firm/report/onlineUpdate',
  reportOnlineData: '/application/firm/report/getOnlineData',
}

// 系统报表
export function reportSystemEdit (param) { return msg(postAction(api.reportSystemEdit, param), '保存成功！')}
export function reportSystemData (param) { return getAction(api.reportSystemData, param);}
export function reportColumns (param) { return getAction(api.reportColumns, param);}

// 在线报表
export function reportOnlineEdit (param) { return msg(postAction(api.reportOnlineEdit, param), '保存成功！')}
export function reportOnlineData (param) { return getAction(api.reportOnlineData, param);}


// 获取权限
export function permissionList () {
  return getPermissionList().then(res => {
    return initChildren(res.result);
  })
}

// 初始化子机构
function initChildren (menus) {
  var array = [];
  menus.forEach(menu => {
    if (menu.status === 'Y') {
      if (menu.children) {
        menu.children = initChildren(menu.children);
      }
      array.push(menu);
    }
  })
  return array;
}


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