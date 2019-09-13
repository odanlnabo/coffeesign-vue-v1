import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import config from '../../config'

axios.defaults.baseURL = config.BASE_URL + '/api'

const state = {
  status: '',
  token: localStorage.getItem('token') || '',
  user: {}
}

const mutations = {
  auth_request: function(state) {
    state.status = 'loading...'
  },
  auth_user: function(state, user) {
    state.status = 'success',
    state.user = user
  },
  auth_success: function(state, token) {
    state.status = 'loading...'
    state.token = token
  },
  auth_error: function(state) {
    state.status = 'error'
  },
  logout(state) {
    state.status = '',
    state.token = '',
    state.user = {}
  },

  update_user: function(state, msg) {
    state.status = ''
  },
  update_password: function(state, msg) {
    state.status = ''
  }
}

const actions = {
  // Login Request
  login(context, user) {
    return new Promise((resolve, reject) => {
      context.commit('auth_request')
      axios.post('/auth/login', user)
      .then(resp => {
        const token = resp.data.access_token
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = "Bearer " + token
        context.commit('auth_success', token)
      })
      // Login Success
      .then(() => {
        context.dispatch('authUser')
        resolve()
      })
      .catch(err => {
        context.commit('auth_error')
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },

  authUser({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/user')
      .then(resp => {
        commit('auth_user', resp.data)
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error')
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },

  updatePassword({commit}, user) {
    return new Promise((resolve, reject) => {
      axios.post(`/user/${user.id}`)
      .then(resp => {
        commit('update_password')
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error', err)
        reject(err)
      })
    })
  },

  logout({commit}) {
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')     
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  },

  authError({commit}, errors) {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    commit('auth_error', errors)
  },

  // Update User
  updateUser: function(context, user) {
    return new Promise((resolve, reject) => {
      console.log(user)
      const data = new FormData();      
      data.append('_method', 'PUT');
      data.append('first_name', user.first_name);
      data.append('last_name', user.last_name);
      axios.post(`/auth/user/${user.id}`, data)
      .then(resp => {
        context.commit('update_user', resp)
        context.dispatch('authUser')
        resolve(resp)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }
}

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  userInfo: state => state.user,

  errors: state => state.errors,
  button: state => state.button
}

export default {
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()],
}