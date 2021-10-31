<template>
  <view class="home">
    <view class="tabBar">
      <image
        src="../../static/logo.png"
        alt=""
        class="search_icon"
        @click="goToSearch"
      />
      <view
        class="item"
        :class="{ activity: item.ischoose }"
        v-for="(item, index) in tabBarList"
        :key="index"
        @tap="clickItem(item.id)"
      >
        {{ item.name }}
      </view>
    </view>
    <view class="home_box" v-if="tabBarId == 1">
      <Swiper />
      <view class="title">
        <view class="txt">推荐练习</view>
        <view class="all">全部冥想</view>
      </view>
      <Swiper1 />
      <view class="title">
        <view class="txt">推荐声音</view>
        <view class="all">全部声音</view>
      </view>
    </view>
    <view class="home_box" v-if="tabBarId == 2">
      <TabBarTwo />
    </view>
    <view class="home_box" v-if="tabBarId == 3">
      <TabBarThreen />
    </view>
  </view>
</template>

<script>
import "./index.scss";
import TabBarTwo from "./components/tabBar_two.vue";
import TabBarThreen from "./components/tabBar_threen.vue";
import Swiper from "./components/swiper.vue";
import Swiper1 from "./components/swiper_1.vue";
export default {
  components: {
    TabBarTwo,
    TabBarThreen,
    Swiper,
    Swiper1,
  },
  data() {
    return {
      tabBarId: 1,
      tabBarList: [
        { id: 1, name: "推荐", ischoose: true },
        { id: 2, name: "冥想", ischoose: false },
        { id: 3, name: "声音", ischoose: false },
      ],
    };
  },
  onLoad() {},
  methods: {
    /***
	 	@function: 点击tabBar
	  */
    clickItem(id) {
      console.log(id);
      this.tabBarId = id;
      this.tabBarList.forEach((val) => {
        if (val.id == id) {
          val.ischoose = true;
        } else {
          val.ischoose = false;
        }
      });
    },
    /***
	 	@function: 跳转搜索页面
	  */
    goToSearch() {},
  },
};
</script>