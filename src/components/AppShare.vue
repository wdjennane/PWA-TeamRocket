<template>
  <ul class="share container--small">
    Partager
    <li v-for="(share, index) in shares" :key="index" class="share__item">
      <a
        :href="share.url"
        target="_blank"
        rel="noopener noreferrer"
        class="share__link"
      >
        <img :src="getSvg(share.name)" :alt="share.name" class="share__image" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "app-share",
  data() {
    return {
      shares: [
        {
          name: "twitter",
          url: `https://www.facebook.com/sharer.php?u=${window.location.pathname}`
        },
        {
          name: "facebook",
          url: `https://twitter.com/intent/tweet?url=${window.location.pathname}`
        }
      ]
    }
  },
  methods: {
    getSvg(string) {
      return require(`@/assets/images/${string}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables";
@import "~@/assets/scss/mixins";

.share {
  padding: 1rem;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: flex-end;
  max-width: 800px;
  margin: auto;

  &__item {
    margin: 0 0 0 1rem;
    background-color: map-get($colors, red);
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
  }

  &__link {
  }

  &__image {
    height: 100%;
    width: 100%;
  }
}
</style>
