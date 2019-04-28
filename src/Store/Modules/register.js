export default  {

    state: {
        parentID: null,
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
        SET_parentID(state, ID) {
            state.parentID = ID
        },
        

    },


    actions: {

        IssueInvitationLink() {
            return axios
            .get('/Admin/IssueInvitationLink')
            .then(res=> res.data )
            .catch(err=>false)
        },
        
        //CfDJ8L57RTuEqqRNthB8AJJgJ_dzHir0N-o-krrWnjhCHlWMow9SbJGz8pzi7QsT0OF4wpetYAwMEJ8dcWWcOFkpHZ6l84hO4GR-2oOADRNZk05aivzWNwALKTQps4vG11LZMD5OsNWs3CCKdHbjL3cB4fU
        checkInvite({},invite) {
            console.log('invite',invite)
            return axios.get(`/AnonAccessUser/ParentIDFromInvitationLink?invitationLink=${invite}`)
                        .then(res=>res.data).catch(()=>false)
        },
        uploadImage({state}, IFormFile ){
            let formData = new FormData()
            formData.append('IFormFile', IFormFile) 
            formData.append('id', state.parentID)      
            return axios
                    .put('/AnonAccessUser/UploadImage',formData)
                    .then(res=>{console.log(res);return res.data})
                    .catch(err=>{console.warn(err);return false})
        },

        register({state},{clearPwd,body}){
            return axios
                    .post(`/AnonAccessUser/Register?parentID=${state.parentID}&clearPwd=${clearPwd}`,body)
                    .then(res=>{
                        console.log(res)
                        return true
                    })
                    .catch(err=>{
                        console.warn(err)
                        return err
                    })
        },

        emailAvailable({}, email) {
            return axios
                    .get(`AnonAccessUser/EmailAvailable?email=${email}`)
                    .then(res=>res.data)
                    .catch(()=>null)
        },

    },
}
