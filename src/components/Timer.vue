<template>
  <div class="mb-2 has-text-weight-light" id="timer-container">
    <span
      class="is-size-3 is-family-monospace has-text-yellow"
      id="timer"
    >{{ this.$root.hours }}h {{ this.$root.minutes }}m {{ this.$root.seconds }}s</span>
    <span class="has-text-grey" id="timer-icons">
      <span
        @click="this.$root.setTimerStart"
        id="start-timer"
        :class="{ 'is-hidden': this.$root.timerStart }"
      >
        <!-- <i class="far fa-lg fa-play-circle"></i> -->
        <i class="fas fa-play"></i>
      </span>
      <span
        @click="this.$root.setTimerPaused"
        id="pause-timer"
        class="has-text-weight-light"
        :class="{ 'is-hidden': !this.$root.timerStart }"
      >
        <!-- <i class="far fa-lg fa-pause-circle"></i> -->
        <i class="fas fa-pause"></i>
      </span>
      <span
        @click="this.$root.setTimerReset"
        id="stop-timer"
        class="ml-4"
        :class="{ 'is-hidden': this.$root.timerReset }"
      >
        <!-- <i class="far fa-lg fa-stop-circle"></i> -->
        <i class="fas fa-undo-alt"></i>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: {},
  data: function () {
    return {};
  },
  watch: {},
  methods: {},
};
</script>

<style scoped>
#timer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  /* color: #436060; */
  /* color: #556f6f; */
}
#timer-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}
#timer-icons span {
  cursor: pointer;
  transition: 0.2s linear;
}

@media screen and (max-width: 769px) {
  #timer-container {
    margin-bottom: 1em !important;
    margin-top: 1em !important;
  }
}
</style>