import axios from 'axios';
import { parseCookies } from 'nookies';
import { API_URL } from '../constants';

// const API_URL = 'http://localhost:5000/api/v1'
// const API_URL

const instance = axios.create({
  baseURL: API_URL,
  // headers: { Authorization: `Bearer ${token}` },
});
const { token } = parseCookies({});
if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance;
