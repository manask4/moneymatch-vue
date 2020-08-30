import Vue from "vue";
import App from "./App.vue";

// add bulma css
import "../node_modules/bulma/css/bulma.min.css";
// add fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);
// add custom css
import "@/assets/main.css";

import store from "./store";
import "./registerServiceWorker";

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
