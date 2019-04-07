const JwtToken = 'Bearer '+window.store.state.token //`Bearer ${localStorage.getItem('token')}`;
const ax = require('axios');

const testAPI = 'https://web-controllers20190214025405.azurewebsites.net/api/'

window.axios = ax.create({
    baseURL: process.env.NODE_ENV !== 'production' ? testAPI : '',
    headers: {
        common: {
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': JwtToken
        }
    }
  });
/*
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Authorization'] = JwtToken;
*/

//const auth = { username: 'valeks@gmx.net', password: 'password' };