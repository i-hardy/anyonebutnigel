<template>
  <section class="section central has-background-light">
    <div class="container">
      <div class="columns is-mobile">
        <form
          @submit.prevent
          class="form column is-half-desktop is-offset-one-quarter-desktop is-10-mobile is-offset-1-mobile is-two-thirds-tablet is-offset-2-tablet"
        >
          <div class="field">
            <label for="postcode" class="label is-large">Postcode</label>
            <div class="control">
              <input
                v-model="postcode"
                class="input is-large"
                id="postcode"
                type="text"
              />
            </div>
          </div>
        </form>
      </div>

      <ApolloQuery
        :query="require('../graphql/Region.gql')"
        :variables="{ postcode }"
      >
        <template slot-scope="{ result: { loading, error, data } }">
          <Result :loading="loading" :region="data ? data.region : {}" />
        </template>
      </ApolloQuery>
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
      postcode: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.input {
  text-align: center;
}
</style>
