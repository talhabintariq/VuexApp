import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

//  Load Vuex
Vue.use(Vuex);

//  Craete store
export default new Vuex.Store({
  modules: {
    todos
  }
});