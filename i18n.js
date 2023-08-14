import Vue from "vue";
import VueI18n from "vue-i18n";
import store from "@/store";
import en from "@/languages/en.json";
import ar from "@/languages/ar.json";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: store.state.Lang,
  messages: {
    en,
    ar,
  },
});

store.watch(
  (state) => state.Lang,
  (newLang) => {
    i18n.locale = newLang;
  }
);

export default i18n;
