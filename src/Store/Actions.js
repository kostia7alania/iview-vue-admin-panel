
import User from './Helpers/User'; 
import AppStorage from './Helpers/AppStorage';

export default {
 

    async login( {state, commit, dispatch}, logPass) {
        return axios
                    .post('/AdminToken/Obtain', logPass)
                    .then( res => { 
                        const token = res.data.access_token
                        AppStorage.store(token)
                        commit('changeProp',{prop: 'token', val:token})
                        return true;
                    }) //return!!
                    .catch( () => !!0 );
    },

    logout({commit}) {
        commit('changeProp',{prop: 'token', val: null})
        AppStorage.clear();
    },

    getUser({commit}) {
        axios
            .get('/Admin/FetchUser')
            .then(res=> commit('changeProp',{ prop: 'user', val: res.data }) )
            .catch(err=>console.warn(err))
    },


    //CfDJ8L57RTuEqqRNthB8AJJgJ_dzHir0N-o-krrWnjhCHlWMow9SbJGz8pzi7QsT0OF4wpetYAwMEJ8dcWWcOFkpHZ6l84hO4GR-2oOADRNZk05aivzWNwALKTQps4vG11LZMD5OsNWs3CCKdHbjL3cB4fU
    checkInvite({},invite) {
        console.log('invite',invite)
        return axios.get(`/AnonAccessUser/ParentIDFromInvitationLink?invitationLink=${invite}`)
                    .then(e=>e).catch(()=>false)
    }
    
}