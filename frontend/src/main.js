import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "./select.css";
import "./bootstrap.css";
// import { createPinia } from "pinia";'.use(createPinia());

const app = createApp(App);

app.use(router);

app.mount("#app");
