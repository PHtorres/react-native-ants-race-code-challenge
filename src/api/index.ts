import axios from 'axios';
export * from './requests';

export const antsApi = axios.create({
  baseURL: 'https://sg-ants-test.herokuapp.com',
});
