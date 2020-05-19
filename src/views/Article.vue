<template>
  <div class="">
    <h1>An article</h1>
    {{ $route.params.slug }}
  </div>
</template>

<script>
export default {
  name: "app-article"
}
</script>

<style lang="scss" scoped></style>
