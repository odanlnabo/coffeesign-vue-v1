import Vue from 'vue';
import Vuex from 'vuex';
// modules need to be import
// import users from './modules/users';
import auth from './modules/auth';
import users from './modules/users';
import documents from './modules/documents';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    auth,
    users,
    documents
  }
});