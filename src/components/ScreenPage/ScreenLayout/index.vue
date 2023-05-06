<template>
  <div
    class="container-layout"
    :style="{
      backgroundImage: `url(${props.layoutBg})`
    }"
  >
    <slot></slot>
    <section class="main">
      <slot name="main"></slot>
      <!-- <div class="section-row row-1">
        
      </div> -->
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  layoutBg: {
    type: String,
    default: ''
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
  padding: 0.425rem 0.3rem 0;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  .main {
    margin-top: 0.175rem;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    flex: 1;
    margin-bottom: 0.3rem;
  }
}
</style>
