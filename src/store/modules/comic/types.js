export const MODULE_COMIC = '@module/comic';

export const typesComic = {
  PATH: MODULE_COMIC,
  getters: {
    GET_EXISTS_CURRENT_COMIC: '@getter/getExistsCurrentComic',
  },
  mutations: {
    SET_CURRENT_COMIC: '@mutations/setCurrentComic',
    SET_MAX_COUNT: '@mutations/setMaxCount',
  },
  actions: {
    UPDATE_CURRENT_COMIC: '@actions/updateCurrentComic',
    UPDATE_INITIAL_DATA: '@actions/updateInitialData',
  },
};

export default {};
