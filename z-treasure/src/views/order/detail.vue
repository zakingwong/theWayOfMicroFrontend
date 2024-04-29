<template>
  <div class="order-detail">
    <el-descriptions title="用户信息">
      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址"
        >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
      >
      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址"
        >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
      >
    </el-descriptions>
  </div>
</template>
<script>
export default {
  name: "OrderDetail",
  created() {
    this.getDetailInfo();
  },
  methods: {
    getDetailInfo() {
      this.$axios({
        url: "/get",
        method: "get",
      }).then((res) => {
        console.log(res, "res");
        if (res.status === 200) {
          this.$message.success("获取详情成功");
        }
      });
    },
  },
};
</script>
<style lang="less">
.order-detail {
  padding: 20px 10px;
}
</style>
