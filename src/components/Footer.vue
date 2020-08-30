<template>
  <!-- Footer -->
  <div class="footer-container">
    <span @click="toggleInfo" class="info-icon mr-5">
      <i class="fas fa-2x fa-info-circle"></i>
    </span>
    <InfoModal @toggle-info="toggleInfo" v-bind:isActive="isActive" />
    <footer class="footer has-text-light has-background-dark mt-4">
      <div class="content has-text-centered">
        <a
          class="has-text-light"
          href="https://github.com/manask4/moneymatch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>&nbsp;&nbsp;
        <p class="is-size-7 is-italic">
          Just for laughs.
          <i class="far fa-laugh"></i>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import InfoModal from "../components/InfoModal.vue";

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
