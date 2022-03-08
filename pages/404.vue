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
            <div
              class="col-12 mt-6 d-flex flex-column justify-content-center"
              style="height:65vh;"
            >
              <h1>404 not found</h1>
              <h5 class="subtext">这里什么都没有</h5>
              <br>
              <nuxt-link
                to="/"
                class="colored"
              >返回首页 ›</nuxt-link>
            </div>
            <div
              class="col-12"
              id="content"
            >
              <v-footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '404Page'
}
</script>
