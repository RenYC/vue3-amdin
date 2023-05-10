<template>
  <div v-loading="loading" element-loading-background="rgba(6, 42, 101,0)">
    <span>card1 +</span>
    <button @click="onChartClick">下钻页面</button>
  </div>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const { startTime, endTime, onRouterPush, removeStorage } = inject('$attrs')
const loading = ref(true)
watch(
  [startTime, endTime],
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
  removeStorage()
  onRouterPush({
    params: {
      label: '直办',
      count: '869618',
      code: '1',
      groupColumn2: 'sllx'
    }
  })
  router.push('/screenBig/screenBigSub')
}
</script>

<style lang="scss" scoped></style>
