import { login, register } from '../../../services/apartment.service';

const initialState = {
  user: null,
  token: '',
};

export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SAVE_TOKEN_TO_LOCAL_STORAGE(_, token) {
      window.localStorage.setItem('token', token);
    },
    GET_TOKEN_FROM_LOCAL_STORAGE(state) {
      const token = window.localStorage.getItem('token');
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await login(payload);
      const { user, token } = data;

      commit('SET_USER_DATA', user);
      commit('SET_TOKEN', token);
      commit('SAVE_TOKEN_TO_LOCAL_STORAGE', token);
    },

    async registerUser({ commit }, payload) {
      const { data } = await register(payload);
      const { user, token } = data;

      commit('SET_USER_DATA', user);
      commit('SET_TOKEN', token);
      commit('SAVE_TOKEN_TO_LOCAL_STORAGE', token);
    },
    loadDataFromLS({ commit }) {
      commit('GET_TOKEN_FROM_LOCAL_STORAGE');
    },
  },
};
