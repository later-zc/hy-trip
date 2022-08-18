<template>
  <div class="infos">
    <div class="title">{{ topInfos.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfos.houseTags" :key="index">
        <span 
          class="item" 
          v-if="item.tagText"
          :style="{ color: item.tagText.color, background: item.tagText.background.color}">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <span class="score">{{ topInfos.commentBrief.overall }}</span>
        <span class="title">{{ topInfos.commentBrief.scoreTitle }}</span>
        <span class="brief">“{{ topInfos.commentBrief.commentBrief }}”</span>
      </div>
      <div class="right">
        <div class="comment-count">
          {{ topInfos.commentBrief.totalCount }}条评论<i>&gt;</i>
        </div>
      </div>
    </div>
    <div class="location">
      <div class="left">{{ topInfos.nearByPosition.address }}</div>
      <div class="right">地图·周边<i>&gt;</i></div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    topInfos: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<style lang="less" scoped>
  .infos {
    margin: 20px;
    .common-layout {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      padding: 8px;
      border-radius: 10px;
      background-color: #eee;
      .right {
        color: var(--theme-color);
      }
    }
    .title{
      font-size: 18px;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      .item {
        margin-left: 3px;
        padding: 2px;
      }
    }
    .comment {
      .common-layout();
      .left {
        .score {
          margin-right: 2px;
          font-size: 18px;
          font-weight: bold;
        }
        .title {
          font-size: 14px;
        }
        .brief {
          color: #666;
        }
      }
    }
    .location {
      .common-layout();
    }
  }
</style>