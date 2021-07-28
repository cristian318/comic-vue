import { typesComic as types } from './types';

export const getters = {
  [types.getters.GET_EXISTS_CURRENT_COMIC](state) {
    return state.current_comic?.title !== '' && state.current_comic?.img !== '';
  },
};

export default {};
