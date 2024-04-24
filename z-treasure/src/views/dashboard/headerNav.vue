<template>
  <div class="header-nav">
    <div class="company-logo">
      <span>我是企业大</span>
      <b>LoGo</b>
      <span>!</span>
    </div>
    <el-menu
      :default-active="activeIdx"
      class="header-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <div class="ops-area">
      <div class="company-name">
        <span class="cur-name">
          <i>北</i>
          <i>京</i>
          <i>小</i>
          <i>芒</i>
          <i>果</i>
          <i>科</i>
          <i>技</i>
          <i>有</i>
          <i>限</i>
          <i>公</i>
          <i>司</i>
        </span>
      </div>
      <div class="ops-buttons">
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>企业信息</el-dropdown-item>
            <el-dropdown-item>法人信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "headerNav",
  data() {
    return {
      activeIdx: "0",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less">
.header-nav {
  display: flex;
  flex-direction: row;
  .company-logo {
    width: 60px;
    height: 60px;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px red;
    background: #397212;
    span {
      font-size: 12px;
    }
  }
  .header-menu {
    flex: 1;
  }
  .ops-area {
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #4d84ff;
    .cur-name {
    }
    .ops-buttons:hover {
      cursor: pointer;
    }
  }
}
</style>
