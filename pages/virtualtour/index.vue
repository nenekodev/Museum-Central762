<template>
<div>
    <v-navbar />
    <v-headjumbo :title="page.title" :subtitle="page.subtitle" :intro="page.intro" />

	<div class="container-xl">
		<div class="row" id="maincont">
			<div class="col-12" id="content">
				<v-cardlist isTitleOn="false" :list="tours" color="bg-light text-dark"/>
				<v-cardlist isTitleOn="true" title="特别展出" subtitle="Specials" :list="specials" color="bg-danger text-light" />
			</div>
			<v-footer />
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'VirtualtourPage',
	head: {
		title: '虚拟漫游 / 中原铁道（数字）博物馆'
	},
	data() {
		return {
			page: {
				"title": "虚拟漫游",
				"subtitle": "Virtual Tour",
				"intro": "intro"
			},
			tours: [],
			specials: []
		}
	},
	created() {
		axios
		.get('/docs/index.json')
		.then(response => {
			this.tours = response.data.tours
			this.specials = response.data.specials
		});
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
