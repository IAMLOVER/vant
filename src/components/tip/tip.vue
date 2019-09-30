<template>
  <div class="page">
    <div class="tip">
      <div class="tip-name">
        <slot name="header"></slot>
      </div>
      <div class="tip-more">
        <span class="more">更多</span>
        <img src="../../assets/more01.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.tip {
  width: 345px;
  margin: 20px auto 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tip-name {
    font-size: 16px;
    color: #f25564;
    line-height: 20px;
    font-weight: 600;
    position: relative;
    padding-left: 10px;
    &::before {
      content: " ";
      width: 4px;
      height: 14px;
      border-radius: 2px;
      position: absolute;
      left: 0px;
      top: 3px;
      background: #f25564;
    }
  }
  .tip-more {
    line-height: 20px;
    .more {
      font-size: 12px;
      color: #959595;
    }
    img {
      display: inline-block;
      width: 12px;
      height: 12px;
      vertical-align: middle;
      margin-top: 1px;
      margin-left: 6px;
    }
  }
}
</style>
