<template>
  <div id="contenders-modal" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      <div class="box">
        <p
          class="modal-header tag is-info is-light is-size-4 has-text-centered"
        >Select your contender</p>
        <table class="table is-striped is-hoverable mb-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Net Worth</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-bind:class="{ 'is-selected': player == contender.id }"
              v-on:click="player != contender.id ? $emit('update-contender', contender) : '';"
              class="contender-row"
              v-for="contender in contenders"
              v-bind:key="contender.id"
              :id="contender.id"
            >
              <td class="contender-details">
                <figure class="image is-48x48">
                  <img class="is-rounded" :src="contender.avatar" :alt="contender.name" />
                </figure>
                <span class="contender-details-name">
                  <span class="is-size-6">{{ contender.name }}</span>
                  <span class="is-size-7">{{ contender.position }}</span>
                </span>
              </td>
              <td class="contender-nw has-text-right">
                <span class="tag is-light is-success is-medium">${{ contender.nwText }}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <span
          style="display: block"
          class="subtitle is-size-7 is-italic has-text-right"
        >Data sourced from Forbes</span>
      </div>
      <button id="set-contender" v-on:click="closeModal" class="button is-success is-large">
        <font-awesome-icon :icon="['fas', 'check']" size="lg" />
      </button>
    </div>
    <button
      id="contenders-modal-close"
      v-on:click="closeModal"
      class="modal-close is-large"
      aria-label="close"
    ></button>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faCheck);

export default {
  name: "ContendersModal",
  props: {
    player: Number,
  },
  data: function () {
    return {
      contenders: this.$root.contenders,
    };
  },
  methods: {
    closeModal: function () {
      document.getElementById("contenders-modal").classList.remove("is-active");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
figure {
  float: left;
  margin-right: 10px;
}
.is-selected img {
  background-color: #fffffe;
}
img {
  background-color: #2f4f4f;
  padding: 2px;
}
.contender-details-name {
  display: flex;
  flex-direction: column;
}
.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-header {
  margin: 0 auto;
  width: 100%;
}
.contender-row {
  cursor: pointer;
}
.is-selected {
  background-color: #994ff3 !important;
  color: #fff;
}
</style>
