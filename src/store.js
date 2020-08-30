import Vue from "vue";
import contenders from "./contenders";

let store = {
  data: {
    seconds: 0,
    minutes: 0,
    hours: 0,
    currTime: 0,
    timerStart: false,
    timerPause: false,
    timerReset: true,
    intervalIds: [],
    currency: "dollar",
    contenders: contenders,
  },
  methods: {
    setTimerStart: function() {
      let intervalID = setInterval(() => {
        this.currTime += 1;
        if (this.currTime % 10 == 0) {
          this.seconds += 1;
          if (this.seconds % 60 == 0) {
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes % 60 == 0) {
              this.minutes = 0;
              this.hours += 1;
            }
          }
        }
      }, 100);
      this.intervalIds.push(intervalID);
      this.timerStart = true;
      this.timerPause = false;
      this.timerReset = false;
    },
    setTimerPaused: function() {
      if (this.timerStart === true) {
        this.clearAllIntervals();
        this.timerStart = false;
        this.timerPause = true;
        this.timerReset = false;
      }
    },
    setTimerReset: function() {
      this.clearAllIntervals();
      this.timerStart = false;
      this.timerPause = false;
      this.timerReset = true;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.currTime = 0;
    },
    clearAllIntervals: function() {
      let intervalsNum = this.intervalIds.length;
      for (let i = 0; i < intervalsNum; i++) {
        window.clearInterval(this.intervalIds[i]);
      }
      this.intervalIds = [];
    },
    setCurrency: function(currency) {
      this.currency = currency;
    },
    formatNumber: function(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};

export default Vue.observable(store);
