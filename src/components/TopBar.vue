<template>
  <div class="top-bar">
    <div class="bar-left">
      <img src="../assets/image/logo.png" id="logo"/>
    </div>
    <div class="bar-center">
      <div class="screen-title">
        {{ screenTitle }}
      </div>
    </div>
    <div class="bar-right">
      <span>{{ nowtime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      nowtime: "17:55:26 2022-04-26 星期一",
      screenTitle: "天翼方舱"
    }
  }
}
</script>

<style scoped>
.top-bar {
  background-image: url('../assets/image/top-bar-bgc.png');
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bar-left {
  padding-left: 12px;
}
#logo {
  height: 30px;
}
.bar-center {
  /* height: 46px; */
}
.screen-title {
  background-image: url('../assets/image/Slice 1@2x.png');
  background-size: cover;
  width: 1366px;
  height: 60px;
  display: flex;
  justify-content:center;
  align-items:center;

  font-size: 28px;
  font-family: Source Han Sans CN-Heavy, Source Han Sans CN;
  font-weight: 800;
  color: #D6E8FE;
  letter-spacing: 6px;
  text-shadow: 0px 2px 2px rgba(0,0,0,0.5);
}
.bar-right {
  font-size: 20px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN !important;
  font-weight: 400;
  color: white;
  padding-right: 12px;
}
</style>
