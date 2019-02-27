import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/main/about'
import world from '@/components/main/world'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/about',
          name: 'about',
          component: about
        },
        {
          path: '/world',
          name: 'world',
          component: world
        }
      ]
    }
  ]
})
