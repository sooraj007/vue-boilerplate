import Vue from 'vue'
import Router from 'vue-router'
import adminDashboard from '@/views/admin-dashboard/admin-dashboard'

Vue.use(Router)

export default new Router(***REMOVED***
  routes: [
    ***REMOVED***
      path: '*',
      redirect: '/adminDashboard'
  ***REMOVED***,
    ***REMOVED***
      path: '/',
      name: 'AdminDashboard',
      component: adminDashboard
  ***REMOVED***
  ]
***REMOVED***)

