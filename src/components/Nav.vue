<template>
  <!-- Navigation -->
  <nav class="level">
    <!-- Left side -->
    <div class="level-left">
      <div class="level-item banner">
        <h1 class="title is-spaced is-3 pl-0">MoneyMatch</h1>
        <h2 class="subtitle is-6 has-text-dark">Income per second simulator</h2>
      </div>
    </div>
    <!-- Right side -->
    <div class="level-right nav-links">
      <p class="level-item">
        <!-- <a v-on:click="openContendersModal(); $emit('tp');" id="trigger-contenders-modal">Contenders</a> -->
        <button class="button is-info" v-on:click="openContendersModal();" id="trigger-contenders-modal">Contenders</button>

      </p>
      <p class="level-item">
        <!-- <a v-on:click="openUserIncomeModal(); $emit('tp');" id="trigger-income-modal">Set Income</a> -->
        <button class="button is-info" v-on:click="openUserIncomeModal();" id="trigger-income-modal">Set Income</button>
      </p>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Nav",
  components: {
  },
  props: {
    // timer: Object,
  },
  methods: {
    openContendersModal: function () {
      document.getElementById("contenders-modal").classList.add("is-active");
      this.$root.setTimerPaused();
    },
    openUserIncomeModal: function () {
      document.getElementById("user-income-modal").classList.add("is-active");
      let income = localStorage.getItem('income');
      if (income !== null) {
        document.getElementById("user-income").value = income;
      }
      this.$root.setTimerPaused();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: #994ff3;
}

.banner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

nav {
  padding: 1em 2em;
}

.level {
  margin-bottom: 0 !important;
}

@media screen and (max-width: 769px) {
  .banner {
    align-items: center;
  }
  .nav-links {
    display: flex;
    justify-content: center;
  }
  .nav-links .level-item {
    margin-bottom: 0 !important;
    margin-right: 10px;
  }
}
</style>
