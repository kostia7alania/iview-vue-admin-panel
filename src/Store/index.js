import Vue from 'vue'
import Vuex from 'vuex'

import Actions from './Actions'
import Mutations from './Mutations'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {
            role: "user"
        },
        submenuCollapsed: false
    },
    Actions,
    Mutations
});
export default store;