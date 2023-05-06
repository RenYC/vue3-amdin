<template>
  <div>
    <span
      v-for="item in props.list"
      :key="item"
      class="radio-item"
      :class="{ active: dateRadio === item }"
      @click="$emit('update:dateRadio', item)"
    >
      {{ dateRadioChange[item].name }}
    </span>
  </div>
</template>

<script setup>
import { dateRadioChange } from '../hooks/dateConfig'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
  dateRadio: {
    type: String,
    default: ''
  }
})

defineEmits(['update:dateRadio'])
</script>

<style lang="scss" scoped>
.radio-item {
  flex: 1;
  box-sizing: border-box;
  color: #0bf1ff;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  font-size: 0.175rem;

  &::after {
    content: '';
    width: 1px;
    height: 0.25rem;
    top: 0.075rem;
    border-right: 1px solid #1984e8;
    position: absolute;
    right: 0;
  }
  &:last-child::after {
    border: 0;
  }
}
.radio-item:hover {
  background: rgba(25, 132, 232, 0.7);
}
.active {
  background: rgba(25, 132, 232, 0.7);
}
</style>
