<template>
  <div v-loading="loading" element-loading-background="rgba(6, 42, 101,0)">
    <!-- <button @click="onChartClick">点击了图表，进行跳转{{ level + 1 }}</button> -->
    <img
      style="width: 100%; height: 100%; cursor: pointer; border: 1px solid red"
      src="./pic.jpg"
      alt=""
      @click="onChartClick"
    />
  </div>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
const { startTime, endTime, level, navList, onRouterPush } = inject('$attrs')
const loading = ref(true)
watch(
  [startTime, endTime, level],
  () => {
    // 监听数据变化，获取数据
    // console.log(startTime.value)
    // console.log(endTime.value)
    const params = navList.value[navList.value.length - 1]

    setInterval(() => {
      loading.value = false
    }, 0)
  },
  { immediate: true }
)

function onChartClick() {
  const params = navList.value[navList.value.length - 1]
  let county = ''
  let label = '区县'
  if (params.county == '区县') {
    label = '兰山区'
    county = '乡镇/街道'
  }
  if (params.county == '乡镇/街道') {
    label = '柳青街道'
    county = '村/小区'
  }
  if (params.county == '村/小区') {
    label = '蓝山小区'
    county = ''
  }
  onRouterPush({
    params: {
      label: label,
      count: '356,772',
      code: '兰山区',
      originName: '兰山区',
      groupColumn2: '兰山区',
      wtflFlag: '1',
      county: county
    }
  })
}
</script>

<style lang="scss" scoped></style>
