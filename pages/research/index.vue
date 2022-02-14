<template>
<div>
	<v-navbar />
	<v-headjumbo :title="page.title" :subtitle="page.subtitle" :intro="page.intro" />

	<div class="container-xl">
		<div class="row" id="maincont">
			<div class="col-12" id="content">
				<v-cardlist :list="researches" color="bg-light text-dark"/>
				<!-- <v-cardlist isTitleOn title="特别展出" subtitle="Specials" :list="specials" color="bg-danger text-light" /> -->
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
	head() {
		return {
			title: `${this.page.title} / 中原铁道（数字）博物馆`,
			meta: this.head.meta
		}
	},
	data() {
		return {
			head: [],
			page: [],
			researches: []
		}
	},
	created() {
		let data = require('../../static/docs/research/research.json')
		this.head = data.head
		this.page = data.page
		this.researches = data.researches
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
