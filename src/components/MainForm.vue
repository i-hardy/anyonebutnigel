<template>
  <section class="section central has-background-light">
    <div class="container">
      <div class="columns is-mobile">
        <form
          @submit.prevent="getPostcode"
          class="form column is-half-desktop is-offset-one-quarter-desktop is-10-mobile is-offset-1-mobile is-two-thirds-tablet is-offset-2-tablet"
        >
          <div class="control control--flex">
            <label for="postcode" class="label is-large-tablet">Postcode</label>
          </div>
          <div class="field has-addons">
            <div class="control is-expanded">
              <input
                v-model="postcode"
                class="input is-large-tablet"
                id="postcode"
                type="text"
              />
            </div>
            <div class="control">
              <button class="button is-large-tablet is-primary">
                Check
              </button>
            </div>
          </div>
        </form>
      </div>

      <Result :loading="loading" :region="region" :errorMessage="showError" />
    </div>
  </section>
</template>

<script>
import Result from './Result.vue';

export default {
  name: 'MainForm',
  components: {
    Result
  },
  data() {
    return {
      postcode: '',
      loading: false,
      region: {},
      showError: ''
    };
  },
  methods: {
    async getPostcode() {
      try {
        this.region = {};
        this.loading = true;
        const { data } = await this.$apollo.query({
          query: require('../graphql/Region.gql'),
          variables: {
            postcode: this.postcode
          }
        });
        this.loading = false;
        this.region = data.region;
      } catch (error) {
        this.loading = false;
        this.showError = error.message;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
