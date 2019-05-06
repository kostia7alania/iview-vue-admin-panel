import Token from '@/Store/Helpers/Token'

const isBase64 = str => {
    try {  return btoa(atob(str)).replace(/=/g, '') == str } catch (err)
    { return false }
}
const decode = payload => isBase64(payload) && JSON.parse(atob(payload)) || false

export default  {

    state: {
        token: false, //AppStorage.getToken(),
        token_validation: {
            iss: "Marobus",
            aud: "https://web-controllers20190214025405.azurewebsites.net",
        },
    },

    getters: {
        TOKEN (state) {
            return state.token
        },

        TOKEN__DECODE (state) {
           
            const token = state.token;
            const first = typeof token == 'string' && decode(token.split('.')[0]);
            const second = typeof token == 'string' && decode(token.split('.')[1]);
            return { first, second }
        },
        TOKEN__isValid (state, getters) {

            const token = state.token;
            const payload = typeof token == 'string' && decode(token.split('.')[1]);
            if (payload) {
                return true // payload.iss == state.token_validation.iss // => validation
            }
            return false;
        },
        TOKEN__isExpired(state,getters) {
            if(getters.TOKEN__parse)
                return new Date > getters.TOKEN__parse.exp*1000    //да-истек, нет-не истек
        },
        TOKEN__parse(state,getters) {
            if(getters.TOKEN__isValid) {
                const parts = state.token.split('.');
                return {
                    ...JSON.parse(atob(parts[0])),
                    ...JSON.parse(atob(parts[1]))
                }
            }
        },

        TOKEN__isOK(state,getters) {
            return !getters.TOKEN__isExpired && getters.TOKEN__isValid
        },

        id(state,getters) {
            if(getters.TOKEN__parse)
            return getters.TOKEN__parse.sub;// токен содержит user_id || id
        },

        isAdmin(state,getters) {
            return getters.TOKEN__DECODE && getters.TOKEN__DECODE.second.LoginType.includes('Admin')
            ///return getters.TOKEN__isOK && 1///state.user.role == 1 //0-user, 1-admin, null - first reg;
        },

        isUser(state,getters) { //не должен быть админом и юзером одновременно:
            return !getters.isAdmin && getters.TOKEN__DECODE && getters.TOKEN__DECODE.second.LoginType.includes('EndUser')
           ///return getters.TOKEN__isOK &&  0///(state.user.role === null || state.user.role === 0)  //0-user, 1-admin, null - first reg;
        },

        username(state,getters) {
            return 'test-USERNAME'//state.user.name
        },

        loggedIn(state,getters) {
            return getters.isUser || getters.isAdmin
        },

    },

    mutations: {
        toggle(state, { prop }) { state[prop] = !state[prop]; },
        changeProp(state, { prop, val } ) { state[prop] = val },
        changeObj(state, { obj, prop, val } ) { state[obj][prop] = val },
        TOKEN_CLEAR(state) { state.token = null },
        SET_TOKEN(state, token) { state.token = token }
    },

    actions: {

        async login( {state, commit, dispatch, rootState}, logPass) {
            return axios
                        .post('/AdminToken/Obtain', logPass)
                        .then( res => {
                            const token = res.data.access_token
                            if( !Token.isValid(token) ) { return false }
                            commit('SET_TOKEN', token)
                           // commit('changeObj', {obj: 'user', prop: 'role', val: res.data.role})
                            return true;
                        }) 
                        .catch( () => !!0 );
        },

        async register( {state, commit, dispatch}, logPass) {
            return axios
                        .post('/auth/signup', logPass)
                        .then( res => {
                            const token = res.data.access_token
                            commit('SET_TOKEN', token)
                            return true;
                        })
                        .catch( err => err.response.data.errors );
        },

        logout({commit}) {
            commit('TOKEN_CLEAR')
        },
        
    },
}
