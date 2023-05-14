<template>
  <div v-loading="loading" element-loading-background="rgba(6, 42, 101,0)">
    <!-- <button @click="onChartClick">点击了图表，进行跳转{{ level + 1 }}</button> -->
    <img
      style="width: 100%; height: 100%; cursor: pointer"
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
  onRouterPush({
    params: {
      label: '兰山区',
      count: '356,772',
      code: '兰山区',
      originName: '兰山区',
      groupColumn2: '兰山区',
      wtflFlag: '1'
    }
  })
}
</script>

<style lang="scss" scoped></style>
