<template>
  <ScreenLayoutSubPage :layoutBg="layoutBg">
    <template #top-l>
      <router-link class="toPath" to="/ScreenBig">回到大屏首页</router-link>
      <button @click="showActive = 'show2'">切换</button>
    </template>
    <template #top-r>
      <DateSearch type="day" @getDateRang="getDateRang"></DateSearch>
    </template>
    <template #BreadcrumbNav>
      <BreadcrumbNav></BreadcrumbNav>
    </template>

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
  </ScreenLayoutSubPage>
</template>

<script setup>
import ScreenLayoutSubPage from '@/components/ScreenPage/ScreenLayoutSubPage/index.vue'
import DateSearch from '@/components/ScreenPage/DateSearch/index.vue'
import BreadcrumbNav from '@/components/ScreenPage/BreadcrumbNav/index.vue'
import ScreenCard from '@/components/ScreenPage/ScreenCard/index.vue'

import { ref, provide, readonly } from 'vue'
import { useDate, useHandleRoute, usePageConfig } from './hooks'
// const ScreenLayout = defineAsyncComponent(() =>
//   import('@/components/ScreenPage/ScreenLayout/index.vue')
// )
// const ScreenCard = defineAsyncComponent(() => import('@/components/ScreenPage/ScreenCard/index.vue'))

import layoutBg from '@/assets/images/ScreenPage/bg_sub.png'

// 用一个字段控制显示哪些模块
const showActive = ref('show1')

// 日期逻辑 --------------------
const { startTime, endTime, getDateRang } = useDate()

// query 页面跳转 处理点击事件 逻辑----------------
const { query, getParams } = useHandleRoute()

// 页面配置信息 --------------------
const { showMain } = usePageConfig()

provide('$attrs', {
  startTime: readonly(startTime),
  endTime: readonly(endTime),
  query: readonly(query),
  getParams
})
</script>

<style lang="scss" scoped>
.toPath {
  width: 100px;
  color: #fff;
  background-color: blueviolet;
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
