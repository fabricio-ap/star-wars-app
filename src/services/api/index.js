import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://sevencoders-starwars-wiki.herokuapp.com',
});
