import Vue from "vue";
import VueRouter from "vue-router";
import User from "./User.js";
import Seller from "./Seller.js";
import Admin from "./Admin.js";
Vue.use(VueRouter);

const routes = [...User, ...Seller, ...Admin];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
