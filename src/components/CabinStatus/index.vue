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
    <div v-if="value === 'weatherStation'" class="devide-group-listitem" v-for="(item, index) in devideGroupListData_WeatherStation" :key="'weatherStation' + index">
      <div>{{ item.name }}</div>
      <div>{{ item.value }}</div>
    </div>
    <div v-else-if="value === 'power'" class="devide-group-listitem" v-for="(item, index) in devideGroupListData_Power" :key="'power' + index">
      <div>{{ item.name }}</div>
      <div>{{ item.value }}</div>
    </div>
    <div v-else-if="value === 'weatherStations'" class="devide-group-listitem" v-for="(item, index) in devideGroupListData_WeatherStations" :key="'weatherStations' + index">
      <div>{{ item.name }}</div>
      <div>{{ item.value }}</div>
    </div>
    <div v-else-if="value === 'other'" class="devide-group-listitem" v-for="(item, index) in devideGroupListData_Other" :key="'other' + index">
      <div>{{ item.name }}</div>
      <div>{{ item.value }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
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
    value: 'weatherStations',
    label: '气象站',
  },
  {
    value: 'other',
    label: '其他',
  }
]
const devideGroupListData_WeatherStation = reactive([
  {
    name: '实际温度值',
    value: '25°C'
  },
  {
    name: '温度值',
    value: '25°C'
  },
  {
    name: '湿度',
    value: '36%'
  },
  {
    name: '风速',
    value: '36m/s'
  },
  {
    name: '风向',
    value: '东风'
  },
  {
    name: '雨量',
    value: '12mm'
  }
])
const devideGroupListData_Power = reactive([
  {
    name: '充电设备',
    value: '正在充电'
  },
  {
    name: '充电电压',
    value: '100V'
  },
  {
    name: '充电电流',
    value: '20A'
  }
])
const devideGroupListData_WeatherStations = reactive([
  {
    name: '实际温度值',
    value: '35°C'
  },
  {
    name: '温度值',
    value: '35°C'
  },
  {
    name: '湿度',
    value: '58%'
  },
  {
    name: '风速',
    value: '12m/s'
  },
  {
    name: '风向',
    value: '西北风'
  },
  {
    name: '雨量',
    value: '66mm'
  }
])
const devideGroupListData_Other = reactive([
  {
    name: '遥控',
    value: '开机'
  },
  {
    name: '夜间降落',
    value: '开启'
  },
  {
    name: '适配机型',
    value: 'M30'
  }
])
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