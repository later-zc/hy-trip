<template>
  <div class="house-item-type9">
    <img class="cover" :src="itemData.image.url" alt="">
    <div class="info">
      <div class="summary">{{ itemData.summaryText }}</div>
      <div class="houseName text-two-lines-overflow-hide">{{ itemData.houseName }}</div>
      <div class="price">
        <van-rate 
          :model-value="+itemData.commentScore"
          readonly 
          allow-half
          color="#fff"
          size="12px" />
        <span class="finalPrice">￥{{ itemData.finalPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from '@vue/reactivity';
  import { ref } from 'vue';
  
  const props = defineProps({
    itemData: {
      type: Object,
      default: () => ({})
    }
  })


</script>

<style lang="less" scoped>
  .house-item-type9 {
    position: relative;
    width: 49%;
    margin: 5px 0;
    border-radius: 8px;
    overflow: hidden;

    .cover {
      width: 100%;
    }

    .info {
      position: absolute;
      bottom: 0;
      padding: 6px 8px 10px;
      font-size: 12px;
      color: #fff;
      background-color: rgba(0,0,0,.3);

      .houseName {
        margin: 5px 0;
      }

      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .finalPrice {
          font-size: 14px;
          font-weight: bold;
          color: var(--theme-color);
        }
      }
    }
  }
</style>