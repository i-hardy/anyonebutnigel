<template>
  <main id="app" class="has-background-light">
    <section class="hero is-bold is-primary">
      <div class="hero-body is-medium is-paddingless level">
        <figure class="image">
          <img
            alt="Nigel Farage"
            srcset="./assets/sorry-mobile.png 320w, ./assets/sorry.png 640w"
            sizes="(max-width: 480px) 320px,
            640px"
            src="./assets/sorry-mobile.png"
          />
        </figure>
        <div class="container">
          <h1
            class="title has-text-warning is-size-1 is-size-2-mobile has-text-weight-bold"
          >
            Is Nigel Farage your MEP?
          </h1>
          <h2 class="subtitle has-text-warning is-size-3 is-size-4-mobile">
            Enter your postcode to find out
          </h2>
        </div>
      </div>
    </section>
    <MainForm />
    <About />
  </main>
</template>

<script>
import MainForm from './components/MainForm.vue';
import About from './components/About.vue';

export default {
  name: 'app',
  components: {
    MainForm,
    About
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
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

.hero-body .container {
  padding: 30px 0 20px;
}
</style>
