<template>
  <div v-loading="loading" element-loading-background="rgba(6, 42, 101,0)">
    card1 + {{ count }}
    <button @click="++count">count + 1</button>
    <button @click="onChartClick">点击了图表，进行跳转{{ level + 1 }}</button>
  </div>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
const count = ref(0)

const { startTime, endTime, level, onRouterPush } = inject('$attrs')
const loading = ref(true)
watch(
  [startTime, endTime, level],
  () => {
    // 监听数据变化，获取数据
    // console.log(startTime.value)
    // console.log(endTime.value)
    setInterval(() => {
      loading.value = false
    }, 0)
  },
  { immediate: true }
)

function onChartClick() {
  const i = level.value + 1
  onRouterPush({
    path: '/screenBig/screenBigSub?level=' + i,
    params: {
      label: '社会事业' + i,
      count: '4693',
      code: '社会事业',
      originName: '社会事业',
      groupColumn2: 'wtflfir_name',
      wtflFlag: '1'
    }
  })
}
</script>

<style lang="scss" scoped></style>
