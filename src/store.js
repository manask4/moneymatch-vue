import Vue from "vue";
import contenders from "./stores/contendersStore";
import timer from "./stores/timerStore";

let store = {
  data: {
    ...timer.data,
    currency: "dollar",
    contenders: contenders,
  },
  methods: {
    ...timer.methods,
    setCurrency: function(currency) {
      this.currency = currency;
    },
    formatNumber: function(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};

export default Vue.observable(store);
