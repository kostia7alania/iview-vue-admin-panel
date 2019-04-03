import Vue from 'vue'
import Vuex from 'vuex'

import actions from './Actions'
import mutations from './Mutations'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {
            role: ''// "user"
        },
        submenuCollapsed: false
    },
    actions,
    mutations
});
export default store;