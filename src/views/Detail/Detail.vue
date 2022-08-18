<template>
  <div class="detail top-page" ref="detailRef">
    <!-- <TabControl
      class="tabs" 
      v-if="showTabControl" 
      :titles="['房屋设施', '房东介绍', '热门评论', '预定须知', '位置周边', '价格说明']"
      @tabItemClick="tabItemClick" /> -->
    <TabControl
      class="tabs" 
      v-if="showTabControl" 
      :titles="names"
      ref="tabControlRef"
      @tabItemClick="tabItemClick" />
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="router.back()"
    />
    <!-- <div class="main" v-if="mainPart?.topModule" v-memo="[mainPart]">
      <DetailSwiper :swiperData="mainPart.topModule.housePicture.housePics" />
      <DetailInfos :topInfos="mainPart.topModule" />
      <DetailFacility :ref="getSectionRef" :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility" />
      <DetailLandlord :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule" />
      <DetailComment :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule" />
      <DetailNotice :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
      <DetailMap :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule" />
      <detail-intro :ref="getSectionRef" :price-intro="mainPart.introductionModule" />
    </div> -->
    <div class="main" v-if="mainPart?.topModule" v-memo="[mainPart]">
      <DetailSwiper :swiperData="mainPart.topModule.housePicture.housePics" />
      <DetailInfos name="描述" :ref="getSectionRef" :topInfos="mainPart.topModule" />
      <DetailFacility name="房屋设施" :ref="getSectionRef" :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility" />
      <DetailLandlord name="房东介绍" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule" />
      <DetailComment name="热门评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule" />
      <DetailNotice name="预定须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
      <DetailMap name="位置周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule" />
      <detail-intro :price-intro="mainPart.introductionModule" />
    </div>
    <div class="footer">  
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { getDetailInfos } from '@/service';
  import { computed, ref, watch } from 'vue';
  import DetailSwiper from './components/DetailSwiper.vue';
  import DetailInfos from './components/DetailInfos.vue';
  import DetailFacility from './components/DetailFacility.vue';
  import DetailLandlord from './components/DetailLandlord.vue';
  import DetailComment from './components/DetailComment.vue';
  import DetailNotice from './components/DetailNotice.vue';
  import DetailMap from './components/DetailMap.vue';
  import DetailIntro from './components/DetailIntro.vue';
  import TabControl from '@/components/TabControl/TabControl.vue';
  import useScroll from '@/hooks/useScroll.js';

  const route = useRoute()
  const router = useRouter()

  const detailInfos = ref({})
  const mainPart = computed(() => detailInfos.value?.mainPart)

  getDetailInfos(route.params.id).then(res => {
    detailInfos.value = res.data
  })

  // tabControl相关操作
  const showTabControl = ref(false)
  const detailRef = ref()
  const { scrollTop } = useScroll({
    elRef: detailRef,
    _scrollTop: 300,
    isShow: showTabControl
  })
  const tabControlRef = ref()
  let isClick = false
  watch(scrollTop, (newValue) => {
    // console.log(isClick, clickScrollTop, newValue)
    if (newValue == clickScrollTop) {
      isClick = false
      // console.log('已经滚动完毕')
    }
    if (isClick) return
    // console.log('滚动中。。。')
    names.value.every((item, index) => {
      const el = sectionEls[item]
      if (newValue >= el.offsetTop - 44 && newValue <= el.offsetTop + el.offsetHeight - 44) {
        if (!tabControlRef.value) return
        const tabControlEl = tabControlRef.value
        if (tabControlEl.currentIndex == index) return // 性能优化那么一丢丢..
        tabControlEl.currentIndex = index
        clickScrollTop = 0
        return
      }
      return true
    })
  })
  // const sectionEls = []
  // const getSectionRef = value => {
  //   sectionEls.push(value.$el)
  // }
  // // const getSectionRef = value => {
  // //   sectionEls.push(value.$el)
  // // }
  // const tabItemClick = (index) => {
  //   detailRef.value.scrollTo({
  //     top: sectionEls[index].offsetTop - 44,
  //     behavior: "smooth"
  //   })
  // }
  const sectionEls = {}
  const names = computed(() => Object.keys(sectionEls))
  const getSectionRef = value => {
    if (!value) return
    const key = value.$el.getAttribute('name')
    sectionEls[key] = value.$el
  }
  let clickScrollTop = 0 // 点击之后需要滚动到的位置
  const tabItemClick = (index) => {
    const elOffsetTop = sectionEls[names.value[index]].offsetTop - 44
    // 在本身不需要滚动的情况下，不会触发scroll事件
    // https://jooies.cn/112
    if (clickScrollTop == elOffsetTop) return 
    isClick = true
    clickScrollTop = elOffsetTop
    detailRef.value.scrollTo({
      top: elOffsetTop,
      behavior: "smooth"
    })
  }

</script>

<style lang="less" scoped>
  .detail {
    .tabs {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9;
      font-size: 12px;
    }
    .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 120px;

      img {
        width: 123px;
      }
      .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
      }
    }   
  }
</style>