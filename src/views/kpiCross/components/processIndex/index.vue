<template>
  <div class="box">
    <img style="width: 100%; height: 100%" src="./pic.jpg" alt="" />
    <div class="btn-box">
      <div class="btn-item" @click="onChartClick('办结率')">办结率</div>
      <div class="btn-item" @click="onChartClick('按时办结率')">按时办结率</div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, watch, computed } from 'vue'
const { startTime, endTime, level, navList, onRouterPush } = inject('$attrs')
const loading = ref(true)

const type_names = computed(() => {
  const params = navList.value[navList.value.length - 1]
  if (params.type_index == '一次办好率') {
    return {
      name1: '重办率',
      name2: '督办率'
    }
  }
  if (params.type_index == '问题解决率') {
    return {
      name1: '问题解决量',
      name2: '问题未解决量'
    }
  }
  if (params.type_index == '群众满意率') {
    return {
      name1: '群众满意量',
      name2: '不满意量'
    }
  }
  return {}
})

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

function onChartClick(val) {
  const params = navList.value[navList.value.length - 1]
  let label = ''
  let process_index = val
  if (process_index) {
    label = val
  }
  onRouterPush({
    params: {
      // ...params,
      label: label,
      count: '356,772',
      code: '兰山区',
      originName: '兰山区',
      groupColumn2: '兰山区',
      wtflFlag: '1',
      county: params.county,
      process_index,
      typeOrProcess: 'process'
    }
  })
}
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  .btn-box {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .btn-item {
      width: 1.325rem;
      height: 1.75rem;
      border: 1px solid red;
      cursor: pointer;
    }
  }
}
</style>
