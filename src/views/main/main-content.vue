<template>
  <main class="smp-content" :class="{'isIframe':isIframe}">
    <iframe v-if="isIframe" :src="iframeURL" width="100%" height="100%" frameborder="0" scrolling="yes"></iframe>
    <keep-alive v-else>
      <router-view />
    </keep-alive>
  </main>
</template>

<script>
import { isURL } from '@/utils/validate'
export default {
  data () {
    return {
      iframeURL: this.$route.meta.iframeURL,
      isIframe: false
    }
  },
  watch: {
    $route () {
      this.iframeURL = this.$route.meta.iframeURL
      this.initUrl()
    }
  },
  mounted () {
    this.initUrl()
  },
  methods: {
    initUrl () {
      this.isIframe = this.tabIsIframe(this.iframeURL)
    },
    // tabs, 是否通过iframe展示
    tabIsIframe (url) {
      return isURL(url)
    }
  }
}
</script>
