<template>
  <div id="echarts" class="echarts"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, onUnmounted, ref } from 'vue'

const myChart = ref(null)

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  myChart.value = echarts.init(document.getElementById('echarts'))
  console.log(myChart.value)
  // 绘制图表
  myChart.value.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })

  window.onresize = function () {
    myChart.value.resize()
  }
})

onUnmounted(() => {
  myChart.value.dispose()
})

defineExpose({
  myChart: myChart
})
</script>

<style lang="scss" scoped>
.echarts {
  height: 100%;
  width: 100%;
}
</style>
