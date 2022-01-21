<template>
<div>
	<v-navbar />
	<v-headjumbo :title="meta.title" :subtitle="meta.subtitle" intro="" />

	<div class="container-xl">
		<div class="row" id="maincont">
			<div class="col-12" v-for="(item, index) in list" :key="index">
				<v-album :list="item" :scale="meta.scale" />
			</div>
		</div>
		<v-footer />
	</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'LifeDetailPage',
	head() {
		return{
			title: `${this.meta.title} / 中原铁道（数字）博物馆`
		}
	},
	data(){
		return{
			meta: {
				"title": "",
				"subtitle": "",
				"scale": ""
			},
			list: []
		}
	},
	created(){
		axios
		.get('/docs/life/' + this.$route.params.id + '/' + this.$route.params.id + '.json')
		.then((response) => {
			this.meta.title = response.data.title
			this.meta.subtitle = response.data.subtitle
			this.meta.scale = response.data.scale
			this.list = response.data.list
		})
	},
	updated(){
	}
}
</script>
