import { typesComic as types } from './types';

export const getters = {
  [types.getters.GET_EXISTS_currentComic](state) {
    return state.currentComic?.title !== '' && state.currentComic?.img !== '';
  },
};

export default {};
