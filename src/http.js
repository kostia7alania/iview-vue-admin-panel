const JwtToken = 'Bearer '+window.store.state.token //`Bearer ${localStorage.getItem('token')}`;
const ax = require('axios');

const testAPI = 'https://web-controllers20190214025405.azurewebsites.net/api/'
const prodAPI = 'https://web-controllers20190214025405.azurewebsites.net/api/'

window.axios = ax.create({
    baseURL: process.env.NODE_ENV !== 'production' ? testAPI : prodAPI,
    headers: {
        common: {
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': JwtToken
        }
    }
  });

  window.axios.interceptors.request.use(
    config => {
      // Do something before request is sent
        config.headers['Authorization'] = 'Bearer '+window.store.state.login.token
      return config
    },
   error => {
      Promise.reject(error)
    }
  )
/*
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Authorization'] = JwtToken;
*/

//const auth = { username: 'valeks@gmx.net', password: 'password' };