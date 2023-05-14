import { defineAsyncComponent } from 'vue'

import left_1 from '@/assets/images/kpi/左.png'
import left_2 from '@/assets/images/kpi/三分之一.png'
import right_1 from '@/assets/images/kpi/二分之一.png'

export default function usePageConfig() {
  // 模块常量名称
  // 承办区县
  const county = 'county'
  // 县区考核指标
  const kpiIndex = 'kpiIndex'
  // 县区过程指标
  const processIndex = 'processIndex'
  // 办理问题类别分布
  const issuesType = 'issuesType'

  // 默认配置信息
  const cardConfig = {
    [county]: {
      title: '承办区县',
      width: '7.5rem',
      height: 'auto',
      bgUrl: left_1,
      component: defineAsyncComponent(() => import('../components/county/index.vue'))
    },
    [kpiIndex]: {
      title: '县区考核指标',
      height: '5.5rem',
      bgUrl: right_1,
      component: defineAsyncComponent(() => import('../components/kpiIndex/index.vue'))
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
    }
  }

  // 展示
  const showMain = {
    1: {
      type_level: 1,
      listL: [
        {
          ...cardConfig[county]
        }
      ],
      listR: [
        {
          ...cardConfig[kpiIndex]
        },
        {
          ...cardConfig[processIndex]
        }
      ]
    },
    2: {
      type_level: 2,
      listL: [
        {
          ...cardConfig[county],
          title: '乡镇/街道',
          height: '5.5rem',
          bgUrl: left_2
        },
        {
          ...cardConfig[county],
          title: '区县单位',
          height: '5.5rem',
          bgUrl: left_2
        }
      ],
      listR: [
        {
          ...cardConfig[kpiIndex],
          width: '7.5rem',
          height: '5.5rem',
          bgUrl: left_2
        },
        {
          ...cardConfig[issuesType],
          width: '7.5rem',
          height: '5.5rem'
        },
        {
          ...cardConfig[processIndex]
        }
      ]
    }
  }

  return {
    showMain
  }
}
