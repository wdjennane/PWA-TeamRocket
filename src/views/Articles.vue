<template>
  <div class="articles container">
    <h1 class="title">Les dernières actus</h1>
    <ul class="articles__list">
      <li v-for="article in articles" :key="article.id" class="articles__item">
        <app-article-item :article="article" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
import AppArticleItem from "@/components/AppArticleItem"

export default {
  name: "app-articles",
  components: {
    AppArticleItem
  },
  data() {
    return {
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

.title {
  font-weight: bold;
  font-size: 2rem;
  margin: 0 0 1rem 0;

  @include breakpoint(lg) {
    font-size: 3rem;
    margin: 0 0 3rem 0;
  }
}

.articles {
  margin: 60px auto 0;
  padding: 1rem;

  @include breakpoint(lg) {
    padding: 3rem 1rem;
  }

  &__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  &__item {
    background-color: map-get($colors, white);
    box-shadow: 0px 0px 10x rgba($color: map-get($colors, black), $alpha: 0.25);
    transition: box-shadow 0.3s;

    @include breakpoint(s) {
      width: calc(100% / 2 - 0.5rem);
    }

    @include breakpoint(lg) {
      width: calc(100% / 3 - 1rem);

      &:hover {
        box-shadow: 0px 0px 20px
          rgba($color: map-get($colors, black), $alpha: 0.25);
      }
    }

    &:not(:last-child) {
      margin: 0 0 2rem 0;
      @include breakpoint(s) {
        margin: 0 0 1rem 0;
      }
      @include breakpoint(lg) {
        margin: 0 0 2rem 0;
      }
    }
    @include breakpoint(lg) {
      margin: 0 0 2rem 0;
    }
  }
}
</style>
