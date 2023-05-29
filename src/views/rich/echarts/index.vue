<template>
  <div class="container">
    <div>
      <button @click="onClick">导出图片</button>
    </div>
    <div class="echart-box">
      <echarts ref="echart" style="visibility: hidden"></echarts>
      <img :src="imgSrc" alt="" />
    </div>
  </div>
</template>

<script setup>
import echarts from '@/components/echarts/index.vue'
import { ref } from 'vue'
const echart = ref(null)
const imgSrc = ref('')

function onClick() {
  console.log(echart.value.myChart.getOption().title[0].text)
  imgSrc.value = echart.value.myChart.getDataURL({
    type: 'png',
    pixelRatio: 1, //放大2倍
    backgroundColor: '#fff'
  })
  // Export(echart.value.myChart)
}

// 导出单个图表图片
function Export(el) {
  var img = new Image()
  img.src = el.getDataURL({
    type: 'png',
    pixelRatio: 1, //放大2倍
    backgroundColor: '#fff'
  })
  console.log(img.src)
  // img.onload = function () {
  //   var canvas = document.createElement('canvas')
  //   canvas.width = img.width
  //   canvas.height = img.height
  //   var ctx = canvas.getContext('2d')
  //   ctx.drawImage(img, 0, 0)
  //   var dataURL = canvas.toDataURL('image/png')

  //   var a = document.createElement('a')
  //   var event = new MouseEvent('click')
  //   a.download = '图片.png' || '下载图片名称'
  //   // 将生成的URL设置为a.href属性
  //   a.href = dataURL
  //   // 触发a的单击事件
  //   a.dispatchEvent(event)
  //   a.remove()
  // }
}
</script>

<style lang="scss" scoped>
.echart-box {
  width: 500px;
  height: 300px;
  box-shadow: 0 0 10px #ccc;
}
</style>
