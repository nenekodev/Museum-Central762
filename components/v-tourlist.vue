<template>
  <div>
    <div
      class="row mt-6"
      v-viewer="options"
    >
      <div class="col-12 col-md-4 mt-3">
        <h1>{{ title }}</h1>
        <br>
        <p v-html="description"></p>
      </div>
      <div
        v-if="mainPic"
        class="col-12 col-md-8 mt-3 d-flex"
        style="flex-wrap: wrap; justify-content: center;"
      >
        <div
          class="card ratio"
          style="--bs-aspect-ratio: calc(2 / 3 * 100%);"
        >
          <img
            class="card-img"
            :src="mainPic.url"
            :alt="mainPic.alt"
          />
        </div>
        <p class="mt-1 subtext">{{mainPic.alt}}</p>
      </div>
      <div
        class="col-12 col-md-4 d-flex"
        style="flex-wrap: wrap;justify-content: center;"
        v-for="(pic, index) in pics"
        :key="index"
      >
        <div
          class="card ratio mt-3"
          style="--bs-aspect-ratio: calc(2 / 3 * 100%);"
        >
          <img
            class="card-img"
            :src="pic.url"
            :alt="pic.alt"
          />
        </div>
        <p class="mt-1 subtext">{{pic.alt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import Vue from 'vue'
Vue.use(VueViewer)
export default {
  name: 'v-tourlist',
  props: ['title', 'description', 'mainPic', 'pics'],
  data() {
    return {
      options: {
        toolbar: false,
        transition: false,
        fullscreen: false,
        rotatable: false
      }
    }
  }
}
</script>
