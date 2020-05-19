<template>
  <div id="app">
    <app-nav v-if="$route.name !== 'home'" />
    <main>
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
  max-width: 1400px;
  margin: 60px auto 0;
}
</style>
