<template>
  <div class="search">
    <div class="location-area">
      <div class="city" @click="cityClick">{{ curCity.cityName }}</div>
      <div class="position" @click="posClick">
        <img src="@/assets/img/home/icon_location.png" alt="">
        <span class="text">我的位置</span>
      </div>
    </div>

    <div class="date-area" @click="isShowCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
      </div>
      <div class="tip">至</div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
      <div class="tip">共{{ stayTime }}晚</div>
    </div>

    <van-calendar 
      v-model:show="isShowCalendar"
      type="range" 
      color="#ff9854"
      :formatter="formatter"
      @confirm="onConfirm" />

    <div class="desc-area">
      <span>价格不限</span>
      <span>人数不限</span>
    </div>
    
    <div class="keyword-area">
      <span>关键字/位置/民宿名</span>
    </div>

    <div class="hotSuggest-area">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div 
        class="content" 
        :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <div class="searchBtn-area" @click="onSearch">
      <span>开始搜索</span>
    </div>

    <div class="categories-area">

    </div>

  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import useCityStore from '@/stores/modules/city';
  import useHomeStore from '@/stores/modules/home';
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { formatMonthDay, getDifferenceDay } from '@/utils/formatDate.js';
  
  const router = useRouter()

  const cityClick = () => {
    router.push('/city')
  }
  
  // 获取当前位置信息
  const posClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
      console.log('获取位置信息成功: ', res)
    }, err => {
      console.log('获取位置信息失败: ', err)
    })
  }

  // 获取当前城市
  const cityStore = useCityStore()
  const { curCity } = cityStore

  // 处理日期
  const nowTimeStamp = +new Date()
  const tomorrowTimeStamp = nowTimeStamp + 24*60*60*1000
  const startDate = ref(formatMonthDay(nowTimeStamp))
  const endDate = ref(formatMonthDay(tomorrowTimeStamp))
  const stayTime = ref(getDifferenceDay(nowTimeStamp, tomorrowTimeStamp))
  const onConfirm = (value) => {
    const sDate = value[0]
    const eDate = value[1]
    startDate.value = formatMonthDay(sDate)
    endDate.value = formatMonthDay(eDate)
    stayTime.value = getDifferenceDay(sDate, eDate)
    isShowCalendar.value = false
  }

  // 处理日历
  const isShowCalendar = ref(false)
  const formatter = (day) => {
    if (day.type === 'start') {
      day.bottomInfo = '入住'
    } else if (day.type === 'end') {
      day.bottomInfo = '离店'
    }
    return day
  }

  // 处理热门建议
  const homeStore = useHomeStore()
  const { hotSuggests } = storeToRefs(homeStore)

  // 处理搜索按钮
  const onSearch = () => {
    router.push({
      path: '/search',
      query: {
        startDate: startDate.value,
        endDate: endDate.value,
        curCity: curCity.cityName
      }
    })
  }

</script>

<style lang="less" scoped>
  .search {
    // --van-calendar-popup-height: 100%;
    .layout {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      height: 44px;
      margin: 0 20px;
      border-bottom: 1px solid #eee;
    }
    
    .location-area {
      .layout();

      .city {
        // flex: 1;
        color: #333;
      }

      .position {
        display: flex;
        flex-direction: column;
        align-items: center;

        .text {
          font-size: 12px;
          color: #666;
        }

        img {
          margin-left: 5px;
          width: 18px;
          height: 18px;
        }
      }
    }

    .date-area {
      .layout();

      .date {
        display: flex;
        flex-direction: column;
      }

      .tip {
        color: #aaa;
      }
    }

    .desc-area,
    .keyword-area {
      .layout();
      color: #aaa;
    }

    .hotSuggest-area {
      display: flex;
      flex-wrap: wrap;
      margin: 10px 20px;

      .content {
        margin: 6px;
        padding: 3px 6px;
        border-radius: 15px;
        font-size: 12px;
      }
    }

    .searchBtn-area  {
      .layout();
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      border-bottom: none;
      color: #fff;
      font-size: 18px;
      background-image: var(--theme-linear-gradient);
    }
  }
</style>