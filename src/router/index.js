import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

let router = new Router({
  mode: "hash",
  routes: [{
    path: "/",
    component: require("../pages/home-page.vue").default,
  }]
})

export default router