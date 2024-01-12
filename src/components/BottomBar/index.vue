<template>
  <div class="bottom-bar-container">
    <div class="bottom-bar-item">
      <img v-if="bottomBarData.open" src="../../assets/image/open_1.png" alt="">
      <img v-else src="../../assets/image/open_0.png" alt="">
      <div class="bottom-bar-item-text">正在打开</div>
    </div>
    <div class="bottom-bar-item">
      <img v-if="bottomBarData.close" src="../../assets/image/close_1.png" alt="">
      <img v-else src="../../assets/image/close_0.png" alt="">
      <div class="bottom-bar-item-text">正在关闭</div>
    </div>
    <div class="bottom-bar-item">
      <img v-if="bottomBarData.backing" src="../../assets/image/backing_1.png" alt="">
      <img v-else src="../../assets/image/backing_0.png" alt="">
      <div class="bottom-bar-item-text">正在归中</div>
    </div>
    <div class="bottom-bar-item">
      <img v-if="bottomBarData.reset" src="../../assets/image/reset_1.png" alt="">
      <img v-else src="../../assets/image/reset_0.png" alt="">
      <div class="bottom-bar-item-text">复位中</div>
    </div>
    <div class="bottom-bar-item">
      <img v-if="bottomBarData.charge" src="../../assets/image/charge_1.png" alt="">
      <img v-else src="../../assets/image/charge_0.png" alt="">
      <div class="bottom-bar-item-text">正在充电</div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const bottomBarData = reactive({
  open: true,
  close: false,
  backing: false,
  reset: false,
  charge: false
})
</script>

<style scoped>
.bottom-bar-container {
  display: flex;
  width: 412px;
  height: 54px;
  /* background-color: green; */
  justify-content: space-between;
  align-items: center;
}
.bottom-bar-item {
  text-align: center;
}
.bottom-bar-item-text {
  margin-top: 6px;
  font-size: 12px;
  font-family: Source Han Sans CN-Normal, Source Han Sans CN;
  color: #999999;
}
</style>