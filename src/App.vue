<template>
  <div id="app">
    <app-nav v-if= "$route.name !== 'home'" />
    <main :class= "$route.name === 'home' ? 'normal_main' : 'main'" >
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

.normal_main {
  margin: none;
}
</style>
