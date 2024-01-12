<template>
  <div class="left-device">
    <div class="left-arrow" @click="leftArrowClick">
      <img v-if="props.leftArrowState" src="../../assets/image/Slice 25@2x.png">
      <img v-else src="../../assets/image/Slice 24@2x.png">
    </div>
    <div class="top-device">
      <div class="device-title">
        <img src="../../assets/image/Slice 18@2x.png">
        <span style="margin-left: 6px;">无人机图片</span>
      </div>
      <div class="top-device-content">
        <SwiperComponent></SwiperComponent>
      </div>
    </div>
    <!-- <div style="clear:both;"></div> -->
    <div class="center-device">
      <div class="device-title">
        <img src="../../assets/image/Slice 19@2x.png">
        <span style="margin-left: 6px;">设备信息</span>
      </div>
      <div class="center-device-content">
        <div class="device-content-list">
          <div class="device-content-listitem">
            <span>设备信息: </span>
            <span>{{ deviceInformation.deviceinfo }}</span>
          </div>
          <div class="device-content-listitem">
            <span>设备类型: </span>
            <span>{{ deviceInformation.devicetype }}</span>
          </div>
          <div class="device-content-listitem">
            <span>设备型号: </span>
            <span>{{ deviceInformation.devicemodel }}</span>
          </div>
          <div class="device-content-listitem">
            <span>设备电量: </span>
            <span>{{ deviceInformation.devicepower }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-device">
      <div class="device-title">
        <img src="../../assets/image/Slice 20@2x.png">
        <span style="margin-left: 6px;">设备日志</span>
      </div>
      <div class="bottom-device-content">
        <div class="device-content-list">
          <div class="device-content-listitem">
            <span>开启时间: </span>
            <span>{{ deviceLog.startTime }}</span>
          </div>
          <div class="device-content-listitem">
            <span>关闭时间: </span>
            <span>{{ deviceLog.closeTime }}</span>
          </div>
          <div class="device-content-listitem">
            <span>运行时长: </span>
            <span>{{ deviceLog.runTime }}</span>
          </div>
          <div class="device-content-listitem">
            <span>异常情况: </span>
            <span>{{ deviceLog.abnormalCondition }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SwiperComponent from '../SwiperComponent/index.vue'
import { reactive, ref } from 'vue';

let fnEmit = defineEmits(['dropLeft']);
let props = defineProps({
  leftArrowState: {
    type: Boolean
  }
})
let arrowState = ref(true);
const deviceInformation = reactive({
  deviceinfo: '南京电信无线中心大疆机库的无人机',
  devicetype: '无人机',
  devicemodel: 'M300',
  devicepower: '90%'
})
const deviceLog = reactive({
  startTime: '2023/10/14 11:01:01',
  closeTime: '2023/10/15 11:01:01',
  runTime: '1440分钟',
  abnormalCondition: '无异常情况'
})
const leftArrowClick = () => {
  fnEmit('dropLeft', arrowState);
  arrowState = !arrowState
}
</script>

<style scoped>
.left-device {
  position: relative;
}
.left-arrow {
  /* background-color: green; */
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 3%;
  top: 49%;
  cursor:pointer;
}
.top-device {
  width: 375px;
  height: 234px;
  margin-top: 143px;
  margin-left: 12px;
  border: 1px solid rgb(109, 107, 107);
  border-style: dashed;
  background-image: url("../../assets/image/Slice 17@2x.png");
  padding-top: 1px;
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
  margin-left: 92px;
  width: 375px;
  height: 234px;
  background-image: url("../../assets/image/Slice 17@2x.png");
  padding-top: 1px;
}
.device-content-list {
  margin-top: 28px;
  margin-left: 21px;
  width: 338px;
  height: 162px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  font-family: Source Han Sans CN-Normal, Source Han Sans CN;
  font-weight: 400;
  color: #999999;
}
.device-content-listitem {
  display: flex;
  justify-content: space-between;
}
.bottom-device {
  margin-top: 26px;
  margin-left: 12px;
  width: 375px;
  height: 234px;
  background-image: url("../../assets/image/Slice 17@2x.png");
  padding-top: 1px;
}
</style>