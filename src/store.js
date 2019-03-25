import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {
            role: ""
        },
        submenuCollapsed: false
    },
    actions: {
        setUser: ({state, commit}, role) => {
            state.user.role = role
        },
        collapseSubmenu: ({commit}) => {
            console.log('collapsed');
            commit('changeSubMenu')
        }
    },
    mutations: {
        changeSubMenu(state) {
            state.submenuCollapsed = !state.submenuCollapsed;
        } 
    }
});
export default store;