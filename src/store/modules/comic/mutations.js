import { typesComic as types } from './types';

export const mutations = {
  [types.mutations.SET_CURRENT_COMIC](state, payload) {
    state.current_comic = payload;
  },
  [types.mutations.SET_MAX_COUNT](state, payload) {
    state.max_count = payload;
  },
};

export default {};
