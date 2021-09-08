import axios from 'axios';
import { COOKIE_NAME } from 'const';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

/*// @ts-ignore
axios.interceptors.request.use((request: any) => {
  console.log('before');
  console.log(request.url, request.data);
  return request;
});

// @ts-ignore
axios.interceptors.response.use((response) => {
  console.log('after');
  console.log(response);
  return response;
});*/

export const post = (url: string, param: object) =>
  axios({
    method: 'POST',
    url: url,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    data: JSON.stringify(param),
  }).then((response) => response.data);

export const get = (url: string) =>
  axios({
    method: 'GET',
    url: url,
    headers: {
      Authorization: `Bearer ${cookies.get(COOKIE_NAME)}`,
    },
  }).then((response) => response.data);
