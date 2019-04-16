<template>
  <section class="section is-paddingless">
    <loader v-if="loading" />
    <h2 v-else-if="errorMessage" class="subtitle is-size-4 has-text-danger">
      {{ niceError }}
    </h2>
    <div v-else-if="region.MEPs" class="container is-paddingless">
      <h2 class="subtitle is-size-4 has-text-weight-bold">
        <span v-if="region.isNigel">
          Sadly... Nigel Farage IS your MEP
        </span>
        <span v-else>
          Thankfully... Nigel Farage is NOT your MEP
        </span>
      </h2>
      <div class="columns is-4 is-multiline">
        <div class="column is-half">
          <meps :region="region" />
        </div>
        <div class="column is-half">
          <voting :voterInfo="region.voterInfo" />
        </div>
        <div class="column">
          <nigel-facts />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from './Utility/Loader.vue';
import Voting from './Info/Voting.vue';
import Meps from './Info/MEPs.vue';
import NigelFacts from './Info/NigelFacts.vue';

export default {
  name: 'Result',
  components: {
    Loader,
    Voting,
    Meps,
    NigelFacts
  },
  props: {
    region: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: true
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },
  computed: {
    niceError() {
      return this.errorMessage.split(': ')[1];
    }
  }
};
</script>

<style scoped></style>
