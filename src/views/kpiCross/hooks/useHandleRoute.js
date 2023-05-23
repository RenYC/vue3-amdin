import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useHandleRoute() {
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
    level.value = navList.value.length
  }

  // 追加数据
  function pushStorage(params, index) {
    const paramsList = getStorage()
    const navLen = navList.value.length - 1
    if (index !== undefined) {
      paramsList.splice(index)
      navList.value = [navList.value[0], ...paramsList]
    } else {
      if (navList.value[navLen]?.type_index || navList.value[navLen]?.process_index) {
        if (params?.type_index || params?.process_index) {
          // 如果面包屑是指标率，再次点击指标率；则不进行下钻，而是替换上一个指标率。
          /**
           * type_index 考核指标控制字段
           * process_index 过程指标控制字段
           */
          if (!params.label.includes('数') && !params.label.includes('量')) {
            paramsList.pop()
            navList.value.pop()
          }
        }
      }

      paramsList.push(params)
      navList.value.push(params)
    }
    level.value = navList.value.length
    sessionStorage.setItem('paramsList', JSON.stringify(paramsList))
  }

  function getStorage() {
    const paramsStorage = sessionStorage.getItem('paramsList') || '[]'
    return JSON.parse(paramsStorage)
  }

  // 向storage中添加数据
  function onRouterPush({ params, index }) {
    // index是点击某个面包屑才传的，其它情况下不要传。
    if (index == 0) {
      router.back()
      return
    }
    if (index) {
      level.value = index
    }
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
