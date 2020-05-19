<template>
  <div class="articles">
    <h1 class="title">Les dernières actus</h1>
    <ul class="articles__list">
      <li v-for="article in articles" :key="article.id" class="articles__item">
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
            <div class="article__content">
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
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
import moment from "moment"

export default {
  name: "app-articles",
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
  padding: 1rem;

  @include breakpoint(lg) {
    padding: 3rem 0;
  }

  &__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
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

  &__link {
  }

  &__thumbnail {
    height: 250px;
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
    -webkit-line-clamp: 3;
    margin: 0 0 2rem 0;
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
