<template>
<div>
    <v-navbar />
    <v-headjumbo :title="meta.title" :subtitle="meta.subtitle" :intro="meta.intro" />

	<div class="container-xl">
		<div class="row">
			<div class="col-12" v-for="(tour, index) in tours" :key="index">
				<v-tourlist :title="tour.station" :description="tour.description" :mainPic="tour.mainPic" :pics="tour.pics"/>
			</div>
			<v-footer />
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'TourDetailPage',
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
			"tours": []
		}
	},
	created(){
		let data = require('../../static/docs/tour/' + this.$route.params.tour + '/meta.json')
		this.meta.title = data.title
		this.meta.subtitle = data.subtitle
		this.tours = data.tours
	},
	updated(){
	}
}
</script>
