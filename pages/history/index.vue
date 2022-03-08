<template>
  <div>
    <v-navbar />
    <v-headjumbo
      :title="page.title"
      :subtitle="page.subtitle"
      :intro="page.intro"
    />
    <div class="container-xl">
      <div
        class="row"
        id="maincont"
      >
        <div
          class="col-12"
          id="content"
        >
          <div
            id="markdown"
            v-html="Markdown"
            class="mt-5 mb-5"
          ></div>
        </div>
        <v-footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryPage',
  head() {
    return {
      title: `${this.page.title} / 中原铁道（数字）博物馆`,
      meta: this.head.meta
    }
  },
  data() {
    return {
      head: [],
      page: []
    }
  },
  created() {
    let data = require('../../static/docs/history/history.json')
    this.head = data.head
    this.page = data.page
    let rawMD = require('../../static/docs/history/history.md')
    this.Markdown = rawMD.default
  }
}
</script>
