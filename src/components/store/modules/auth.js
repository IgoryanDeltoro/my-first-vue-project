import { login, register } from '../../../services/apartment.service';

const initialState = {
  user: null,
  token: '',
};

export default {
  namespaced: true,
  state: { ...initialState },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await login(payload);
      const { user, token } = data;

      commit('SET_USER_DATA', user);
      commit('SET_TOKEN', token);
    },

    async registerUser({ commit }, payload) {
      const { data } = await register(payload);
      const { user, token } = data;

      commit('SET_USER_DATA', user);
      commit('SET_TOKEN', token);
    },
  },
};
