<template>
  <div
    class="container-layout"
    :style="{
      backgroundImage: `url(${props.layoutBg})`
    }"
  >
    <div
      class="layout-top"
      :style="{
        height: props.topHeight
      }"
    >
      <div class="top-l">
        <slot name="top-l"></slot>
        <h2 class="layout-title">{{ title }}</h2>
      </div>

      <div class="date-search">
        <slot name="top-r"></slot>
      </div>
    </div>
    <div class="breadcrumb-nav-wrap">
      <slot name="BreadcrumbNav"></slot>
    </div>
    <section class="main-wrap">
      <slot name="main"></slot>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  layoutBg: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: '123456·临沂首发 受理分析'
  },
  topHeight: {
    type: String,
    default: '0.625rem'
  }
})
</script>

<style lang="scss" scoped>
.container-layout {
  position: relative;
  /* width: 24rem; */
  height: 13.5rem;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  .layout-top {
    position: relative;
    /* height: 0.625rem; */
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.4rem;
    /* background: rgba(32, 122, 227, 0.5); */
    .top-l,
    .top-r {
      width: 6rem;
    }
    .layout-title {
      font-family: SourceHanSansCN-Bold;
      font-size: 0.3rem;
      color: #0bf1ff;
      font-weight: 700;
      margin: 0;
      display: inline-block;
      /* flex: 1; */
    }
    .date-search {
      display: inline-block;
    }
  }

  .breadcrumb-nav-wrap {
    padding: 0 1.8%;
    margin: 0.25rem 0;
  }

  .main-wrap {
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    flex: 1;
  }
}
</style>
