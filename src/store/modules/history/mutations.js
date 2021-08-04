import { typesComic as types } from './types';

export const mutations = {
  [types.mutations.SET_COMICS](state, payload) {
    state.comics = payload;
  },
};

export default {};
