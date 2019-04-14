<template>
  <ExpandableInfo title="What's so bad about Nigel Farage?">
    <div class="has-text-left">
      <!-- <h4 class="is-size-6 has-text-weight-semibold has-text-left">
        Nigel Farage isn't honest about his views
      </h4>
      <ul class="content">
        <li>
          In May 2018 he claimed on his radio show that
          <NewTabLink href="https://youtu.be/S3YIkY8x6Ws?t=2285"
            >"I never promised [Brexit] would be a huge success"</NewTabLink
          >- despite having said for many years that
          <NewTabLink
            href="https://www.express.co.uk/news/politics/591988/Nigel-Farage-EU-European-Union-Ukip"
            >Britain would 'thrive' outside of the EU.</NewTabLink
          >
        </li>
      </ul> -->
      <h4 class="is-size-6 has-text-weight-semibold has-text-left">
        Nigel Farage is wasting public money
      </h4>
      <ul class="content">
        <li>
          In 2016 the European Parliament
          <NewTabLink
            href="https://www.independent.co.uk/news/uk/politics/brexit-ukip-eu-money-misspending-eu-referendum-campaign-a7422471.html"
            >forced him to repay EU funds spent on the Brexit campaign and his
            campaign for the British parliament</NewTabLink
          >.
        </li>
        <li>
          In 2017 he was
          <NewTabLink
            href="https://www.thetimes.co.uk/article/ukip-faces-500-000-bill-over-claims-of-misused-eu-cash-dr3jzzfgv"
            >one of eight UKIP MEPs investigated for misuse of EU
            funds</NewTabLink
          >.
        </li>
        <li>
          If the UK leaves the EU he is eligible to receive
          <NewTabLink
            href="https://news.sky.com/story/british-meps-in-line-for-eur6m-golden-goodbye-when-uk-leaves-eu-11123258"
            >a 'transitional payment' of £150,000</NewTabLink
          >, to be paid for from the UK's Brexit bill.
        </li>
      </ul>
      <h4 class="is-size-6 has-text-weight-semibold has-text-left">
        Nigel Farage is bad at his job
      </h4>
      <ul class="content">
        <li>
          He has only participated in
          <NewTabLink
            href="https://www.votewatch.eu/en/term8-nigel-farage-2.html"
            >40% of all possible roll-call votes since 2014</NewTabLink
          >.
        </li>
        <li>
          Only
          <NewTabLink
            href="https://www.votewatch.eu/en/term8-voting-statistics.html"
            >three other MEPs have a worse attendance rating</NewTabLink
          >.
        </li>
        <li>
          MEPRanking.eu ranks him
          <NewTabLink href="http://www.mepranking.eu/mep.php?id=4525"
            >738th out of 750 MEPs for productivity</NewTabLink
          >.
        </li>
      </ul>
    </div>
  </ExpandableInfo>
</template>

<script>
import ExpandableInfo from './ExpandableInfo.vue';
import NewTabLink from '../Utility/NewTabLink.vue';

export default {
  name: 'NigelFacts',
  components: {
    ExpandableInfo,
    NewTabLink
  }
};
</script>

<style scoped>
h4 {
  margin-bottom: 1rem;
}
ul {
  list-style: initial;
  margin-left: 1rem;
}
</style>
