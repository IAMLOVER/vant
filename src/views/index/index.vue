<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image">
      </van-swipe-item>
    </van-swipe>
    <!-- 搜索框 -->
    <van-search placeholder="搜你想要.." v-model="value" shape="round"/>
    <!-- nav -->
    <index-nav></index-nav>
    <!-- 新店推荐 -->
    <tip>
      <template v-slot:header>新店推荐</template>
    </tip>
    <index-shop></index-shop>
    <!-- 最新单品 -->
    <tip>
      <template v-slot:header>最新单品</template>
    </tip>
    <!-- tabbar -->
    <index-tabbar></index-tabbar>
    <!-- 商品列表 -->
    <index-goods-item></index-goods-item>
  </div>
</template>

<script>
import Vue from "vue";
import IndexNav from "@/components/index/index-nav.vue";
import Tip from "@/components/tip/tip.vue";
import IndexShop from "@/components/index/index-shop.vue";
import IndexGoodsItem from "@/components/index/index-goods-item.vue";
import IndexTabbar from "@/components/index/index-tabbar.vue";
import { Swipe, SwipeItem, Lazyload, Search } from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Search);
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      value: ""
    };
  },
  components: {
    IndexNav,
    Tip,
    IndexShop,
    IndexTabbar,
    IndexGoodsItem
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.van-swipe {
  width: 375px;
  height: 187px;
  .van-swipe-item {
    width: 375px;
    height: 187px;
    img {
      width: 100%;
      height: 187px;
    }
  }
}
.van-search {
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translate(-172.5px);
  width: 345px;
  height: 32px;
  background: rgba(225, 225, 225, 0.5);
  /deep/ .van-cell .van-field__left-icon {
    margin-left: 15px;
  }
}
</style>
