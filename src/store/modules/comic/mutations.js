import { typesComic as types } from './types';

export const mutations = {
  [types.mutations.SET_currentComic](state, payload) {
    state.currentComic = payload;
  },
  [types.mutations.SET_maxCount](state, payload) {
    state.maxCount = payload;
  },
};

export default {};
