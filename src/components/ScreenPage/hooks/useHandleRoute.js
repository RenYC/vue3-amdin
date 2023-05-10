import { onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default function useHandleRoute() {
  const route = useRoute()
  const router = useRouter()
  const level = ref(1)
  // 面包屑导航列表
  const navList = ref([])

  watch(
    () => route.query,
    (val, oldVal) => {
      level.value = Number(route.query.level) || 1
      const paramsList = getStorage()
      if (navList.value.length == 0) return
      if (!val.level) {
        // 如果参数不存在，直接返回第一级，面包屑是前两个
        // sessionStorage.setItem('paramsList', JSON.stringify(paramsList.slice(0, 1)))
        navList.value = [...navList.value.slice(0, 1), ...paramsList.slice(0, 1)]
        return
      }
      // 如果当前level小于旧的level说明是后退
      if (val.level <= oldVal?.level) {
        // 如果参数存在，并且参数小于面包屑导航的长度
        if (level.value && level.value <= paramsList.length) {
          navList.value = [...navList.value.slice(0, 1), ...paramsList.slice(0, level.value)]
        }
      } else {
        navList.value = [...navList.value.slice(0, 1), ...paramsList.slice(0, level.value)]
      }
    },
    { immediate: true, deep: true }
  )

  // 在首页获取数据后异步执行一次。
  function setDefault(obj) {
    // 设置第一个面包屑 -- 总量
    navList.value.unshift(obj)

    const paramsList = getStorage()
    navList.value.push(...paramsList.slice(0, level.value))
  }

  // 追加数据
  function pushStorage(params) {
    const paramsList = getStorage()
    paramsList.push(params)
    navList.value.push(params)
    sessionStorage.setItem('paramsList', JSON.stringify(paramsList))
  }

  function getStorage() {
    const paramsStorage = sessionStorage.getItem('paramsList') || '[]'
    return JSON.parse(paramsStorage)
  }

  // 修改url >> query, 向storage中添加数据
  function onRouterPush({ path = '/screenBig/screenBigSub', params }) {
    router.push(path)
    const level = getQueryString('level', path)
    if (!level || level === 1) {
      //  如果不存在或等于1表示第一次进入
      sessionStorage.setItem('paramsList', JSON.stringify([params]))
    } else {
      pushStorage(params)
    }
  }

  // 获取path query参数
  function getQueryString(name, path) {
    if (!path.includes('?')) return ''
    const url = '?' + path.split('?')[1]
    const theRequest = new Object()
    let strs
    if (url.indexOf('?') != -1) {
      const str = url.substr(1)
      strs = str.split('&')
      for (let i = 0; i < strs.length; i++) {
        theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
      }
    }
    return theRequest[name]
  }

  return {
    navList,
    level,
    setDefault,
    onRouterPush
  }
}
