import { actions } from '@/store/modules/comic/actions';
import { mutations } from '@/store/modules/comic/mutations';
import { typesComic } from '@/store/modules/comic/types';
import payloads from '../../../__mocks__/store/comic/payload.mock';
import stateMock from '../../../__mocks__/store/comic/state.mock';

// eslint-disable-next-line global-require
jest.mock('@/api/comicApi', () => require('../../../__mocks__/api/comic/comicApi'));
describe('Comic Actions', () => {
  let state = stateMock;
  afterEach(() => {
    state = stateMock;
    jest.clearAllMocks();
  });

  test('Should commit the comic returned by the api', async () => {
    const commit = jest.fn();
    mutations[typesComic.mutations.SET_MAX_COUNT](state, payloads.MAX_COUNT);
    await actions[typesComic.actions.UPDATE_CURRENT_COMIC]({ commit, state });

    expect(commit).toHaveBeenCalledWith(typesComic.mutations.SET_CURRENT_COMIC, payloads.COMIC);
  });

  test('Should commit the initialData returned by the api', async () => {
    const commit = jest.fn();
    await actions[typesComic.actions.UPDATE_INITIAL_DATA]({ commit });

    expect(commit).toHaveBeenCalledWith(typesComic.mutations.SET_MAX_COUNT, payloads.MAX_COUNT);
  });
});
