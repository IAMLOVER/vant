<template>
  <div class="page">
    <main>
      <div class="skill">
        <p class="title">快秒杀</p>
        <p class="tip">天天限时限量抢好货</p>
        <button>立即抢购</button>
      </div>
      <div class="reduce">
        <p class="title">大满减</p>
        <p class="tip">用券专区，好价享不停</p>
        <button>立即抢购</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="less">
.page {
  main {
    width: 375px;
    height: 102px;
    padding: 12px 15px 0px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    .skill,
    .reduce {
      height: 90px;
      width: 171px;
      background-size: 100%;
      padding: 10px;
      box-sizing: border-box;
      .title {
        font-size: 18px;
        color: #f25664;
        font-weight: 600;
      }
      .tip {
        color: #f25664;
        font-size: 14px;
      }
      button {
        outline: none;
        border: none;
        width: 66px;
        height: 24px;
        border-radius: 12px;
        color: #fff;
        font-size: 12px;
        background-image: linear-gradient(-136deg, #eb4d4e 0%, #d971d6 100%);
      }
    }
    .skill {
      border-radius: 10px 0px 0px 10px;
      background-image: url("../../assets/kuaimiaosha.png");
    }
    .reduce {
      border-radius: 0px 10px 10px 0px;
      background-image: url("../../assets/damanjian.png");
    }
  }
}
</style>
