<template>
  <div class="page">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in items" :key="index">
        <div class="shop-detail">
          <img :src="item.shopLogo" class="logo" />
          <span class="shop-name">农夫山泉东北大兴安岭旗舰店</span>
        </div>
        <div class="goods">
          <img
            v-for="(item, index) in item.goodsImgs"
            :key="index"
            :src="item"
          />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      items: [
        {
          shopLogo: "https://f12.baidu.com/it/u=532100746,3127232307&fm=72",
          shopTitle: "我开的店铺",
          goodsImgs: [
            "https://f12.baidu.com/it/u=532100746,3127232307&fm=72",
            "https://f12.baidu.com/it/u=532100746,3127232307&fm=72"
          ]
        },
        {
          shopLogo: "https://f12.baidu.com/it/u=532100746,3127232307&fm=72",
          shopTitle: "我开的店铺",
          goodsImgs: ["https://f12.baidu.com/it/u=532100746,3127232307&fm=72"]
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped lang="less">
.van-swipe-item {
  width: 100%;
  height: 163px;
  background: #fff;
  padding: 12px;
  border-radius: 10px;
  box-sizing: border-box;
}
.shop-detail {
  width: 100%;
  .logo {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    margin-right: 8px;
    vertical-align: middle;
  }
  .shop-name {
    font-size: 14px;
    color: #222222;
  }
}
.goods {
  margin-top: 22px;
  img {
    width: 85px;
    height: 85px;
    margin-right: 13px;
  }
}
</style>
