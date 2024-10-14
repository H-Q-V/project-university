import { createRouter, createWebHistory } from "vue-router";
//layouts
import layoutAccuracy from "@/layouts/layoutAccuracy.vue";
//views
import Register from "@/components/Client/Accuracy/Register.vue";
import Login from "@/components/Client/Accuracy/Login.vue";
import Main from "@/views/Main.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
    {
      path: "/accuracy",
      name: "accuracy",
      component: layoutAccuracy,
      children: [
        { path: "", name: "Login", component: Login },
        { path: "register", name: "Register", component: Register },
      ],
    },
  ],
});

export default router;