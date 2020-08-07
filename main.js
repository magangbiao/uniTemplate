import Vue from 'vue'
import App from './App'
import uView from "uview-ui";

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uView);

const app = new Vue({
	...App
})

// http拦截器
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

Vue.prototype.get = Vue.prototype.$u.get;
Vue.prototype.post = Vue.prototype.$u.post;

app.$mount()
