import { state } from './state';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { MODULE_COMIC } from './types';

export const module = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export const name = MODULE_COMIC;
