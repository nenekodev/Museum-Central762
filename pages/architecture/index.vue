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
          v-for="(arch, index) in archs"
          :key="index"
        >
          <v-album
            :list="arch"
            scale=280
          />
        </div>
        <v-footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArchitecturePage',
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
      archs: []
    }
  },
  created() {
    let data = require('../../static/docs/architecture/architecture.json')
    this.head = data.head
    this.page = data.page
    this.archs = data.architecture
  }
}
</script>
