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
  name: 'ResearchPage',
  data() {
		return {
			page: {
				"title": "研究",
				"subtitle": "Research",
				"intro": "提供研究河南地方铁路的资料和成果"
			}
		}
	},
	created() {
		document.title = '研究 / 中原铁道（数字）博物馆'
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
