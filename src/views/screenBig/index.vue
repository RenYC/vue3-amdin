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
import { useDate, usePageConfig } from './hooks'
import { useHandleRoute } from '@/components/ScreenPage/hooks'
// const ScreenLayout = defineAsyncComponent(() =>
//   import('@/components/ScreenPage/ScreenLayout/index.vue')
// )
// const ScreenCard = defineAsyncComponent(() => import('@/components/ScreenPage/ScreenCard/index.vue'))

import layoutBg from '@/assets/images/ScreenPage/bg.png'

// 用一个字段控制显示哪些模块
const showActive = ref('show1')

const { onRouterPush, removeStorage } = useHandleRoute()

// 日期逻辑 --------------------
const { startTime, endTime, getDateRang } = useDate()

// 页面配置信息 --------------------
const { showMain } = usePageConfig()

provide('$attrs', {
  startTime: readonly(startTime),
  endTime: readonly(endTime),
  onRouterPush,
  removeStorage
})
</script>

<style lang="scss" scoped>
.toPath {
  width: 100px;
  color: #fff;
  background-color: blueviolet;
  position: absolute;
  top: 0;
  left: 0;
}
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
