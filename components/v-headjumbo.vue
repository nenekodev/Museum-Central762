<template>
	<div class="jumbotron jumbotron-fluid pt-5 pb-4 mt-6">
		<div class="container-xl">
			<h2 class="d-inline-block bold me-2">{{ title }}</h2><h5 class="subtext d-inline-block">{{ subtitle }}</h5>
			<p class="mt-3" v-if="intro" v-html="intro"></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'v-headjumbo',
	props: ['title', 'subtitle', 'intro', 'bgcolor1', 'bgcolor2']
}
</script>
