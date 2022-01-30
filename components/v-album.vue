<template>
	<div class="mt-3">
		<div>
			<br>
			<h2 class="d-inline-block bold">{{ list.title }}</h2>
		</div>
		<div class="row">
			<div class="albumcont" v-viewer="options">
				<div class="albumitem" v-for="img in list.pics" :style="{width:img.width*scale/img.height+'px','flex-grow':img.width*scale/img.height}">
					<i :style="{'padding-bottom':img.height/img.width*100+'%'}"></i>
					<img class="albumpic" :src="img.url" :alt="img.alt">
					<!-- <p>{{img.alt}}</p> -->
				</div>
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
	name: 'v-cardlist',
	props: {
		list: Object,
		scale: String
	},
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
