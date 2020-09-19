<template>
  <div class="navbar-user">
    <div class="nu-main">
      <div class="nu-l">
        <img v-if="useHeadPictureUrl" :src="useHeadPictureUrl">
        <i v-else class="smp-nav-icon-32 smp-ni32-userPic"></i>
      </div>
      <div class="nu-r">
        <div class="nu-t">省公安厅</div>
        <div class="nu-b">
          <div class="navbar-name">马龙</div>
          <div class="navbar-open-btn" @click="showUserFunc">
            <i class="smp-nav-icon-10 smp-ni10-arrow" :class="{'on':isUserFuncOpen}"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="nu-list-wraper" v-show="isUserFuncOpen">
      <ul class="nulw-ul">
        <li class="nulw-li">
          <i class="smp-nav-icon-16 smp-ni16-person"></i>
          <span>个人信息</span>
        </li>
        <li class="nulw-li">
          <i class="smp-nav-icon-16 smp-ni16-pass"></i>
          <span>修改密码</span>
        </li>
        <li class="nulw-li">
          <i class="smp-nav-icon-16 smp-ni16-out"></i>
          <span>退出</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      useHeadPictureUrl: '',
      isUserFuncOpen: false
    }
  },
  methods: {
    showUserFunc () {
      this.isUserFuncOpen = !this.isUserFuncOpen
    }
  }
}
</script>

<style lang="scss">
.navbar-user{

}
</style>
