import { createRouter, createWebHistory } from 'vue-router';
import ErrorPage from './pages/Error.vue';
import store from './store/index';

const ApartmentPage = () => import('./pages/Apartment.vue');
const Homepage = () => import('./pages/Homepage.vue');
const Registration = () => import('./pages/Registration.vue');
const LoginPage = () => import('./pages/Login.vue');
const MyOrdersPage = () => import('./pages/MyOrders.vue');

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
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login-page',
    meta: { hideForAuth: true },
  },
  {
    path: '/registration',
    component: Registration,
    name: 'register-page',
    meta: { hideForAuth: true },
  },
  {
    path: '/my-orders',
    component: MyOrdersPage,
    name: 'my-orders-page',
    meta: { requiresAuth: true },
  },
  {
    path: '/:catchAll(.*)',
    component: ErrorPage,
    name: 'error-page',
  },
];

const router = createRouter({
  history: createWebHistory("index.html"),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/isLoggedIn'];
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) next({ name: 'login-page' });
  }

  if (to.matched.some(record => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: 'homepage' });
    }
  }

  next();
});

export default router;
