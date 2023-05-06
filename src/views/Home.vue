<template>
  <div>{{ count }}</div>
</template>

<script setup>
import { ref, unref, watchEffect } from 'vue'
const state = localStorage.getItem('state')
// localStorage.setItem('state', 'home')
console.log(state)

const count = ref(0)
// const value = unref(count)
setTimeout(() => {
  count.value = 2
}, 3000)
watchEffect(() => {
  console.log(unref(count))
})
</script>

<style lang="scss" scoped></style>
