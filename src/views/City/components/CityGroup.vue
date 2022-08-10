<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hotCity-container">
        <template v-for="(city, index) in cityGroup.hotCities">
          <div class="hotCity-item" @click="hotCityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <template v-for="(group, indexA) in cityGroup.cities" :key="indexA">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indexB) in group.cities" :key="indexB">
          <van-cell :title="city.cityName" @click="hotCityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
  import useCityStore from '@/stores/modules/city';
  import { computed } from '@vue/reactivity';
  import { useRouter } from 'vue-router';

  const props = defineProps({
    cityGroup: {
      type: Object,
      default: () => ({})
    }
  })

  const indexList = computed(() => {
    const listArr = props.cityGroup.cities.map(item => item.group)
    listArr.unshift('#')
    return listArr
  })

  const router = useRouter()
  const cityStore = useCityStore()
  const hotCityClick = (city) => {
    cityStore.curCity = city
    router.go(-1)
  }
</script>

<style lang="less" scoped>
  .city-group {
    .hotCity-container {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 10px;
      padding-right: 20px;

      .hotCity-item {
        width: 70px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        font-size: 12px;
        border-radius: 14px;
        color: #000;
        background-color: #fff4ec;
        margin: 6px 0;
      }
    }
  }
</style>