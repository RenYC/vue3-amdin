import { defineAsyncComponent } from 'vue'

// 短标题
import bg_short from '@/assets/images/ScreenPage/bg_short-title.png'
// 长标题
import bg_long from '@/assets/images/ScreenPage/bg_long-title.png'

export default function usePageConfig() {
  // 模块常量名称
  // 诉求渠道
  const card1 = 'card1'
  // 办理类型
  const card2 = 'card2'
  // 诉求类别
  const card3 = 'card3'
  // 问题分类
  const card4 = 'card4'
  // 诉求来源
  const card5 = 'card5'

  // 默认配置信息
  const cardConfig = {
    [card1]: {
      title: '诉求渠道',
      width: '5.6rem',
      bgUrl: bg_long,
      component: defineAsyncComponent(() => import('../components/card1/index.vue'))
    },
    [card2]: {
      title: '办理类型',
      width: '5.6rem',
      bgUrl: bg_short,
      component: defineAsyncComponent(() => import('../components/card2/index.vue'))
    },
    [card3]: {
      title: '诉求类别',
      width: '5.6rem',
      bgUrl: bg_short,
      component: defineAsyncComponent(() => import('../components/card3/index.vue'))
    },
    [card4]: {
      title: '问题分类',
      width: '5.6rem',
      bgUrl: bg_short,
      component: defineAsyncComponent(() => import('../components/card4/index.vue'))
    },
    [card5]: {
      title: '受理量时间趋势',
      width: '5.6rem',
      // bgUrl: bg_short,
      component: defineAsyncComponent(() => import('../components/card5/index.vue'))
    }
  }

  // 展示
  const showMain = {
    1: {
      type: 1,
      list: [
        {
          ...cardConfig[card1]
        },
        {
          ...cardConfig[card2]
        },
        {
          ...cardConfig[card3]
        },
        {
          ...cardConfig[card2]
        },
        {
          ...cardConfig[card3]
        },
        {
          ...cardConfig[card2]
        }
      ]
    },
    2: {
      type: 2,
      list: [
        {
          ...cardConfig[card4]
        },
        {
          ...cardConfig[card5]
        }
      ]
    },
    3: {
      type: 3,
      list: [
        {
          ...cardConfig[card4]
        },
        {
          ...cardConfig[card5]
        },
        {
          ...cardConfig[card4]
        },
        {
          ...cardConfig[card5]
        },
        {
          ...cardConfig[card4]
        },
        {
          ...cardConfig[card5],
          width: '17.4rem'
        }
      ]
    }
  }

  return {
    showMain
  }
}
