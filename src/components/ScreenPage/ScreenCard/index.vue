<template>
  <div
    class="chart-card-box"
    :class="{ 'detault-style': !props.bgUrl }"
    :style="{
      width: props.width,
      height: props.height,
      backgroundImage: `url(${props.bgUrl})`
    }"
  >
    <p class="title">{{ title }}</p>
    <div class="chart-item-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    // 单位是rem (500px/80)
    type: String,
    default: ''
  },
  height: {
    // 单位是rem (500px/80)
    type: String,
    default: '5.625rem'
  },
  bgUrl: {
    type: String,
    default: ''
  },
  title: {
    // 标题
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.chart-card-box {
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  box-sizing: border-box;
  padding: 0.3125rem;
  margin-bottom: 0.225rem;
}
.detault-style {
  border: 1px solid rgba(87, 239, 251, 0.4);
  background-color: rgba(6, 42, 101, 0.4);
  box-shadow: inset 0 0 40px 0 rgba(66, 154, 229, 0.5);
  border-radius: 2px;
}

.title {
  color: rgb(11, 241, 255);
  font-size: 0.25rem;
  font-weight: 600;
  position: absolute;
  top: -0.3125rem;
  left: 0.175rem;
}

.chart-item-wrap {
  flex: 1;
  color: #fff;
  width: 100%;
  height: 100%;
}
</style>
