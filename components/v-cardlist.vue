<template>
	<div class="mt-3">
		<div v-if="isTitleOn">
			<br>
			<h2 class="d-inline-block bold">{{ title }}</h2><h5 class="ms-2 subtext d-inline-block">{{ subtitle }}</h5>
		</div>
		<div class="row">
			<div class="col-12 col-md-3" v-for="(item, index) in list" :key="index">
				<a :href="item.link">
				<div class="card text-white bg-dark mt-3">
					<img class="card-img" :src="item.bgImg" style="opacity: 0.6;background: linear-gradient(#DBE0DF, #DBE0DF)">
					<div class="card-img-overlay">
						<p class="badge" :class="color">{{item.badge}}</p>
						<h3 class="home" v-html="item.title"></h3>
					</div>
				</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'v-cardlist',
	props: {
		isTitleOn: Boolean,
		title: String,
		subtitle: String,
		list: Array,
		color: String
	}
}
</script>