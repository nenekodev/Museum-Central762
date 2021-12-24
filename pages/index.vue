<template>
	<div>
		<v-navbar />
		<div class="container-xl">
		<div class="row" id="maincont">
			<div class="col-12">
				<div class="row">
				<div class="col-12 mt-6">
					<div class="alert alert-danger" style="text-align: center;">
						<a :href="update.link" v-html="update.info"></a>
					</div>
				</div>
				<div class="col-lg-8 col-12 mt-3">
					<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
						<div class="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleIndicators" v-for="(item,index) in jumboItems" :data-bs-slide-to="index" :class="{active:item.isActive}"></button>
						</div>
						<div class="carousel-inner">
							<div class="carousel-item " v-for="item in jumboItems" :class="{active:item.isActive}">
								<nuxt-link :to="item.link">
									<div :style="{'background':'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0.8)),url(' + item.jumboImg + ')', 'margin-bottom':0}" class="jumbotron jumbotron-fluid height-60vh">
									</div>
									<div class="carousel-caption">
										<h5>{{item.title}}</h5>
										<p>{{item.subTitle}}</p>
									</div>
								</nuxt-link>
							</div>
						</div>
						
						<button class="carousel-control-prev d-none d-md-flex" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">上一个</span>
						</button>
						<button class="carousel-control-next d-none d-md-flex" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">下一个</span>
						</button>
					</div>
				</div>

				<div class="col-lg-4 col-12 mt-3">
					<h5>序言 <span class="ms-2 subtext">Preface</span></h5>
					<h3 class="colored bold">{{intro.title}}</h3>
					<br>
					<p v-html="intro.text"></p>
				</div>
				</div>
			</div>

			<div class="col-12" id="content">
				<div id="virtualtour" class="anchor mt-3">
					<div class="row">
						<div class="col-12 col-sm-6 col-lg-4" v-for="(item,index) in categories" :key="index">
							<nuxt-link :to="item.link">
							<div class="card text-dark mt-3">
								<img class="card-img" :src="item.bgImg" >
								<div class="card-img-overlay">
									<h2>{{item.title}}</h2>
									<h5 class="subtext">{{item.subtitle}}</h5>
									<p>{{item.details}}</p>
								</div>
							</div>
							</nuxt-link>
						</div>
					</div>
				</div>
				<v-footer />	
			</div>
		</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'IndexPage',
	data() {
		return {
			update: [],
			intro: [],
			jumboItems: [],
			categories: []
		}
	},
	created() {
		axios
		.get('/docs/index.json')
		.then(response => {
			this.update = response.data.update
			this.intro = response.data.intro
			this.jumboItems = response.data.jumboItems
			this.categories = response.data.categories
		});
	},
	methods: {
		scrollToPosition(ID) {
			document.getElementById(ID).scrollIntoView()
		}
	}
}
</script>
