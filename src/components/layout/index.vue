<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo" :default-openeds="['5']">
            <el-menu-item index="1">
              <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/screenBig">大屏页</router-link>
            </el-menu-item>
            <el-menu-item index="2-1">
              <router-link to="/kpi/cross" @click="pushCross">考核交叉</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/onLineWord">在线word</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/onLineWord2">在线word2</router-link>
            </el-menu-item>
            <el-sub-menu index="5">
              <template #title>
                <span>富文本</span>
              </template>
              <el-menu-item index="5-1">
                <router-link to="/rich/reports">wangeditor</router-link>
              </el-menu-item>
              <el-menu-item index="5-2">
                <router-link to="/rich/echarts">echarts</router-link>
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item index="5">
              <router-link to="/reports">报告生成</router-link>
            </el-menu-item>
            <el-menu-item index="6">
              <router-link to="/drag">拖拽</router-link>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { useHandleRoute } from '@/views/kpiCross/hooks'
const { removeStorage, onRouterPush } = useHandleRoute()

function pushCross() {
  deltorage()
}

function deltorage() {
  removeStorage()

  // 下钻区县考核指标，或市直部门考核指标
  const obj = {
    label: '区县',
    count: '372,707',
    groupColumn: 'sllx',
    county: '区县'
  }

  onRouterPush({
    params: obj
  })
}
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
  .el-container {
  }
}
.common-layout .el-header {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  text-align: center;
}
.common-layout .el-aside,
.common-layout .el-menu {
  background-color: var(--el-color-primary-light-8);
  color: var(--el-text-color-primary);
  text-align: center;
}
</style>
