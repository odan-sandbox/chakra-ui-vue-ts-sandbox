import Vue from "vue";
import Chakra, { CThemeProvider } from "@chakra-ui/vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Chakra);

new Vue({
  render: h => h(CThemeProvider, [h(App)])
}).$mount("#app");
