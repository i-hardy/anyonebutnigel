<template>
  <main id="app">
    <section class="hero is-medium is-bold is-light">
      <div class="hero-body">
        <div class="container">
          <figure>
            <img class="image" alt="Nigel Farage" src="./assets/sorry.png" />
          </figure>
          <h1 class="title">
            Is Nigel Farage your MEP?
          </h1>
          <h2 class="subtitle">
            Enter your postcode to find out
          </h2>
        </div>
      </div>
    </section>
    <ApolloExample />
  </main>
</template>

<script>
import ApolloExample from './components/ApolloExample.vue';

export default {
  name: 'app',
  components: {
    ApolloExample
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
}
</style>
