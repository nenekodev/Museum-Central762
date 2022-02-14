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
	head() {
		return{
			title: `${this.page.title} / 中原铁道（数字）博物馆`,
			meta: this.head.meta
		}
	},
	data() {
		return {
			head: [],
			page: [],
			life: []
		}
	},
	created() {
		let data = require('../../static/docs/life/life.json')
		this.head = data.head
		this.page = data.page
		this.life = data.life
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
