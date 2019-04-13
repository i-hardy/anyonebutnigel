<template>
  <section class="section has-background-dark has-text-white about">
    <h2 class="subtitle has-text-white" @click="toggleContent">
      About this site
    </h2>
    <div
      class="about__content"
      :class="{ 'about__content--visible': showContent }"
    >
      <p class="content">
        I made this site because Nigel Farage is my MEP, and he's
        <em class="is-italic">absolutely terrible at it</em>. This year's
        European Parliament election is probably the most important one ever run
        in the UK, and Nigel doesn't deserve to keep his job.
      </p>
      <p class="content">
        This site doesn't use cookies or store any of your personal information.
        Your postcode is used to search data generously provided by
        <a href="https://www.mysociety.org/">mySociety</a> and
        <a href="https://wheredoivote.co.uk/">Where Do I Vote</a>.
      </p>
      <p class="content github-buttons">
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
  </section>
</template>

<script>
export default {
  name: 'About',
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

.about {
  @include mq($from: mobile, $until: tablet) {
    padding-bottom: 10px;
    &__content {
      display: none;
      &--visible {
        display: block;
      }
    }
  }
}

.github-buttons {
  a,
  span {
    margin: 0 5px;
  }
}
</style>
