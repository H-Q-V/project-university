import { createRouter, createWebHistory } from "vue-router";
//layouts
import layoutAccuracy from "@/layouts/layoutAccuracy.vue";
//views
import Register from "@/components/Client/Accuracy/Register.vue";
import Login from "@/components/Client/Accuracy/Login.vue";
import Main from "@/views/Main.vue";
import App from "@/App.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component:Main ,
    },
    {
      path: "/login",
      name: "Login",
      component:Login ,
    },
    {
      path: "/Register",
      name: "Register",
      component:Register ,
    },
   
  ],
});

export default router;