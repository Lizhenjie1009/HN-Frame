// 生成数据列表
var dataList = [
  {
    'menuId': 1,
    'parentId': 0,
    'parentName': null,
    'name': '系统管理',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 2,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '管理员列表',
    'url': 'sys/user',
    'perms': null,
    'type': 1,
    'icon': 'admin',
    'orderNum': 1,
    'open': null,
    'list': null
  },
  {
    'menuId': 3,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '角色管理',
    'url': 'sys/role',
    'perms': null,
    'type': 1,
    'icon': 'role',
    'orderNum': 2,
    'open': null,
    'list': null
  },
  {
    'menuId': 4,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '菜单管理',
    'url': 'sys/menu',
    'perms': null,
    'type': 1,
    'icon': 'menu',
    'orderNum': 3,
    'open': null,
    'list': null
  },
  {
    'menuId': 5,
    'parentId': 1,
    'parentName': '系统管理',
    'name': 'SQL监控',
    'url': 'http://localhost:8080/druid/sql.html',
    'perms': null,
    'type': 1,
    'icon': 'sql',
    'orderNum': 4,
    'open': null,
    'list': null
  },
  {
    'menuId': 6,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '定时任务',
    'url': 'job/schedule',
    'perms': null,
    'type': 1,
    'icon': 'job',
    'orderNum': 5,
    'open': null,
    'list': null
  },
  {
    'menuId': 7,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '查看',
    'url': null,
    'perms': 'sys:schedule:list,sys:schedule:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 8,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '新增',
    'url': null,
    'perms': 'sys:schedule:save',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 9,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '修改',
    'url': null,
    'perms': 'sys:schedule:update',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 10,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '删除',
    'url': null,
    'perms': 'sys:schedule:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 11,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '暂停',
    'url': null,
    'perms': 'sys:schedule:pause',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 12,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '恢复',
    'url': null,
    'perms': 'sys:schedule:resume',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 13,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '立即执行',
    'url': null,
    'perms': 'sys:schedule:run',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 14,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '日志列表',
    'url': null,
    'perms': 'sys:schedule:log',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 15,
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '查看',
    'url': null,
    'perms': 'sys:user:list,sys:user:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 16,
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '新增',
    'url': null,
    'perms': 'sys:user:save,sys:role:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 17,
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '修改',
    'url': null,
    'perms': 'sys:user:update,sys:role:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 18,
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '删除',
    'url': null,
    'perms': 'sys:user:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 19,
    'parentId': 3,
    'parentName': '角色管理',
    'name': '查看',
    'url': null,
    'perms': 'sys:role:list,sys:role:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 20,
    'parentId': 3,
    'parentName': '角色管理',
    'name': '新增',
    'url': null,
    'perms': 'sys:role:save,sys:menu:list',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 21,
    'parentId': 3,
    'parentName': '角色管理',
    'name': '修改',
    'url': null,
    'perms': 'sys:role:update,sys:menu:list',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 22,
    'parentId': 3,
    'parentName': '角色管理',
    'name': '删除',
    'url': null,
    'perms': 'sys:role:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 23,
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '查看',
    'url': null,
    'perms': 'sys:menu:list,sys:menu:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 24,
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '新增',
    'url': null,
    'perms': 'sys:menu:save,sys:menu:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 25,
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '修改',
    'url': null,
    'perms': 'sys:menu:update,sys:menu:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 26,
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '删除',
    'url': null,
    'perms': 'sys:menu:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 27,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '参数管理',
    'url': 'sys/config',
    'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
    'type': 1,
    'icon': 'config',
    'orderNum': 6,
    'open': null,
    'list': null
  },
  {
    'menuId': 29,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '系统日志',
    'url': 'sys/log',
    'perms': 'sys:log:list',
    'type': 1,
    'icon': 'log',
    'orderNum': 7,
    'open': null,
    'list': null
  },
  {
    'menuId': 30,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '文件上传',
    'url': 'oss/oss',
    'perms': 'sys:oss:all',
    'type': 1,
    'icon': 'oss',
    'orderNum': 6,
    'open': null,
    'list': null
  }
]
var navDataList = [
  {
    'menuId': 1,
    'parentId': 0,
    'parentName': null,
    'name': '系统管理',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': [
      {
        'menuId': 2,
        'parentId': 1,
        'parentName': null,
        'name': '管理员列表',
        'url': 'sys/user',
        'perms': null,
        'type': 1,
        'icon': 'admin',
        'orderNum': 1,
        'open': null,
        'list': null
      },
      {
        'menuId': 3,
        'parentId': 1,
        'parentName': null,
        'name': '角色管理',
        'url': 'sys/role',
        'perms': null,
        'type': 1,
        'icon': 'role',
        'orderNum': 2,
        'open': null,
        'list': null
      },
      {
        'menuId': 4,
        'parentId': 1,
        'parentName': null,
        'name': '菜单管理',
        'url': 'sys/menu',
        'perms': null,
        'type': 1,
        'icon': 'menu',
        'orderNum': 3,
        'open': null,
        'list': null
      },
      {
        'menuId': 5,
        'parentId': 1,
        'parentName': null,
        'name': 'SQL监控',
        'url': 'http://localhost:8080/druid/sql.html',
        'perms': null,
        'type': 1,
        'icon': 'sql',
        'orderNum': 4,
        'open': null,
        'list': null
      },
      {
        'menuId': 6,
        'parentId': 1,
        'parentName': null,
        'name': '定时任务',
        'url': 'job/schedule',
        'perms': null,
        'type': 1,
        'icon': 'job',
        'orderNum': 5,
        'open': null,
        'list': null
      },
      {
        'menuId': 27,
        'parentId': 1,
        'parentName': null,
        'name': '参数管理',
        'url': 'sys/config',
        'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
        'type': 1,
        'icon': 'config',
        'orderNum': 6,
        'open': null,
        'list': null
      },
      {
        'menuId': 30,
        'parentId': 1,
        'parentName': null,
        'name': '文件上传',
        'url': 'oss/oss',
        'perms': 'sys:oss:all',
        'type': 1,
        'icon': 'oss',
        'orderNum': 6,
        'open': null,
        'list': null
      },
      {
        'menuId': 29,
        'parentId': 1,
        'parentName': null,
        'name': '系统日志',
        'url': 'sys/log',
        'perms': 'sys:log:list',
        'type': 1,
        'icon': 'log',
        'orderNum': 7,
        'open': null,
        'list': null
      }
    ]
  }
]
// var navDataList2 = [
//   {
//     'id': 1,
//     'parentId': 0, // 父ID，根ID是0
//     'name': '项目', // 菜单名
//     'ename': 'project-index', // 和路径相同，不要斜杠
//     'path': '', // 页面路径 '/功能块名/页面名' 例子：/jiankong/shouye  后台录入
//     'componentPath': '', // 文件路径，后台录入各子系统页面的文件路径，
//     'noMenu': true // 如果该菜单只是有用，但是不出现在菜单中，就添加这个属性
//   }
// ]
var navDataList3 = [
  {
    'id': 1,
    'parentId': 0,
    'name': '监测预警',
    'ename': 'jcyj',
    'path': '',
    'componentPath': '',
    'children': []
  },
  {
    'id': 11,
    'parentId': 1,
    'name': '监测预警',
    'ename': 'jcyjindex',
    'path': 'jcyjindex',
    'componentPath': 'business/home/home',
    'children': []
  }
]
var navDataList4 = [
  {
    'uuid': '1',
    'parentUUID': 0,
    'name': '监测预警',
    'ename': 'jcyj',
    'path': 'jcyjindex1',
    'componentPath': 'business/home/home',
    'children': []
  },
  {
    'uuid': '11',
    'parentUUID': '1',
    'name': '监测预警',
    'ename': 'jcyjindex',
    'path': 'jcyjindex2',
    'componentPath': 'business/home/home',
    'children': []
  },
  {
    'uuid': '111',
    'parentUUID': '11',
    'name': 'xiao监测预警',
    'ename': 'jcyjindex',
    'path': 'jcyjindex3',
    'componentPath': 'business/home/home',
    'children': []
  },
  {
    'uuid': '1111',
    'parentUUID': '111',
    'name': 'xiaoxiao监测预警',
    'ename': 'jcyjindex132',
    'path': 'jcyjindex4',
    'componentPath': 'business/home/home',
    'children': []
  },
  {
    'uuid': '2',
    'parentUUID': 0,
    'name': '列表',
    'ename': 'lanmu2',
    'path': 'lanmu2',
    'componentPath': 'modules/demo/listDemo/list-demo',
    'children': []
  },
  {
    'uuid': '21',
    'parentUUID': '2',
    'name': '列表2',
    'ename': 'lanmu22',
    'path': 'lanmu22',
    'componentPath': 'modules/demo/listDemo/list-demo',
    'children': []
  },
  {
    'uuid': '3',
    'parentUUID': 0,
    'name': '表单',
    'ename': 'biaodan1',
    'path': 'biaodan1',
    'componentPath': 'modules/demo/all-form-type',
    'children': []
  },
  {
    'uuid': '31',
    'parentUUID': '3',
    'name': '表单2',
    'ename': 'biaodan2',
    'path': 'biaodan2',
    'componentPath': 'modules/demo/all-form-type',
    'children': []
  },
  {
    'uuid': '4',
    'parentUUID': 0,
    'name': '网址嵌套',
    'ename': 'webaddress',
    'path': 'webaddress',
    'url': 'http://localhost:8003',
    // 'componentPath': 'modules/demo/all-form-type',
    'children': []
  }
]

// 获取导航菜单列表 / 权限
export function nav () {
  return {
    // isOpen: false,
    url: '/sys/menu/nav',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'data': navDataList3
    }
  }
}

// 获取菜单列表
export function list () {
  return {
    // isOpen: false,
    url: '/sys/menu/list',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'list': navDataList4
    }
  }
}

// 获取上级菜单
export function select () {
  let dataList = JSON.parse(JSON.stringify(navDataList))
  dataList = dataList.concat(dataList[0].list)
  return {
    // isOpen: false,
    url: '/sys/menu/select',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menuList': dataList
    }
  }
}

// 获取菜单信息
export function info () {
  return {
    // isOpen: false,
    url: '/sys/menu/info',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menu': dataList[0]
    }
  }
}

// 添加菜单
export function add () {
  return {
    // isOpen: false,
    url: '/sys/menu/save',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 修改菜单
export function update () {
  return {
    // isOpen: false,
    url: '/sys/menu/update',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 删除菜单
export function del () {
  return {
    // isOpen: false,
    url: '/sys/menu/delete',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}
