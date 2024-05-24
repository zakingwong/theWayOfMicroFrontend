<template>
  <div class="app-box">
    测试自动构建
    <div class="header-menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1">
          <NuxtLink to="/"> 首页 </NuxtLink>
        </el-menu-item>
        <el-menu-item index="2">
          <NuxtLink to="/product"> 产品介绍 </NuxtLink>
        </el-menu-item>
      </el-menu>
    </div>
    <el-backtop :right="100" :bottom="100" />
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const activeIndex = ref("1");
</script>
<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
}
</style>
<style lang="less" scoped>
li a {
  text-decoration: none;
}
</style>