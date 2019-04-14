<template>
  <section class="section is-paddingless">
    <Loader v-if="loading" />
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
          <MEPs :region="region" />
        </div>
        <div class="column is-half">
          <Voting :voterInfo="region.voterInfo" />
        </div>
        <div class="column">
          <NigelFacts />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from './Utility/Loader.vue';
import Voting from './Info/Voting.vue';
import MEPs from './Info/MEPs.vue';
import NigelFacts from './Info/NigelFacts.vue';

export default {
  name: 'Result',
  components: {
    Loader,
    Voting,
    MEPs,
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
