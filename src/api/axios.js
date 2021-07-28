import axios from 'axios';

export default axios.create({
  headers: {
    Accept: 'application/json, text/plain',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  },
});
