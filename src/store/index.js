import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Lang: "en",
    isRTL: false,
  },
  getters: {},
  mutations: {
    setLang(state, { lang, isRTL }) {
      state.Lang = lang;
      state.isRTL = isRTL;
    },
  },
  actions: {},
  modules: {},
});
