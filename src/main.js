import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
// eslint-disable-next-line import/order,import/extensions,import/no-unresolved
import dateFilter from 'filters/date.filter.js';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;
Vue.filter('dateF', dateFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
