
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


import { mapGetters, mapActions } from 'vuex'
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    computed: {
        ...mapGetters(['login/TOKEN__isOK']),
        TOKEN__isOK(){return this['login/TOKEN__isOK']}
    },
    created() {
        if( this['login/TOKEN__isOK']) this.$router.push({name: 'home'});
        else {
            this['login/logout']();
            this.$router.push({name: 'login'});
        }
    },
    watch: Object.assign(
      //mapState([]), 
      { 
        TOKEN__isOK(neww,old) {
            console.log('MAIN.Js=> token isOk WATCH', neww,old)
            //this['login/logout'](); this.$router.push({name: 'login'});
        }
      }
    ),
    methods: {
        ...mapActions([
            'login/logout'
        ])
    }
});

