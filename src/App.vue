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
</style>
