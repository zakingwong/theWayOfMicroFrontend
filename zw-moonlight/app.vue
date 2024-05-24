<template>
  <div class="app-box">
    <div class="header-menu">
      <div class="menu-part">
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

      <div class="right-link">
        <a
          href="http://treasure.zaking.cn"
          target="_blank"
          rel="noopener noreferrer"
          >超级无敌小芒果SAAS系统</a
        >
      </div>
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
.header-menu {
  display: flex;
  justify-content: center;
  .menu-part{
    width:80vw;
  }
  .right-link{
    line-height: 60px;
  }
}
li a {
  text-decoration: none;
}
</style>
