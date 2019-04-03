
import Vue from 'vue';
import App from './app.vue';
import store from './Store';
import './styles/app.css'

import './plugins/iview.js'

import router from './Router';

import User from './Helpers/User';
window.User = User;

const auth = { username: 'valeks@gmx.net', password: 'password' };
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const JwtToken = `Bearer ${localStorage.getItem('token')}`;
window.axios.defaults.headers.common['Authorization'] = JwtToken;

const baseurl = 'https://web-controllers20190214025405.azurewebsites.net/api/';
window.axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? baseurl : ''

//window.EventBus = new Vue();

import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.lang = 'ru-RU';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

