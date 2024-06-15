<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css' // 引入Quill的样式

const editorRef: any = ref(null)
const initMessageListener = () => {
  window.addEventListener('message', (event) => {
    if (event.data) {
      editorRef.value.root.innerHTML = event.data
    }
  })
}
const initEditor = () => {
  const editor = new Quill('#quill-content', {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ direction: 'rtl' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],
        ['link', 'image', 'video']
      ]
    },
    theme: 'snow'
  })
  editorRef.value = editor
}
const submitPage = () => {
  const resultStr = editorRef.value.getSemanticHTML()
  const path = "http://treasure.zaking.cn/#/design"
  window.parent.postMessage(resultStr, path)
}
onMounted(() => {
  initEditor()
  initMessageListener()
})
</script>

<template>
  <div class="design-page">
    <div class="header-area">
      <header>创建展览页</header>
      <button @click="submitPage">提交页面</button>
    </div>
    <div id="quill-content"></div>
  </div>
</template>

<style scoped>
header {
  height: 50px;
  font-size: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
}
.design-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
}
#quill-content {
  flex: 1;
}
.header-area {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
div > button {
  width: 130px;
  height: 50px;
  float: right;
}
</style>
