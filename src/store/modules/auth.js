import axios from 'axios';

axios.defaults.baseURL = 'http://desktop-b8avdn9/api';
axios.defaults.headers.common['Accept'] = "application/json";
axios.defaults.headers.common['Authorization'] = "";

const state = {
  token: localStorage.getItem('access_token') || null,
  authentication: localStorage.getItem('authentication') || null,
  user: {},
};

const getters = {
  loggedIn(state) {
    return state.token !== null;
  },
  currentUser: state => state.user,
};

const actions = {
  // Login Request
  retrieveToken(context, credentials) {   
    // Login Success 
    function retrieveUser(context){
      return new Promise((resolve, reject) => {
        axios.get('/user')
          .then(response => {
            context.commit('retrieveUser', response.data)
            console.log(response.data)
            resolve(response.data)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }

    return new Promise((resolve, reject) => {
      axios.post('/auth/login', credentials)
        .then(response => {
          const token = response.data.access_token;

          localStorage.setItem('access_token', token);
          context.commit('retrieveToken', token);

          retrieveUser(context);

          console.log(response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        })
    })

  },

  // Logout
  destroyToken(context) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    if (context.getters.loggedIn) {
      localStorage.removeItem('access_token')
      context.commit('destroyToken')
      // return new Promise((resolve, reject) => {
      //   axios.get('/api/auth/logout')
      //     .then(response => {
      //       localStorage.removeItem('access_token')
      //       context.commit('destroyToken')
      //       console.log(response)
      //       resolve(response)
      //       // context.commit('addTodo', response.data)
      //     })
      //     .catch(error => {
      //       localStorage.removeItem('access_token')
      //       context.commit('destroyToken')
      //       reject(error)
      //     })
      // })
    }
  }
};

const mutations = {
  retrieveToken(state, token) {
    state.token = token;
  },

  retrieveUser(state, user) {
    state.user = user;
  },

  destroyToken(state) {
    state.token = null;
    state.user = {};
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}