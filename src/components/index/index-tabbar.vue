<template>
  <div class="page">
    <van-tabbar
      v-model="active"
      active-color="#F25664"
      inactive-color="#6A375F"
    >
      <van-tabbar-item>
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item>
        <span>分类</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? iconClass.active : iconClass.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? iconMy.active : iconMy.normal"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: require("@/assets/tabbar/home_un.png"),
        active: require("@/assets/tabbar/home.png")
      },
      iconClass: {
        normal: require("@/assets/tabbar/type_un.png"),
        active: require("@/assets/tabbar/type.png")
      },
      iconMy: {
        normal: require("@/assets/tabbar/me_un.png"),
        active: require("@/assets/tabbar/me.png")
      }
    };
  },
  components: {}
};
</script>

<style scoped lang="less">
.van-tabbar-item__icon {
  img {
    width: 24px;
    height: 24px;
  }
}
</style>
