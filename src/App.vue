<template>
  <div id="app">
    <app-nav />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue"
export default {
  components: {
    AppNav
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/style";

.main {
  max-width: 1440px;
  margin: 60px auto 0;
}
</style>
