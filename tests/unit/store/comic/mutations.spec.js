import { mutations } from '@/store/modules/comic/mutations';
import { typesComic } from '@/store/modules/comic/types';
import payloads from '../../../__mocks__/store/comic/payload.mock';
import stateMock from '../../../__mocks__/store/comic/state.mock';

describe('Comic Getters', () => {
  let state = stateMock;

  afterEach(() => {
    state = stateMock.STATES;
  });

  test('Should set the currentComic state', () => {
    mutations[typesComic.mutations.SET_CURRENT_COMIC](state, payloads.COMIC);
    const { currentComic } = state;
    expect(currentComic).toStrictEqual(payloads.COMIC);
  });

  test('Should set the maxCount state', () => {
    mutations[typesComic.mutations.SET_MAX_COUNT](state, payloads.MAX_COUNT);
    const { maxCount } = state;
    expect(maxCount).toStrictEqual(payloads.MAX_COUNT);
  });
});
