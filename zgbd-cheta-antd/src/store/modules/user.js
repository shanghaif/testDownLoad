import Vue from 'vue'
import { login, thirdLogin, logout } from "@/api/login"
import { ACCESS_TOKEN, USER_NAME,USER_INFO } from "@/store/mutation-types"
import { welcome } from "@/utils/util"
import { queryPermissionsByUser } from '@/api/api'

const user = {
  state: {
    token: '',
    username: '',
    realname: '',
    welcome: '',
    avatar: '',
    permissionList: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { username, realname, welcome }) => {
      state.username = username
      state.realname = realname
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_PERMISSIONLIST: (state, permissionList) => {
      state.permissionList = permissionList
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          if(response.code =='200'){
            const result = response.result
            const userInfo = result.userInfo
            Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_NAME, userInfo.nickName, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
            commit('SET_INFO', userInfo)
            commit('SET_NAME', { username: userInfo.nickName,realname: userInfo.realname, welcome: welcome() })
            commit('SET_AVATAR', userInfo.headImage)
            resolve()
          }else{
            reject(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    thirdLogin({ commit }, thirdUserInfo) {
      console.log("================thirdlogin()===============");
      return new Promise((resolve, reject) => {
        thirdLogin(thirdUserInfo).then(response => {
          if(response.code =='200'){
            const result = response.result
            const userInfo = result.userInfo
            Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_NAME, userInfo.username, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
            commit('SET_INFO', userInfo)
            commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname, welcome: welcome() })
            commit('SET_AVATAR', userInfo.avatar)
            resolve()
          }else{
            reject(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetPermissionList({ commit }) {
      return new Promise((resolve, reject) => {
        let username = Vue.ls.get(USER_NAME);
        let params = {username:username};
        queryPermissionsByUser(params).then(response => {
          const menuData = response.result;
          if (menuData && menuData.length > 0) {
            commit('SET_PERMISSIONLIST', menuData)
          } else {
            reject('getPermissionList: permissions must be a non-null array !')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_PERMISSIONLIST', [])
          Vue.ls.remove(ACCESS_TOKEN)
          resolve()
        }).catch(() => {
          resolve()
        })
      })
    },

    // 设置权限
    SetPermissionList({ commit }, data) {
      commit('SET_PERMISSIONLIST', data)
    },

    // 设置用户信息
    SetInfo({ commit }, data) {
      Vue.ls.set(USER_INFO, data, 7 * 24 * 60 * 60 * 1000)
      commit('SET_INFO', data)
    }

  }
}

export default user