import Vue from 'vue';
import App from './app.vue';
import store from './Store';
import './styles/app.css'

Vue.use(iView);
import iView from 'iview';


import router from './Router';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
