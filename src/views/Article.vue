<template>
  <div class="article">
    <img
      :src="article.thumbnail"
      alt="article banner"
      class="article__banner"
    />
    <div class="article__container container--small">
      <h1 class="article__title">{{ article.title }}</h1>
      <p class="article__info">
        Le {{ formatDate(article.date, "LL") }} par {{ article.author }}
      </p>
      <div class="article__content" v-html="article.content" />
    </div>

    <app-share />
    <ul class="articles">
      <li
        v-for="article in articles"
        :key="article.id"
        class="articles__item"
      ></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
import AppShare from "@/components/AppShare"

export default {
  name: "app-article",
  components: {
    AppShare
  },
  data() {
    return {
      article: {},
      articles: []
    }
  },
  async created() {
    moment.locale("fr")

    const { data } = await axios({
      method: "get",
      url:
        "https://my-json-server.typicode.com/wdjennane/PWA-teamrocket/articles"
    })
    this.articles = data
    this.article = data.find(
      article => article.slug === this.$route.params.slug
    )
  },
  methods: {
    formatDate(date, format) {
      return moment(date).format(format)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables";
@import "~@/assets/scss/mixins";

.article {
  &__banner {
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin: 60px 0 0 0;

    @include breakpoint(s) {
      height: 60vh;
    }
  }

  &__container {
    padding: 2rem 1rem;
  }

  &__title {
    font-size: 2rem;
    line-height: 125%;
    font-weight: bold;
    margin: 0 0 1rem 0;
    text-transform: uppercase;

    @include breakpoint(lg) {
      font-size: 2.5rem;
    }
  }

  &__info {
    font-style: italic;
  }

  &__title {
  }
}
</style>

<style lang="scss">
.article__content {
  p {
    font-size: 1.25rem;
    line-height: 150%;
  }

  p,
  img {
    padding: 1rem 0;
  }
}
</style>
