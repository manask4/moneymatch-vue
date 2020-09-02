const timer = {
  data: {
    seconds: 0,
    minutes: 0,
    hours: 0,
    currTime: 0,
    timerStart: false,
    timerPause: false,
    timerReset: true,
    intervalIds: [],
  },
  methods: {
    setTimerStart: function() {
      let intervalID = setInterval(() => {
        this.currTime += 1;
        // when currtime = 10, i.e 1 second
        this.seconds = Math.floor(this.currTime / 10) % 60;
        this.minutes = Math.floor(this.currTime / 600) % 60;
        this.hours = Math.floor(this.currTime / 36000);
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
  },
};

export default timer;
