<template>
<div>
    <v-navbar />
	<v-headjumbo :title="meta.title" :subtitle="meta.subtitle" intro="" />

	<div class="container-xl">
		<div class="row" id="maincont">
			<div class="col-12" id="content">
				<div id="markdown" class="mt-5 mb-5"></div>
				
				<v-footer />
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';
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
			}
		}
	},
	created(){
		axios
		.get('/docs/about/' + this.$route.params.id + '/meta.json')
		.then((response) => {
			this.meta.title = response.data.title
			this.meta.subtitle = response.data.subtitle
		})
	},
	mounted(){
		axios
		.get('/docs/about/' + this.$route.params.id + '/' + this.$route.params.id + '.md')
		.then((response) => {
			var Convertor = new showdown.Converter()
			$('#markdown').html(Convertor.makeHtml(response.data))
		})
		.catch((error) => {
			console.log(error)
		})
	},
	updated(){
	}
}
</script>
