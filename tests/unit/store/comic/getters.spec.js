import { getters } from '@/store/modules/comic/getters';
import { mutations } from '@/store/modules/comic/mutations';
import { typesComic } from '@/store/modules/comic/types';
import payloads from '../../../__mocks__/store/comic/payload.mock';
import stateMock from '../../../__mocks__/store/comic/state.mock';

describe('Comic Getters', () => {
  let state = stateMock;

  afterEach(() => {
    state = stateMock.STATES;
  });

  test('Should return true as existsComic', () => {
    mutations[typesComic.mutations.SET_CURRENT_COMIC](state, payloads.COMIC.currentComic);
    const existsComic = getters[typesComic.getters.GET_EXISTS_CURRENT_COMIC](state, payloads.COMIC);
    expect(existsComic).toBe(true);
  });
});
