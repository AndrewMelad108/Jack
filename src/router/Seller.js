import Vue from "vue";
import VueRouter from "vue-router";
import SellerHomeView from "../views/Seller/SellerHome.vue";
import SellerHome from "../components/Seller/SellerHome.vue";
import SellerOrders from "../components/Seller/SellerOrders.vue";
import SellerAllServies from "../components/Seller/SellerAllServies.vue";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/Seller/main",
  //   name: "HomePage",
  //   component: SellerPage,
  // },
  {
    path: "/Seller/",
    name: "Home",
    component: SellerHomeView,
    children: [
      {
        path: "all-servies",
        name: "AllServies",
        component: SellerAllServies,
      },
      {
        path: "main",
        name: "Home",
        component: SellerHome,
      },
      {
        path: "Orders",
        name: "Orders",
        component: SellerOrders,
      },
    ],
  },
];

export default routes;
