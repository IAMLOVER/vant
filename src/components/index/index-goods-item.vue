<template>
  <div class="page">
    <div class="goods-item" v-for="(item, index) in goodsArr" :key="index" @click="goDetails(item.id)">
      <img v-lazy="imagePath + item.picUrl1" class="goods-img" />
      <p class="goods-title van-ellipsis">{{ item.title }}</p>
      <p class="goods-price">{{ item.minPrice | formatPrice }}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { apiAddress } from '@/request/api';// 导入我们的api接口
Vue.use(Lazyload)
export default {
  data() {
    return {
      goodsArr: [],
      imagePath:""
    };
  },
  created() {
    this.getGoodsItem()
    this.imagePath = process.env.VUE_APP_IMG
  },
  methods: {
    goDetails(id) {
      this.$router.push({name:'goodsInfo',query:{id:id}})
    },
    async getGoodsItem() {
      let that = this;
      that.goodsArr = await apiAddress().then(res => {
         return res.data.content
      }).catch(res=>{});
    }
  }
};
</script>

<style scoped lang="less">
.page {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px 15px;
  box-sizing: border-box;
  padding-bottom: 80px;
}
.goods-item {
  width: 168px;
  height: 232px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 9px;
  .goods-img {
    width: 168px;
    height: 168px;
    vertical-align: middle;
  }
  .goods-title {
    font-size: 16px;
    color: #222;
    padding: 8px 12px 4px;
  }
  .goods-price {
    font-size: 20px;
    color: #f25664;
    padding-left: 12px;
  }
}
</style>
