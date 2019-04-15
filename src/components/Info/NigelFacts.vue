<template>
  <expandable-info title="What's so bad about Nigel Farage?">
    <div class="has-text-left">
      <h4 class="is-size-6 has-text-weight-semibold has-text-left">
        Nigel Farage is wasting your money
      </h4>
      <ul class="content">
        <li>
          In 2016 the European Parliament
          <new-tab-link
            href="https://www.independent.co.uk/news/uk/politics/brexit-ukip-eu-money-misspending-eu-referendum-campaign-a7422471.html"
            >forced him to repay public funds spent on the Brexit campaign and
            his personal campaign campaign for the British
            parliament</new-tab-link
          >.
        </li>
        <li>
          In 2017 he was
          <new-tab-link
            href="https://www.thetimes.co.uk/article/ukip-faces-500-000-bill-over-claims-of-misused-eu-cash-dr3jzzfgv"
            >one of eight UKIP MEPs investigated for misuse of public
            funds</new-tab-link
          >.
        </li>
        <li>
          If the UK leaves the EU he is eligible to receive
          <new-tab-link
            href="https://news.sky.com/story/british-meps-in-line-for-eur6m-golden-goodbye-when-uk-leaves-eu-11123258"
            >a 'transitional payment' of £150,000</new-tab-link
          >, to be paid for from the UK's Brexit bill.
        </li>
      </ul>
      <h4 class="is-size-6 has-text-weight-semibold has-text-left">
        Nigel Farage is bad at his job
      </h4>
      <ul class="content">
        <li>
          He has only participated in
          <new-tab-link
            href="https://www.votewatch.eu/en/term8-nigel-farage-2.html"
            >40% of all possible roll-call votes since 2014</new-tab-link
          >.
        </li>
        <li>
          Only
          <new-tab-link
            href="https://www.votewatch.eu/en/term8-voting-statistics.html"
            >three other MEPs have a worse attendance rating</new-tab-link
          >.
        </li>
        <li>
          MEPRanking.eu ranks him
          <new-tab-link href="http://www.mepranking.eu/mep.php?id=4525"
            >738th out of 750 MEPs for productivity</new-tab-link
          >.
        </li>
      </ul>
      <h4 class="is-size-6 has-text-weight-semibold has-text-left">
        Nigel Farage has some horrible views
      </h4>
      <ul class="content">
        <li>
          In 2012 and 2015 he voiced his support for
          <new-tab-link
            href="https://www.independent.co.uk/news/uk/politics/nigel-farage-nhs-might-have-to-be-replaced-by-private-health-insurance-9988904.html"
            >replacing the NHS with a US-style private health insurance
            system</new-tab-link
          >.
        </li>
        <li>
          In 2014, he claimed that
          <new-tab-link
            href="https://www.telegraph.co.uk/news/politics/nigel-farage/11303133/Nigel-Farage-defends-use-of-word-chinky.html"
            >most people in the UK would use a racist slur to describe Chinese
            people</new-tab-link
          >.
        </li>
        <li>
          Also in 2014, he said that
          <new-tab-link
            href="https://www.yorkshirepost.co.uk/news/mothers-worth-less-than-men-as-employees-says-ukip-s-farage-1-6384320/amp"
            >women are "worth less" than men in the workplace</new-tab-link
          >.
        </li>
      </ul>
      <h4 class="is-size-6 has-text-weight-semibold has-text-left">
        Nigel Farage has some terrible friends
      </h4>
      <ul class="content">
        <li>
          He has a
          <new-tab-link
            href="https://www.bbc.co.uk/news/av/world-us-canada-44932291/nigel-farage-on-steve-bannon-s-new-european-project"
            >long-standing association with American white nationalist Steve
            Bannon</new-tab-link
          >.
        </li>
        <li>
          He and Leave.EU colleague Arron Banks have been
          <new-tab-link
            href="https://www.vanityfair.com/news/2018/11/nigel-farages-name-keeps-coming-up-in-the-robert-mueller-probe"
            >linked to Russian financial interference in the 2016 referendum and
            US presidential election</new-tab-link
          >.
        </li>
        <li>
          He's a friend and informal advisor to Donald Trump, even recently
          <new-tab-link
            href="https://www.standard.co.uk/news/politics/nigel-farage-met-donald-trump-and-urged-him-to-back-nodeal-deal-brexit-a4088886.html"
            >urging him to encourage a no-deal Brexit</new-tab-link
          >.
        </li>
      </ul>
      <h4 class="is-size-6 has-text-weight-semibold has-text-left">
        Nigel Farage can't even be consistent
      </h4>
      <ul class="content">
        <li>
          In June 2016, only hours after the referendum result, he
          <new-tab-link
            href="https://www.independent.co.uk/news/uk/politics/eu-referendum-result-nigel-farage-nhs-pledge-disowns-350-million-pounds-a7099906.html"
            >backtracked on the claim that Brexit would free up millions a week
            for the NHS</new-tab-link
          >.
        </li>
        <li>
          In March 2017 he stated on his radio show that
          <new-tab-link
            href="https://www.lbc.co.uk/radio/presenters/nigel-farage/nigel-farage-if-brexit-is-failure-ill-move-abroad/"
            >"...if Brexit is a disaster, I will go and live abroad. I'll go and
            live somewhere else"</new-tab-link
          >.
        </li>
        <li>
          In May 2018 he claimed on his radio show that
          <new-tab-link href="https://youtu.be/S3YIkY8x6Ws?t=2285"
            >"I never promised [Brexit] would be a huge success"</new-tab-link
          >- despite having said for many years that
          <new-tab-link
            href="https://www.express.co.uk/news/politics/591988/Nigel-Farage-EU-European-Union-Ukip"
            >Britain would 'thrive' outside of the EU</new-tab-link
          >.
        </li>
      </ul>
    </div>
  </expandable-info>
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
