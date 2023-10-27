<template>
  <div class="bottom-bar-container">
    <div class="bottom-bar-item" @click="openClick()">
      <img src="../../assets/image/Slice 11@2x.png" alt="">
      <div class="bottom-bar-item-text">正在打开</div>
    </div>
    <div class="bottom-bar-item" @click="closeClick()">
      <img src="../../assets/image/Slice 12@2x.png" alt="">
      <div class="bottom-bar-item-text">正在关闭</div>
    </div>
    <div class="bottom-bar-item" @click="backClick()">
      <img src="../../assets/image/Slice 13@2x.png" alt="">
      <div class="bottom-bar-item-text">正在归中</div>
    </div>
    <div class="bottom-bar-item" @click="resetClick()">
      <img src="../../assets/image/Slice 14@2x.png" alt="">
      <div class="bottom-bar-item-text">复位中</div>
    </div>
    <div class="bottom-bar-item" @click="chargeClick()">
      <img src="../../assets/image/Slice 15@2x.png" alt="">
      <div class="bottom-bar-item-text">正在充电</div>
    </div>
  </div>
</template>

<script setup>
function openClick() {
  console.log("正在打开按钮被点击了");
}
function closeClick() {
  console.log("正在关闭按钮被点击了");
}
function backClick() {
  console.log("正在归中按钮被点击了");
}
function resetClick() {
  console.log("复位中按钮被点击了");
}
function chargeClick() {
  console.log("正在充电按钮被点击了");
}
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