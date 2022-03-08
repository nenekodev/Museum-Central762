<template>
  <div>
    <v-navbar />
    <v-headjumbo
      :title="page.title"
      :subtitle="page.subtitle"
      intro=""
    />
    <div class="container-xl">
      <div
        class="row"
        id="maincont"
      >
        <div
          class="col-12"
          v-for="(item, index) in list"
          :key="index"
        >
          <v-album
            :list="item"
            :scale="scale"
          />
        </div>
      </div>
      <v-footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifeDetailPage',
  head() {
    return {
      title: `${this.page.title} / 中原铁道（数字）博物馆`,
      meta: this.head.meta
    }
  },
  data() {
    return {
      head: [],
      page: [],
      list: [],
      scale: ''
    }
  },
  created() {
    let data = require('../../static/docs/life/' + this.$route.params.id + '/' + this.$route.params.id + '.json')
    this.head = data.head
    this.page = data.page
    this.list = data.list
    this.scale = data.scale
  }
}
</script>
