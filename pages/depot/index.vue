<template>
<div>
	<v-navbar />
	<v-headjumbo :title="page.title" :subtitle="page.subtitle" :intro="page.intro" />

	<div class="container-xl">
		<div class="row">
			<div class="col-12 mt-6 d-flex flex-column justify-content-center" style="height:50vh;">
				<h1>监修中...</h1>
				<h5 class="subtext">预计二期建设完成后开放</h5>
				<br>
				<nuxt-link to="/" class="colored">返回首页 ›</nuxt-link>
			</div>
			<v-footer />
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'DepotPage',
  data() {
		return {
			page: {
				"title": "车辆",
				"subtitle": "Depot",
				"intro": "动静交错之间，一探它们曾经风驰电掣的身影"
			}
		}
	},
	created() {
		document.title = '车辆 / 中原铁道（数字）博物馆'
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
