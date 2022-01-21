export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		htmlAttrs: { // 这里修改app.html里面的html上的{{ HTML_ATTRS }}属性
			lang: 'zh',
		},
		title: '中原铁道（数字）博物馆',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css' },
			{ rel: 'stylesheet', href: '/css/base.css' },
			{ rel: 'stylesheet', href: '/css/day.css', media: '(prefers-color-scheme: no-preference), (prefers-color-scheme: light)' },
			{ rel: 'stylesheet', href: '/css/night.css', media: '(prefers-color-scheme: dark)' }
		],
		script: [
			{ src: 'https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.2/js/bootstrap.bundle.min.js' },
			{ src: 'https://cdn.bootcdn.net/ajax/libs/zepto/1.2.0/zepto.min.js' },
			{ src: 'https://cdn.bootcdn.net/ajax/libs/showdown/1.9.1/showdown.min.js' }
			// { src: '/js/utils.js' },
			// { src: '/js/stickUp.min.js' }
		]
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},

	generate: {
		routes: [
			'/about/help',
			'/about/agreement',
			'/about/privacy',
			'/about/update',
			
			'/virtualtour/chaoqi',
			'/virtualtour/xudan',

			'/life/magazines',
			'/life/references'
		]
	}
}
