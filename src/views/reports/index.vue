<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { SlateTransforms } from '@wangeditor/editor'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

const mode = 'default'

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p id="1356">模拟 Ajax 异步设置内容</p>'

    setTimeout(() => {
      // const editor = document.getElementById('w-e-textarea-2')

      // const div = document.createElement('div')
      // div.innerHTML = '<p>div div</p>'
      // console.log(editor)
      // editor.appendChild(div)
      editorRef.value.dangerouslyInsertHtml('<h1 id="999">标题</h1><p>文本 <b>加粗</b></p>')
    }, 100)

    // const url = 'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/header/logo_e835568.png'
    // urlToBase64(url)
    //   .then((base64) => {
    //     // 在这里可以使用 Base64 编码的内容进行其他操作
    //     const node = {
    //       type: 'image',
    //       id: 'echarts',
    //       src: base64,
    //       children: [{ text: '' }]
    //     }
    //     // editorRef.value.insertNode(node)

    //     const node1 = { type: 'paragraph', id: 10, children: [{ text: 'aaa' }] }
    //     const node2 = { type: 'paragraph', children: [{ text: 'bbb' }] }
    //     const at = { at: [editorRef.value.children.length] }
    //     const nodeList = [node1, node2, node]

    //     SlateTransforms.insertNodes(editorRef.value, nodeList, at)
    //   })
    //   .catch((error) => {
    //     console.error('转换出错：', error)
    //   })
  }, 1500)
})

function urlToBase64(url) {
  return fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      })
    })
    .then((dataUrl) => {
      // const base64 = dataUrl.split(',')[1]
      return dataUrl
    })
}

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<style lang="scss" scoped></style>
