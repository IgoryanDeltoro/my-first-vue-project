import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Notifications from '@kyvg/vue3-notification';
import './assets/scss/index.scss';
import store from './components/store';

const app = createApp(App);

app.use(router);
app.use(store)
app.use(Notifications);
app.mount('#app');
