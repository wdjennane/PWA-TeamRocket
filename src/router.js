import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Articles from "./views/Articles.vue"
import Article from "./views/Article.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/articles",
      name: "articles",
      component: Articles
    },
    {
      path: "/article/:slug",
      name: "article",
      component: Article
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
