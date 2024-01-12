<template>
    <div
      class="scale-box"
      :style="{
        width: props.width + 'px',
        height: props.height + 'px'
      }"
    >
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const width = ref(null), //设计宽度
  height = ref(null), //设计高度
  scale = ref(null);
  
  const props = defineProps({
    width: {
      type: String,
      default: 1920
    },
    height: {
      type: String,
      default: 1080
    }
  });
  const init = () => {
    setScale();
    window.addEventListener('resize', debounce(setScale));
  };
  const debounce = (fn, delay) => {
    const delays = delay || 500;
    let timer;
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        timer = null;
        fn();
      }, delays);
    };
  };
  const setScale = () => {
    let ww = document.documentElement.clientWidth / props.width;
    let wh = document.documentElement.clientHeight / props.height;
    scale.value = ww < wh ? ww : wh;
  };
  init();
  </script>
  
  <style scoped lang="scss">
  .scale-box {
    transform: scale(v-bind(scale)) translate(-50%, -50%);
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transition: 0.3s;
  }
  </style>
  