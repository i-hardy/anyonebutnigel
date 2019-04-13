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
      <div class="columns is-4 is-multiline">
        <div class="column is-half">
          <MEPs :region="region" />
        </div>
        <div class="column is-half">
          <Voting :voterInfo="region.voterInfo" />
        </div>
        <div class="column">
          <ExpandableInfo title="What's so bad about Nigel Farage?">
            <p class="content">
              How long have you got??
            </p>
          </ExpandableInfo>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from './Loader.vue';
import ExpandableInfo from './Info/ExpandableInfo.vue';
import Voting from './Info/Voting.vue';
import MEPs from './Info/MEPs.vue';

export default {
  name: 'Result',
  components: {
    Loader,
    ExpandableInfo,
    Voting,
    MEPs
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
