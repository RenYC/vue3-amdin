import dayjs from 'dayjs'

export const FORMAT = 'YYYY-MM-DD'

// 第一季度
const FIRST_QUARTER = 'firstQuarter'
// 第二季度
const SECOND_QUARTER = 'secondQuarter'
// 第三季度
const THIRD_QUARTER = 'thirdQuarter'
// 第四季度
const FOURTH_QUARTER = 'fourthQuarter'
// 一月
const JANUARY = 'january'
// 二月
const FEBRUARY = 'february'
// 三月
const MARCH = 'march'
// 四月
const APRIL = 'april'
// 五月
const MAY = 'may'
// 六月
const JUNE = 'june'
// 七月
const JULY = 'july'
// 八月
const AUGUST = 'august'
// 九月
const SEPTEMBER = 'september'
// 十月
const OCTOBER = 'october'
// 十一月
const NOVEMBER = 'november'
// 十二月
const DECEMBER = 'december'

const TODAY = 'today'
const YESTERDAY = 'yesterday'
const NEARLY_7_DAYS = 'nearly7Days'
const NEARLY_30_DAYS = 'nearly30Days'

export const quarterList = [FIRST_QUARTER, SECOND_QUARTER, THIRD_QUARTER, FOURTH_QUARTER]
export const dateList = [
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER
]
export const dayList = [YESTERDAY, TODAY, NEARLY_7_DAYS, NEARLY_30_DAYS]
const datYear = dayjs().startOf('year')

// 昨天
export const yesterday = [
  dayjs().subtract(1, 'day').startOf('date').format(FORMAT),
  dayjs().subtract(1, 'day').endOf('date').format(FORMAT)
]
// 今天
export const today = [dayjs().startOf('date').format(FORMAT), dayjs().endOf('date').format(FORMAT)]
// 近7天
export const nearly7Days = [
  dayjs().subtract(6, 'day').startOf('date').format(FORMAT),
  dayjs().endOf('date').format(FORMAT)
]
// 近30天
export const nearly30Days = [
  dayjs().subtract(29, 'day').startOf('date').format(FORMAT),
  dayjs().endOf('date').format(FORMAT)
]

// 第一季度
export const firstQuarter = [
  datYear.format(FORMAT),
  datYear.add(3, 'month').subtract(1, 'day').format(FORMAT)
]
// 第二季度
export const secondQuarter = [
  datYear.add(3, 'month').format(FORMAT),
  datYear.add(6, 'month').subtract(1, 'day').format(FORMAT)
]
// 第三季度
export const thirdQuarter = [
  datYear.add(6, 'month').format(FORMAT),
  datYear.add(9, 'month').subtract(1, 'day').format(FORMAT)
]
// 第四季度
export const fourthQuarter = [
  datYear.add(9, 'month').format(FORMAT),
  datYear.add(12, 'month').subtract(1, 'day').format(FORMAT)
]
// 1月第一天到1月最后一天 []
export const january = [
  datYear.format(FORMAT),
  datYear.add(1, 'month').subtract(1, 'day').format(FORMAT)
]
// 2月第一天到2月最后一天
export const february = [
  datYear.add(1, 'month').format(FORMAT),
  datYear.add(2, 'month').subtract(1, 'day').format(FORMAT)
]
// 3月第一天到3月最后一天
export const march = [
  datYear.add(2, 'month').format(FORMAT),
  datYear.add(3, 'month').subtract(1, 'day').format(FORMAT)
]
// 4月第一天到4月最后一天
export const april = [
  datYear.add(3, 'month').format(FORMAT),
  datYear.add(4, 'month').subtract(1, 'day').format(FORMAT)
]
// 5月第一天到5月最后一天
export const may = [
  datYear.add(4, 'month').format(FORMAT),
  datYear.add(5, 'month').subtract(1, 'day').format(FORMAT)
]
// 6月第一天到6月最后一天
export const june = [
  datYear.add(5, 'month').format(FORMAT),
  datYear.add(6, 'month').subtract(1, 'day').format(FORMAT)
]
// 7月第一天到7月最后一天
export const july = [
  datYear.add(6, 'month').format(FORMAT),
  datYear.add(7, 'month').subtract(1, 'day').format(FORMAT)
]
// 8月第一天到8月最后一天
export const august = [
  datYear.add(7, 'month').format(FORMAT),
  datYear.add(8, 'month').subtract(1, 'day').format(FORMAT)
]
// 9月第一天到9月最后一天
export const september = [
  datYear.add(8, 'month').format(FORMAT),
  datYear.add(9, 'month').subtract(1, 'day').format(FORMAT)
]
// 10月第一天到10月最后一天
export const october = [
  datYear.add(9, 'month').format(FORMAT),
  datYear.add(10, 'month').subtract(1, 'day').format(FORMAT)
]
// 11月第一天到11月最后一天
export const november = [
  datYear.add(10, 'month').format(FORMAT),
  datYear.add(11, 'month').subtract(1, 'day').format(FORMAT)
]
// 12月第一天到12月最后一天
export const december = [
  datYear.add(11, 'month').format(FORMAT),
  datYear.add(12, 'month').subtract(1, 'day').format(FORMAT)
]

export const dateRadioChange = {
  // 昨天
  [YESTERDAY]: {
    name: '昨天',
    value: yesterday
  },
  // 今天
  [TODAY]: {
    name: '今天',
    value: today
  },
  // 近7天
  [NEARLY_7_DAYS]: {
    name: '近7天',
    value: nearly7Days
  },
  // 近30天
  [NEARLY_30_DAYS]: {
    name: '近30天',
    value: nearly30Days
  },
  // 第一季度
  [FIRST_QUARTER]: {
    name: '一季度',
    value: firstQuarter
  },
  // 第二季度
  [SECOND_QUARTER]: {
    name: '二季度',
    value: secondQuarter
  },
  // 第三季度
  [THIRD_QUARTER]: {
    name: '三季度',
    value: thirdQuarter
  },
  // 第四季度
  [FOURTH_QUARTER]: {
    name: '四季度',
    value: fourthQuarter
  },
  // 一月
  [JANUARY]: {
    name: '1月',
    value: january
  },
  // 二月
  [FEBRUARY]: {
    name: '2月',
    value: february
  },
  // 三月
  [MARCH]: {
    name: '3月',
    value: march
  },
  // 四月
  [APRIL]: {
    name: '4月',
    value: april
  },
  // 五月
  [MAY]: {
    name: '5月',
    value: may
  },
  // 六月
  [JUNE]: {
    name: '6月',
    value: june
  },
  // 七月
  [JULY]: {
    name: '7月',
    value: july
  },
  // 八月
  [AUGUST]: {
    name: '8月',
    value: august
  },
  // 九月
  [SEPTEMBER]: {
    name: '9月',
    value: september
  },
  // 十月
  [OCTOBER]: {
    name: '10月',
    value: october
  },
  // 十一月
  [NOVEMBER]: {
    name: '11月',
    value: november
  },
  // 十二月
  [DECEMBER]: {
    name: '12月',
    value: december
  }
}
