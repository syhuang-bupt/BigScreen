<template>
	<div class="change-img">
		<div class="img-container">
			<img :src="img" alt="" v-for="(img,index) in images" :key="index"/>
		</div>
    <div class="prev" @click="goPrev">《 </div>
	  <div class="next" @click="goNext"> 》</div> 
	</div>
</template>
<script>
export default {
  name: 'SwiperComponent',
  data() {
    return {
      images:[
        'https://s2.loli.net/2023/10/25/2npqslIUkeEFQ9o.png','https://s2.loli.net/2023/10/25/2npqslIUkeEFQ9o.png',
        'https://s2.loli.net/2023/10/25/2npqslIUkeEFQ9o.png','https://s2.loli.net/2023/10/25/2npqslIUkeEFQ9o.png',
        'https://s2.loli.net/2023/10/25/2npqslIUkeEFQ9o.png'
      ],
      currentIndex:0,
      t:null
    }
  },
  mounted(){
    // 执行轮播图自动切换函数
    this.autoChange();
  },
  methods: {
    // 轮播图自动切换：每隔2秒切换图片
    autoChange(){
      this.t = setInterval(() => {
        if(this.currentIndex === this.images.length - 1){
          this.currentIndex = 0
        }else{
          this.currentIndex++;
        };
        this.changeImg(this.currentIndex);
      },2000);
    },
    // 切换图片
    changeImg(i){
      document.querySelector(".img-container").style.transform = `translate(${-400 * i}px)`;
    },
    // 点击上一张图片
    goPrev(){
      if(this.currentIndex === 0){
        this.currentIndex = this.images.length - 1
      }else{
        this.currentIndex--;
      };
      this.changeImg(this.currentIndex);
    },
    // 点击下一张图片
    goNext(){
      if(this.currentIndex === this.images.length - 1){
        this.currentIndex = 0
      }else{
        this.currentIndex++;
      };
      this.changeImg(this.currentIndex);
    }, 
  },
  // 离开此页面前，取消轮播图自动切换
  beforeUnmount(){
    clearInterval(this.t);
  }, 
}
</script>

<style scoped>
.change-img{
    width:400px;
    height:400px;
    position:relative;
    overflow: hidden;
}
.img-container{
    /* 图片列表容器宽度：图片高度*图片个数 */
    width:2000px;
    height:400px;
    display:flex;
}
.img-container img{
    width:400px;
    height:400px;
}
.change-img .prev, .change-img .next{
    position:absolute;
    top:45%;
    width:20px;
    height:30px;
    background: #666;
    color:#fff;
    line-height:30px;
    cursor:pointer;
}
.change-img .prev{
    left:5px;
    text-align:left;
}
.change-img .next{
    right:5px;
    text-align:right;
}
</style>