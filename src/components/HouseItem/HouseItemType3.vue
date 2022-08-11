<template>
  <div class="house-item-type3">
    <img class="cover" :src="itemData.image.url" alt="">
    <div class="info">
      <div class="location">
        <img src="@/assets/img/home/location.png" alt="">
        <span>{{ itemData.location }}</span>
      </div>
      <div class="houseName text-two-lines-overflow-hide">{{ itemData.houseName }}</div>
      <div class="summary">{{ itemData.summaryText }}</div>
      <div class="price">
        <span class="finalPrice">￥{{ itemData.finalPrice}}</span>
        <span class="oldPrice">￥{{ itemData.productPrice}}</span>
        <span v-if="itemData.priceTipBadge" class="tip" :style="{ ...tipStyle }">
          {{ itemData.priceTipBadge.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    itemData: {
      type: Object,
      default: () => ({})
    }
  })

  const tipStyle = computed(() => ({
    color: props.itemData.priceTipBadge.color,
    backgroundImage: `linear-gradient(90deg, ${props.itemData.priceTipBadge.gradient.startColor}, #${props.itemData.priceTipBadge.gradient.endColor})`
  }))

</script>

<style lang="less" scoped>
  .house-item-type3 {
    position: relative;
    width: 49%;
    margin: 5px 0;
    border-radius: 8px;
    overflow: hidden;

    .cover {
      width: 100%;
    }

    .info {
      padding: 6px 8px 10px;
      font-size: 12px;

      .location {
        img {
          width: 12px;
        }
      }

      .houseName {
        margin: 8px 0;
      }

      .summary {
        margin-bottom: 8px;
      }

      .price {
        .finalPrice {
          font-size: 14px;
          font-weight: bold;
          color: var(--theme-color);
        }

        .oldPrice {
          margin: 0 5px;
          color: #666;
          text-decoration-line: line-through;
        }

        .tip {
          padding: 0 6px;
          border-radius: 8px;
        }

      }
    }
  }
</style>