const config = {
	baseUrl: '', // 请求的本域名
	method: 'POST',
	dataType: 'json',
	showLoading: true, // 是否显示请求中的loading
	loadingText: '请求中...', // 请求loading中的文字提示
	loadingTime: 200, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
	originalData: true, // 是否在拦截器中返回服务端的原始数据
	loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
	// 配置请求头信息
	header: {
		'content-type': 'application/json;charset=UTF-8'
	},

}

const install = (Vue, vm) => {
	// 自定义配置参数
	Vue.prototype.$u.http.setConfig(config);
	// 请求拦截
	Vue.prototype.$u.http.interceptor.request = (config) => {
		const token = '';
		config.header.token = token;
		if (config.url == '/user/login') config.header.noToken = true;
		return config;
	}
	// 响应拦截
	Vue.prototype.$u.http.interceptor.response = (res) => {
		console.log(res)
		if (res.code == 200) {
			return res.data;
		}else if(res.code == 500){
			uni.showModal({
				content: res.data.message
			})
		} else {
			uni.showModal({
				content:"网络异常"
			})
		}
	}
}

export default {
	install
}
