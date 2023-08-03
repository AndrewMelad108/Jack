import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/views/Shared/Register.vue";
import MainPage from "../views/User/MainPage.vue";
import UserHomeView from "../views/User/UserHome.vue";
import HomePage from "../components/User/HomePage.vue";
import UserHome from "../components/User/UserHome.vue";
import UserAllServies from "../components/User/UserAllServies.vue";
import UserRequest from "../components/User/UserRequest.vue";
import UserOrders from "../components/User/UserOrders.vue";
import UserChat from "../components/User/UserChat.vue";
import UserWallet from "../components/User/UserWallet.vue";
import UserProfile from "../components/User/UserProfile.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/User/main",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/Register/Create",
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
        name: "ControlPanel",
        component: UserHome,
      },
      {
        path: "all-servies",
        name: "UserAllServies",
        component: UserAllServies,
      },

      {
        path: "Orders",
        name: "Orders",
        component: UserOrders,
      },
      {
        path: "Chat",
        name: "Chats",
        component: UserChat,
      },
      {
        path: "Profile",
        name: "Profile",
        component: UserProfile,
      },
      {
        path: "Wallet",
        name: "Wallet",
        component: UserWallet,
      },
      {
        path: "Request",
        name: "Requests",
        component: UserRequest,
      },
    ],
  },
];

export default routes;
