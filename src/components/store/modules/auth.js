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
    getUserData(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SAVE_DATA_TO_LOCAL_STORAGE(_, data) {
      window.localStorage.setItem('userData', JSON.stringify(data));
    },
    GET_DATA_FROM_LOCAL_STORAGE(state) {
      const userData = window.localStorage.getItem('userData');
      const data = JSON.parse(userData);
      state.token = data?.token;
      state.user = data?.user;
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await login(payload);
      const { user, token } = data;

      commit('SET_USER_DATA', user);
      commit('SET_TOKEN', token);
      commit('SAVE_DATA_TO_LOCAL_STORAGE', data);
    },

    async registerUser({ commit }, payload) {
      const { data } = await register(payload);
      const { user, token } = data;

      commit('SET_USER_DATA', user);
      commit('SET_TOKEN', token);
      commit('SAVE_DATA_TO_LOCAL_STORAGE', data);
    },
    loadDataFromLS({ commit }) {
      commit('GET_DATA_FROM_LOCAL_STORAGE');
    },
  },
};
