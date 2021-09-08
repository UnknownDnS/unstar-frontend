import axios from 'axios';
import Cookies from 'universal-cookie';
import { COOKIE_NAME } from '../const';

const cookies = new Cookies();
const fetcher = (url: string) =>
  axios
    .get(url, {
      url: url,
      headers: {
        Authorization: `Bearer ${cookies.get(COOKIE_NAME)}`,
      },
    })
    .then((response) => response.data);

export default fetcher;
