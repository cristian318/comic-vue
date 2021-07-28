import Vue from 'vue';
import Vuex from 'vuex';
import { name as nameComic, module as moduleComic } from './modules/comic/index';

Vue.use(Vuex);

function getDefaultStore() {
  return {
    modules: {
      [nameComic]: moduleComic,
    },
  };
}
export default new Vuex.Store(getDefaultStore());
