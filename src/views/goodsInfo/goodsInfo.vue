<template>
  <div class="page">
    <div>商品详情页</div>
    <div>商品详情页</div>
    <div>商品详情页</div>
    <div>商品详情页</div>
    <div>商品详情页</div>
    <div>商品详情页</div>
    <div>商品详情页</div>
    <div>商品详情页</div>
    <div>商品详情页</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ""
    };
  },
  created() {
    this.id = this.$route.query.id;
    console.log(this.id);
  }
};
</script>

<style scoped lang="less">
.page {
  background-color: red;
}
</style>
