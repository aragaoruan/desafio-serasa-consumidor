import { Platform } from 'react-native';

import axios from 'axios';

const api = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3333/serasa/'
      : 'http://localhost:3333/serasa/',
});

export default api;
