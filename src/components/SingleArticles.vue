<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.id">
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

</style>
