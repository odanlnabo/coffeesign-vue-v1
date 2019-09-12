import axios from 'axios';

const state = {
  users: []
};

const getters = {
  allUsers : state => state.users
};

const actions = {
  // Create
  async signupUser({ commit }, forms) {
    const response = await axios.post();

    commit('newUser', response.data);
  },

  // Fetch List
  async fetchUsers({ commit }) {
    const response = await axios.get();

    commit('fetchUsers', response.data);
  },

  // Fetch ID
  async fetchUser({ commit }, id) {
    const response = await axios.get();

    commit('fetchUser', response.data);
  },

  // Update ID
  async updateUser({ commit }, id) {
    const response = await axios.put('api/user');

    commit('updateUser', response.data);
  },

  // Delete ID
  async inactiveUser({ commit }, id) {
    const response = await axios.delete();

    commit('inactiveUser', id);
  }
};

const mutations = {
  newUser : (state, user) => state.users.unshift(user),

  fetchUsers : (state, users) => state.users = users,

  updateUser : (state, updUser) => {
    const index = state.users.findIndex(user => user.id === updUser.id);
    if (index !== -1) {
      state.users.splice(index, 1, updUser);
    }
  },

  inactiveUser : (state, id) => 
    (state.users = state.users.filter(user => user.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

