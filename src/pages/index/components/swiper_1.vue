<template>
  <view class="swiper-box">
    <swiper
      class="swiper"
      :autoplay="true"
      :interval="interval"
      indicator-color="#999"
      @tap="handleTap"
      @animationfinish="handleAnimationFinish"
    >
      <swiper-item v-for="(item, index) in 3" :key="index">
        <view class="swiper-item">
          <image src="../../../static/img_1.jpg" class="swiper-img" />
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import './swiper_1.scss'
export default {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      duration: 500,
      interval: 5000,
    };
  },
  methods: {
    handleTap() {},
    handleAnimationFinish() {},
  },
};
</script>

