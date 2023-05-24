import { computed, defineAsyncComponent, ref } from 'vue'

import left_1 from '@/assets/images/kpi/左.png'
import left_2 from '@/assets/images/kpi/三分之一.png'
import right_1 from '@/assets/images/kpi/二分之一.png'

export default function usePageConfig() {
  // 模块常量名称
  // 承办区县
  const county = 'county'
  // 县区考核指标
  const kpiIndex = 'kpiIndex'
  // 县区考核指标
  const kpiIndex2 = 'kpiIndex2'
  // 县区过程指标
  const processIndex = 'processIndex'
  // 办理问题类别分布
  const issuesType = 'issuesType'
  // 办理问题类别分布
  const followData = 'followData'

  const navList = ref([])

  // 默认配置信息
  const cardConfig = {
    [county]: {
      title: '承办区县',
      width: '7.5rem',
      height: '100%',
      bgUrl: left_1,
      component: defineAsyncComponent(() => import('../components/county/index.vue'))
    },
    [kpiIndex]: {
      title: '县区考核指标',
      height: '5.5rem',
      bgUrl: right_1,
      component: defineAsyncComponent(() => import('../components/kpiIndex/index.vue'))
    },
    [kpiIndex2]: {
      title: '县区考核指标',
      height: '5.5rem',
      bgUrl: right_1,
      component: defineAsyncComponent(() => import('../components/kpiIndexFull/index.vue'))
    },
    [processIndex]: {
      title: '县区过程指标',
      height: '5.5rem',
      bgUrl: right_1,
      component: defineAsyncComponent(() => import('../components/processIndex/index.vue'))
    },
    [issuesType]: {
      title: '办理问题类别分布',
      height: '5.5rem',
      bgUrl: left_2,
      component: defineAsyncComponent(() => import('../components/issuesType/index.vue'))
    },
    [followData]: {
      title: '关注质效数据',
      height: '5.5rem',
      bgUrl: left_2,
      component: defineAsyncComponent(() => import('../components/followData/index.vue'))
    }
  }

  /**
   * left
   * params.county
   * {
   *  0: 区县,
   *
   * }
   * kpiIndex 表示是否下钻到了最后两级，页面只剩区县考核指标这一个panel
   */
  const showLeft = computed(() => {
    const len = navList.value.length - 1
    const params = navList.value[len]
    console.log(navList.value[len])

    if (params?.county == '' && params.kpiIndex == 1) {
      return [
        {
          ...cardConfig[kpiIndex2],
          width: '23.1rem',
          height: '11rem'
        }
      ]
    }

    switch (params?.county) {
      case '区县':
        return [
          {
            ...cardConfig[county]
          }
        ]
      case '乡镇/街道':
        return [
          {
            ...cardConfig[county],
            height: '5.5rem',
            title: '乡镇/街道'
          },
          {
            ...cardConfig[county],
            height: '5.5rem',
            title: '区县单位'
          }
        ]
      case '村/小区':
        return [
          {
            ...cardConfig[county],
            title: '村/小区'
          }
        ]
      default:
        return []
    }
  })

  /**
   * right - top
   */
  const showRightTop = computed(() => {
    const len = navList.value.length - 1
    const params = navList.value[len]
    console.log(params)
    if (params?.county == '' && params?.kpiIndex == 1) {
      return []
    }

    const temp1 = [
      {
        ...cardConfig[kpiIndex]
      },
      {
        ...cardConfig[issuesType]
      }
    ]
    if (params?.typeOrProcess == 'type') {
      if (
        params?.type_index == '一次办好率' ||
        params?.type_index == '问题解决率' ||
        params?.type_index == '群众满意率'
      ) {
        if (params?.is_solving == '问题解决数' || params?.is_solving == '问题未解决数') {
          return temp1
        }
        return [
          {
            ...cardConfig[kpiIndex]
          },
          {
            ...cardConfig[followData]
          }
        ]
      }
    } else {
      // process_index 下面同步修改
      if (params?.process_index) {
        if (params?.label.includes('数') || params?.label.includes('量')) {
          return [
            {
              ...cardConfig[processIndex]
            }
          ]
        }
        return [
          {
            ...cardConfig[kpiIndex]
          },
          {
            ...cardConfig[followData]
          }
        ]
      }
    }

    if (params?.county == '区县') {
      return [
        {
          ...cardConfig[kpiIndex]
        }
      ]
    }
    if (params?.county == '乡镇/街道' || params?.county == '村/小区' || params?.county == '') {
      return temp1
    }

    return temp1
  })
  /**
   * right - bottom
   */
  const showRightBottom = computed(() => {
    const len = navList.value.length - 1
    const params = navList.value[len]
    if (params?.county == '' && params?.kpiIndex == 1) {
      return []
    }
    if (params?.typeOrProcess == 'type') {
      if (
        params?.type_index == '一次办好率' ||
        params?.type_index == '问题解决率' ||
        params?.type_index == '群众满意率'
      ) {
        if (params?.is_solving == '问题解决数' || params?.is_solving == '问题未解决数') {
          return [
            {
              ...cardConfig[processIndex]
            }
          ]
        }
        return [
          {
            ...cardConfig[processIndex]
          },
          {
            ...cardConfig[issuesType]
          }
        ]
      }
    } else {
      // process_index 上面同步修改
      if (params?.process_index) {
        if (params?.label.includes('数') || params?.label.includes('量')) {
          return [
            {
              ...cardConfig[processIndex]
            }
          ]
        }
        return [
          {
            ...cardConfig[processIndex]
          },
          {
            ...cardConfig[issuesType]
          }
        ]
      }
    }

    return [
      {
        ...cardConfig[processIndex]
      }
    ]
  })

  // 展示
  const showMain = {}

  function setNavList(val) {
    navList.value = val
  }

  return {
    showLeft,
    showRightTop,
    showRightBottom,
    showMain,
    setNavList
  }
}
