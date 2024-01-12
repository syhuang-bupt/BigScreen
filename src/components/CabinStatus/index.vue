<template>
  <div class="devide-group">

    <div class="devide-group-title">分组</div>
    <el-select v-model="value" class="select-style" placeholder="Select" size="small">
      <el-option
        v-for="item in options"
        default: weatherStation
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
  <div class="devide-group-list">
    <div v-if="value === 'weatherStation'">
      <div class="devide-group-listitem">
        <div>实际温度值</div>
        <div>{{ weatherStation.airconditioner }}</div>
      </div>
      <div  class="devide-group-listitem">
        <div>温度值</div>
        <div>{{ weatherStation.weatherstation_temperature }}</div>
      </div>
      <div  class="devide-group-listitem">
        <div>湿度</div>
        <div>{{ weatherStation.weatherstation_humidity }}</div>
      </div>
      <div  class="devide-group-listitem">
        <div>风速</div>
        <div>{{ weatherStation.weatherstation_windvelocity }}</div>
      </div>
      <div  class="devide-group-listitem">
        <div>风向</div>
        <div>{{ weatherStation.weatherstation_winddirection }}</div>
      </div>
      <div  class="devide-group-listitem">
        <div>雨量</div>
        <div>{{ weatherStation.weatherstation_rainfall }}</div>
      </div>
    </div>
    <div v-else-if="value === 'power'">
      <div class="devide-group-listitem">
        <div>充电设备</div>
        <div>{{ charge.chargingdevice }}</div>
      </div>
      <div  class="devide-group-listitem">
        <div>充电电压</div>
        <div>{{ charge.chargingdevice_voltage }}</div>
      </div>
      <div  class="devide-group-listitem">
        <div>充电电流</div>
        <div>{{ charge.chargingdevice_current }}</div>
      </div>
    </div>
    <div v-else="value === 'other'">
      <div class="devide-group-listitem">
        <div>遥控</div>
        <div>{{ other.remote_control }}</div>
      </div>
      <div  class="devide-group-listitem">
        <div>夜间降落</div>
        <div>{{ other.night_landing }}</div>
      </div>
      <div  class="devide-group-listitem">
        <div>适配机型</div>
        <div>{{ other.current_drone_model }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, VueElement } from 'vue'

let weatherStation = ref({});
let charge = ref({});
let other = ref({});

// websocket 数据获取
const socket = new WebSocket('ws://222.95.84.151:37170/shelters/api/websocket/'+1);
socket.onopen = function() {
  // console.log('连接成功');
}
socket.onmessage = function(e) {
 let { WeatherStation, Charge, Other } = JSON.parse(e.data).data
 weatherStation.value = WeatherStation
 charge.value = Charge
 other.value = Other
}

const value = ref('weatherStation')
const options = [
  {
    value: 'weatherStation',
    label: '气象站',
  },
  {
    value: 'power',
    label: '充电',
  },
  {
    value: 'other',
    label: '其他',
  }
]
</script>

<style scoped>
.devide-group {
  display: flex;
  justify-content: space-between;
  margin-right: 11px;
}
.devide-group-title {
  font-size: 14px;
  font-family: Source Han Sans CN-Normal, Source Han Sans CN;
  font-weight: bold;
  color: #e1e1e1;
  margin-left: 11px;
}
.select-style {
  width: 80px;
  height: 20px;
}
:deep(.el-input__wrapper) {
  background-color: rgba(52,115,244,0.2);
  border-radius: 0px;
  box-shadow: 0 0 0 0;
  border: 1px solid #416bda;
}
/* :deep(.el-input__wrapper:hover) {
  box-shadow: 0 0 0 0;
} */
:deep(.el-input__inner){
  color:#e1e1e1;
}
.devide-group-list {
  margin-top: 12px;
}
.devide-group-listitem {
  display: flex;
  justify-content: space-between;
  padding-right: 32px;
  padding-left: 8px;
  margin-top: 4px;
  /* background-color: green; */
  font-size: 12px;
  font-family: Source Han Sans CN-Normal, Source Han Sans CN;
  color: #999999;
  line-height: 22px;
}

.devide-group-listitem:hover {
  background-color: #30467d;
  color: white;
  font-weight: bold;
  /* line-height: 24px; */
}
</style>