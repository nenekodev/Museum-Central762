<template>
<div>
	<v-navbar />
	<v-headjumbo :title="meta.title" :subtitle="meta.subtitle" intro="" />

	<div class="container-xl">
		<div class="row" id="maincont">
			<div class="col-12" id="content">
				<div id="markdown" v-html="Markdown" class="mt-5 mb-5"></div>
				<v-footer />
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'AboutPage',
	head() {
		return{
			title: `${this.meta.title} / 中原铁道（数字）博物馆`
		}
	},
	data(){
		return{
			meta: {
				"title": "",
				"subtitle": ""
			},
			Markdown: ""
		}
	},
	created(){
		let rawMD = require('../../static/docs/about/'+ this.$route.params.id + '/' + this.$route.params.id + '.md')
		this.Markdown = rawMD.default
		let data = require('../../static/docs/about/' + this.$route.params.id + '/meta.json')
		this.meta.title = data.title
		this.meta.subtitle = data.subtitle
	},
	mounted() {
		let Markdown = import (`../../static/docs/about/${this.$route.params.id}/${this.$route.params.id}.md`)
	}
}
</script>
