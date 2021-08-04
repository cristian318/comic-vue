import payloads from '../../store/comic/payload.mock';

export default class ComicApi {
  // eslint-disable-next-line
  getComic(idComic) {
    return Promise.resolve({ data: payloads.COMIC });
  }

  // eslint-disable-next-line
  getInitialData() {
    return Promise.resolve({ num: payloads.MAX_COUNT });
  }
}
