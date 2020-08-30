<template>
  <div id="app">
    <Nav />
    <Landing />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Landing from "./components/Landing.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Landing,
    Footer,
  },
  data: function () {
    return {};
  },
  methods: {},
  mounted: function () {
    let income = localStorage.getItem("income");
    if (income === null) {
      document.getElementById('trigger-income-modal').click();
    }
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* background-color: #fffffe; */
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
