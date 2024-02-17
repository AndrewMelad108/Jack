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
    name: "Customer.Home",
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
        name: "Customer.ControlPanel",
        component: UserHome,
      },
      {
        path: "Request",
        name: "Customer.Requests",
        component: UserRequest,
      },
      {
        path: "OfferDetails/:OfferID",
        name: "Customer.OfferDetails",
        component: OfferDetails,
      },
      {
        path: "Orders",
        name: "Customer.Orders",
        component: UserOrders,
      },
      {
        path: "Chat",
        name: "Customer.Chats",
        component: UserChat,
      },
      {
        path: "ChatInfo/:chatId/Create",
        name: "Customer.ChatInfo",
        component: ChatInfo,
      },
      {
        path: "Profile",
        name: "Customer.Profile",
        component: UserProfile,
      },
      {
        path: "Wallet",
        name: "Customer.Wallet",
        component: UserWallet,
      },
      {
        path: "TowingAndShipping",
        name: "Customer.Towing",
        component: TowingAndShipping,
      },
      {
        path: "CarMaintenanceAndCare",
        name: "Customer.Repairing",
        component: CarMaintenanceAndCare,
      },
      {
        path: "SparePartsRequest",
        name: "Customer.Spare Parts",
        component: SparePartsRequest,
      },
      {
        path: "ShippingAndForwarding",
        name: "Customer.Baggage Transfer",
        component: ShippingAndForwarding,
      },
      {
        path: "Delivery",
        name: "Customer.Delivery",
        component: DeliveryServices,
      },
      {
        path: "SellyourBrokenCar",
        name: "Customer.Selling Cars",
        component: SellyourBrokenCar,
      },
    ],
  },
];

export default routes;
