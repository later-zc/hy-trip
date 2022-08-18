<template>
  <div class="home" ref="homeRef">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearch></HomeSearch>
    <HomeCategories></HomeCategories>
    <SearchBar v-show="isShow"></SearchBar>
    <HomeContent></HomeContent>
  </div>
</template>

<script setup>
  import HomeNavBar from './components/HomeNavBar.vue';
  import HomeSearch from './components/HomeSearch.vue';
  import HomeCategories from './components/HomeCategories.vue';
  import HomeContent from './components/HomeContent.vue';
  import SearchBar from '@/components/SearchBar/SearchBar.vue';
  import useHomeStore from '@/stores/modules/home';
  import useScroll from '@/hooks/useScroll.js';
  import { onActivated, ref } from 'vue';

  const homeStore = useHomeStore()
  // 获取热门建议
  homeStore.fetchHotSuggests()
  // 获取分类数据
  homeStore.fetchCategories()
  // 获取房屋数据
  homeStore.fetchHouseList()

  // useScroll(() => {
  //   console.log('获取数据')
  //   setTimeout(() => {
  //     homeStore.fetchHouseList()
  //   }, 5000)
  // })

  // const { isReachBottom } = useScroll()
  // watch(isReachBottom, (newValue) => {
  //   if (newValue) {
  //     homeStore.fetchHouseList().then(() => {
  //       isReachBottom.value = false
  //     })
  //   }
  // })

  const homeRef = ref()
  const isShow = ref(false)
  const { scrollTop } = useScroll({
    elRef: homeRef,
    isWatchReachBottom: true,
    reachBottomCb: () => homeStore.fetchHouseList(),
    _scrollTop: 360,
    isShow
  })

  onActivated(() => {
    console.log('scrollTop.value: ', scrollTop.value)
    homeRef.value.scrollTo({
      top: scrollTop.value
    })
  })


</script>

<style lang="less" scoped>
  .home {
    padding-bottom: 50px;
    height: 100vh;
    overflow: scroll;
    box-sizing: border-box;

    .banner {
      img {
        width: 100%;
      }
    }
  }
</style>