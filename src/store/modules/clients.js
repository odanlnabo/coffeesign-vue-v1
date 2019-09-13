import axios from 'axios';

const state = {
  data: {}
}

const mutations = {
  create_client: (state, client) => state.data.unshift(client),

  fetch_clients: (state, clients) => state.data = clients,

  fetch_client: (state, client) => state.data = client,

  update_client: (state, updClient) => {
    // const index = state.data.findIndex(client => client.id === updClient.id);
    // if (index !== -1) {
    //   state.data.splice(index, 1, updClient);
    // }
    state.data = { ...state.data, updClient }
  },

  inactive_client: (state, id) => 
    (state.data = state.data.filter(client => client.id !== id)),
}

const actions = {
  // // Create
  createClient: function(context, client) {
    return new Promise((resolve, reject) => {
      axios.post('/client')
      .then(resp => {
        const client = resp.data.client
        context.commit('create_client', client)

        resolve(resp)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },

  // Fetch List
  fetchClients: function(context) {
    return new Promise((resolve, reject) => {
      axios.get('/client')
      .then(resp => {
        const clients = resp.data.client
        context.commit('fetch_clients', clients)

        resolve(resp)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },

  // Fetch ID
  fetchClient: function(context, id) {
    return new Promise((resolve, reject) => {
      axios.get(`/client/${id}`)
      .then(resp => {
        const client = resp.data.client
        context.commit('fetch_client', client)

        resolve(resp)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },

  // Update ID
  updateClient: function(context, client) {
    return new Promise((resolve, reject) => {
      const data = new FormData();      
      data.append('_method', 'PUT');
      data.append('purpose', client.purpose);
      data.append('company', client.company);
      data.append('employee', client.employee);
      data.append('title', client.title);
      data.append('industry', client.industry);

      axios.post(`/client/${client.id}`, data)
      .then(resp => {
        context.commit('update_client', resp)

        resolve(resp)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },

  // Delete ID
  inactiveClient: function(context, id) {
    return new Promise((resolve, reject) => {
      axios.delete(`/client/${id}`)
      .then(resp => {
        context.commit('inactive_client', id)

        resolve()
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }
}

const getters = {
  allClients : state => state.data,
}

export default {
  state,
  mutations,
  actions,
  getters,
}

