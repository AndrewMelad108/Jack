import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/views/User/UserRegister.vue";
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
        path: "all-servies",
        name: "User.UserAllServies",
        component: UserAllServies,
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
        path: "Request",
        name: "User.Requests",
        component: UserRequest,
      },
    ],
  },
];

export default routes;
