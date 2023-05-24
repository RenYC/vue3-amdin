<template>
  <div class="container">
    <div class="echart-box">
      <echarts></echarts>
    </div>
  </div>
</template>

<script setup>
import echarts from '@/components/echarts/index.vue'
</script>

<style lang="scss" scoped>
.echart-box {
  width: 500px;
  height: 300px;
  box-shadow: 0 0 10px #ccc;
}
</style>
