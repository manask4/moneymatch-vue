<template>
  <div class="columns">
    <div class="column">
      <span class="networth tag is-medium is-success">
        <span class="currency mr-1">{{ currency }}</span>
        <span id="p2-networth">{{ contender.networth }}</span>
      </span>
      <figure class="image">
        <img class="is-rounded" :src="contender.avatar" :alt="contender.name" />
      </figure>
      <span class="mt-2 is-primary is-size-1 has-text-weight-bold">
        <span :class="this.$root.currency == 'dollar' ? 'is-hidden' : ''" class="has-text-success">
          <i class="fas fa-rupee-sign"></i>
        </span>&nbsp;
        <span
          :class="this.$root.currency == 'rupee' ? 'is-hidden' : ''"
          class="has-text-success"
        >
          <i class="fas fa-dollar-sign"></i>
        </span>&nbsp;
        <span class="money" :id="contender.alt + '-money'">{{ p1MoneyCounter }}</span>
      </span>
    </div>
    <div class="column">
      <span class="networth tag is-medium is-success">
        <span class="currency mr-1">{{ currency }}</span>
        <span id="p1-networth">{{ user.networth }}</span>
      </span>
      <figure class="image">
        <img class="is-rounded" :src="user.avatar" :alt="user.name" />
        <span class="tears-container is-hidden">
          <span class="icon has-text-info">
            <i class="fas fa-2x fa-tint"></i>
          </span>
        </span>
      </figure>
      <span class="mt-2 is-primary is-size-1 has-text-weight-bold">
        <span :class="this.$root.currency == 'dollar' ? 'is-hidden' : ''" class="has-text-success">
          <i class="fas fa-rupee-sign"></i>
        </span>&nbsp;
        <span
          :class="this.$root.currency == 'rupee' ? 'is-hidden' : ''"
          class="has-text-success"
        >
          <i class="fas fa-dollar-sign"></i>
        </span>&nbsp;
        <span class="money" :id="user.alt + '-money'">{{ p2MoneyCounter }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Match",
  props: {
    opponent: Number,
    userNetworth: Number,
  },
  data: function () {
    return {
      intervalIds: [],
      p1MoneyCounter: 0,
      p2MoneyCounter: 0,
      user: {
        id: 1,
        name: "Atmanirbhar",
        position: "Employee",
        networth: this.userNetworth,
        avatar: require("../assets/derp.jpg"),
      },
    };
  },
  computed: {
    contender: function () {
      return this.$root.contenders.filter((item) => {
        return item.id == this.opponent;
      })[0];
    },
    currency: function () {
      return this.$root.currency == "rupee" ? "Rs" : "$";
    },
    timerStarted: function () {
      return this.$root.timerStart;
    },
    timerPaused: function () {
      return this.$root.timerPause;
    },
    timerReset: function () {
      return this.$root.timerReset;
    },
  },
  watch: {
    timerStarted: function (newValue) {
      if (newValue == true) {
        this.startMatch();
      }
    },
    timerPaused: function (newValue) {
      if (newValue == true) {
        this.pauseMatch();
      }
    },
    timerReset: function (newValue) {
      if (newValue == true) {
        this.stopMatch();
      }
    },
  },
  methods: {
    startCry: function (p1Ips, p2Ips) {
      let tearsList = document.getElementsByClassName("tears-container")[0];
      if (
        tearsList.classList.contains("is-hidden") &&
        Number(p1Ips) > Number(p2Ips)
      ) {
        tearsList.classList.remove("is-hidden");
        let cryIntervalId = setInterval(() => {
          tearsList.classList.remove("cry");
          setTimeout(() => {
            tearsList.classList.add("cry");
          }, 300);
        }, 900);
        this.intervalIds.push(cryIntervalId);
      }
    },
    stopCry: function () {
      document
        .getElementsByClassName("tears-container")[0]
        .classList.add("is-hidden");
    },
    clearAllIntervals: function () {
      for (let i = 0; i < this.intervalIds.length; i++) {
        window.clearInterval(this.intervalIds[i]);
      }
      this.intervalIds = [];
    },
    isTimerResuming: function () {
      return this.$root.currTime > 0;
    },
    timerResumingBy: function () {
      return this.$root.currTime * 100;
    },
    startMatch: function () {
      //  Ips = Income per second
      let p1Ips = Number(
        this.contender.networth / this.contender.age / 365 / 24 / 3600
      ).toFixed(3);
      let p2Ips = Number(this.userNetworth / 365 / 24 / 3600).toFixed(3);
      let startMs = new Date().getTime();
      if (this.isTimerResuming()) {
        startMs = Number(startMs - this.timerResumingBy());
      }
      let moneyIntervalId = setInterval(() => {
        let currMs = new Date().getTime();
        let secondsElapsed = (currMs - startMs) / 1000;

        let p1NewAmount = (secondsElapsed * p1Ips).toFixed(2);
        p1NewAmount = this.$root.formatNumber(p1NewAmount);
        this.p1MoneyCounter = p1NewAmount;

        let p2NewAmount = (secondsElapsed * p2Ips).toFixed(2);
        p2NewAmount = this.$root.formatNumber(p2NewAmount);
        this.p2MoneyCounter = p2NewAmount;

        if (this.$root.currTime % 50 == 0) {
          this.startCry(p1Ips, p2Ips);
        }
      }, 100);

      this.intervalIds.push(moneyIntervalId);
    },
    pauseMatch: function () {
      this.clearAllIntervals();
      this.stopCry();
    },
    stopMatch: function () {
      this.clearAllIntervals();
      this.p1MoneyCounter = 0;
      this.p2MoneyCounter = 0;
      this.stopCry();
    },
  },
  mounted: function () {
    let income = localStorage.getItem("income");
    if (income !== null) {
      document.getElementById("p1-networth").innerHTML = income;
    }
  },
};
</script>

<style scoped>
figure img {
  height: 250px;
  width: 250px;
  padding: 4px;
  background-color: #fff;
  border: 2px solid #2f4f4f;
  position: relative;
}
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}
.networth {
  transform: rotate(-25deg) translate(-50px, 0px);
  z-index: 1;
}
.tears-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 15%;
  bottom: 35%;
}
.vis-hidden {
  visibility: hidden;
}
.cry {
  animation-duration: 1s;
  animation-name: fadein;
}
@keyframes fadein {
  from {
    opacity: 1;
    display: inline !important;
  }
  50% {
    opacity: 0.5;
  }
  to {
    opacity: 0;
    bottom: 0%;
  }
}

@media screen and (max-width: 769px) {
  figure img {
    height: 150px;
    width: 150px;
  }
  .column {
    padding: 1em;
  }
  .money {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 1024px) {
  figure img {
    height: 200px;
    width: 200px;
  }
}
</style>