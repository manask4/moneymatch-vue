<template>
  <div class="container">
    <Timer />
    <Match v-bind:userNetworth="userNetworth" v-bind:opponent="playerone" />
    <ContendersModal v-on:update-contender="updateContender" v-bind:player="playerone" />
    <UserIncomeModal v-on:update-user-networth="updateUserNetworth" />
  </div>
</template>

<script>
import Timer from "../components/Timer.vue";
import Match from "../components/Match.vue";
import ContendersModal from "../components/ContendersModal.vue";
import UserIncomeModal from "../components/UserIncomeModal.vue";

export default {
  name: "Landing",
  components: {
    Timer,
    Match,
    ContendersModal,
    UserIncomeModal,
  },
  data: function () {
    return {
      playerone:
        Math.floor(Math.random() * this.$root.contenders.length) + 1,
      userNetworth: Number(localStorage.getItem("income")) || 0,
    };
  },
  methods: {
    updateContender: function (contender) {
      this.playerone = contender.id;
      this.$root.setTimerReset();
    },
    updateUserNetworth: function (userNetworth) {
      this.userNetworth = Number(userNetworth);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 70%;
}
</style>
