import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/User/Home.vue";
import HomePage from "../components/User/HomePage.vue";
import Orders from "../components/User/Orders.vue";
import AllServies from "../components/User/AllServies.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/user/",
    name: "user.home",
    component: HomeView,
    children: [
      {
        path: "all-servies",
        name: "AllServies",
        component: AllServies,
      },
      {
        path: "main",
        name: "Home",
        component: HomePage,
      },
      {
        path: "Orders",
        name: "Orders",
        component: Orders,
      },
    ],
  },
];

export default routes;
