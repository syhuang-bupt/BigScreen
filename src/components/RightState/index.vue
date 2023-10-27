<template>
  <div class="right-device">
    <div class="right-arrow">
      <img src="../../assets/image/Slice 24@2x.png">
    </div>
    <div class="top-device">
      <div class="device-title">
        <img src="../../assets/image/Slice 21@2x.png">
        <span style="margin-left: 6px;">无人机摄像头画面</span>
        <span @click="videoSwitchClick" style="cursor:pointer;">
          <img src="../../assets/image/Slice 16@2x.png" style="margin-left: 184px;">
        </span>
      </div>
      <div class="top-device-content">
        <img src="../../assets/image/RightStateVideo.png" class="right-video">
      </div>
    </div>
    <div class="center-device">
      <div class="device-title">
        <img src="../../assets/image/Slice 22@2x.png">
        <span style="margin-left: 6px;">无人机状态</span>
      </div>
      <div class="center-device-content">
        <div class="card-item">
          <img src="../../assets/image/Slice 10@2x.png">
          <div class="card-item-text">
            <div class="card-item-text-t">无人机电池</div>
            <div class="card-item-text-c">
              <span>{{ UAVState.power }}</span>
              <span class="card-item-text-c-symbol">%</span>
            </div>
          </div>
        </div>
        <div class="card-item">
          <img src="../../assets/image/Slice 6@2x.png">
          <div class="card-item-text">
            <div class="card-item-text-t">垂直速度</div>
            <div class="card-item-text-c">
              <span>{{ UAVState.verticalSpeed }}</span>
              <span class="card-item-text-c-symbol">m/s</span>
            </div>
          </div>
        </div>
        <div class="card-item">
          <img src="../../assets/image/Slice 9@2x.png">
          <div class="card-item-text">
            <div class="card-item-text-t">信号</div>
            <div class="card-item-text-c">
              <span>{{ UAVState.signal }}</span>
              <span class="card-item-text-c-symbol">%</span>
            </div>
          </div>
        </div>
        <div class="card-item">
          <img src="../../assets/image/Slice 7@2x.png">
          <div class="card-item-text">
            <div class="card-item-text-t">卫星信号</div>
            <div class="card-item-text-c">
              <span>{{ UAVState.satelliteSignal }}</span>
              <span class="card-item-text-c-symbol">%</span>
            </div>
          </div>
        </div>
        <div class="card-item">
          <img src="../../assets/image/Slice 5@2x.png">
          <div class="card-item-text">
            <div class="card-item-text-t">飞行速度</div>
            <div class="card-item-text-c">
              <span>{{ UAVState.flySpeed }}</span>
              <span class="card-item-text-c-symbol">m/s</span>
            </div>
          </div>
        </div>
        <div class="card-item">
          <img src="../../assets/image/Slice 8@2x.png">
          <div class="card-item-text">
            <div class="card-item-text-t">飞行高度</div>
            <div class="card-item-text-c">
              <span>{{ UAVState.flyHeight }}</span>
              <span class="card-item-text-c-symbol">m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-device">
      <div class="device-title">
        <img src="../../assets/image/Slice 23@2x.png">
        <span style="margin-left: 6px;">方舱状态</span>
      </div>
      <div class="bottom-device-content">
        <div class="cabin-status-container">
          <CabinStatus></CabinStatus>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CabinStatus from '../CabinStatus/index.vue'
import { reactive } from 'vue';
const UAVState = reactive({
  power: 100,
  verticalSpeed: 4,
  signal: 100,
  satelliteSignal: 100,
  flySpeed: 100,
  flyHeight: 200
})
function videoSwitchClick() {
  console.log('点击了视频切换按钮');
}
</script>

<style scoped>
.right-device {
  position: relative;
}
.right-arrow {
  position: absolute;
  left: 6%;
  top: 50%;
}
.top-device {
  width: 375px;
  height: 234px;
  margin-top: 143px;
  margin-left: 161px;
  background-image: url("../../assets/image/Slice 17@2x.png");
  padding-top: 1px;
}
.right-video {
  width: 336px;
  height: 172px;
  margin-top: 22px;
  margin-left: 14px;
}
.device-title {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: Source Han Sans CN-Bold, Source Han Sans CN;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 16px;
  margin-top: 2px;
  margin-left: 15px;
}
.center-device {
  margin-top: 26px;
  margin-left: 81px;
  width: 375px;
  height: 234px;
  background-image: url("../../assets/image/Slice 17@2x.png");
  padding-top: 1px;
}
.center-device-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
  width: 261px;
  height: 156px;
  margin-top: 29px;
  margin-left: 56px;
}
.card-item {
  display: flex;
}
.card-item-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 12px;
}
.card-item-text-t {
  font-size: 12px;
  font-family: Source Han Sans CN-Normal, Source Han Sans CN;
  color: #858a93;
  line-height: 14px;
}
.card-item-text-c {
  font-size: 16px;
  font-family: Source Han Sans CN-Bold, Source Han Sans CN;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 18px;
}
.card-item-text-c-symbol {
  font-size: 14px;
  font-family: Source Han Sans CN-Normal, Source Han Sans CN;
  color: #858a93;
  line-height: 18px;
  margin-left: 4px;
}
.bottom-device {
    margin-top: 26px;
    margin-left: 161px;
    width: 375px;
    height: 234px;
    background-image: url("../../assets/image/Slice 17@2x.png");
    padding-top: 1px;
}
.cabin-status-container {
  margin-left: 9px;
  margin-top: 14px;
  width: 311px;
}
</style>