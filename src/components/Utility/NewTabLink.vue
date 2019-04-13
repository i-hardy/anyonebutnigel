<template>
  <a target="_blank" :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'NewTabLink',
  props: {
    href: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
