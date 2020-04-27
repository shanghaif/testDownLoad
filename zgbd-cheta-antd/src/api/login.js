import api from './index'
import { axios } from '@/utils/request'

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
  return axios({
    url: '/application/auth/login',
    method: 'post',
    data: parameter
  })
}
export function thirdLogin(parameter) {
  return axios({
    url: '/sso/thirdAuthority/login',
    method: 'post',
    data: parameter
  })
}
export function getSmsCaptcha(parameter) {
  return axios({
    url: api.SendSms,
    method: 'post',
    data: parameter
  })
}
export function getInfo() {
  return axios({
    url: '/api/user/info',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function logout(token) {
  return axios({
    url: '/sso/application/logout',
    method: 'post',
    headers: {
      'token': token,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}