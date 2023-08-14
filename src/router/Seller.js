import Vue from "vue";
import VueRouter from "vue-router";
import SellerHomeView from "../views/Seller/SellerHome.vue";
import SellerRegister from "../views/Seller/SellerRegister.vue";
import SellerHome from "../components/Seller/SellerHome.vue";
import SellerOrders from "../components/Seller/SellerOrders.vue";
import Home from "../components/Seller/SellerAllServies.vue";
import SellerRequests from "../components/Seller/SellerRequests.vue";
import SellerOffers from "../components/Seller/SellerOffers.vue";
import SellerProfile from "../components/Seller/SellerProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Seller/Register/Create",
    name: "Seller.Register",
    component: SellerRegister,
  },
  {
    path: "/Seller/main",
    name: "Seller.Home",
    component: SellerHome,
  },
  {
    path: "/Seller/",
    name: "Home",
    component: SellerHomeView,
    children: [
      {
        path: "Home",
        name: "Seller.ControlPanel",
        component: Home,
      },
      {
        path: "Requests",
        name: "Seller.Requests",
        component: SellerRequests,
      },
      {
        path: "SellerOffers",
        name: "Seller.Offers",
        component: SellerOffers,
      },
      {
        path: "Orders",
        name: "Seller.Orders",
        component: SellerOrders,
      },
      {
        path: "Profile",
        name: "Seller.Profile",
        component: SellerProfile,
      },
    ],
  },
];

export default routes;
