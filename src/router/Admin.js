import Vue from "vue";
import VueRouter from "vue-router";
import AdminLogin from "../views/Admin/AdminLogin.vue";
import Dashborad from "../views/Admin/Dashborad.vue";
import AdminHome from "@/components/Admin/AdminHome.vue";
import CarMaintenanceAndCare from "@/components/Admin/services/CarMaintenanceAndCare.vue";
import TowingAndShipping from "@/components/Admin/services/Towing.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Admin/Login",
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/Admin",
    name: "Dashborad",
    component: Dashborad,
    children: [
      { path: "Home", name: "Admin.Home", component: AdminHome },
      {
        path: "TowingAndShipping",
        name: "Admin.Towing",
        component: TowingAndShipping,
      },
      {
        path: "CarMaintenanceAndCare",
        name: "Admin.Car Maintenance And Care",
        component: CarMaintenanceAndCare,
      },
    ],
  },
];

export default routes;
