<template>
  <div class="home">
    <img
      src="@/assets/images/valorant.jpg"
      alt="background"
      class="home__background"
    />

    <div class="home__container">
      <nav class="nav">
        <router-link :to="{ name: 'home' }" class="nav__logo">
          <img src="@/assets/images/logo-white.svg" alt="logo" />
        </router-link>
        <router-link :to="{ name: 'articles' }" class="nav__link">
          Articles
        </router-link>
      </nav>

      <div class="home__titles">
        <p class="home__title">Valorant</p>
        <p class="home__title home__title--second">News</p>
      </div>

      <div class="scroll">scroll down</div>
    </div>
    <div class="articles">
      <ul class="articles__list container">
        <li
          v-for="article in articles"
          :key="article.id"
          class="articles__item"
        >
          <app-article-item :article="article" />
        </li>
      </ul>

      <router-link :to="{ name: 'articles' }" class="articles__button">
        Découvrir d'autres articles
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import AppArticleItem from "@/components/AppArticleItem"

export default {
  name: "app-home",
  components: {
    AppArticleItem
  },
  data() {
    return {
      articles: []
    }
  },
  async created() {
    const { data } = await axios({
      method: "get",
      url:
        "https://my-json-server.typicode.com/wdjennane/PWA-teamrocket/articles"
    })
    this.articles = data.filter((article, index) => index < 3)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables";
@import "~@/assets/scss/mixins";

.home {
  &__container {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  &__background {
    position: absolute;
    height: 100%;
    width: 100vw;
    object-fit: cover;
    filter: brightness(60%);
    z-index: -1;
  }

  &__titles {
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;

    @include breakpoint(lg) {
      transform: translate(-20rem, 10rem);
    }
  }

  &__title {
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    color: map-get($colors, white);

    @include breakpoint(s) {
      font-size: 4rem;
    }

    @include breakpoint(lg) {
      font-size: 6rem;
    }

    &--second {
      @include breakpoint(s) {
        margin: 0 0 0 10rem;
      }

      @include breakpoint(lg) {
        margin: 0 0 0 30rem;
      }
    }
  }
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;

  @include breakpoint(lg) {
    padding: 0 1rem;
  }

  &__logo {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    img {
      height: 60px;
      width: 60px;
    }
  }

  &__link {
    color: map-get($colors, white);
    font-weight: bold;
  }
}

.scroll {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 1rem;
  color: map-get($colors, white);
  margin-top: auto;
  margin-left: auto;
  font-size: 1.5rem;
  font-weight: bold;
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  &::before {
    content: "";
    margin: 0 0 1rem 0;
    height: 100px;
    width: 2px;
    background-color: map-get($colors, white);
    transform-origin: bottom;
    will-change: transform;
    animation: scroll 1s both 0.1s infinite;

    @keyframes scroll {
      0% {
        transform: scaleY(0);
      }

      100% {
        transform: scaleY(1);
      }
    }
  }
}

.articles {
  padding: 2rem 0;
  background-color: map-get($colors, black);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0 1rem;
  }

  &__item {
    background-color: map-get($colors, white);
    box-shadow: 0px 0px 10x rgba($color: map-get($colors, black), $alpha: 0.25);
    transition: box-shadow 0.3s;
    margin: 0 0 2rem 0;

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

    @include breakpoint(lg) {
      margin: 0 0 2rem 0;
    }
  }

  &__button {
    position: relative;
    color: map-get($colors, white);
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem 2rem;
    border: 2px solid map-get($colors, white);
    overflow: hidden;
    z-index: 2;
    text-align: center;

    @include breakpoint(m) {
      font-size: 1.5rem;
      padding: 1rem 3rem;
      &:hover {
        color: map-get($colors, black);

        &::before {
          transform: scaleX(1);
        }
      }
    }

    &::before {
      content: "";
      position: absolute;
      transform: scaleX(0);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-origin: left;
      transition: transform 0.3s, color 0.3s 0.3s;
      background-color: map-get($colors, white);
      z-index: -1;
    }
  }
}
</style>
