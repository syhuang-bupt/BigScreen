<template>
	<div class="swiper-image">
		<div class="image-container">
      <img src="../../assets/image/m300.png" alt="">
		</div>
    <div class="prev">
      <img src="../../assets/image/left-button.png">
    </div>
	  <div class="next">
      <img src="../../assets/image/right-button.png">
    </div> 
	</div>
</template>
<script setup>

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
  width:375px;
  height:222px;
  display:flex;
  justify-content: space-around;
  margin-top: 12px;
}
.image-container img {
  width:236px;
  height:121px;
  margin-top: 36px;
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