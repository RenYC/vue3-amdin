<template>
  <ScreenLayoutSubPage :layoutBg="layoutBg">
    <template #top-l>
      <router-link class="toPath" to="/ScreenBig">回到大屏首页</router-link>
    </template>
    <template #top-r>
      <DateSearch type="day" @getDateRang="getDateRang"></DateSearch>
    </template>
    <template #BreadcrumbNav>
      <BreadcrumbNav :navList="navList"></BreadcrumbNav>
    </template>

    <template #main>
      <div class="main-left">
        <ScreenCard
          v-for="(item, index) in showMain[levelPage]?.listL"
          :key="index"
          :width="item.width"
          :bgUrl="item.bgUrl"
          :title="item.title"
          :height="item.height"
        >
          <keep-alive>
            <component class="chart-item" :is="item.component"></component>
          </keep-alive>
        </ScreenCard>
      </div>
      <div class="main-right">
        <ScreenCard
          v-for="(item, index) in showMain[levelPage]?.listR"
          :key="index"
          :width="item.width"
          :bgUrl="item.bgUrl"
          :title="item.title"
          :height="item.height"
        >
          <keep-alive>
            <component class="chart-item" :is="item.component"></component>
          </keep-alive>
        </ScreenCard>
      </div>
    </template>
  </ScreenLayoutSubPage>
</template>

<script setup>
import ScreenLayoutSubPage from '@/components/ScreenPage/ScreenLayoutSubPage/index.vue'
import DateSearch from '@/components/ScreenPage/DateSearch/index.vue'
import BreadcrumbNav from '@/components/ScreenPage/BreadcrumbNav/index.vue'
import ScreenCard from '@/components/ScreenPage/ScreenCard/index.vue'

import { ref, provide, readonly, watch } from 'vue'
import { useDate, usePageConfig, useHandleRoute } from './hooks'

import layoutBg from '@/assets/images/ScreenPage/bg_sub.png'

// 用一个字段控制显示哪些模块

// 日期逻辑 --------------------
const { startTime, endTime, getDateRang } = useDate()

// query 页面跳转 处理点击事件 逻辑----------------
const { navList, level, onRouterPush, setDefault } = useHandleRoute()

// 页面配置信息 --------------------
const { showMain } = usePageConfig()

const levelPage = ref(level.value)

watch([level], () => {
  console.log(level.value)
  levelPage.value = level.value
  console.log(showMain[levelPage.value])
})

provide('$attrs', {
  startTime: readonly(startTime),
  endTime: readonly(endTime),
  level: readonly(level),
  navList: readonly(navList),
  onRouterPush
})

getTotalCount()

// 获取数据总量
function getTotalCount() {
  const obj = {
    label: '区县',
    count: '372,707',
    groupColumn: 'sllx'
  }

  setDefault(obj)
}
</script>

<style lang="scss" scoped>
.toPath {
  width: 100px;
  color: #fff;
  background-color: blueviolet;
}

.main-left {
  padding-right: 0.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main-right {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
