<template>
  <ExpandableInfo title="How do I vote for anyone but Nigel?">
    <p class="content">
      If you're a British or EU citizen living in the UK, you can vote in the
      European Parliament election.
      <span v-if="canStillRegister">
        <a href="https://www.gov.uk/register-to-vote"
          >Register to vote at gov.uk</a
        >
      </span>
    </p>
    <p class="content">
      Your local authority is
      <a target="_blank" :href="voterInfo.council.website">{{
        voterInfo.council.name
      }}</a
      >.
    </p>
    <p class="content" v-if="voterInfo.pollingStation.address">
      Your polling station is at: <br />
      <span v-for="(line, index) in sanitiseAddress" :key="index">
        {{ line }}<br
      /></span>
      {{ voterInfo.pollingStation.postcode }}<br />
      <a target="_blank" :href="googleMapsDirections"
        >Get directions from Google Maps</a
      >
    </p>
    <p class="content" v-else>
      You can <a :href="`mailto:${voterInfo.council.email}`">email</a> or
      <a :href="`tel:+${voterInfo.council.phone}`">phone</a> them to find out
      where to vote.
    </p>
  </ExpandableInfo>
</template>

<script>
import ExpandableInfo from './ExpandableInfo.vue';

export default {
  name: 'Voting',
  components: {
    ExpandableInfo
  },
  props: {
    voterInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    canStillRegister() {
      const today = new Date();
      const cutoff = new Date('2019-05-07');
      return cutoff > today;
    },
    sanitiseAddress() {
      return this.voterInfo.pollingStation.address.split('<br />');
    },
    googleMapsDirections() {
      return `https://www.google.com/maps/dir/?api=1&origin=${
        this.voterInfo.long
      },${this.voterInfo.lat}&destination=${
        this.voterInfo.pollingStation.long
      },${this.voterInfo.pollingStation.lat}`;
    }
  }
};
</script>

<style></style>
