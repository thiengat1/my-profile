/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-04-20 23:33:56
 * @LastEditTime: 2021-04-21 10:54:29
 * @LastEditors: Lewis
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: null,
  },
  getters: {
    language(state) {
      return state.language;
    },
  },
  mutations: {
    SET_LANGUAGE: (state, lang) => {
      state.language = lang;
    },
  },
  actions: {
    setSelectLanguage({ commit }, lang) {
      commit("SET_LANGUAGE", lang);
    },
  },
});
