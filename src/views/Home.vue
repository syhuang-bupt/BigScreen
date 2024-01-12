<template>
  <div class="main-container">
    <AutoScreen>
      <div class="body">
        <div class="header">
          <TopBar></TopBar>
        </div>
        <div class="content">
          <div class="leftModule">
            <LeftDevice @dropLeft="dropLeftHandle" :leftArrowState="leftArrowReverse"></LeftDevice>
          </div>
          <div class="rightModule">
            <RightState @dropRight="dropRightHandle" @switchVideo="switchVideoHandle" :rightArrowState="rightArrowReverse"></RightState>
          </div>
          <!-- <div class="centerModule"></div> -->
          <div class="bottomModule">
            <BottomBar></BottomBar>
          </div>
        </div>
        <div class="video-content">
          <live-player :video-url="videoUrl" :controls="false"  show-custom-button="true" autoplay="true" aspect="16:9" resolution="yh,fhd,hd,sd" resolutiondefault="fhd"></live-player>
        </div>
      </div>
    </AutoScreen>
  </div>
</template>


<script setup>
import AutoScreen from '../components/AutoScreen/index.vue'
import TopBar from '../components/TopBar.vue'
import LeftDevice from '../components/LeftDevice/index.vue'
import RightState from '../components/RightState/index.vue'
import BottomBar from '../components/BottomBar/index.vue'
import { reactive, ref } from 'vue';
import {TweenMax} from 'gsap'
let videoUrl = ref("webrtc://222.95.84.130:40080"+"/index/api/webrtc?app=live&stream=100&type=play");

function switchVideoHandle() {
  if(videoUrl.value === "webrtc://222.95.84.130:40080"+"/index/api/webrtc?app=live&stream=100&type=play") {
    videoUrl.value = "webrtc://222.95.84.130:40080"+"/index/api/webrtc?app=live&stream=99&type=play"
  } else {
    videoUrl.value = "webrtc://222.95.84.130:40080"+"/index/api/webrtc?app=live&stream=100&type=play"
  }
}

let leftArrowReverse = ref(true)
let rightArrowReverse = ref(true)
const options = reactive({
  src: "webrtc://222.95.84.130:40080/index/api/webrtc?app=live&stream=100&type=play", //视频源
  poster: '', //封面,
  type: 'm3u8'
})
const dropLeftHandle = (arrowState) => {
  if(arrowState) {
    new TweenMax(document.querySelector(".leftModule"), 1, {
      x: -488,
      alpha: 0.6
    })
    setTimeout(() => {
      leftArrowReverse.value = false
    }, 1000)
  } else {
    new TweenMax(document.querySelector(".leftModule"), 1, {
      x: 0,
      alpha: 1
    })
    setTimeout(() => {
      leftArrowReverse.value = true
    }, 1000)
  }
}
const dropRightHandle = (arrowState) => {
  if(arrowState) {
    new TweenMax(document.querySelector(".rightModule"), 1, {
      x: 488,
      alpha: 0.6
    })
    setTimeout(() => {
      rightArrowReverse.value = false
    }, 1000)
  } else {
    new TweenMax(document.querySelector(".rightModule"), 1, {
      x: 0,
      alpha: 1
    })
    setTimeout(() => {
      rightArrowReverse.value = true
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.body {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../assets/image/wait.png');
  background-size: cover;
.video-content {
  position: absolute;
  top: 0;
  z-index: 0;
  width: 1920px;
  height: 1080px;
}
#video-main {
  width: 1920px;
  height: 1080px;
}
.header {
  height: 92px;
  width: 1920px;
  position: absolute;
  top: 0;
  z-index: 1;
}
.leftModule {
  background-image: url('../assets/image/Slice\ 2@2x.png');
  background-size: cover;
  position: absolute;
  left: 0;
  top: 60px;
  width: 548px;
  height: 988px;
  z-index: 1;
}
.rightModule {
  background-image: url('../assets/image/Slice\ 3@2x.png');
  background-size: cover;
  position: absolute;
  right: 0;
  top: 60px;
  width: 548px;
  height: 988px;
  z-index: 1;
}
.bottomModule {
  background-image: url('../assets/image/Slice\ 4@2x.png');
  background-size: cover;
  position: absolute;
  left: 85px;
  bottom: 0px;
  width: 1750px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
}
</style>

