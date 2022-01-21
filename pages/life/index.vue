<template>
<div>
	<v-navbar />
	<v-headjumbo :title="page.title" :subtitle="page.subtitle" :intro="page.intro" />

	<div class="container-xl">
		<div class="row">
			<h1 class="mt-5">刊物封面和目录</h1>
			<div class="col-12" v-for="(magazine, index) in magazines" :key="'magazine-'+ index">
				<v-album :list="magazine" scale=420 />
			</div>
			<h1 class="mt-5">工具书和表格</h1>
			<div class="col-12" v-for="(reference, index) in references" :key="'ref-'+ index">
				
				<v-album :list="reference" scale=420 />
			</div>
			<v-footer />
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LifePage',
  head: {
		title: '生活 / 中原铁道（数字）博物馆'
	},
  data() {
		return {
			page: {
				"title": "生活",
				"subtitle": "Life",
				"intro": "交通连接人间世，实物展再现地方铁路运营景象"
			},
			magazines: [],
			references: []
		}
	},
	created() {
		axios
		.get('/docs/life.json')
		.then(response => {
			this.magazines = response.data.magazines
			this.references = response.data.references
		});
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
