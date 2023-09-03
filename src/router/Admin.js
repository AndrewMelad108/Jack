import Vue from "vue";
import VueRouter from "vue-router";
import AdminLogin from "../views/Admin/AdminLogin.vue";
import Dashborad from "../views/Admin/Dashborad.vue";
import AdminHome from "@/components/Admin/AdminHome.vue";
import CarMaintenanceAndCare from "@/components/Admin/services/CarMaintenanceAndCare.vue";
import TowingAndShipping from "@/components/Admin/services/Towing.vue";
import SpareParts from "@/components/Admin/services/SparePartsRequest.vue";
import ShippingAndForwarding from "@/components/Admin/services/ShippingAndForwarding.vue";
import DeliveryServices from "@/components/Admin/services/DeliveryServices.vue";
import SellYourBrokenCar from "@/components/Admin/services/SellYourBrokenCar.vue";
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
      { path: "/dashborad", name: "Admin.Home", component: AdminHome },
      {
        path: "TowingAndShipping",
        name: "Admin.Towing",
        component: TowingAndShipping,
      },
      {
        path: "CarMaintenanceAndCare",
        name: "Admin.Repairing",
        component: CarMaintenanceAndCare,
      },
      {
        path: "SpareParts",
        name: "Admin.Spare Parts",
        component: SpareParts,
      },
      {
        path: "ShippingAndForwarding",
        name: "Admin.Baggage Transfer",
        component: ShippingAndForwarding,
      },
      {
        path: "DeliveryServices",
        name: "Admin.Delivery",
        component: DeliveryServices,
      },
      {
        path: "SellYourBrokenCar",
        name: "Admin.Selling Cars",
        component: SellYourBrokenCar,
      },
    ],
  },
];

export default routes;
