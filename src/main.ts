import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers/index.ts";
// @ts-check
createApp(App).use(router).mount("#app");
