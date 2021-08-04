import Vue from 'vue';
import Vuex from 'vuex';
import { name as nameComic, module as moduleComic } from './modules/comic/index';
import { name as nameHistorial, module as moduleHistorial } from './modules/history/index';

Vue.use(Vuex);

function getDefaultStore() {
  return {
    modules: {
      [nameComic]: moduleComic,
      [nameHistorial]: moduleHistorial,
    },
  };
}
export default new Vuex.Store(getDefaultStore());
