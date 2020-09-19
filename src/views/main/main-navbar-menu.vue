<template>
  <div class="navbar-menu">
    <div class="nbm-wraper" ref="nbm-wraper" :class="{'nbmw-open':menuOpen}">
      <div class="nbm-item" :class="{'on':item.on}" v-for="(item,index) in menuList" :key="index" @click="gotoPage(item)">
        <i class="smp-nav-icon" :class="[item.icon,{'on':item.on}]"></i>
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="nbm-switch" v-if="isShowMore">
      <div class="nbm-item" v-if="menuOpen" @click="changeMenuStatus">
        <i class="smp-nav-icon smp-ni-back"></i>
        <span>返回</span>
      </div>
      <div class="nbm-item" v-else @click="changeMenuStatus">
        <i class="smp-nav-icon smp-ni-more"></i>
        <span>更多</span>
      </div>
    </div>
  </div>
</template>

<script>
import tool from '@/utils/tool.js'
export default {
  data () {
    return {
      lineWrapIndex: '',
      menuOpen: false,
      isShowMore: false,
      currentMenuItem: {},
      menuDataAll: [],
      iconArr: {
        index: 'smp-ni-nav_sy_n',
        jcyj: 'smp-ni-nav_jcyj_n',
        fxyp: 'smp-ni-nav_fxyp_n',
        zhdd: 'smp-ni-nav_zhdd_n',
        xnpg: 'smp-ni-nav_xnpg_n',
        jcsj: 'smp-ni-nav_jcsj_n',
        jczj: 'smp-ni-nav_jczj_n',
        fzsgzt: 'smp-ni-nav_fzsgzt_n',
        xtgl: 'smp-ni-nav_xtgl_n',
        znyw: 'smp-ni-nav_znyw_n'
      },
      menuList: [
        // {
        //   name: '首页',
        //   url: '/home',
        //   on: false,
        //   icon: 'smp-ni-nav_sy_n',
        //   uuid: 'index1',
        //   parentUUID: 0
        // }
        // {
        //   name: '监测预警',
        //   url: '/home',
        //   on: false,
        //   icon: 'smp-ni-nav_jcyj_n'
        // },
        // {
        //   name: '分析研判',
        //   url: '/home',
        //   on: false,
        //   icon: 'smp-ni-nav_fxyp_n'
        // },
        // {
        //   name: '指挥调度',
        //   url: '/home',
        //   on: false,
        //   icon: 'smp-ni-nav_zhdd_n'
        // },
        // {
        //   name: '效能评估',
        //   url: '/home',
        //   on: false,
        //   icon: 'smp-ni-nav_xnpg_n'
        // },
        // {
        //   name: '基础数据',
        //   url: '/home',
        //   on: false,
        //   icon: 'smp-ni-nav_jcsj_n'
        // },
        // {
        //   name: '基础组件',
        //   url: '/home',
        //   on: false,
        //   icon: 'smp-ni-nav_jczj_n'
        // },
        // {
        //   name: '反走私工作台',
        //   url: '/home',
        //   on: false,
        //   icon: 'smp-ni-nav_fzsgzt_n'
        // },
        // {
        //   name: '系统管理',
        //   url: '/home',
        //   on: false,
        //   icon: 'smp-ni-nav_xtgl_n'
        // },
        // {
        //   name: '智能运维',
        //   url: '/home',
        //   on: false,
        //   icon: 'smp-ni-nav_znyw_n'
        // }
      ]
    }
  },
  mounted () {
    this.initMenu()
    this.initMenuMoreBtn()
    this.getCurrentMenuByUrl()
    // this.setIndexPage()
  },
  methods: {
    initMenuMoreBtn () {
      let wraper = this.$refs['nbm-wraper']
      let wraperW = wraper.getBoundingClientRect().width
      let itemW = 120
      let itemLength = this.menuList.length
      this.isShowMore = (itemW * itemLength > wraperW)
    },
    initMenu () {
      // uuid
      // parentUUID
      this.menuDataAll = window.SITE_CONFIG['menuList']
      let list = []
      this.menuDataAll.map((e, i) => {
        if (!e.noMenu) {
          list.push({
            ...e,
            url: e.path ? ('/' + e.path) : '',
            on: false,
            icon: this.iconArr[Object.keys(this.iconArr)[i]]
          })
        }
      })
      list = tool.construct(list, {
        id: 'uuid',
        pid: 'parentUUID',
        children: 'children'
      })
      this.menuList = this.menuList.concat(list)
    },
    getCurrentMenuByUrl () {
      let uuid = this.$route.meta.uuid
      let _this = this
      let rootOne = getParent(uuid)
      let menuOne = this.menuList.filter((e) => {
        return e.uuid === rootOne.uuid
      })[0]
      _this.setIndexPage(menuOne)
      function getParent (uuid) {
        let item = _this.menuDataAll.filter((e) => {
          return e.uuid === uuid
        })[0]
        if (!item.parentUUID) {
          return item
        } else {
          return getParent(item.parentUUID)
        }
      }
    },
    setIndexPage (item) {
      this.setCurrentMenuItem(item)
      item.on = true
    },
    changeMenuStatus () {
      this.menuOpen = !this.menuOpen
    },
    gotoPage (item) {
      this.upMenuItem(item)
      this.setCurrentMenuItem(item)
      this.menuList.forEach((e, i) => {
        e.on = false
      })
      item.on = true
      this.$router.push({ path: item.url })
    },
    setCurrentMenuItem (item) {
      // console.log(item)
      this.currentMenuItem = item
      // window.SITE_CONFIG['currentMenuItem'] = item
      this.$store.state.sidebarMenuItem = item
    },
    upMenuItem (item) {
      let wraper = this.$refs['nbm-wraper']
      let wraperW = wraper.getBoundingClientRect().width
      let itemW = 120
      this.lineWrapIndex = Math.floor(wraperW / itemW) - 1
      let spliceItemIndex = ''
      this.menuList.forEach((e, i) => {
        if (i <= this.lineWrapIndex) {
          return
        }
        if (e.name === item.name) {
          spliceItemIndex = i
        }
      })
      if (spliceItemIndex !== '') {
        this.menuList[spliceItemIndex] = this.menuList.splice(this.lineWrapIndex, 1, item)[0]
      }
    }
  }
}
</script>

<style lang="scss">
.navbar-menu{
  // padding: 0!important;
}
</style>
