import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DropdownExample from './views/DropdownExample.vue'
import Learn from './views/Learn.vue'
import Connect from './views/Connect.vue'
import Mission from './views/Mission.vue'

Vue.use(Router)

export default new Router({
//  mode: 'history',
//  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/learn',
      name: 'learn',
      component: Learn,
    },

    {
      path: '/connect',
      name: 'connect',
      component: Connect,
    },

    {
      path: '/mission',
      name: 'mission',
      component: Mission,
    },
  ]
})
