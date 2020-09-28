import axios from 'axios'
import Cookies from 'js-cookie'
import router from '../router'


const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT + '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': Cookies.get('csrftoken')
  }
})

axiosInstance.interceptors.response.use((response) => {
  return response;
}, function (error) {
  if (error.response.status === 404) {
      router.push({ name: '404' });
  }
  return Promise.reject(error.response);
});

export default axiosInstance
