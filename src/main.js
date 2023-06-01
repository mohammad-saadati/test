import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// Pinia
import { createPinia } from 'pinia'
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
// Vue router
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const pinia = createPinia()
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const vuetify = createVuetify({
  components,
  directives,
});
createApp(App).use(router).use(vuetify).use(pinia).mount("#app");
