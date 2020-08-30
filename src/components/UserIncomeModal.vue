<template>
  <div id="user-income-modal" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="field-header">
        <span class="currency-buttons mb-2">
          <button
            @click="currency != 'dollar' ? setCurrency('dollar') : ''"
            :class="currency == 'dollar' ? 'is-primary' : 'is-dark'"
            class="py-5 button"
            aria-label="Set Dollar"
          >
            <i class="fas fa-2x fa-dollar-sign"></i>
          </button>
          <button
            @click="currency != 'rupee' ? setCurrency('rupee') : ''"
            :class="currency == 'rupee' ? 'is-primary' : 'is-dark'"
            class="py-5 button ml-2"
            aria-label="Set Rupee"
          >
            <i class="fas fa-2x fa-rupee-sign"></i>
          </button>
        </span>
        <label
          for="user-income"
          v-show="Boolean(userIncome)"
          class="modal-header tag is-info is-light is-size-7 mb-2 has-text-left"
        >Your Annual Income</label>
      </div>
      <div class="field">
        <div class="control has-icons-left">
          <input
            v-on:input="inputUserIncome"
            v-model="userIncome"
            min="70000"
            maxlength="12"
            id="user-income"
            class="input is-success is-large"
            type="number"
            placeholder="Your annual income"
          />
          <span :class="currency == 'dollar' ? '' : 'is-hidden'" class="icon is-small is-left">
            <i class="fas fa-dollar-sign"></i>
          </span>
          <span :class="currency == 'rupee' ? '' : 'is-hidden'" class="icon is-small is-left">
            <i class="fas fa-rupee-sign"></i>
          </span>
        </div>
      </div>
      <span id="error-text" class="mb-2 has-text-danger is-hidden is-size-5">I said *Annual Income*</span>
      <button
        id="set-income"
        @click="userIncome !== null ? $emit('update-user-networth', userIncome) && setUserIncome() : ''"
        class="button is-success is-large"
        aria-label="Save"
      >
        <i class="fas fa-lg fa-check"></i>
      </button>
    </div>
    <button
      id="income-modal-close"
      @click="userIncome !== null ? closeModal() : ''"
      class="modal-close is-large"
      aria-label="close"
    ></button>
  </div>
</template>

<script>
export default {
  name: "UserIncomeModal",
  data: function () {
    return {
      userIncome: null,
    };
  },
  computed: {
    currency: function () {
      return this.$root.currency;
    },
  },
  methods: {
    setCurrency: function (currency) {
      this.$root.setCurrency(currency);
      this.updateNetworth(currency);
    },
    updateNetworth: function (currency) {
      let updatedContenders = this.$root.contenders.map((item) => {
        if (currency == "dollar") {
          item.networth = item.networth / 75;
        } else {
          item.networth = item.networth * 75;
        }
        return item;
      });
      this.$root.contenders = updatedContenders;
    },
    closeModal: function () {
      let income = localStorage.getItem("income");
      if (income !== null) {
        this.userIncome = income;
      }
      document
        .getElementById("user-income-modal")
        .classList.remove("is-active");
    },
    inputUserIncome: function (e) {
      let income = e.target.value;
      this.userIncome = income.slice(0, e.target.maxLength);
    },
    setUserIncome: function () {
      localStorage.setItem("income", this.userIncome);
      document.getElementById("p1-networth").innerHTML = this.userIncome;
      this.closeModal();
      this.$root.setTimerReset();
    },
  },
  mounted: function () {
    let income = localStorage.getItem("income");
    if (income !== null) {
      this.userIncome = income;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.field {
  width: 80%;
}
.modal-header {
  align-self: flex-end;
}
.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.field-header {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.currency-buttons {
  cursor: pointer;
}
@media screen and (max-width: 500px) {
  .currency-buttons button {
    font-size: 0.7em;
    padding: 1.6em 1em !important;
  }
}
</style>
