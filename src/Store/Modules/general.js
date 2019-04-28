
export default  {

    state: {
        submenuCollapsed: false,
    },

    getters: {

    },

    mutations: {
        toggle(state, { prop }) { state[prop] = !state[prop]; },
        changeProp(state, { prop, val } ) { state[prop] = val },
        changeObj(state, { obj, prop, val } ) { state[obj][prop] = val }, 
        TOGGLE_submenuCollapsed(state) {
            state.submenuCollapsed = !state.submenuCollapsed
        },
    },

    actions: { 

    },
}
