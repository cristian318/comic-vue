import { typesComic as types } from './types';

export const mutations = {
  [types.mutations.SET_CURRENT_COMIC](state, payload) {
    state.currentComic = payload;
  },
  [types.mutations.SET_MAX_COUNT](state, payload) {
    state.maxCount = payload;
  },
};

export default {};
