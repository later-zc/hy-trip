<template>
  <div class="facility">
    <DetailSection title="房屋设施" moreText="查看全部设施">
      <div class="inner">
        <template v-for="(itemA, indexA) in houseFacility.houseFacilitys" :key="indexA">
          <div class="itemA" v-if="houseFacility.facilitySort?.includes(indexA)">
            <div class="head">
              <img :src="itemA.icon" alt="">
              <div class="text">{{ itemA.groupName }}</div>
            </div>
            <div class="list">
              <template v-for="(itemB, indexB) in itemA.facilitys.slice(0, 4)" :key="indexB">
                <div class="itemB">
                  <i class="icon-check icon"></i>
                  <span>{{ itemB.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </DetailSection>
  </div>
</template>

<script setup>
  import DetailSection from '@/components/DetailSection/DetailSection.vue';
  
  defineProps({
    houseFacility: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<style lang="less" scoped>
  .facility {
    .inner {
      display: flex;
      flex-direction: column;
      padding: 20px;
      font-size: 12px;
      .itemA {
        display: flex;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
        .head {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 10px;

          img {
            width: 32px;
          }
        }
        .list {
          flex: 3;
          display: flex;
          flex-wrap: wrap;
          .itemB {
            width: 49%;
            .icon {
              position: relative;
              top: 5px;
              margin: 3px;
            }
          }
        }
      }
    }
  }
</style>