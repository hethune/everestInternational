<template>
  <div id="app">
    <app-nav></app-nav>
    <transition>
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from './AppNav.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'app',
  components: { AppNav, AppFooter },
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    const ckeditor = document.createElement('script')
    ckeditor.setAttribute('src', 'https://wechat-pics.fangpinduo.com/wehome/everestInternational/webflow.js')
    document.body.appendChild(ckeditor)
  }
}
</script>

<style lang="scss" scoped>
.w-nav-overlay {
  display: block;
  height: 100vh;
}
.w-nav-overlay.close {
  top: -100vh;
  transition: top 400ms;
}

.w-nav-overlay.open {
  top: 100%;
  transition: top 400ms;
}
</style>
