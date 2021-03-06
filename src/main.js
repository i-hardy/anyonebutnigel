import './assets/scss/theme.scss';
import Vue from 'vue';
import App from './App.vue';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app');
