import Vue from "vue";
import VueRouter from "vue-router";
import User from "./User.js";
import Seller from "./Seller.js";
import Admin from "./Admin.js";
import Login from "@/views/Shared/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login/Create",
    name: "LogIn",
    component: Login,
  },

  ...User,
  ...Seller,
  ...Admin,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
});

export default router;
