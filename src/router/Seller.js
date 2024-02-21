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
    name: "Provider.Register",
    component: SellerRegister,
  },
  {
    path: "/Seller/main",
    name: "Provider.Home",
    component: SellerHome,
  },
  {
    path: "/Seller",
    name: "Home",
    component: SellerHomeView,
    children: [
      {
        path: "/Home",
        name: "Provider.ControlPanel",
        component: Home,
      },
      {
        path: "/Requests",
        name: "Provider.Requests",
        component: SellerRequests,
      },
      {
        path: "/RequestedOrders",
        name: "Provider.Requested orders",
        component: SellerRequestedOrders,
      },
      {
        path: "/RequestedService",
        name: "Provider.Requested service",
        component: SellerRequestedService,
      },
      {
        path: "/request/:requestId/Details",
        name: "Provider.RequestDetials",
        component: SellerRequestDetials,
      },
      {
        path: "/SellerOffers",
        name: "Provider.Offers",
        component: SellerOffers,
      },
      {
        path: "/Offer/:OfferId/Create",
        name: "Provider.SellerOferCreate",
        component: SellerOferCreate,
      },
      {
        path: "/Orders",
        name: "Provider.Orders",
        component: SellerOrders,
      },
      {
        path: "/Profile",
        name: "Provider.Profile",
        component: SellerProfile,
      },
      {
        path: "/Wallet",
        name: "Provider.Wallet",
        component: SellerWallet,
      },
      {
        path: "/Chat",
        name: "Provider.Chats",
        component: SellerChat,
      },
      {
        path: "/Policy",
        name: "Provider.Policy",
        component: SellerPolicy,
      },
      {
        path: "/Delivery",
        name: "Provider.Delivery",
        component: SellerDelivery,
      },
      {
        path: "/ProfileServices",
        name: "Provider.Profile Servies",
        component: SellerProfileServices,
      },
    ],
  },
];

export default routes;
