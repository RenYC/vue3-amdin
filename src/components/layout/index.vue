<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/screenBig">大屏页</router-link>
            </el-menu-item>
            <el-menu-item index="2-1">
              <router-link to="/kpi/cross" @click="deltorage">考核交叉</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/onLineWord">在线word</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/onLineWord2">在线word2</router-link>
            </el-menu-item>
            <el-menu-item index="5">
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
import { useHandleRoute } from '@/components/ScreenPage/hooks'
const { removeStorage } = useHandleRoute()

function deltorage() {
  removeStorage()
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
