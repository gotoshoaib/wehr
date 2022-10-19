import Vue from 'vue'
import App from './App.vue'

import router from "@/router/index";


// common components
import StatsCard from "@/components/StatsCard.vue"
import HistoryCard from "@/components/HistoryCard.vue"

Vue.component(StatsCard.name, StatsCard);

Vue.component(HistoryCard.name, HistoryCard);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
