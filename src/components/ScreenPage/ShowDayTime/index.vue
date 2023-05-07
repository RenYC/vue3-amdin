<template>
  <section class="date-show">
    {{ dayTime.year }} <span>年</span> {{ dayTime.month }} <span>月</span> {{ dayTime.day }}
    <span class="last-span">日</span> {{ dayTime.hour }}
    <span class="colon">{{ colon ? ':' : '' }}</span>
    {{ dayTime.minute }}
  </section>
</template>

<script setup>
import dayjs from 'dayjs'
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// 冒号
const colon = ref(true)
// dayjs 获取当前时间
const dayTime = reactive(getDayTime())
let timer = null
onMounted(() => {
  timer = setInterval(() => {
    Object.assign(dayTime, getDayTime())
    colon.value = !colon.value
  }, 1000)
})
onUnmounted(() => {
  clearInterval(timer)
})

function getDayTime() {
  return {
    year: dayjs().format('YYYY'),
    month: dayjs().format('MM'),
    day: dayjs().format('DD'),
    hour: dayjs().format('HH'),
    minute: dayjs().format('mm')
  }
}
</script>

<style lang="scss" scoped>
.date-show {
  height: 0.25rem;
  line-height: 0.25rem;
  color: #0bf1ff;
  font-size: 0.25rem;
  display: flex;
  justify-content: flex-end;
  span {
    color: #ace4ff;
  }
  .last-span {
    margin-right: 0.125rem;
  }
  .colon {
    display: inline-block;
    width: 0.075rem;
    text-align: center;
  }
}
</style>
