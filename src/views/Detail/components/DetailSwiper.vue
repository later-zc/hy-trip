<template>
  <div class="swiper">
    <van-swipe class="list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swiperData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <!-- <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div> -->
        <div class="custom-indicator">
          <template v-for="(value, key, index) in swiperGroup" :key="key">
            <span 
              class="item" 
              v-if="swiperData[active]?.enumPictureCategory"
              :class="{ active: swiperData[active].enumPictureCategory == key }">
              {{ getName(value[0].title) }}
              <span v-show="swiperData[active].enumPictureCategory == key">
                {{ getCategoryIndex(swiperData[active], key) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
  const props = defineProps({
    swiperData: {
      type: Array,
      default: () => []
    }
  })

  const swiperGroup = {}
  for (const item of props.swiperData) {
    const key = item.enumPictureCategory
    if (!swiperGroup[key]) swiperGroup[key] = []
    swiperGroup[key].push(item)
  }

  // const getName = name => name.replace('：', '').replace('【', '').replace('】', '')
  const getName = name => /【(.*?)】/i.exec(name)[1]

  const getCategoryIndex = (item, key) => {
    // if (item.enumPictureCategory != key) return
    // for (var i = 0; i < swiperGroup[key].length; i++) {
    //   if (swiperGroup[key][i] == item) return i + 1
    // }
    const curCategoryArr = swiperGroup[item.enumPictureCategory]
    return curCategoryArr.findIndex(value => value === item) + 1
  }
</script>

<style lang="less" scoped>
  .swiper {
    .list {
      .item {
        img {
          width: 100%;
        }
      }
      
      .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, 0.3);

        .item {
          margin: 0 5px;
          &.active {
            padding: 2px 5px;
            color: #333;
            background-color: #fff;
            border-radius: 20px;
          }
        }
      }
    }
  }
</style>