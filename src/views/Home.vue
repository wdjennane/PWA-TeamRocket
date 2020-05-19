<template>
<section>
<div class="container">
  <img class="background" src="@/assets/images/valorant.jpg" alt="image">
  <div class="logo_container">
  <img class="logo" src="@/assets/images/logo-white.svg" alt="logo">
  <span>News</span>
  </div>
  <div class="main_title">
    <p>Valorant</p>
    <p class="title_last">News</p>
  </div>
  <div class="filter"/>
  <span class="scroll">scroll</span>
 </div>
 <ArticleSection/>
 </section>
</template>

<script>
import ArticleSection from '../components/ArticleSection'
export default {
  name: "app-home",

  components: {
    ArticleSection
  }
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
 .background {
   position: absolute;
    height: 100vh;
    width: 100vw;
  }

 .filter {
   position: absolute;
   top: 0;
   height: 100%;
   width: 100%;
   background-color: #000000;
   opacity: 0.4;
 }

 .logo_container {
    height: 50px;
    display: flex;
    align-items: center;
    z-index: 5;
    margin: 27px 0 40px 61px;
    .logo {
      height: 60px;
      width: 60px;
      margin-right: 10px;
  }
  span {
    font-size: 36px;
    color: white;
    font-weight: bold;
    align-self: center;
  }
 }

 .main_title {
    color: white;
    font-weight: bold;
    line-height: 100px;
    width: 560px;
    font-size: 96px;
    margin-top: 80px;
    margin-left: 70px;
    z-index: 5;

    p {
      color: white;
    }
    .title_last {
      text-align: end;
    }
 }
 .scroll {
   position: relative;
   font-size: 40px;
   font-weight: bold;
   color: white;
   z-index: 5;
   writing-mode:vertical-rl;
   margin-right: 40px;
   margin-top: 160px;

   &::after {
     position: absolute;
     right: 20px;
     top: 120px;
     content: "";
     height: 100px;
     width: 3px;
     background-color: #fff;

   }
 }
}

</style>
