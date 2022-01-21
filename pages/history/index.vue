<template>
<div>
    <v-navbar />
    <v-headjumbo :title="page.title" :subtitle="page.subtitle" :intro="page.intro"/>

	<div class="container-xl">
		<div class="row" id="maincont">
			<div class="col-12" id="content">
				<v-cardlist :list="historylist" color="bg-light text-dark"/>
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
	name: 'HistoryPage',
	head: {
		title: '历史 / 中原铁道（数字）博物馆'
	},
	data() {
		return {
			page: {
				"title": "历史",
				"subtitle": "History",
				"intro": "寸尺亦能去西东，讲述河南地方铁路的兴起发展"
			},
			historylist: []
		}
	},
	created() {
		axios
		.get('/docs/history.json')
		.then(response => {
			this.historylist = response.data.history
		});
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
