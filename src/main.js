// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import ***REMOVED***
	ServerTable,
	ClientTable,
	Event
***REMOVED*** from 'vue-tables-2'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'
import VueLocalStorage from 'vue-localstorage'
import '!style-loader!css-loader!element-ui/lib/theme-default/index.css'
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css'
import '!style-loader!css-loader!bootstrap-datepicker/dist/css/bootstrap-datepicker.css'
import '!style-loader!css-loader!font-awesome/css/font-awesome.css'
import '!style-loader!css-loader!./assets/css/site.css'
import '!style-loader!css-loader!./assets/css/custom.css'
import sitescripts from './assets/js/site.scripts.js'
import Header from './components/header/header.vue'
import Sidebar from './components/sidebar/sidebar.vue'
import Footer from './components/footer/footer.vue'
import bootstrap from 'bootstrap'
import datepicker from 'bootstrap-datepicker'
// import axios from 'axios'
Vue.config.productionTip = false
	/* eslint-disable no-new */
Vue.use(vuex)
Vue.use(VueLocalStorage)
Vue.use(ElementUI, ***REMOVED***
	locale
***REMOVED***)
Vue.use(VueMomentJS, moment)
Vue.use(ClientTable, ***REMOVED******REMOVED***, false, require('./templates/table/template.js')('client'))
new Vue(***REMOVED***
		el: '#app',
		router,
		template: '<App/>',
		components: ***REMOVED***
			App
		***REMOVED***
	***REMOVED***)
	// Inject header component to header div in index.html
new Vue(Sidebar).$mount('#sidebar')
var HeaderComponent = Vue.extend(***REMOVED***
	router
***REMOVED***)
new HeaderComponent(Header).$mount('#header')
var FooterComponent = Vue.extend(***REMOVED***
	router
***REMOVED***)
new FooterComponent(Footer).$mount('#footer')