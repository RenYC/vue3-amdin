<template>
  <ScreenLayout :layoutBg="layoutBg">
    <IconBackHome left="8.325rem"></IconBackHome>
    <ShowDayTime></ShowDayTime>
    <DateSearch @getDateRang="getDateRang"></DateSearch>
    <template #main>
      <ScreenCard
        v-for="(item, index) in showMain[showActive].list"
        :key="index"
        :width="item.width"
        :bgUrl="item.bgUrl"
        :title="item.title"
      >
        <keep-alive>
          <component class="chart-item" :is="item.component"></component>
        </keep-alive>
      </ScreenCard>
    </template>
  </ScreenLayout>
</template>

<script setup>
import ScreenLayout from '@/components/ScreenPage/ScreenLayout/index.vue'
import IconBackHome from '@/components/ScreenPage/IconBackHome/index.vue'
import ShowDayTime from '@/components/ScreenPage/ShowDayTime/index.vue'
import DateSearch from '@/components/ScreenPage/DateSearch/index.vue'
import ScreenCard from '@/components/ScreenPage/ScreenCard/index.vue'

import { ref, provide, readonly } from 'vue'
import { useDate, useHandleRoute, usePageConfig } from './hooks'
// const ScreenLayout = defineAsyncComponent(() =>
//   import('@/components/ScreenPage/ScreenLayout/index.vue')
// )
// const ScreenCard = defineAsyncComponent(() => import('@/components/ScreenPage/ScreenCard/index.vue'))

import layoutBg from '@/assets/images/kpi/bg.png'

// 短标题
import bg_short from '@/assets/images/kpi/bg_short-title.png'
// 长标题
import bg_long from '@/assets/images/kpi/bg_long-title.png'

// 用一个字段控制显示哪些模块
const showActive = ref('show1')

// 日期逻辑 --------------------
const { startTime, endTime, getDateRang } = useDate()
// query 页面跳转 处理点击事件 逻辑----------------
const { query, getParams } = useHandleRoute()
// 页面配置信息 --------------------
const { showMain } = usePageConfig({ bg_short, bg_long })

provide('$attrs', {
  startTime: readonly(startTime),
  endTime: readonly(endTime),
  query: readonly(query),
  getParams
})
</script>

<style lang="scss" scoped>
.chart-item {
  width: 100%;
  height: 100%;
  /* margin: 0.3125rem; */
  :deep(.el-loading-mask) {
    &::after {
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;
      background-color: rgba(6, 42, 101, 0.9);
      filter: blur(20px);
      z-index: -1;
    }
  }
}
</style>
