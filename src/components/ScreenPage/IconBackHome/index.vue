<template>
  <router-link to="/home" class="icon-home" :style="{ left: props.left, top: props.top }">
    <img class="pic" src="@/assets/images/icon_home.png" alt="" />
  </router-link>
</template>

<script setup>
const props = defineProps({
  left: {
    type: String,
    default: '0.65rem'
  },
  top: {
    type: String,
    default: '0.75rem'
  }
})
</script>

<style lang="scss" scoped>
.icon-home {
  position: absolute;
  width: 0.9rem;
  height: 0.4rem;
  background-color: #092b61;
  text-align: center;
  border-radius: 0.05rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid #fff;
  }
  .pic {
  }
}
</style>
