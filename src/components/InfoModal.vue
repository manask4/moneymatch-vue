<template>
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <h1 class="title is-size-5 mb-3">
          About
          <span class="info-icon">
            <font-awesome-icon :icon="['fas', 'info-circle']" size="sm" />
          </span>
        </h1>
        <h2 class="mb-5">
          See how you stack up against some of the billionaires on the planet
          and check how much money you make per second.
          Built purely for fun.
          <span
            style="vertical-align:text-bottom"
            class="icon has-text-warning has-text-weight-bold"
          >
            <font-awesome-icon :icon="['fas', 'laugh-beam']" size="lg" />
          </span>
        </h2>
        <div class="content">
          <p class="mb-2 title is-size-6">FAQ</p>
          <p>
            How is the contender's income per second calculated?
            <br />
            <span
              class="has-text-success is-size-6 py-2"
            >Contender Networth / Contender Age / 365 / 24 / 3600</span>
          </p>
          <p>
            How is the user's income per second calculated?
            <br />
            <span class="has-text-success is-size-6 py-2">User annual income / 365 / 24 / 3600</span>
          </p>
          <p>
            Why take the users annual income and not networth?
            <br />
            <span
              class="has-text-success is-size-6 py-2"
            >Most people don't really have their networth figured out.</span>
          </p>
        </div>
      </div>
    </div>
    <button @click="$emit('toggle-info')" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle, faLaughBeam } from "@fortawesome/free-solid-svg-icons";
library.add(faInfoCircle, faLaughBeam);

export default {
  props: {
    isActive: Boolean,
  },
};
</script>
<style scoped>
.modal-content {
  width: 80%;
  max-width: 30em;
}
</style>