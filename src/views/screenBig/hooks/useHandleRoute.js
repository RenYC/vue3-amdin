import { ref } from 'vue'

export default function useHandleRoute() {
  const query = ref('')

  function getParams(params) {
    console.log(params)
    updateQuery({})
  }
  // 子组件点击跳转，更新路由
  function updateQuery(params) {
    query.value = params
  }

  return {
    query,
    getParams
  }
}
