import Vuex from 'vuex';
import { login, register } from '../../services/apartment.service';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
};

const store = new Vuex.Store({
  state: { ...initialState },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await login(payload);
      const { user, token } = data;

      commit('setUserData', user);
      commit('setToken', token);
    },

    async registration({ commit }, payload) {
      const { data } = await register(payload);
      const { user, token } = data;

      commit('setUserData', user);
      commit('setToken', token);
    },
  },
});

export default store;
