<template>
  <div class="dashboard">
    <headerNav class="top-part"></headerNav>
    <div class="bottom-part">
      <div class="side-bar-corver">
        <sideBar></sideBar>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import headerNav from "./headerNav.vue";
import sideBar from "./sidebar.vue";
export default {
  name: "DashboardPage",
  components: {
    sideBar,
    headerNav,
  },
};
</script>
<style lang="less">
.dashboard {
  height: 100%;
  display: flex;
  flex-direction: column;
  .top-part {
    width: 100%;
    height: 60px;
  }
  .bottom-part {
    display: flex;
    flex-direction: row;
    flex: 1;
    .side-bar-corver {
      width: 210px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .content {
      flex: 1;
      height: 100%;
    }
  }
}
</style>
