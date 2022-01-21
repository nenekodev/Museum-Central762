<template>
<div>
	<v-navbar />
	<v-headjumbo :title="page.title" :subtitle="page.subtitle" :intro="page.intro" />

	<div class="container-xl">
		<div class="row">
			<div class="col-12" v-for="(arch, index) in archs" :key="index">
				<v-album :list="arch" scale=280 />
			</div>
			<v-footer />
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'ArchitecturePage',
  head: {
		title: '建筑 / 中原铁道（数字）博物馆'
	},
  data() {
		return {
			page: {
				"title": "建筑",
				"subtitle": "Architecture",
				"intro": "车站、桥梁、隧道，领略地方铁路建筑风采"
			},
			archs: []
		}
	},
	created() {
		let data = require('../../static/docs/architecture.json')
		this.archs = data.architecture
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
