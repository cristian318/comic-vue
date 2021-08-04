import { getLocalStorage, setLocalStorage } from '@/helpers/localStorage';
import { typesComic as types } from './types';

export const actions = {
  [types.actions.UPDATE_COMICS]({ state, commit }, payload) {
    if (state.comics.length === 0 && !payload) {
      // fake api
      let comics = getLocalStorage();
      if (comics.length > 0) {
        comics = comics.filter((comic) => !!comic);
        commit(types.mutations.SET_COMICS, [...comics]);
      }
    } else {
      // fake api
      setLocalStorage([payload, ...state.comics]);
      commit(types.mutations.SET_COMICS, [payload, ...state.comics]);
    }
  },
  [types.actions.DELETE_COMICS]({ commit }) {
    setLocalStorage([]);
    commit(types.mutations.SET_COMICS, []);
  },
};

export default {};
