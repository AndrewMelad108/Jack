import Vue from "vue";
import VueRouter from "vue-router";
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
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/User/",
    name: "HomeView",
    component: UserHomeView,
    children: [
      {
        path: "Home",
        name: "Home",
        component: UserHome,
      },
      {
        path: "all-servies",
        name: "UserAllServies",
        component: UserAllServies,
      },

      {
        path: "Orders",
        name: "UserOrders",
        component: UserOrders,
      },
      {
        path: "Chat",
        name: "UserChat",
        component: UserChat,
      },
      {
        path: "Profile",
        name: "UserProfile",
        component: UserProfile,
      },
      {
        path: "Wallet",
        name: "UserWallet",
        component: UserWallet,
      },
      {
        path: "Request/index",
        name: "UserRequests",
        component: UserRequest,
      },
    ],
  },
];

export default routes;
