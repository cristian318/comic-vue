import axios from './axios';

export default class ComicApi {
  // eslint-disable-next-line
  getComic(idComic) {
    return axios.get(`${idComic}/info.0.json`);
  }

  // eslint-disable-next-line
  getInitialData() {
    return axios.get('info.0.json');
  }
}
