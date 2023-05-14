<template>
  <div class="nav-wrap">
    <template v-if="props.navList.length >= 2">
      <div
        v-for="(item, index) in props.navList"
        :key="index"
        class="item-wrap"
        @click="onNavClick(item, index)"
      >
        <p class="txt">{{ item.label }}</p>
        <span class="num">{{ item.count }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const props = defineProps({
  navList: {
    type: Array,
    default: () => []
  }
})

const { onRouterPush } = inject('$attrs')

function onNavClick(item, index) {
  onRouterPush({
    index,
    params: item
  })
}
</script>

<style lang="scss" scoped>
.nav-wrap {
  display: flex;
  height: 0.65rem;
}
.item-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 2.575rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding: 0.075rem 0.25rem 0.075rem 0.45rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-image: url(@/assets/images/ScreenPage/step2_default.png);
  background-size: contain;
  background-repeat: no-repeat;
  &:first-child {
    width: 2.3rem;
    padding-left: 0.25rem;
    background-image: url(@/assets/images/ScreenPage/step1_default.png);
    &:hover {
      background-image: url(@/assets/images/ScreenPage/step1_hover.png);
    }
  }
  + .item-wrap {
    margin-left: -0.3rem;
    &:hover {
      background-image: url(@/assets/images/ScreenPage/step2_hover.png);
    }
  }
  &:last-child {
    margin-left: -0.35rem;
    background-image: url(@/assets/images/ScreenPage/step_pressed.png);
    &:hover {
      background-image: url(@/assets/images/ScreenPage/step_pressed.png);
    }
    .txt {
      color: #fff;
    }
  }
  .txt {
    width: 1.5rem;
    font-size: 0.1625rem;
    color: #5bb3ff;
    font-weight: 400;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 0.025rem;
  }
  .num {
    font-size: 0.1875rem;
    color: #fff;
    font-weight: 500;
  }
}
</style>
