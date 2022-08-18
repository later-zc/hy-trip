<template>
  <div class="search-bar">
    <!-- <div class="left">
      <slot name="left">
        <span>{{ title }}</span>
      </slot>
    </div> -->
    <div class="select-time">
      <div class="start">
        <span class="name">住</span>
        <span class="date">{{ formatMonthDay(startTimeStamp, 'MM.DD') }}</span>
      </div>
      <div class="end">
        <span class="name">离</span>
        <span class="date">{{ formatMonthDay(endTimeStamp, 'MM.DD') }}</span>
      </div>
    </div>
    <div class="content">
      <slot name="content">
        <span class="keyword">关键字/位置/民宿</span>
        <i class="icon"></i>
      </slot>
    </div>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import useSearchStore from '@/stores/modules/search';
  import { formatMonthDay, getDifferenceDay } from '@/utils/formatDate.js';
  
  const searchStore = useSearchStore()
  const { startTimeStamp, endTimeStamp } = storeToRefs(searchStore)
  

</script>

<style lang="less" scoped>
  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    margin: 0 20px;
    height: 70px;
    display: flex;
    align-items: center;
    font-size: 12px;
    background-color: #fff;

    .select-time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 10px;
      height: 45px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      background-color: #f2f4f6;

      .name {
        color: #999;
      }

      .end {
        .date {
          position: relative;

          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: -10px;
            border-bottom: 5px solid #000;
            border-left: 5px solid transparent;
          }
        }
      }
    }

    .content {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 2px;
      padding: 0 10px;
      height: 45px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      color: #999;
      background-color: #f2f4f6;

      .icon {
        width: 26px;
        height: 26px;
        background: url(@/assets/img/home/home-sprite.png) no-repeat -29px -150px;
        background-size: 207px 192px;
      }
    }
  }
</style>