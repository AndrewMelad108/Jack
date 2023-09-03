import Vue from "vue";
import VueRouter from "vue-router";
import SellerHomeView from "../views/Seller/SellerHome.vue";
import SellerRegister from "../views/Seller/SellerRegister.vue";
import SellerHome from "../components/Seller/SellerHome.vue";
import SellerOrders from "../components/Seller/SellerOrders.vue";
import Home from "../components/Seller/SellerAllServies.vue";
import SellerOffers from "../components/Seller/SellerOffers.vue";
import SellerProfile from "../components/Seller/SellerProfile.vue";
import SellerChat from "../components/Seller/SellerChat.vue";
import SellerWallet from "../components/Seller/SellerWallet.vue";
import SellerRequests from "../components/Seller/SellerRequests.vue";
import SellerRequestedService from "../components/Seller/SellerRequestedService.vue";
import SellerRequestedOrders from "../components/Seller/SellerRequestedOrders.vue";
import SellerRequestDetials from "../components/Seller/SellerRequestDetials.vue";
import SellerOferCreate from "../components/Seller/SellerOferCreate.vue";
import SellerProfileServices from "../components/Seller/SellerProfileServices.vue";
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
    path: "/Seller",
    name: "Home",
    component: SellerHomeView,
    children: [
      {
        path: "/Home",
        name: "Seller.ControlPanel",
        component: Home,
      },
      {
        path: "/Requests",
        name: "Seller.Requests",
        component: SellerRequests,
      },
      {
        path: "/RequestedOrders",
        name: "Seller.Requested orders",
        component: SellerRequestedOrders,
      },
      {
        path: "/RequestedService",
        name: "Seller.Requested service",
        component: SellerRequestedService,
      },
      {
        path: "/request/:requestId/Details",
        name: "Seller.RequestDetials",
        component: SellerRequestDetials,
      },
      {
        path: "/SellerOffers",
        name: "Seller.Offers",
        component: SellerOffers,
      },
      {
        path: "/Offer/:OfferId/Create",
        name: "Seller.SellerOferCreate",
        component: SellerOferCreate,
      },
      {
        path: "/Orders",
        name: "Seller.Orders",
        component: SellerOrders,
      },
      {
        path: "/Profile",
        name: "Seller.Profile",
        component: SellerProfile,
      },
      {
        path: "/Wallet",
        name: "Seller.Wallet",
        component: SellerWallet,
      },
      {
        path: "/Chat",
        name: "Seller.Chats",
        component: SellerChat,
      },
      {
        path: "/ProfileServices",
        name: "Seller.Profile Servies",
        component: SellerProfileServices,
      },
    ],
  },
];

export default routes;
