<template>
  <div class="box">
    <img
      style="width: 100%; height: 100%; cursor: pointer"
      src="./pic.jpg"
      alt=""
      @click="onChartClick2(1)"
    />
    <div class="top-box"></div>
    <div class="btn-box">
      <div class="btn-item" @click="onChartClick('一次办好率')">一次办好率</div>
      <div class="btn-item" @click="onChartClick('问题解决率')">问题解决率</div>
      <div class="btn-item" @click="onChartClick('群众满意率')">群众满意率</div>
    </div>
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

function onChartClick2(kpiIndex) {
  const params = navList.value[navList.value.length - 1]
  let label = '区县考核指标'

  onRouterPush({
    params: {
      ...params,
      label: label,
      count: '356,772',
      code: '兰山区',
      originName: '兰山区',
      groupColumn2: '兰山区',
      wtflFlag: '1',
      kpiIndex
    }
  })
}

function onChartClick(type_index) {
  const params = navList.value[navList.value.length - 1]
  let label = ''
  if (type_index == '一次办好率') {
    label = '一次办好率'
  }
  if (type_index == '问题解决率') {
    label = '问题解决率'
  }
  if (type_index == '群众满意率') {
    label = '群众满意率'
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
      type_index,
      typeOrProcess: 'type'
    }
  })
}
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  .top-box {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    border: 1px solid red;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .btn-box {
    height: 50%;
    width: 100%;
    position: absolute;
    bottom: 0;
    border: 1px solid red;
    display: flex;
    justify-content: space-evenly;
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
