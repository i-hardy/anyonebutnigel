<template>
  <div class="card expandable-card">
    <div class="card-content">
      <h3 class="title is-size-5" @click="isVisible = !isVisible">
        {{ title }}
        <span class="icon" :class="{ 'icon--rotate': isVisible }">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </h3>
      <slot
        class="expandable-card__info"
        :class="{ 'expandable-card__info--visible': isVisible }"
      ></slot>
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
    @include mq($from: mobile, $until: tablet) {
      display: none;
      &--visible {
        display: block;
      }
    }
  }
}

.icon {
  @include mq($from: tablet) {
    display: none;
  }
  transition: transform 0.1s ease-in-out;
  &--rotate {
    transform: rotate(180deg);
  }
}
</style>
