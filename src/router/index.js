import Vue from 'vue'
import Router from 'vue-router'
import http from '@/utils/request'
import {isURL} from '@/utils/validate'
import Cookies from 'js-cookie'

Vue.use(Router)

// 页面路由(独立页面)
export const pageRoutes = [
  {
    path: '/404',
    component: () => import('@/views/pages/404'),
    name: '404',
    meta: {title: '404未找到'},
    beforeEnter (to, from, next) {
      // 拦截处理特殊业务场景
      // 如果, 重定向路由包含__双下划线, 为临时添加路由
      if (/__.*/.test(to.redirectedFrom)) {
        return next(to.redirectedFrom.replace(/__.*/, ''))
      }
      next()
    }
  },
  {path: '/login', component: () => import('@/views/pages/login'), name: 'login', meta: {title: '登录'}}
]

// 模块路由(基于主入口布局页面)
export const moduleRoutes = {
  path: '/',
  component: () => import('@/views/main/main'),
  name: 'main',
  redirect: {name: 'login'},
  meta: {title: '主入口布局'},
  children: [
    // {path: '/home', component: () => import('@/views/modules/home'), name: 'home', meta: {title: '首页', parentUUID: 0, uuid: 'index1'}}
    // {path: 'home', component: () => import('@/views/business/home/home'), name: 'home', meta: {title: '首页'}}
    // {path: 'demo/list-demo', component: () => import('@/views/modules/demo/listDemo/list-demo'), name: 'list-demo', meta: {title: '列表页'}},
    // {path: 'demo/all-form-type', component: () => import('@/views/modules/demo/all-form-type'), name: 'all-form-type', meta: {title: '表单页'}}
  ]
}

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({y: 0}),
  routes: pageRoutes.concat(moduleRoutes)
})

router.beforeEach((to, from, next) => {
  // 截取路由中token进行处理
  filterToken(to, from, next)
  // console.log(to)
  // console.log(from)
  // 添加动态(菜单)路由
  // 已添加或者当前路由为页面路由, 可直接访问
  if (window.SITE_CONFIG['dynamicMenuRoutesHasAdded'] || fnCurrentRouteIsPageRoute(to, pageRoutes)) {
    if (undefined != to.meta.isNavbar) {
      window.SITE_CONFIG['isNavbar'] = to.meta.isNavbar
    }
    if (undefined != to.meta.isSidebar) {
      window.SITE_CONFIG['isSidebar'] = to.meta.isSidebar
    }
    return next()
  }
  // 获取菜单列表, 添加并全局变量保存
  http.get('/sys/menu/list').then(({data: res}) => {
    if (res.code !== 0) {
      Vue.prototype.$message.error(res.msg)
      return next({name: 'login'})
    }
    let homePage = {
      'uuid': 'index1',
      'parentUUID': 0,
      'name': '首页',
      'ename': 'home',
      'path': 'home',
      'componentPath': 'modules/home'
    }
    res.list.unshift(homePage)
    window.SITE_CONFIG['menuList'] = res.list
    fnAddDynamicMenuRoutes(window.SITE_CONFIG['menuList'])
    next({...to, replace: true})
  }).catch(() => {
    next({name: 'login'})
  })
})

/**
 * 判断当前路由是否为页面路由
 * @param {*} route 当前路由
 * @param {*} pageRoutes 页面路由
 */
function fnCurrentRouteIsPageRoute (route, pageRoutes = []) {
  var temp = []
  for (var i = 0; i < pageRoutes.length; i++) {
    if (route.path === pageRoutes[i].path) {
      return true
    }
    if (pageRoutes[i].children && pageRoutes[i].children.length >= 1) {
      temp = temp.concat(pageRoutes[i].children)
    }
  }
  return temp.length >= 1 ? fnCurrentRouteIsPageRoute(route, temp) : false
}

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function fnAddDynamicMenuRoutes (menuList = [], routes = []) {
  var temp = []
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i].children && menuList[i].children.length >= 1) {
      temp = temp.concat(menuList[i].children)
      continue
    }
    let path = menuList[i].path
    let componentPath = menuList[i].componentPath
    if (!path) {
      continue
    }

    // 组装路由
    var route = {
      path: path,
      component: '',
      name: menuList[i].ename,
      meta: {
        uuid: menuList[i].uuid,
        parentUUID: menuList[i].parentUUID,
        title: menuList[i].name
      }
    }
    // menuList[i].url = 'https://juejin.im/' // 测试用
    if (isURL(menuList[i].url)) {
      route.meta.iframeURL = menuList[i].url
      route.component = () => import(`@/views/modules/home`)
    } else {
      route.component = () => import(`@/views/${componentPath}`)
    }
    // console.log(route)
    // console.log(route)
    // 组装路由
    // var route = {
    //   path: '',
    //   component: null,
    //   name: '',
    //   meta: {
    //     ...window.SITE_CONFIG['contentTabDefault'],
    //     menuId: menuList[i].id,
    //     title: menuList[i].name
    //   }
    // }
    // // eslint-disable-next-line
    //     let URL = (menuList[i].url || '').replace(/{{([^}}]+)?}}/g, (s1, s2) => eval(s2)) // URL支持{{ window.xxx }}占位符变量
    // if (isURL(URL)) {
    //   route['path'] = route['name'] = `i-${menuList[i].id}`
    //   route['meta']['iframeURL'] = URL
    // } else {
    //   URL = URL.replace(/^\//, '').replace(/_/g, '-')
    //   route['path'] = route['name'] = URL.replace(/\//g, '-')
    //   route['component'] = () => import(`@/views/modules/${URL}`)
    // }
    routes.push(route)
  }
  if (temp.length >= 1) {
    return fnAddDynamicMenuRoutes(temp, routes)
  }
  // 添加路由
  router.addRoutes([
    {
      ...moduleRoutes,
      name: 'main-dynamic-menu',
      children: routes
    },
    {path: '*', redirect: {name: '404'}}
  ])
  window.SITE_CONFIG['dynamicMenuRoutes'] = routes
  window.SITE_CONFIG['dynamicMenuRoutesHasAdded'] = true
}

/**
 * 截取路由中的token并进行处理
 *
 */
function filterToken (route, to, from, next) {
  // console.log("token: "+to.fullPath)
  // var tokens = route.query.token;
  // console.log(tokens)
  // if(undefined != tokens){
  //     Cookies.set('token', tokens)
  // }

  // Cookies.set('token', "8dcbf9730cec72cf8435e4f7e67e27fc")
}
export default router
