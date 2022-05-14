import axios from 'axios';

const BASE_URL =  'http://localhost:3001';

const API = axios.create({
  BASE_URL
});

export default API;
