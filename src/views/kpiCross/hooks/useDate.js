import { ref } from 'vue'

export default function useDate() {
  const startTime = ref('')
  const endTime = ref('')

  function getDateRang({ start, end }) {
    startTime.value = start
    endTime.value = end
  }

  return {
    startTime,
    endTime,
    getDateRang
  }
}
