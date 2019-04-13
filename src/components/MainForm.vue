<template>
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

    <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="require('../graphql/Region.gql')"
      :variables="{ postcode }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Result -->
        <h2 v-else-if="data" class="subtitle has-text-weight-bold">
          <span v-if="data.region.isNigel">
            Sadly... Nigel Farage IS your MEP
          </span>
          <span v-else>
            Thankfully... Nigel Farage is NOT your MEP
          </span>
        </h2>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: 'MainForm',
  data() {
    return {
      postcode: ''
    };
  }
};
</script>

<style scoped></style>
