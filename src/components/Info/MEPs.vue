<template>
  <expandable-info :title="mepsTitle">
    <ul class="content">
      <li v-for="(mep, index) in region.MEPs" :key="index">
        {{ mep.name }} ({{ mep.party }})
      </li>
    </ul>
    <p class="content">
      You can contact them via
      <new-tab-link
        :href="`https://www.writetothem.com/who?pc=${region.postcode}&a=EUR`"
        >WriteToThem</new-tab-link
      >
    </p>
    <footer class="card-footer">
      <p class="is-size-7">
        Information provided by the
        <new-tab-link
          href="https://data.europa.eu/euodp/data/dataset/members-of-the-european-parliament"
          >EU Open Data Portal</new-tab-link
        >
      </p>
    </footer>
  </expandable-info>
</template>

<script>
import ExpandableInfo from './ExpandableInfo.vue';
import NewTabLink from '../Utility/NewTabLink.vue';

export default {
  name: 'MEPs',
  components: {
    ExpandableInfo,
    NewTabLink
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

<style></style>
