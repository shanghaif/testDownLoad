import { getAction, postAction,deleteAction } from '@/api/manage'
import message from 'ant-design-vue/es/message'

const api = {
  projectList: '/application/firm/project/getData',
  projectEdit: '/application/firm/project/update',
  projectDetail: '/application/firm/project/getDataById',
  flowList: '/application/firm/project/flow/getData',
  flowEdit: '/application/firm/project/flow/update',
  taskList: '/application/firm/project/task/getData',
  taskUserList: '/application/firm/project/task/getUserData',
  taskDetail: '/application/firm/project/task/getDataById',
  taskEdit: '/application/firm/project/task/update',
  taskItemEdit: '/application/firm/project/task/item/update',
  taskItemDelete: '/application/firm/project/task/item/delete',
  userList: '/application/firm/project/user/getData',
  userDelete: '/application/firm/project/user/delete',
  analysisHours: '/application/firm/project/analysis/monthHours'
}

// 项目
export function projectList () { return getAction(api.projectList)}
export function projectEdit (param) { return postAction(api.projectEdit, param);}
export function projectDetail (param) { return getAction(api.projectDetail, param);}

// 工作流
export function flowList () { return getAction(api.flowList);}
export function flowEdit (param) {return postAction(api.flowEdit, param);}

// 任务
export function taskList (param) { return getAction(api.taskList, param);}
export function taskUserList (param) { return getAction(api.taskUserList, param);}
export const taskEdit = (param) => msg(postAction(api.taskEdit, param), '修改成功！')
export function taskDetail (param) { return getAction(api.taskDetail, param);}

// 工时
export function taskItemEdit (param) { return postAction(api.taskItemEdit, param);}
export function taskItemDelete (param) { return deleteAction(api.taskItemDelete, param);}

// 用户
export function userList (param) { return getAction(api.userList, param);}
export const userDelete = (param) => msg(deleteAction(api.userDelete, param), '移除成功！')

// 分析
export const analysisHours = param => getAction(api.analysisHours, param)


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