import ComicApi from '@/api/comicApi';
import { getRandomNumber } from '@/helpers/number';
import { typesComic as types } from './types';

const comicApi = new ComicApi();

export const actions = {
  [types.actions.UPDATE_CURRENT_COMIC]({ state, commit }, payload) {
    const idComic = payload && payload !== '' ? payload : getRandomNumber(1, state.maxCount);
    commit(types.mutations.SET_CURRENT_COMIC, {
      ...state.currentComic,
      title: '',
      img: '',
    });
    comicApi
      .getComic(idComic)
      .then(({ data }) => {
        commit(types.mutations.SET_CURRENT_COMIC, data);
      })
      .catch((err) => console.log('Error Api', err));
  },
  [types.actions.UPDATE_INITIAL_DATA]({ commit, dispatch }, payload) {
    comicApi
      .getInitialData()
      .then(({ data }) => {
        commit(types.mutations.SET_MAX_COUNT, data.num);
        dispatch(types.actions.UPDATE_CURRENT_COMIC, payload);
      })
      .catch((err) => console.log('Error Api', err));
  },
};

export default {};
