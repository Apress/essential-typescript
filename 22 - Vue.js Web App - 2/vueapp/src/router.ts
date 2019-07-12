import Vue from "vue"
import Router from "vue-router"
import ProductList from "./views/ProductList.vue";
import OrderDetails from "./views/OrderDetails.vue";
import Summary from "./views/Summary.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/products", component: ProductList},
    { path: "/order", component: OrderDetails },
    { path: "/summary", component: Summary },
    { path: "/", redirect: "/products"}
  ]
})
