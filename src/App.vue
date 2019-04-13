<template>
  <main id="app" class="has-background-light">
    <section class="hero is-bold is-dark">
      <div class="hero-body is-medium is-paddingless level">
        <figure class="image">
          <img alt="Nigel Farage" src="./assets/sorry.png" />
        </figure>
        <div class="container">
          <h1 class="title">
            Is Nigel Farage your MEP?
          </h1>
          <h2 class="subtitle">
            Enter your postcode to find out
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <MainForm />
    </section>
  </main>
</template>

<script>
import MainForm from './components/MainForm.vue';

export default {
  name: 'app',
  components: {
    MainForm
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex: 1;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
}

.image {
  margin: 0 auto;
  max-width: 640px;
  img {
    max-width: 640px;
  }
}
</style>
