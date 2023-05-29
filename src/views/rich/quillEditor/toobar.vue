<template>
  <!-- // 清除文本格式 -->
  <span class="ql-formats">
    <button class="ql-clean"></button>
  </span>
  <!-- 加粗 斜体 下划线 删除线 -->
  <span class="ql-formats">
    <button class="ql-bold"></button>
    <button class="ql-italic"></button>
    <button class="ql-underline"></button>
    <button class="ql-strike"></button>
  </span>
  <!--  字体颜色、字体背景颜色 -->
  <span class="ql-formats">
    <select class="ql-color">
      <option selected></option>
      <option v-for="item in color" :key="item" :value="item"></option>
    </select>
    <select class="ql-background">
      <option selected></option>
      <option v-for="item in color" :key="item" :value="item"></option>
    </select>
  </span>
  <!-- 对齐方式 -->
  <span class="ql-formats">
    <select class="ql-align">
      <option selected></option>
      <option value="center"></option>
      <option value="right"></option>
      <option value="justify"></option>
    </select>
  </span>
  <!-- 字体大小 -->
  <span class="ql-formats">
    <select class="ql-size">
      <option value="small"></option>
      <!-- Note a missing, thus falsy value, is used to reset to default -->
      <option selected></option>
      <option value="large"></option>
      <option value="huge"></option>
    </select>
  </span>
  <!--  标题 -->
  <span class="ql-formats">
    <select class="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
      <option value="4"></option>
      <option value="5"></option>
      <option value="6"></option>
      <option selected></option>
    </select>
  </span>
  <!-- 字体种类 -->
  <span class="ql-formats">
    <select class="ql-font">
      <option selected></option>
      <option value="serif"></option>
      <option value="monospace"></option>
    </select>
  </span>
  <!-- 文本方向 -->
  <span class="ql-formats">
    <button class="ql-direction" value="ltl"></button>
    <button class="ql-direction" value="rtl"></button>
  </span>
  <!-- 缩进 -->
  <span class="ql-formats">
    <button class="ql-indent" value="-1"></button>
    <button class="ql-indent" value="+1"></button>
  </span>
  <!-- 有序、无序列表 -->
  <span class="ql-formats">
    <button class="ql-list" value="ordered"></button>
    <button class="ql-list" value="bullet"></button>
  </span>
  <!-- 上标/下标 -->
  <span class="ql-formats">
    <button class="ql-script" value="sub"></button>
    <button class="ql-script" value="super"></button>
  </span>
  <!-- 引用  代码块 -->
  <span class="ql-formats">
    <button class="ql-blockquote"></button>
    <button class="ql-code-block"></button>
  </span>
  <!-- 链接、图片、视频 -->
  <span class="ql-formats">
    <button class="ql-link"></button>
    <!-- <button class="ql-image"></button>
        <button class="ql-video"></button> -->
  </span>
</template>

<script setup>
import { ref } from 'vue'
const color = ref([
  '#e60000',
  '#ff9900',
  '##ffff00',
  '#008a00',
  '#0066cc',
  '#9933ff',
  '#ffffff',
  '#facccc',
  '#ffebcc',
  '#ffffcc',
  '#cce8cc',
  '#cce0f5',
  '#ebd6ff',
  '#bbbbbb',
  '#f06666',
  '#ffc266',
  '#ffff66',
  '#66b966',
  '#66a3e0',
  '#c285ff',
  '#888888',
  '#a10000',
  '#b26b00',
  '#b2b200',
  '#006100',
  '#0047b2',
  '#6b24b2',
  '#444444',
  '#5c0000',
  '#663d00',
  '#666600',
  '#003700',
  '#002966',
  '#3d1466'
])
</script>

<style lang="scss" scoped></style>
