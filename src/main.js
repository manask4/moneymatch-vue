import Vue from "vue";
import App from "./App.vue";

import "../node_modules/bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "@/assets/main.css";
import store from "./store";
import './registerServiceWorker'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  data: {
    ...store.data,
  },
  methods: {
    ...store.methods,
  },
}).$mount("#app");
