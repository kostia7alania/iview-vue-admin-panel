
import Vue from 'vue';
import App from './app.vue';
import store from './Store';
import './styles/app.css'

import './plugins/iview.js'

import router from './Router';

 
window.store = store;
require('./http')
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

