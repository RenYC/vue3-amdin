import { onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default function useHandleRoute() {
  const route = useRoute()
  const router = useRouter()
  const level = ref(1)
  // 面包屑导航列表
  const navList = ref([])

  // 在首页获取数据后异步执行一次。
  function setDefault(obj) {
    // 设置第一个面包屑 -- 总量
    navList.value.unshift(obj)

    const paramsList = getStorage()
    navList.value.push(...paramsList)
  }

  // 追加数据
  function pushStorage(params, index) {
    const paramsList = getStorage()
    if (index) {
      paramsList.splice(index)
      navList.value = [navList.value[0], ...paramsList]
    } else {
      paramsList.push(params)
      navList.value.push(params)
    }

    sessionStorage.setItem('paramsList', JSON.stringify(paramsList))
  }

  function getStorage() {
    const paramsStorage = sessionStorage.getItem('paramsList') || '[]'
    return JSON.parse(paramsStorage)
  }

  // 向storage中添加数据
  function onRouterPush({ params, index }) {
    if (index == 0) {
      router.back()
      return
    }
    level.value = index
    pushStorage(params, index)
  }

  // 离开页面，清除session
  function removeStorage() {
    sessionStorage.removeItem('paramsList')
  }

  return {
    navList,
    level,
    setDefault,
    onRouterPush,
    removeStorage
  }
}
