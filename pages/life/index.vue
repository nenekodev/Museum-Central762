<template>
<div>
	<v-navbar />
	<v-headjumbo :title="page.title" :subtitle="page.subtitle" :intro="page.intro" />

	<div class="container-xl">
		<div class="row">
			<div class="col-12" id="content">
				<v-cardlist :list="life" color="bg-light text-dark"/>
			</div>
			<v-footer />
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'LifePage',
  head: {
		title: '生活 / 中原铁道（数字）博物馆'
	},
  data() {
		return {
			page: {
				"title": "生活",
				"subtitle": "Life",
				"intro": "交通连接人间世，实物展再现地方铁路运营景象"
			},
			life: []
		}
	},
	created() {
		let data = require('../../static/docs/life.json')
		this.life = data.life
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
