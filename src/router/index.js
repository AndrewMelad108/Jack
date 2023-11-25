import Vue from "vue";
import VueRouter from "vue-router";
import User from "./User.js";
import Seller from "./Seller.js";
import Admin from "./Admin.js";
import Login from "@/views/Shared/Login.vue";
import FeaturedServices from "@/components/User/MainPage/FeaturedServices.vue";
import Testemonials from "@/components/User/MainPage/Testemonials.vue";
import AboutUs from "@/components/User/MainPage/AboutUs.vue";
import FAQs from "@/components/User/MainPage/FAQs.vue";
import Terms from "@/components/User/MainPage/Terms.vue";
import policy from "@/components/User/MainPage/policy.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Login/Create",
    name: "LogIn",
    component: Login,
  },
  {
    path: "/FeaturedServices",
    name: "FeaturedServices",
    component: FeaturedServices,
  },
  {
    path: "/Testemonials",
    name: "Testemonials",
    component: Testemonials,
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/FAQs",
    name: "FAQs",
    component: FAQs,
  },
  {
    path: "/Terms",
    name: "Terms",
    component: Terms,
  },
  {
    path: "/policy",
    name: "policy",
    component: policy,
  },

  ...User,
  ...Seller,
  ...Admin,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
