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
import SellerPolicy from "../components/Seller/SellerPolicy.vue";
import SellerDelivery from "../components/Seller/SellerOfferDelivery.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Seller/Register/Create",
    name: "Seller.Register",
    component: SellerRegister,
  },
  {
    path: "/Seller/main",
    name: "provider.Home",
    component: SellerHome,
  },
  {
    path: "/Seller",
    name: "Home",
    component: SellerHomeView,
    children: [
      {
        path: "/Home",
        name: "provider.ControlPanel",
        component: Home,
      },
      {
        path: "/Requests",
        name: "provider.Requests",
        component: SellerRequests,
      },
      {
        path: "/RequestedOrders",
        name: "provider.Requested orders",
        component: SellerRequestedOrders,
      },
      {
        path: "/RequestedService",
        name: "provider.Requested service",
        component: SellerRequestedService,
      },
      {
        path: "/request/:requestId/Details",
        name: "provider.RequestDetials",
        component: SellerRequestDetials,
      },
      {
        path: "/SellerOffers",
        name: "provider.Offers",
        component: SellerOffers,
      },
      {
        path: "/Offer/:OfferId/Create",
        name: "provider.SellerOferCreate",
        component: SellerOferCreate,
      },
      {
        path: "/Orders",
        name: "provider.Orders",
        component: SellerOrders,
      },
      {
        path: "/Profile",
        name: "provider.Profile",
        component: SellerProfile,
      },
      {
        path: "/Wallet",
        name: "provider.Wallet",
        component: SellerWallet,
      },
      {
        path: "/Chat",
        name: "provider.Chats",
        component: SellerChat,
      },
      {
        path: "/Policy",
        name: "provider.Policy",
        component: SellerPolicy,
      },
      {
        path: "/Delivery",
        name: "provider.Delivery",
        component: SellerDelivery,
      },
      {
        path: "/ProfileServices",
        name: "provider.Profile Servies",
        component: SellerProfileServices,
      },
    ],
  },
];

export default routes;
