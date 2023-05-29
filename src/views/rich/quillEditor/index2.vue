<template>
  <div class="container">
    <!-- <div id="sidebar-controls">
      <button id="image-button" @click="imgBtn">99</button>
    </div> -->
    <div id="toolbar">
      <toolbar></toolbar>
      <span class="ql-formats">
        <button class="ql-custom-button">添加模板</button>
      </span>
    </div>
    <div id="editor"></div>
    <div class="drag-box">拖拽左侧图表到这里</div>
  </div>
</template>

<script setup>
import toolbar from './toobar.vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { ref, onMounted } from 'vue'

let quill = null
let BlockEmbed = Quill.import('blots/block/embed')
class ImageBlot extends BlockEmbed {
  static create(value) {
    let node = super.create()
    node.setAttribute('alt', value.alt)
    node.setAttribute('src', value.url)
    node.setAttribute('data-id', value['data-id'])
    return node
  }
  static value(node) {
    return {
      alt: node.getAttribute('alt'),
      url: node.getAttribute('src'),
      'data-id': node.getAttribute('data-id')
    }
  }
}
ImageBlot.blotName = 'image'
ImageBlot.tagName = 'img'
Quill.register(ImageBlot)

const options = {
  // debug: 'info',
  modules: {
    toolbar: {
      // container: [
      //   ['clean'], // 清除文本格式
      //   ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
      //   [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
      //   [{ align: [] }], // 对齐方式
      //   [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
      //   [{ font: [] }], // 字体种类
      //   [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
      //   [{ direction: 'ltl' }], // 文本方向
      //   [{ direction: 'rtl' }], // 文本方向
      //   [{ indent: '-1' }, { indent: '+1' }], // 缩进
      //   [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
      //   [{ script: 'sub' }, { script: 'super' }], // 上标/下标
      //   ['blockquote', 'code-block'], // 引用  代码块
      //   ['link', 'image', 'video'], // 链接、图片、视频
      //   [{ 'custom-button': { text: 'Click Me!' } }]
      // ],
      container: '#toolbar',
      handlers: {
        'custom-button': (value) => {
          console.log(value)
        }
      }
    }
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
}

onMounted(() => {
  quill = new Quill('#editor', options)
})

function imgBtn() {
  let range = quill.getSelection(true)
  quill.insertText(range.index, '\n', Quill.sources.USER)
  quill.insertEmbed(
    range.index + 1,
    'image',
    {
      alt: 'Quill Cloud',
      url: 'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/header/logo_e835568.png',
      'data-id': range.index + 1
    },
    Quill.sources.USER
  )
  quill.setSelection(range.index + 2, Quill.sources.SILENT)
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  position: relative;
}
:deep(#toolbar) {
  .ql-custom-button {
    width: auto;
  }
}
.drag-box {
  width: 500px;
  height: 200px;
  border: 1px dotted #999;
  background-color: #f0f0f0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #666;
}
</style>
