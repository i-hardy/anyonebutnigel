<template>
  <section class="section central has-background-light">
    <div class="container">
      <div class="columns is-mobile">
        <div
          class="form column is-half-tablet is-offset-one-quarter-tablet is-10-mobile is-offset-1-mobile"
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
        </div>
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
.central {
  flex: 1;
  flex-grow: 1;
}

.input {
  text-align: center;
}
</style>
