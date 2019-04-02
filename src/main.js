import Vue from 'vue';
import App from './app.vue';
import store from './Store';
import './styles/app.css'
import iView from 'iview';
Vue.use(iView);
import router from './Router';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
