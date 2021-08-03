import ComicApi from '@/api/comicApi';
import { getRandomNumber } from '@/helpers/number';
import { typesComic as types } from './types';

const comicApi = new ComicApi();

export const actions = {
  [types.actions.UPDATE_currentComic]({ state, commit }, payload) {
    const idComic = payload && payload !== '' ? payload : getRandomNumber(1, state.maxCount);
    commit(types.mutations.SET_currentComic, {
      ...state.currentComic,
      title: '',
    });
    comicApi
      .getComic(idComic)
      .then(({ data }) => {
        commit(types.mutations.SET_currentComic, data);
      })
      .catch((err) => console.log('Error Api', err));
  },
  [types.actions.UPDATE_INITIAL_DATA]({ commit, dispatch }, payload) {
    comicApi
      .getInitialData()
      .then(({ data }) => {
        commit(types.mutations.SET_maxCount, data.num);
        dispatch(types.actions.UPDATE_currentComic, payload);
      })
      .catch((err) => console.log('Error Api', err));
  },
};

export default {};
