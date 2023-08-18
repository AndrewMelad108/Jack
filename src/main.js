import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/style.css";
import i18n from "../i18n";
Vue.config.productionTip = false;
import VeeValidate from "vee-validate";
import * as VueGoogleMaps from "vue2-google-maps";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// import MapGoogle from "./components/Shared/Map.vue";
// Vue.component("MapGoogle", MapGoogle);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD4ruJHbPt1W1Y0PnMxgS2Cd4eyiUrdqD0",
    libraries: "places",
  },
});

Vue.use(VeeValidate);
new Vue({
  router,
  store,
  i18n,
  VueSlickCarousel,
  render: (h) => h(App),
}).$mount("#app");
