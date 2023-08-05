import Vue from "vue";
import VueRouter from "vue-router";
import SellerHomeView from "../views/Seller/SellerHome.vue";
import SellerRegister from "../views/Seller/SellerRegister.vue";
import SellerHome from "../components/Seller/SellerHome.vue";
import SellerOrders from "../components/Seller/SellerOrders.vue";
import SellerAllServies from "../components/Seller/SellerAllServies.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Seller/Register/Create",
    name: "Seller.Register",
    component: SellerRegister,
  },
  {
    path: "/Seller/",
    name: "Home",
    component: SellerHomeView,
    children: [
      {
        path: "all-servies",
        name: "Seller.AllServies",
        component: SellerAllServies,
      },
      {
        path: "main",
        name: "Seller.Home",
        component: SellerHome,
      },
      {
        path: "Orders",
        name: "Seller.Orders",
        component: SellerOrders,
      },
    ],
  },
];

export default routes;
