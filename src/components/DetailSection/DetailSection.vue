<template>
  <div class="section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot>
        <h3>未提供相关信息</h3>
      </slot>
    </div>
    <div class="footer" v-if="moreText.length">
      <div class="more">{{ moreText }}<i>&gt;</i></div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: '默认标题'
    },
    moreText: {
      type: String,
      default: ''
    }
  })
</script>

<style lang="less" scoped>
  .section {
    margin: 20px;
    border-bottom: 5px solid #eee;
    .header {
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    }
    .content {
      margin: 10px 0;
      border-radius: 10px;
      background-color: rgba(248,250,251,.8);
    }
    .footer {
      text-align: right;
      .more {
        color: var(--theme-color);
      }
    }
  }
</style>