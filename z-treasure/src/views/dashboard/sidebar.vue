<template>
  <div class="side-bar">
    <el-menu
      default-active="2"
      class="side-bar-menu"
      @select="selectPath"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>订单中心</span>
        </template>
        <el-menu-item index="order">批发采购订单列表</el-menu-item>
        <el-menu-item index="1-2">批发销售订单列表</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>客户中心</span>
        </template>
        <el-menu-item index="customer">公司列表</el-menu-item>
        <el-menu-item index="2-2">授权公司</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>仓储中心</span>
        </template>
        <el-menu-item index="3-1">瞎写的</el-menu-item>
        <el-menu-item index="3-2">就这样</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>物流中心</span>
        </template>
        <el-menu-item index="4-1">是微前端</el-menu-item>
        <el-menu-item index="4-2">不是后台</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "sideBar",
  methods: {
    selectPath(key, keyPath) {
      const curPath = this.$route.path;
      console.log(key, keyPath);
      console.log(curPath, "curPath");
      if (curPath === `/${key}`) return;
      this.$router.push(key);
    },
  },
};
</script>
<style lang="less">
.side-bar {
  height: 100%;
  .side-bar-menu {
    height: 100%;
  }
}
</style>
