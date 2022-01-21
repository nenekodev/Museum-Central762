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
import axios from 'axios';
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
		axios
		.get('/docs/tour/' + this.$route.params.tour + '/meta.json')
		.then((response) => {
			this.meta.title = response.data.title
			this.meta.subtitle = response.data.subtitle
			this.tours = response.data.tours
		})
	},
	updated(){
	}
}
</script>
