import { getOrders, bookApartment } from '../../services/order.service';
import {
  getApartmentById,
  addReview,
  getApartments,
} from '../../services/apartment.service';

const initialState = {
  allApartments: {},
  orders: [],
  apartment: {},
  isLoading: false,
  itemsLimit: 4,
};

export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    getApartmentsCount(state) {
      const { apartmentsCount } = state.allApartments;
      return apartmentsCount ? apartmentsCount : 0;
    },
    getItemsLimit(state) {
      return state.itemsLimit;
    },
  },
  mutations: {
    SET_APARTMENTS_LIST(state, payload) {
      state.allApartments = payload;
    },
    SET_APARTMENTS_ORDERS(state, payload) {
      state.orders = payload;
    },
    SET_APARTMENT_BY_ID(state, payload) {
      state.apartment = payload;
    },
    SET_CURRENT_PAGE(state, { page, limit }) {
      state.currentPage = page;
      state.items = limit;
    },
    SET_LOADING(state) {
      state.isLoading = true;
    },
    UNSET_LOADING(state) {
      state.isLoading = false;
    },
    SET_ITEMS_LIMIT(state) {
      const viewWidth = window.innerWidth;
      if (viewWidth <= 1199) state.itemsLimit = 4;
      if (viewWidth >= 1200) state.itemsLimit = 6;
    },
  },
  actions: {
    async getApartmentsList({ state, commit }, payload) {
      commit('SET_LOADING');
      commit('SET_ITEMS_LIMIT');
      const { data } = await getApartments({
        ...payload,
        limit: state.itemsLimit,
      });
      commit('SET_APARTMENTS_LIST', data);
      commit('UNSET_LOADING');
    },
    async getOrders({ commit }) {
      commit('SET_LOADING');
      const { data } = await getOrders();
      commit('SET_APARTMENTS_ORDERS', data);
      commit('UNSET_LOADING');
    },
    async getApartmentById({ commit }, payload) {
      commit('SET_LOADING');
      const { data } = await getApartmentById(payload);
      commit('SET_APARTMENT_BY_ID', data);
      commit('UNSET_LOADING');
    },
    async createReview({ commit }, { id, data }) {
      commit('SET_LOADING');
      await addReview(id, data);
      const result = await getApartmentById(id);
      commit('SET_APARTMENT_BY_ID', result.data);
      commit('UNSET_LOADING');
    },
    async bookApartment({ commit }, payload) {
      commit('SET_LOADING');
      await bookApartment(payload);
      const { data } = await getApartmentById(payload.apartmentId);
      commit('SET_APARTMENT_BY_ID', data);
      commit('UNSET_LOADING');
    },
  },
};
