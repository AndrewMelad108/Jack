import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/views/User/UserRegister.vue";
import MainPage from "../views/User/MainPage.vue";
import UserHomeView from "../views/User/UserHome.vue";
import HomePage from "../components/User/HomePage.vue";
import UserHome from "../components/User/UserHome.vue";
import UserRequest from "../components/User/UserRequest.vue";
import OfferDetails from "../components/User/OfferDetails.vue";
import UserOrders from "../components/User/UserOrders.vue";
import UserChat from "../components/User/UserChat.vue";
import UserWallet from "../components/User/UserWallet.vue";
import UserProfile from "../components/User/UserProfile.vue";
import TowingAndShipping from "@/components/User/Services/TowingAndShipping.vue";
import CarMaintenanceAndCare from "@/components/User/Services/CarMaintenanceAndCare.vue";
import SparePartsRequest from "@/components/User/Services/SparePartsRequest.vue";
import ShippingAndForwarding from "@/components/User/Services/ShippingAndForwarding.vue";
import DeliveryServices from "@/components/User/Services/DeliveryServices.vue";
import SellyourBrokenCar from "@/components/User/Services/SellyourBrokenCar.vue";
import ChatInfo from "@/components/User/ChatInfo.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/User/main",
    name: "User.Home",
    component: HomePage,
  },
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/User/Register/Create",
    name: "Register",
    component: Register,
  },
  {
    path: "/User/",
    name: "HomeView",
    component: UserHomeView,
    children: [
      {
        path: "Home",
        name: "User.ControlPanel",
        component: UserHome,
      },
      {
        path: "Request",
        name: "User.Requests",
        component: UserRequest,
      },
      {
        path: "OfferDetails/:OfferID",
        name: "User.OfferDetails",
        component: OfferDetails,
      },
      {
        path: "Orders",
        name: "User.Orders",
        component: UserOrders,
      },
      {
        path: "Chat",
        name: "User.Chats",
        component: UserChat,
      },
      {
        path: "ChatInfo/:chatId/Create",
        name: "User.ChatInfo",
        component: ChatInfo,
      },
      {
        path: "Profile",
        name: "User.Profile",
        component: UserProfile,
      },
      {
        path: "Wallet",
        name: "User.Wallet",
        component: UserWallet,
      },
      {
        path: "TowingAndShipping",
        name: "User.Towing",
        component: TowingAndShipping,
      },
      {
        path: "CarMaintenanceAndCare",
        name: "User.Repairing",
        component: CarMaintenanceAndCare,
      },
      {
        path: "SparePartsRequest",
        name: "User.Spare Parts",
        component: SparePartsRequest,
      },
      {
        path: "ShippingAndForwarding",
        name: "User.Baggage Transfer",
        component: ShippingAndForwarding,
      },
      {
        path: "Delivery",
        name: "User.Delivery",
        component: DeliveryServices,
      },
      {
        path: "SellyourBrokenCar",
        name: "User.Selling Cars",
        component: SellyourBrokenCar,
      },
    ],
  },
];

export default routes;
