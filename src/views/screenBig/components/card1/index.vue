<template>
  <div>
    card1 + {{ count }}
    <button @click="++count">count + 1</button>
    <button @click="onChartClick">点击了图表，进行跳转</button>
  </div>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
const count = ref(0)

const { startTime, endTime, query, getParams } = inject('$attrs')
watch(
  [startTime, endTime, query],
  () => {
    // 监听数据变化，获取数据
    // console.log(startTime.value)
    // console.log(endTime.value)
  },
  { immediate: true }
)

function onChartClick() {
  getParams({ name: 'card1' })
}
</script>

<style lang="scss" scoped></style>
