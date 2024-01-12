<template>
  <div class="top-bar">
    <div class="top-bar-container">
      <div class="bar-left">
        <img src="../assets/image/logo.png" id="logo"/>
      </div>
      <div class="bar-center">
        <div class="screen-title">
          {{ screenTitle }}
        </div>
      </div>
      <div class="bar-right">
        <div><span v-html="datetime.nowTime"></span></div>
        <div><span v-html="datetime.nowDate"></span></div>
        <div><span v-html="datetime.nowWeek"></span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const screenTitle = ref("天翼方舱")
const datetime = reactive({ nowTime: '' })

//顶部时间
const getTime = () => {
  var myDate = new Date();
  var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
  var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
  var myToday = myDate.getDate(); //获取当前日(1-31)
  var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
  var myHour = myDate.getHours(); //获取当前小时数(0-23)
  var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
  var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
  var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  // datetime.nowTime = fillZero(myHour) + ':' + fillZero(myMinute) + ':' + fillZero(mySecond) + '&nbsp;&nbsp;' + myYear + '-' + fillZero(myMonth) + '-' + fillZero(myToday) + '&nbsp;&nbsp;' + week[myDay] + '&nbsp;&nbsp;';
  datetime.nowTime = fillZero(myHour) + ':' + fillZero(myMinute) + ':' + fillZero(mySecond);
  datetime.nowDate = myYear + '-' + fillZero(myMonth) + '-' + fillZero(myToday);
  datetime.nowWeek = week[myDay];
};
const fillZero = (str) => {
  var realNum;
  if (str < 10) {
      realNum = '0' + str;
  } else {
      realNum = str;
  }
  return realNum;
}
//大屏
setInterval(getTime, 10); // 内存消耗隐患
</script>

<style scoped>
.top-bar {
  background-image: url('../assets/image/top-bar-bgc.png');
  height: 92px;
}
.top-bar-container {
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
  width: 268px;
  height: 20px;
  font-size: 20px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN !important;
  font-weight: 400;
  color: white;
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
