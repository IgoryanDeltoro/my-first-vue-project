import { createRouter, createWebHistory } from 'vue-router';
import ApartmentPage from './pages/Apartment.vue';
import Homepage from './pages/Homepage.vue';
import ErrorPage from './pages/Error.vue';
import Registration from './pages/Registration.vue';
import LoginPage from './pages/Login.vue';


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
    path: '/login',
    component: LoginPage,
    name: 'login-page',
  },
  {
    path: '/registration',
    component: Registration,
    name: 'register-page',
  },
  {
    path: '/:catchAll(.*)',
    component: ErrorPage,
    name: 'error-page',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
