import Vue from 'vue'
import Router from 'vue-router'
import adminDashboard from '@/pages/admin-dashboard/admin-dashboard'
//ImportModules don't delete this line
Vue.use(Router)
export default new Router(***REMOVED***
	routes: [***REMOVED***
			path: '*',
			redirect: '/adminDashboard'
		***REMOVED***, ***REMOVED***
			path: '/',
			name: 'AdminDashboard',
			component: adminDashboard
		***REMOVED***,
		//routes don't delete this line
	]
***REMOVED***)