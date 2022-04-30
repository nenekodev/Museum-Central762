<template>
  <nav
    id="nav"
    class="navbar fixed-top navbar-expand-lg"
  >
    <div
      class="container-xl"
      id="navcontain"
    >
      <nuxt-link to="/">
        <div
          class="d-flex"
          style="align-items:center;"
        >
          <img
            class="logo d-inline-block"
            src="/img/logo.png"
            style="height: 40px"
            alt="中原铁道(数字)博物馆"
          ><span class="d-md-inline me-1">·</span>
          <div
            class="logo d-inline-block space"
            style="white-space:nowrap;"
          >中原铁道<span class="d-inline d-md-none"><br></span>(数字)博物馆</div>
        </div>
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNavDropdown"
        style="justify-content:flex-end;"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              to="/virtualtour"
            >
              <span>漫游</span>
              <span class="subtext ms-2">Virtual Tour</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              to="/depot"
            >
              <span>车辆</span>
              <span class="subtext ms-2">Depot</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              to="/architecture"
            >
              <span>建筑</span>
              <span class="subtext ms-2">Architecture</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              to="/life"
            >
              <span>生活</span>
              <span class="subtext ms-2">Life</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              to="/history"
            >
              <span>历史</span>
              <span class="subtext ms-2">History</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              to="/research"
            >
              <span>研究</span>
              <span class="subtext ms-2">Research</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'v-navbar',
}
</script>
