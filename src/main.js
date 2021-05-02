import Vue from 'vue';
import Vuelidate from 'vuelidate/src';
import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line import/order,import/extensions,import/no-unresolved
import messagePlugin from './utils/message.plugin.js';
// eslint-disable-next-line import/order,import/extensions,import/no-unresolved
import dateFilter from './filters/date.filter.js';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter('dateF', dateFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
