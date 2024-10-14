import { createRouter, createWebHistory } from "vue-router";
import LoginEmployees from '../components/login/LoginEmployees.vue';
// Import các component khác nếu cần

const routes = [
  // ... các route khác ...
  {
    path: '/login',
    name: 'Login',
    component: LoginEmployees
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;