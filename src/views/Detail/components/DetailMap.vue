<template>
  <div class="home">
    <DetailSection title="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </DetailSection>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'; 
  import DetailSection from '@/components/DetailSection/DetailSection.vue';

  const props = defineProps({
    position: {
      type: Object,
      default: () => ({})
    }
  })

  // 使用选项式 API，引用将被注册在组件的 this.$refs 对象里
  // 使用组合式 API，引用将存储在与名字匹配的 ref 里
  const mapRef = ref()
  onMounted(() => {
    // 关于 ref 注册时机的重要说明：因为 ref 本身是作为渲染函数的结果来创建的，必须等待组件挂载后才能对它进行访问
    const map = new BMapGL.Map(mapRef.value); // 创建地图实例 
    const point = new BMapGL.Point(props.position.longitude, props.position.latitude); // 创建点坐标 
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
    var marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);                     // 将标注添加到地图中
  })

</script>

<style lang="less" scoped>
  .baidu {
    height: 250px;
  }
</style>
