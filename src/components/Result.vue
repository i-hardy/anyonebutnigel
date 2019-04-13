<template>
  <section class="section is-paddingless">
    <Loader v-if="loading" />
    <div v-else-if="region.MEPs" class="container is-paddingless">
      <h2 class="subtitle is-size-4 has-text-weight-bold">
        <span v-if="region.isNigel">
          Sadly... Nigel Farage IS your MEP
        </span>
        <span v-else>
          Thankfully... Nigel Farage is NOT your MEP
        </span>
      </h2>
      <div class="columns">
        <div class="column">
          <h3 class="is-size-5">Who are my MEPs?</h3>
        </div>
        <div class="column">
          <h3 class="is-size-5">How do I vote for anyone but Nigel?</h3>
        </div>
        <div class="column">
          <h3 class="is-size-5">What's so bad about Nigel Farage?</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from './Loader.vue';

export default {
  name: 'Result',
  components: {
    Loader
  },
  props: {
    region: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped></style>
