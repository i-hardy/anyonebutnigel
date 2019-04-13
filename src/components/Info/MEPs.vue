<template>
  <ExpandableInfo :title="mepsTitle">
    <ul class="content">
      <li v-for="(mep, index) in region.MEPs" :key="index">
        {{ mep.name }} ({{ mep.party }})
      </li>
    </ul>
    You can contact them via
    <a
      target="_blank"
      :href="`https://www.writetothem.com/who?pc=${region.postcode}&a=EUR`"
      >WriteToThem</a
    >
  </ExpandableInfo>
</template>

<script>
import ExpandableInfo from './ExpandableInfo.vue';

export default {
  name: 'MEPs',
  components: {
    ExpandableInfo
  },
  props: {
    region: {
      type: Object,
      required: true
    }
  },
  computed: {
    mepsTitle() {
      if (this.region.isNigel) return 'Who are my other MEPs?';
      return 'Who are my MEPs?';
    }
  }
};
</script>

<style>
</style>
