<template>
	<div class="mt-3">
		<div>
			<br>
			<h2 class="d-inline-block bold">{{ list.title }}</h2>
		</div>
		<div class="row">
			<div class="albumcont">
				<div class="albumitem" v-for="img in list.pics" :style="{width:img.width*scale/img.height+'px','flex-grow':img.width*scale/img.height}">
					<i :style="{'padding-bottom':img.height/img.width*100+'%'}"></i>
					<img class="albumpic" :src="img.url">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'v-cardlist',
	props: {
		list: Object,
		scale: String
	},
}
</script>