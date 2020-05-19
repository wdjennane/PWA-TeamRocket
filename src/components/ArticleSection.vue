<template>
  <div class="container">
    <h2>Dernières actus</h2>
    <div articles_container>
      <SingleArticle/>
      <SingleArticle/>
      <SingleArticle/>
    </div>
    <button class="button_article" type="button"> DECOUVRIR NOS ARTICLES</button>
  </div>
</template>


<script>
import SingleArticle from "./SingleArticles"
export default {
  components: SingleArticle
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: #000;

    h2 {
      color: white;
      font-size: 64px;
      font-weight: bold;
      margin-top: 30px;

    }
    .button_article {
      height: 80px;
      width: 480px;
      border: 5px solid white;
      color: white;
      background-color: transparent;
      font-size: 24px;
      font-weight: bold;

    }
  }
</style>
