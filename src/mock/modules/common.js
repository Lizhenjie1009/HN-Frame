import Mock from 'mockjs'

// 登录
// export function login () {
//   return {
//     // isOpen: false,
//     url: '/login',
//     type: 'post',
//     data: {
//       'msg': 'success',
//       'code': 0,
//       'expire': Mock.Random.natural(60 * 60 * 1, 60 * 60 * 12),
//       'data': {
//         'token': Mock.Random.string('abcdefghijklmnopqrstuvwxyz0123456789', 32)
//       }
//     }
//   }
// }
// 登录
export function login () {
  return {
    // isOpen: false,
    url: '/login',
    type: 'post',
    data: {
      'msg': '登录成功',
      'code': 0,
      'sessionToken': '5d9c68c6c50ed3d02a2fcf54f63993b6'
    }
  }
}

// 退出
export function logout () {
  return {
    // isOpen: false,
    url: '/sys/logout',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}
