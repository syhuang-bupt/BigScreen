<template>
  <div class="main-container">
    <AutoScreen>
      <div class="body">
        <div class="header">
          <TopBar></TopBar>
        </div>
        <div class="content">
          <div class="leftModule">
            <LeftDevice></LeftDevice>
          </div>
          <div class="rightModule">
            <RightState></RightState>
          </div>
          <!-- <div class="centerModule"></div> -->
          <div class="bottomModule">
            <BottomBar></BottomBar>
          </div>
        </div>
        <div class="video-content">
          <vue3VideoPlay 
            width="1920px"
            height="1080px"
            title="钢铁侠"
            :src="options.src"
            :poster="options.poster"
            @play="onPlay"
            @pause="onPause" 
            @timeupdate="onTimeupdate" 
            @canplay="onCanplay" />
        </div>
      </div>
    </AutoScreen>
  </div>
</template>

<script setup>
import AutoScreen from './components/AutoScreen/index.vue'
import TopBar from './components/TopBar.vue'
import LeftDevice from './components/LeftDevice/index.vue'
import RightState from './components/RightState/index.vue'
import BottomBar from './components/BottomBar/index.vue'
import { reactive } from 'vue';
 
const options = reactive({
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
  poster: '', //封面
})
const onPlay = (ev) => {
  console.log('播放')
}
const onPause = (ev) => {
  console.log(ev, '暂停')
}
 
const onTimeupdate = (ev) => {
  console.log(ev, '时间更新')
}
const onCanplay = (ev) => {
  console.log(ev, '可以播放')
}
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  // background-color: #091427;
  background-color: #ffffff;
}
.video-content {
  position: absolute;
  top: 0;
  z-index: 0;
}
.body {
  position: relative;
  width: 100%;
  height: 100%;
  // background-image: url('./assets/image/video.png');
  // background-size: cover;
  .header {
    height: 60px;
    position: relative;
    z-index: 1;
  }
  .content {
    width: 100%;
    height: calc(100% - 60px);
    position: relative;
    z-index: 1;
    // border: 1px solid red;

    .leftModule {
      background-image: url('./assets/image/Slice\ 2@2x.png');
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
      width: 548px;
      height: 988px;
      // border: 1px solid blue;
    }
    .rightModule {
      background-image: url('./assets/image/Slice\ 3@2x.png');
      background-size: cover;
      position: absolute;
      right: 0;
      top: 0;
      width: 548px;
      height: 988px;
      // border: 1px solid blue;
    }
    // .centerModule {
    //   position: absolute;
    //   left: 435px;
    //   top: 0px;
    //   width: 1050px;
    //   height: 700px;
    //   padding: 59px 40px 0 40px;
    //   border: 1px solid #fff;
    // }
    .bottomModule {
      background-image: url('./assets/image/Slice\ 4@2x.png');
      background-size: cover;
      position: absolute;
      left: 85px;
      bottom: 0px;
      width: 1750px;
      height: 76px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

