<template>
  <div class="smp-crumb">
    <div class="smpc-item" v-for="(item,index) in menuChain" :key="index">
      <i v-if="index!==0">></i>
      <span :class="index===menuChain.length-1">{{item.name}}</span>
    </div>
    <!-- <div class="smpc-item"><span>首页</span></div>
    <div class="smpc-item">
      <i>></i>
      <span class="on">监测预警</span>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      uuid: this.$route.meta.uuid,
      menuList: window.SITE_CONFIG['menuList'],
      menuChain: []
    }
  },
  watch: {
    $route () {
      this.uuid = this.$route.meta.uuid
      this.initCrumb()
    }
  },
  mounted () {
    this.initCrumb()
  },
  methods: {
    initCrumb () {
      let item = this.menuList.filter((e) => {
        return e.uuid === this.uuid
      })
      this.menuChain = item
      this.setParentItem(item[0].parentUUID)
      // console.log(this.menuChain, this.menuList)
    },
    findParent (parentId) {
      let parent = this.menuList.filter((e) => {
        return e.uuid === parentId
      })
      return parent[0] ? parent[0] : ''
    },
    setParentItem (parentId) {
      // console.log(parentId)
      let _lastItem = this.findParent(parentId)
      if (_lastItem) {
        this.menuChain.unshift(_lastItem)
        this.setParentItem(_lastItem.parentUUID)
      }
    }
  }
}
</script>

<style lang="scss">
.smp-crumb{
  // padding: 0!important;
}
</style>
