<template>
  <div>
    <v-navbar />
    <div class="container-xl">
      <div
        class="row"
        id="maincont"
      >
        <div class="col-12">
          <div class="row">
            <div class="col-12 mt-6">
              <div
                class="alert alert-danger"
                style="text-align: center;"
              >
                <a
                  :href="update.link"
                  v-html="update.info"
                ></a>
              </div>
            </div>
            <div class="col-lg-8 col-12 mt-3">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    v-for="(item, index) in jumboItems"
                    :data-bs-slide-to="index"
                    :class="{active:item.isActive}"
                    :key="index"
                    :aria-label="index"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div
                    class="carousel-item "
                    v-for="item in jumboItems"
                    :class="{active:item.isActive}"
                    :key="item.index"
                  >
                    <nuxt-link :to="item.link">
                      <div
                        :style="{'background':'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0.8)),url(' + item.jumboImg + ')', 'margin-bottom':0}"
                        class="jumbotron jumbotron-fluid jumboheight"
                      >
                      </div>
                      <div class="carousel-caption">
                        <h5>{{item.title}}</h5>
                        <p>{{item.subTitle}}</p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <button
                  class="carousel-control-prev d-none d-md-flex"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                  aria-label="上一个 previous"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">上一个</span>
                </button>
                <button
                  class="carousel-control-next d-none d-md-flex"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                  aria-label="下一个 next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">下一个</span>
                </button>
              </div>
            </div>
            <div class="col-lg-4 col-12 mt-3">
              <h5>序言 <span class="ms-2 subtext">Preface</span></h5>
              <h3 class="colored bold">驰骋中州，纵横交通</h3>
              <br>
              <p>上世纪五十年代末期，河南省开始兴办地方铁路。半个多世纪间，先后有16条地方铁路线路横贯中原大地，长度逾1,600千米。<br><br>地方铁路诞生于大跃进年代为了适应快速增长的煤、钢和木材运输需要建设的“土铁路”。木轨、锅驼机车、手工车厢……这些极富想象力的创造带来了意想不到的经济效益，逐渐由地方政府规范化运营并蓬勃发展。<br><br>随着现代交通运输技术的不断演进，标准低、运量小的地方铁路逐渐失去了优势，生态位逐渐被公路蚕食。2010年前后，窄轨线路相继停运，其中一些已被拆除，另一些则至今隐藏在中州的原野上。<br><br>很少有人知道，河南曾经拥有我国最发达的窄轨铁路系统。欢迎来到中原铁道 (数字) 博物馆，开启一场轨距762毫米的旅程。</p>
            </div>
          </div>
        </div>
        <div
          class="col-12"
          id="content"
        >
          <div
            id="virtualtour"
            class="mt-3"
          >
            <div class="row">
              <div
                class="col-12 col-sm-6 col-lg-4"
                v-for="(item,index) in categories"
                :key="index"
              >
                <nuxt-link :to="item.link">
                  <div class="card text-dark mt-3">
                    <img
                      class="card-img index-img"
                      :src="item.bgImg"
                      :alt="item.title"
                    >
                    <div class="card-img-overlay">
                      <h2 class="text-light">{{item.title}}</h2>
                      <h5 class="text-light">{{item.subtitle}}</h5>
                      <p class="text-light">{{item.details}}</p>
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
export default {
  name: 'IndexPage',
  head() {
    return {
      meta: this.head.meta
    }
  },
  data() {
    return {
      head: [],
      update: [],
      jumboItems: [],
      categories: []
    }
  },

  created() {
    let data = require('../static/docs/index.json')
    this.head = data.head
    this.update = data.update
    this.jumboItems = data.jumboItems
    this.categories = data.categories
  }
}
</script>
