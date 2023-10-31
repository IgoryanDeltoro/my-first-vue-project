import Vuex from 'vuex';
import authModules from './modules/auth';

const store = new Vuex.Store({
  modules: {
    auth: authModules,
  },
});

export default store;
