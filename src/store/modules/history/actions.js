import { getLocalStorage, setLocalStorage } from '@/helpers/localStorage';
import { typesComic as types } from './types';

export const actions = {
  [types.actions.UPDATE_COMICS]({ state, commit }, payload) {
    if (state.comics.length === 0 && !payload) {
      // fake api
      const comics = getLocalStorage();

      console.log(comics);
      if (comics.length > 0) {
        commit(types.mutations.SET_COMICS, [...comics]);
      }
    } else {
      // fake api
      setLocalStorage([...state.comics, payload]);
      commit(types.mutations.SET_COMICS, [...state.comics, payload]);
    }
  },
};

export default {};
