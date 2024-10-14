import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "./select.css";
import "./bootstrap.css";
// import { createPinia } from "pinia";'.use(createPinia());
import 'bootstrap/dist/css/bootstrap.min.css';
const app = createApp(App);

app.use(router);

app.mount("#app");
