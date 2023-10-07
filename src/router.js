import { createRouter, createWebHistory } from 'vue-router';
import Apartment from './pages/Apartment.vue';
import Homepage from './pages/Homepage.vue';

const routes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/apartment',
    component: Apartment,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
