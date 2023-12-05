import {
  login,
  register,
  logout,
  updateUserProfile,
} from '../../services/auth.service';

const initialState = {
  user: null,
  token: '',
  isLoading: false,
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
    UPDATE_DATA_IN_LOCAL_STORAGE(state, { user }) {
      const userData = window.localStorage.getItem('userData');
      const data = JSON.parse(userData);

      const updatedUser = {
        ...data,
        user: { ...data.user, name: user.name, avatarURL: user.avatarURL },
      };
      state.token = updatedUser.token;
      state.user = updatedUser.user;
      window.localStorage.setItem('userData', JSON.stringify(updatedUser));
    },
    GET_DATA_FROM_LOCAL_STORAGE(state) {
      const userData = window.localStorage.getItem('userData');
      if (userData) {
        const data = JSON.parse(userData);
        state.token = data?.token;
        state.user = data?.user;
      }
    },
    CLEAR_LOCAL_STORAGE(state) {
      window.localStorage.setItem('userData', '');
      Object.assign(state, { ...initialState });
    },
    SET_LOADING(state) {
      state.isLoading = true;
    },
    UNSET_LOADING(state) {
      state.isLoading = false;
    },
  },
  actions: {
    async login({ commit }, payload) {
      commit('SET_LOADING');
      const { data } = await login(payload);
      const { user, token } = data;
      commit('SET_USER_DATA', user);
      commit('SET_TOKEN', token);
      commit('SAVE_DATA_TO_LOCAL_STORAGE', data);
      commit('UNSET_LOADING');
    },
    async registerUser({ commit }, payload) {
      commit('SET_LOADING');
      const { data } = await register(payload);
      const { user, token } = data;
      commit('SET_USER_DATA', user);
      commit('SET_TOKEN', token);
      commit('SAVE_DATA_TO_LOCAL_STORAGE', data);
      commit('UNSET_LOADING');
    },
    async updateUserProfile({ commit }, payload) {
      commit('SET_LOADING');
      const { data } = await updateUserProfile(payload);
      commit('UPDATE_DATA_IN_LOCAL_STORAGE', data);
      commit('UNSET_LOADING');
    },
    async logout({ commit }) {
      commit('SET_LOADING');
      await logout();
      commit('CLEAR_LOCAL_STORAGE');
      commit('UNSET_LOADING');
    },
    loadDataFromLS({ commit }) {
      commit('GET_DATA_FROM_LOCAL_STORAGE');
    },
  },
};
