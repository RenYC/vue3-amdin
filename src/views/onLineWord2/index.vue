<template>
  <div>
    <h2>在线预览2</h2>

    <input type="file" ref="fileInput" @change="loadFile" />
    <vue-office-docx :src="docx" @rendered="rendered" />
  </div>
</template>

<script setup>
//引入VueOfficeDocx组件
import VueOfficeDocx from '@vue-office/docx'

import { ref } from 'vue'

const fileInput = ref(null)
const docx = ref('http://static.shanhuxueyuan.com/test6.docx') //设置文档地址

function loadFile() {
  const file = fileInput.value.files[0]
  const reader = new FileReader()

  reader.onload = async () => {
    // 创建一个Blob对象
    const blob = new Blob([reader.result], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    })
    blob.text().then((res) => {
      console.log(res)
    })

    // 调用文档预览库来展示Word文档
    // URL.createObjectURL(blob)
    docx.value = URL.createObjectURL(blob)
  }

  reader.readAsArrayBuffer(file)
}

function rendered() {
  console.log('渲染完成')
}
</script>

<style lang="scss" scoped></style>
