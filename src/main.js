import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from "axios";
Vue.prototype.axios = axios;
Vue.use(Vant);
import {store} from "@/store/store"
Vue.config.productionTip = false
require("./mock/index.js");
import router from "./router/index.js";
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')