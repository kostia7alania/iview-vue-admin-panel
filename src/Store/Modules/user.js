export default  {

    state: {
        user: {
            role: false,
            name: null,
        }
    },

    getters: {
      

    },

    mutations: { /***** USING GLOBAL ****/

        toggle(state, { prop }) {
            state[prop] = !state[prop];
        },
        changeProp(state, { prop, val } ) {
            state[prop] = val
        },
        changeObj(state, { obj, prop, val } ) {
            state[obj][prop] = val
        },

        SET_ROLE (state, role) {
            state.user.role = role
        }

    },


    actions: {

        getUser({commit}) {
            axios
                .get('/Admin/FetchUser')
                .then(res=> commit('changeProp',{ prop: 'user', val: res.data }) )
                .catch(err=>console.warn(err))
        },


    },
}
