<template>
  <router-link
    :to="{ name: 'article', params: { slug: article.slug } }"
    class="articles__link"
  >
    <img
      :src="article.thumbnail"
      :alt="article.title"
      class="articles__thumbnail"
    />
    <div class="articles__container">
      <div class="articles__content">
        <span class="articles__info">
          Le {{ formatDate(article.date, "LL") }} par
          {{ article.author }}
        </span>
        <h3 class="articles__title">{{ article.title }}</h3>
        <p class="articles__text">
          {{ removeHTMLTags(article.content) }}
        </p>
      </div>
      <p class="articles__button">
        Lire l'article
        <img src="@/assets/images/arrow.svg" alt="arrow" />
      </p>
    </div>
  </router-link>
</template>

<script>
import moment from "moment"

export default {
  name: "app-article-item",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      articles: []
    }
  },
  async created() {
    moment.locale("fr")
  },
  methods: {
    formatDate(date, format) {
      return moment(date).format(format)
    },
    removeHTMLTags(string) {
      return string.replace(/<\/?[^>]+>/gi, "")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables";
@import "~@/assets/scss/mixins";

.articles {
  &__link {
  }

  &__thumbnail {
    height: 200px;
    width: 100%;
    object-fit: cover;
    overflow: hidden;

    @include breakpoint(s) {
      height: 250px;
    }
  }

  &__container {
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @include breakpoint(m) {
      padding: 1rem 2rem;
    }
  }

  &__info {
  }

  &__title,
  &__text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__title {
    -webkit-line-clamp: 2;
    font-weight: bold;
    text-transform: uppercase;
    margin: 1rem 0 0.75rem 0;
    font-size: 1.25rem;
  }

  &__text {
    -webkit-line-clamp: 2;
    margin: 0 0 2rem 0;
    line-height: 150%;

    @include breakpoint(m) {
      -webkit-line-clamp: 3;
    }
  }

  &__button {
    display: flex;
    color: map-get($colors, red);
    text-transform: uppercase;
    font-weight: bold;
    margin-left: auto;

    img {
      margin: 0 0 0 1rem;
    }
  }
}
</style>
