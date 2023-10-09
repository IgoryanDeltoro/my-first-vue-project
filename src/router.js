import { createRouter, createWebHistory } from 'vue-router';
import ApartmentPage from './pages/ApartmentPage.vue';
import Homepage from './pages/Homepage.vue';
import ErrorPage from './pages/ErrorPage.vue';

const routes = [
  {
    path: '/',
    component: Homepage,
    name: 'homepage',
  },
  {
    path: '/apartment/:id',
    component: ApartmentPage,
    name: 'apartment',
  },
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
    name: 'error-page',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
