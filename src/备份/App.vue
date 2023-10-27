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

          </div>
          <!-- <div class="centerModule"></div> -->
          <div class="bottomModule">

          </div>
        </div>
      </div>
    </AutoScreen>
  </div>
</template>

<script setup>
import AutoScreen from './components/AutoScreen/index.vue'
import TopBar from './components/TopBar.vue'
import LeftDevice from './components/LeftDevice/index.vue'

</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  // background-color: #091427;
  background-color: #ffffff;
}
.body {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('./assets/image/video.png');
  background-size: cover;
  .header {
    // background-image: url('./assets/image/header-bg.png');
    // background-size: 100% 100%;
    height: 60px;
    // display: flex;
    // justify-content: space-between;
    // padding: 12px 44px 4px 30px;
    // font-size: 14px;
    // font-family: DINAlternate-Bold, DINAlternate;
    // font-weight: bold;
    // color: #bedaff;
    // user-select: none;
  }
  .content {
    width: 100%;
    height: calc(100% - 60px);
    position: relative;
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
      // border: 1px solid #fff;
    }
  }
}
</style>

