import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/style.css";
import i18n from "../i18n";
Vue.config.productionTip = false;
import VeeValidate from "vee-validate";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCAyFsOHxZTlNRaGhwmYhXT_NqBlEoK5Jg",
    libraries: "places",
  },
});
// installComponents: false,

Vue.use(VeeValidate);
new Vue({
  router,
  store,
  i18n,
  VueSlickCarousel,
  render: (h) => h(App),
}).$mount("#app");
