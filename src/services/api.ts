import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_API_MAIN_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
