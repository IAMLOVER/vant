import Vue from "vue";
import "amfe-flexible";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 关于价格的过滤器
Vue.filter("formatPrice", function(value) {
  if (!value) {
    return "";
  } else {
    return parseFloat(value * 0.01).toFixed(2);
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
