<template>
  <div class="nav-wrap">
    <div class="item-wrap">
      <p class="txt">受理总量受理总量受理总量受理总量</p>
      <span class="num">1334243</span>
    </div>
    <div class="item-wrap">
      <p class="txt">受理总量受理总量受理总量受理总量</p>
      <span class="num">1334243</span>
    </div>
    <div class="item-wrap">
      <p class="txt">受理总量受理总量受理总量受理总量</p>
      <span class="num">1334243</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-wrap {
  display: flex;
}
.item-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 2.575rem;
  height: 0.65rem;
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
