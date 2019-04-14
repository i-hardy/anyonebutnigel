<template>
  <ul class="star-curve">
    <li v-for="n in 12" :key="n">
      <svg class="star" :data-index="n">
        <polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          style="fill-rule:nonzero;"
        />
      </svg>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Stars'
};
</script>

<style lang="scss" scoped>
@mixin on-circle($item-count, $circle-size, $item-size) {
  position: relative;
  width: $circle-size;
  height: $circle-size;
  padding: 0;
  border-radius: 50%;
  list-style: none;

  > * {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: $item-size;
    height: $item-size;
    margin: -($item-size / 2);

    $angle: (360 / $item-count);
    $rot: 270;

    @for $i from 1 through $item-count {
      &:nth-of-type(#{$i}) {
        transform: rotate($rot * 1deg)
          translate($circle-size / 2)
          rotate($rot * -1deg);
      }

      $rot: $rot + $angle;
    }
  }
}

.star-curve {
  @include on-circle($item-count: 12, $circle-size: 10em, $item-size: 6em);
  margin: 5em auto 0;
  position: absolute;
  left: 0;
  .star {
    display: block;
    max-width: 100%;
    height: 6em;
    width: 6em;
  }
}
</style>
