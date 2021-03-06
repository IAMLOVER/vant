import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: () =>
        import(/* webpackChunkName: "index" */ "./views/index/index.vue")
    },
    {
      path: "/goodsInfo/goodsInfo",
      name: "goodsInfo",
      component: () =>
        import(
          /* webpackChunkName: "goodsInfo" */ "./views/goodsInfo/goodsInfo.vue"
        )
    }
  ]
});
