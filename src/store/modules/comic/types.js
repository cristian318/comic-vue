export const MODULE_COMIC = '@module/comic';

export const typesComic = {
  PATH: MODULE_COMIC,
  getters: {
    GET_EXISTS_currentComic: '@getter/getExistsCurrentComic',
  },
  mutations: {
    SET_currentComic: '@mutations/setCurrentComic',
    SET_maxCount: '@mutations/setMaxCount',
  },
  actions: {
    UPDATE_currentComic: '@actions/updateCurrentComic',
    UPDATE_INITIAL_DATA: '@actions/updateInitialData',
  },
};

export default {};
