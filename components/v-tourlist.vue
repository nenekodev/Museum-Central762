<template>
	<div>
		<div class="row mt-6" v-viewer="options">
			<div class="col-12 col-md-4 mt-3">
				<h1>{{ title }}</h1>
				<br>
				<p v-html="description"></p>
			</div>
			<div class="col-12 col-md-8 mt-3">
				<img class="img-fluid" :src="mainPic" />
			</div>
			<div class="col-12 col-md-4" v-for="(pic, index) in pics" :key="index">
				<img class="img-fluid mt-3" :src="pic" />
			</div>
		</div>
	</div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import Vue from 'vue'
Vue.use(VueViewer)
export default {
	name: 'v-tourlist',
	props: ['title', 'description', 'mainPic', 'pics'],
	data() {
		return {
			options: {
				toolbar: false,
				movable: false,
				transition: false,
				fullscreen: false,
				rotatable: false
			}
		}
	}
}
</script>
