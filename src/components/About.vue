<template>
  <footer class="footer has-background-dark has-text-white about columns">
    <div class="column is-half is-offset-one-quarter">
      <a class="card-toggle" @click="toggleContent">
        <h2 class="subtitle is-marginless has-text-white">
          About this site
        </h2>
        <span class="icon is-large" :class="{ 'icon--rotate': showContent }">
          <i class="fas fa-2x fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
      <div
        class="about__content"
        :class="{ 'about__content--visible': showContent }"
      >
        <p class="content">
          I made this site because Nigel Farage is my MEP, and he's
          <em class="is-italic">absolutely terrible at it</em>. This year's
          European Parliament election is probably the most important one ever
          run in the UK, and Nigel doesn't deserve to keep his job.
        </p>
        <p class="content">
          This site doesn't use cookies or store any of your personal
          information. Your postcode is used to search data generously provided
          by
          <new-tab-link href="https://www.mysociety.org/"
            >mySociety</new-tab-link
          >
          and
          <new-tab-link href="https://wheredoivote.co.uk/"
            >Where Do I Vote</new-tab-link
          >.
        </p>
      </div>
      <div class="github-buttons">
        <p class="content">
          <a
            class="github-button"
            href="https://github.com/i-hardy"
            aria-label="Follow me on GitHub"
            >Follow</a
          >
          <a
            class="github-button"
            href="https://github.com/i-hardy/anyonebutnigel"
            data-icon="octicon-star"
            aria-label="Star i-hardy/anyonebutnigel on GitHub"
            >Star</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import NewTabLink from './Utility/NewTabLink.vue';

export default {
  name: 'About',
  components: {
    NewTabLink
  },
  data() {
    return {
      showContent: false
    };
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~sass-mq/mq';
@import '../assets/scss/_variables.scss';

.about {
  padding-bottom: 10px;
  &__content {
    display: none;
    &--visible {
      display: block;
    }
  }

  a:hover {
    color: $light;
  }
}

.card-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  .icon {
    float: right;
    transition: transform 0.1s ease-in-out;
    &--rotate {
      transform: rotate(180deg);
    }
  }
}

.github-buttons {
  margin-top: 1.5rem;
}
</style>
