import Cookies from 'js-cookie'
import store from '@/store'

/**
 * 权限
 * @param {*} key
 */
export function hasPermission (key) {
  return window.SITE_CONFIG['permissions'].indexOf(key) !== -1 || false
}

/**
 * 清除登录信息
 */
export function clearLoginInfo () {
  store.commit('resetStore')
  Cookies.remove('token')
  window.SITE_CONFIG['dynamicMenuRoutesHasAdded'] = false
}

/**
 * 获取uuid
 */
export function getUUID () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
  })
}

/**
 * 获取svg图标(id)列表
 */
export function getIconList () {
  var res = []
  document.querySelectorAll('svg symbol').forEach(item => {
    res.push(item.id)
  })
  return res
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate (data, id = 'id', pid = 'pid') {
  var res = []
  var temp = {}
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i]
  }
  for (var k = 0; k < data.length; k++) {
    if (!temp[data[k][pid]] || data[k][id] === data[k][pid]) {
      res.push(data[k])
      continue
    }
    if (!temp[data[k][pid]]['children']) {
      temp[data[k][pid]]['children'] = []
    }
    temp[data[k][pid]]['children'].push(data[k])
    data[k]['_level'] = (temp[data[k][pid]]._level || 0) + 1
  }
  return res
}

export function timeFormat (time) {
  if (!time) {
    return '0分'
  }
  var h = parseInt(time / 3600)
  var m = time % 3600 % 60
  var strH = h === 0 ? '' : (h + '小时')
  var strM = m === 0 ? '' : (m + '分')
  return strH + strM
}
