<template>
  <div ref="container" class="drag-wrap">
    <div class="list" data-drop="move">
      <div data-effect="copy" draggable="true" class="item">取色器</div>
      <div data-effect="copy" draggable="true" class="item">选择器</div>
      <div data-effect="copy" draggable="true" class="item">表单</div>
      <div data-effect="copy" draggable="true" class="item">卡片</div>
    </div>
    <div data-drop="copy" class="box"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const container = ref(null)

onMounted(() => {
  let source
  container.value.ondragstart = function (e) {
    // 拖拽的当前元素
    // e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.effectAllowed = e.target.dataset.effect
    console.log('start', e.target)
    source = e.target
  }
  container.value.ondragover = function (e) {
    // console.log('over', e.target)
    e.preventDefault()
  }
  container.value.ondragenter = function (e) {
    // console.log('enter', e.target)
    // 拖动到了哪个元素，目标节点
    const dropNode = e.target

    if (dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
      // 如果相等，该节点能够接受目前拖拽的节点
      // dropNode 进入了哪里
      // e.dataTransfer.effectAllowe 当前拖拽元素
      dropNode.classList.add('drop-over')
    }
  }
  container.value.ondrop = function (e) {
    console.log('drop', e.target)
    const dropNode = e.target
    for (let i = 0; i < container.value.children.length; i++) {
      container.value.children[i].classList.remove('drop-over')
    }
    if (dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
      if (dropNode.dataset.drop === 'copy') {
        dropNode.innerHTML = ''
        const cloned = source.cloneNode(true)
        cloned.dataset.effect = 'move'
        dropNode.appendChild(cloned)
      } else {
        // move
        source.remove()
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.drag-wrap {
  display: flex;
  justify-content: center;
}
.list {
  width: 200px;
  height: 500px;
  border: 1px solid red;
  margin-right: 50px;
}
.box {
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
.item {
  height: 32px;
  line-height: 32px;
  border-bottom: 2px solid #e0dddd;
  background-color: rgba(250, 235, 215, 0.5);
}
.drop-over {
  background-color: aqua;
  box-shadow: 0 3px 12px 5px #999;
}
</style>
