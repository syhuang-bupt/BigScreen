<template>
	<div class="swiper-image">
		<div class="image-container">
			<img :src="img" alt="" v-for="(img,index) in props.images" :key="index"/>
		</div>
    <div class="prev" @click="goPrev">
      <img src="../../assets/image/left-button.png">
    </div>
	  <div class="next" @click="goNext">
      <img src="../../assets/image/right-button.png">
    </div> 
	</div>
</template>
<script setup>
import { ref, reactive, onMounted, defineProps } from 'vue';
const props = defineProps({
  images: {
    type: Array,
    default: []
  }
})
let currentIndex = ref(0)
// 切换图片
function changeImg(i) {
  document.querySelector(".image-container").style.transform = `translate(${-375 * i}px)`;
}
// 点击上一张图片
function goPrev() {
  if(currentIndex.value === 0){
    currentIndex.value = props.images.length - 1
  }else{
    currentIndex.value--;
  };
  changeImg(currentIndex.value);
}
// 点击下一张图片
function goNext() {
  if(currentIndex.value === props.images.length - 1){
    currentIndex.value = 0
  }else{
    currentIndex.value++;
  };
  changeImg(currentIndex.value);
}
</script>

<style scoped>
.swiper-image{
  width: 375px;
  height: 234px;
  position:relative;
  overflow: hidden;
}
.image-container{
  /* 图片列表容器宽度：图片高度*图片个数 */
  width:1500px;
  height:234px;
  display:flex;
  justify-content: space-around;
  margin-top: 12px;
}
.image-container img {
  width:236px;
  height:174px;
}
.prev img {
  width: 21.84px;
  height: 49.5px;
}
.next img {
  width: 21.84px;
  height: 49.5px;
}
.swiper-image .prev, .swiper-image .next{
  position:absolute;
  top:33%;
  cursor:pointer;
}
.swiper-image .prev{
  left:12px;
  text-align:left;
}
.swiper-image .next{
  right:12px;
  text-align:right;
}
</style>