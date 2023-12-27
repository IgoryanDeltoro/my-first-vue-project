import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import Notifications from '@kyvg/vue3-notification';
import VueAwesomePaginate from 'vue-awesome-paginate';
import './assets/scss/index.scss';
import 'vue-awesome-paginate/dist/style.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Notifications);
app.use(VueAwesomePaginate);
store.dispatch('auth/loadDataFromLS');
store.dispatch('booking/loadDateFromLS');

app.mount('#app');
