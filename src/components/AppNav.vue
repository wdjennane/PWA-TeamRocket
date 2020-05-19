<template>
  <nav class="nav">
    <div class="nav__container">
      <router-link :to="{ name: 'home' }" class="nav__logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </router-link>
      <router-link :to="{ name: 'articles' }">
        Articles
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables";

.nav {
  width: 100%;
  top: 0;
  height: 60px;
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 0 1rem;
  background-color: map-get($colors, white);

  &__container {
    max-width: 1440px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-weight: bold;
    font-size: 1.25rem;
    text-transform: uppercase;
    display: flex;
    align-items: flex-end;
  }
}
</style>
