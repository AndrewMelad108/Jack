import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/views/User/UserRegister.vue";
import MainPage from "../views/User/MainPage.vue";
import UserHomeView from "../views/User/UserHome.vue";
import HomePage from "../components/User/HomePage.vue";
import UserHome from "../components/User/UserHome.vue";
// import UserAllServies from "../components/User/UserAllServies.vue";
import UserRequest from "../components/User/UserRequest.vue";
import OfferDetails from "../components/User/OfferDetails.vue";
import UserOrders from "../components/User/UserOrders.vue";
import UserChat from "../components/User/UserChat.vue";
import UserWallet from "../components/User/UserWallet.vue";
import UserProfile from "../components/User/UserProfile.vue";
import TowingAndShipping from "@/components/User/Services/TowingAndShipping.vue";
import CarMaintenanceAndCare from "@/components/User/Services/CarMaintenanceAndCare.vue";
import SparePartsRequest from "@/components/User/Services/SparePartsRequest.vue";
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
    ],
  },
];

export default routes;
