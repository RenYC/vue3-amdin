<template>
  <div>
    <QuillEditor
      ref="Quill"
      content-type="html"
      v-model:content="content"
      :options="options"
      @textChange="textChange"
      @blur="editorBlur($event)"
    >
    </QuillEditor>
  </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
// OR | AND
import { ref, onMounted } from 'vue'
const Quill = ref(null)
let content = ref('<p data-id="123"> 初始内容。。。</p>')
let options = {
  modules: {
    toolbar: [
      ['clean'], // 清除文本格式
      ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
      [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
      [{ align: [] }], // 对齐方式
      [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
      [{ font: [] }], // 字体种类
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
      [{ direction: 'ltl' }], // 文本方向
      [{ direction: 'rtl' }], // 文本方向
      [{ indent: '-1' }, { indent: '+1' }], // 缩进
      [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
      [{ script: 'sub' }, { script: 'super' }], // 上标/下标
      ['blockquote', 'code-block'], // 引用  代码块
      ['link', 'image', 'video'] // 链接、图片、视
    ]
  }
}

onMounted(() => {
  console.log(Quill.value.getEditor())
  console.log(Quill.value.getToolbar())
  console.log(Quill.value.getQuill())
  console.log(Quill.value.getContents())
  Quill.value.setHTML(Quill.value.getHTML() + '<p data-id="123"> 初始内容。。。</p>')
  console.log(Quill.value.getHTML())
})

function textChange({ delta, oldDelta, source }) {
  console.log(delta)
  console.log(oldDelta)
  console.log(source)
}

function editorBlur(val) {
  console.log(val)
}

// var BlockEmbed = Quill.value.import('blots/block/embed')
// class ImageBlot extends BlockEmbed {
//   static create(value) {
//     let node = super.create()
//     node.setAttribute('src', value.url)
//     node.setAttribute('controls', value.controls)
//     node.setAttribute('width', value.width)
//     node.setAttribute('height', value.height)
//     return node
//   }

//   static value(node) {
//     return {
//       url: node.getAttribute('src'),
//       controls: node.getAttribute('controls'),
//       width: node.getAttribute('width'),
//       height: node.getAttribute('height')
//     }
//   }
// }
// ImageBlot.blotName = 'image'
// ImageBlot.tagName = 'img'

// // 使用方式
// Quill.value.insertEmbed(1, 'image', {
//   url: 'https://www.baidu.com/',
//   heigth: '',
//   widht: ''
// })
</script>

<style lang="scss" scoped></style>
