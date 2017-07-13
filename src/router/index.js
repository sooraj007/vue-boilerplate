import Vue from 'vue'
import Router from 'vue-router'
import adminDashboard from '@/views/admin-dashboard/admin-dashboard'
//ImportModules don't delete this line
Vue.use(Router)
export default new Router({
	routes: [{
			path: '*',
			redirect: '/adminDashboard'
		}, {
			path: '/',
			name: 'AdminDashboard',
			component: adminDashboard
		},
		//routes don't delete this line
	]
})