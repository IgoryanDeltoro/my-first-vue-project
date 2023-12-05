import Vuex from 'vuex';
import authModules from './modules/auth';
import bookingModules from './modules/booking';


const store = new Vuex.Store({
  modules: {
    auth: authModules,
    booking: bookingModules,
  },
});

export default store;
