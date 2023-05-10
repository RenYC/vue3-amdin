<template>
  <div>
    <h2>在线预览1</h2>
    <input type="file" ref="fileInput" @change="loadFile" />
    <div ref="refWord">
      <!-- 在这里插入要预览的Word文档 -->
    </div>
  </div>
</template>

<script setup>
import 'viewerjs/dist/viewer.min.css'
import Viewer from 'viewerjs'
import { onMounted, onUnmounted, ref } from 'vue'

const refWord = ref(null)
const fileInput = ref(null)
const viewer = ref(null)

onMounted(() => {
  // viewer.value = new Viewer(refWord.value, {
  //   // 在这里配置Viewer.js的选项
  //   url: './aa.docx'
  // })
})

function loadFile() {
  const file = fileInput.value.files[0]
  const reader = new FileReader()

  reader.onload = () => {
    // 创建一个Blob对象
    const blob = new Blob([reader.result], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    })

    // 调用文档预览库来展示Word文档
    viewer.value = new Viewer(refWord.value, {
      url: URL.createObjectURL(blob),
      show: function () {
        viewer.value.update()
      }
      // 可以在这里配置其他选项
    })
  }

  reader.readAsArrayBuffer(file)
}
</script>

<style lang="scss" scoped></style>
