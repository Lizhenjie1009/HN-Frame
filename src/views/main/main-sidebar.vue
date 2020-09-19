<template>
  <aside class="smp-sidebar" :class="{'smps-close':menuClose}">
    <div class="smps-hd" :class="{'smps-hdclose':menuClose}">
      <div class="smpsh-title">{{currentMenuName}}</div>
      <div class="smpsh-switch" :class="{'on':menuClose}" @click="switchMenu">
        <i class="smp-nav-icon-16 smp-ni16-slidebar-switch"></i>
      </div>
    </div>
    <div class="smps-bd" :class="{'onopen':!menuClose}">
      <el-menu
        v-if="currentMenuList.length>0"
        :unique-opened="false"
        :collapseTransition="false"
        :collapse="menuClose"
        :default-active="activeIndex"
        class="smps-menu">
        <sub-menu v-for="(menu) in slideMenu" :key="menu.id" :menu="menu" />
      </el-menu>
      <div class="smps-bd-nomenu" v-else>暂无</div>
    </div>
  </aside>
</template>

<script>
import SubMenu from './main-sidebar-sub-menu'
export default {
  data () {
    return {
      activeIndex: '',
      menuClose: this.$store.state.sidebarFold,
      iconClass: 'smp-ni-leftbar_jcyj',
      menuDataAll: [],
      currentMenuList: [],
      currentMenuName: '暂无',
      slideMenu: [],
      sidebarMenuList: [
        {
          name: '列表页',
          url: '/demo/list-demo',
          id: 'demo1',
          lv: 1,
          children: [],
          icon: 'smp-ni-leftbar_jcyj'
        },
        {
          name: '表单页',
          url: '/demo/all-form-type',
          id: 'demo2',
          lv: 1,
          children: [],
          icon: 'smp-ni-leftbar_jcyj'
        },
        {
          name: '监测预警',
          id: '1',
          lv: 1,
          children: [],
          icon: 'smp-ni-leftbar_jcyj'
        },
        {
          name: '线索列表',
          id: '2',
          lv: 1,
          children: [],
          icon: 'smp-ni-leftbar_xslb'
        },
        {
          name: '线索汇聚',
          id: '3',
          lv: 1,
          children: [
            {
              name: '线索列表',
              id: '31',
              lv: 2
            },
            {
              name: '线索录入',
              id: '32',
              lv: 2
            },
            {
              name: '线索导入',
              id: '33',
              lv: 2
            },
            {
              name: '线索分类模板管理',
              id: '34',
              lv: 2
            },
            {
              name: '线索目录体系管理',
              id: '35',
              lv: 2
            }
          ],
          icon: 'smp-ni-leftbar_xshj'
        },
        {
          name: '线索研判',
          id: '4',
          lv: 1,
          children: [],
          icon: 'smp-ni-leftbar_xsyp'
        },
        {
          name: '线索跟踪督导',
          id: '5',
          lv: 1,
          children: [],
          icon: 'smp-ni-leftbar_xsgzdd'
        },
        {
          name: '线索后处理',
          id: '6',
          lv: 1,
          children: [],
          icon: 'smp-ni-leftbar_xshcl'
        },
        {
          name: '综合态势分析',
          id: '7',
          lv: 1,
          children: [],
          icon: 'smp-ni-leftbar_zhtsfx'
        },
        {
          name: '线索快查工具',
          id: '8',
          lv: 1,
          children: [],
          icon: 'smp-ni-leftbar_xskcgj'
        }
      ]
    }
  },
  components: {
    SubMenu
  },

  computed: {
    currentMenuItem () {
      return this.$store.state.sidebarMenuItem
    }
  },
  watch: {
    currentMenuItem () {
      this.currentMenuList = this.currentMenuItem.children || []
      this.currentMenuName = this.currentMenuItem.name
      this.initMenu()
    }
  },
  mounted () {
    // this.$store.state.sidebarMenuList = window.SITE_CONFIG['currentMenuItem'].children
  },
  methods: {
    initMenu () {
      this.menuDataAll = window.SITE_CONFIG['menuList']
      this.initSliderMenu()
      this.setActiveOne()
    },
    initSliderMenu () {
      let currentMenuList = this.currentMenuList
      let lv = 1
      if (currentMenuList) {
        this.slideMenu = this.addMenu(currentMenuList, lv)
      }
    },
    setActiveOne () {
      this.activeIndex = this.$route.meta.uuid
    },
    addMenu (arr, lv) {
      let list = []
      arr.forEach((e) => {
        if (!e.noMenu) {
          let obj = {
            ...e,
            lv: lv,
            id: e.uuid,
            url: e.path ? ('/' + e.path) : '',
            on: false,
            icon: lv === 1 ? this.iconClass : ''
          }
          if (e.children && e.children.length) {
            obj.children = this.addMenu(e.children, ++lv)
          }
          list.push(obj)
        }
      })
      return list
    },
    switchMenu () {
      this.menuClose = !this.menuClose
      this.$store.state.sidebarFold = !this.$store.state.sidebarFold
    }
  }
}
</script>
