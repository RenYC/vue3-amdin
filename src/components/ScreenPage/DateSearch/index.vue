<template>
  <section class="date-search">
    <div
      v-if="props.type == 'quarter'"
      class="date-radio-wrap"
      :style="{
        width: props.type == 'day' ? '3rem' : '8.95rem'
      }"
    >
      <DateRadio class="date-radio" :list="quarterList" v-model:dateRadio="dateRadio"></DateRadio>
      <DateRadio class="date-radio" :list="dateList" v-model:dateRadio="dateRadio"></DateRadio>
    </div>

    <div
      v-if="props.type == 'day'"
      class="date-radio-wrap wrap2"
      :style="{
        width: props.type == 'day' ? '3rem' : '8.95rem'
      }"
    >
      <DateRadio class="date-radio" :list="dayList" v-model:dateRadio="dateRadio"></DateRadio>
    </div>

    <div class="date-range">
      <el-date-picker
        v-model="dateRange"
        type="daterange"
        range-separator="~"
        start-placeholder="Start date"
        end-placeholder="End date"
        :value-format="FORMAT"
        size="small"
      />
    </div>
  </section>
</template>

<script setup>
import DateRadio from './DateRadio.vue'

import { ref, watch } from 'vue'
import dayjs from 'dayjs'

import {
  FORMAT,
  dateRadioChange,
  dayList,
  dateList,
  quarterList,
  firstQuarter
} from '../hooks/dateConfig'

const props = defineProps({
  width: {
    type: String,
    default: '8.95rem'
    // default: '3rem'
  },
  type: {
    // quarter or day
    type: String,
    default: 'quarter'
  },
  quarterList: {
    type: Array,
    default: () => quarterList
  }
})

const emit = defineEmits(['getDateRang'])

const dateRadio = ref(quarterList[0])
//今年一月一号
const firstDay = dayjs().startOf('year').format(FORMAT)

const startTime = ref(firstDay)
const endTime = ref(firstQuarter[1])
const dateRange = ref([startTime.value, endTime.value])
emitDateRang()

watch([dateRadio], (val) => {
  if (!val) return
  dateRange.value = dateRadioChange[val].value
})

watch([dateRange], () => {
  startTime.value = dateRange.value[0]
  endTime.value = dateRange.value[1]
  handleRadio()
  emitDateRang()
})

// 如果所选时间范围，等于提前预设的时间范围，高亮相等的radio
function handleRadio() {
  for (const key in dateRadioChange) {
    dateRadio.value = ''
    if (dateRange.value.toString() === dateRadioChange[key].value.toString()) {
      dateRadio.value = key
      break
    }
  }
}

// 向父组件传递时间范围
function emitDateRang() {
  emit('getDateRang', {
    start: startTime,
    end: endTime
  })
}
</script>

<style lang="scss" scoped>
.date-search {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  justify-content: flex-end;
  align-items: end;
  .date-radio-wrap {
    width: 8.95rem;
    line-height: 0.42rem;
    margin-right: 0.1rem;
  }
  .date-radio {
    background: rgba(25, 132, 232, 0.3);
    display: flex;
    justify-content: space-between;
    &:first-child {
      margin-bottom: 0.075rem;
    }
  }
  .wrap2 {
    /* margin-top: 0.15rem; */
    .date-radio {
      &:first-child {
        margin-bottom: 0;
      }
    }
  }

  .date-range {
    line-height: 0.375rem;

    :deep(.el-date-editor) {
      width: 3.25rem;
      height: 0.4rem;
      background: rgba(25, 132, 232, 0.7);
      text-align: center;
      border-radius: 0;
      box-shadow: 0 0;
      i,
      span,
      input {
        color: #fff;
      }
    }
  }
}
</style>
