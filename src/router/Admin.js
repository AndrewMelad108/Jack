import Vue from "vue";
import VueRouter from "vue-router";
import AdminLogin from "../views/Admin/AdminLogin.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Admin/Login",
    name: "AdminLogin",
    component: AdminLogin,
  },
];

export default routes;
