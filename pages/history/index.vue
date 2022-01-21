<template>
<div>
	<v-navbar />
	<v-headjumbo :title="page.title" :subtitle="page.subtitle" :intro="page.intro"/>

	<div class="container-xl">
		<div class="row" id="maincont">
			<div class="col-12" id="content">
				<div id="markdown" v-html="Markdown" class="mt-5 mb-5"></div>
			</div>
			<v-footer />
		</div>
	</div>
</div>
</template>

<script>
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
		}
	},
	created() {
		let rawMD = require('../../static/docs/history/history.md')
		this.Markdown = rawMD.default
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
