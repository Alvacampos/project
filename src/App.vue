<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">Home</router-link>|
        </b-nav-item>
        <b-nav-item>
          <router-link to="/about">About</router-link>|
        </b-nav-item>
        <b-nav-item>
          <router-link to="/help">Help</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.loading-spinner {
  align-content: center;
  vertical-align: middle;
  line-height: 90vh;
}
</style>
