import axios from 'axios';

console.log(import.meta.env.API_URL);
export default axios.create({
  baseURL: import.meta.env.API_URL || 'http://localhost:3333/api',
  headers: {
    'Content-type': 'application/json',
  },
});
