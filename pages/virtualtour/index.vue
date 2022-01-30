<template>
<div>
  <v-navbar />
  <v-headjumbo :title="page.title" :subtitle="page.subtitle" :intro="page.intro"/>

	<div class="container-xl">
		<div class="row" id="maincont">
			<div class="col-12" id="content">
				<v-cardlist :list="tours" color="bg-light text-dark"/>
				<!-- <v-cardlist isTitleOn title="特别展出" subtitle="Specials" :list="specials" color="bg-danger text-light" /> -->
			</div>
			<v-footer />
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'VirtualtourPage',
	head: {
		title: '漫游 / 中原铁道（数字）博物馆'
	},
	data() {
		return {
			page: {
				"title": "漫游",
				"subtitle": "Virtual Tour",
				"intro": "坐地日行千万里，探寻中原大地硕果累累的窄轨遗迹"
			},
			tours: [],
			specials: []
		}
	},
	created() {
		let data = require('../../static/docs/tour.json')
		this.tours = data.tours
		this.specials = data.specials
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
