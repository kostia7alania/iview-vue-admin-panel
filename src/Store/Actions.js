

export default {

    setUser: ({state, commit}, role) => {
        state.user.role = role
    },


    collapseSubmenu: ({commit}) => {
        console.log('collapsed');
        commit('changeSubMenu')
    }


}