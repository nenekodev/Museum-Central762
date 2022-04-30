<template>
  <div>
    <v-navbar />
    <v-headjumbo
      :title="page.title"
      :subtitle="page.subtitle"
      :intro="page.intro"
    />
    <div class="container-xl">
      <div class="row">
        <div
          class="col-12"
          v-for="(tour, index) in tours"
          :key="index"
        >
          <v-tourlist
            :title="tour.station"
            :description="tour.description"
            :mainPic="tour.mainPic"
            :pics="tour.pics"
          />
        </div>
        <v-footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialsPage',
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
      tours: []
    }
  },
  created() {
    let data = require('../../static/docs/specials/' + this.$route.params.id + '/' + this.$route.params.id + '.json')
    this.head = data.head
    this.page = data.page
    this.tours = data.tours
  }
}
</script>
