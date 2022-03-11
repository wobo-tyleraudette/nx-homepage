import axios from 'axios';

const url = process.env['NX_HOMEPAGE_API_URL'];
export const api = axios.create({
  baseURL: `${url}/api`,
});
