import Vue from 'vue'
import Router from 'vue-router'
import adminDashboard from '@/views/admin-dashboard/admin-dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/adminDashboard'
    },
    {
      path: '/',
      name: 'AdminDashboard',
      component: adminDashboard
    }
  ]
})

