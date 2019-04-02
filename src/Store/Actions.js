

window.axios = require('axios');


//const auth = { username: 'janedoe', password: 's00pers3cret' };
const auth = { username: 'valeks@gmx.net', password: 'password' };
const baseurl = 'https://web-controllers20190214025405.azurewebsites.net/api/';

  window.HTTP = axios.create({
    baseURL: baseurl,
    transformRequest: [function (data, headers) {
      headers['Authorization'] = auth.username
      return JSON.stringify(data)
    }],
    headers: { 'Content-Type': 'application/json' }
  })

export default {

    setUser: ({state, commit}, role) => {
        state.user.role = role
    },


    collapseSubmenu: ({commit}) => {
        console.log('collapsed');
        commit('changeSubMenu')
    }


}