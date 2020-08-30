<template>
  <!-- Footer -->
  <div class="footer-container">
    <span @click="toggleInfo" class="info-icon mr-5">
      <font-awesome-icon :icon="['fas', 'info-circle']" size="2x" />
    </span>
    <InfoModal @toggle-info="toggleInfo" v-bind:isActive="isActive" />
    <footer class="footer has-text-light has-background-dark mt-4">
      <div class="content has-text-centered">
        <a
          aria-label="Go to github repository"
          class="has-text-light"
          href="https://github.com/manask4/moneymatch-vue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img height="18" width="18" src="../assets/github.png" alt="Github Link" />
        </a>&nbsp;&nbsp;
        <p class="is-size-7 is-italic">
          Just for laughs.
          <font-awesome-icon :icon="['fas', 'laugh']" />
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import InfoModal from "../components/InfoModal.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle, faLaugh } from "@fortawesome/free-solid-svg-icons";
library.add(faInfoCircle, faLaugh);

export default {
  name: "Footer",
  components: {
    InfoModal,
  },
  data: function () {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleInfo: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info-icon {
  align-self: flex-end;
  transform: rotate(-20deg);
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.info-icon:hover {
  transform: rotate(0deg);
  transition: 0.2s ease-in-out;
}
.footer-container {
  display: flex;
  flex-direction: column;
}
footer {
  padding: 0.5em 2em;
}
footer .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
