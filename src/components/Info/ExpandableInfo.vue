<template>
  <div class="card expandable-card">
    <div class="card-content">
      <a class="card-toggle" @click="isVisible = !isVisible">
        <h3 class="title is-size-5 is-marginless">
          {{ title }}
        </h3>
        <span class="icon is-large" :class="{ 'icon--rotate': isVisible }">
          <i class="fas fa-2x fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
      <div
        class="expandable-card__info"
        :class="{ 'expandable-card__info--visible': isVisible }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpandableInfo',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isVisible: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~sass-mq/mq';

.expandable-card {
  height: 100%;
  &__info {
    padding-top: 10px;
    @include mq($from: mobile, $until: tablet) {
      display: none;
      &--visible {
        display: block;
      }
    }
  }
}

.card-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include mq($from: tablet) {
    justify-content: center;
    cursor: default;
  }
  .icon {
    float: right;
    @include mq($from: tablet) {
      display: none;
    }
    transition: transform 0.1s ease-in-out;
    &--rotate {
      transform: rotate(180deg);
    }
  }
}
</style>
