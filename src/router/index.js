import Vue from 'vue'
import Router from 'vue-router'
import { uuid } from '@/utils/utils'
import Track from '@/track'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/en/',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    // Each of these routes are loaded asynchronously, when a user first navigates to each corresponding endpoint.
    // The route will load once into memory, the first time it's called, and no more on future calls.
    // This behavior can be observed on the network tab of your browser dev tools.
    {
      path: '/',
      name: 'home',
      component: function (resolve) {
        require(['@/scenes/home/Home.vue'], resolve)
      }
    }, {
      path: '/about',
      name: 'about',
      component: function (resolve) {
        require(['@/scenes/about/About.vue'], resolve)
      }
    },
    // 404页面处理
    {
      path: '*',
      redirect: "/"
    }
  ]
})

// track
const uid = uuid()
router.afterEach((to, from) => {
  const auth = router.app.$options.store.state.auth
  const fromPath = from.fullPath
  const toPath = to.fullPath
  const obj = {
    id: uid,
    from: fromPath,
    to: toPath
  }
  if (auth.isLoggedIn) {
    obj.token = auth.accessToken
  }
  Track.routeTrack(obj)
})

export default router
