<template>
  <div class="order-center">
    <div class="search-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="ops-buttons">
      <el-button type="primary" @click="goCreate">新建</el-button>
    </div>
    <div class="table-list">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="goRead(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button @click="goEdit(scope.row)" type="text" size="small"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagenation">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderCenter",
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 1,
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄",
          id: 2,
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄",
          id: 3,
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1516 弄",
          id: 4,
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$message.success(JSON.stringify(this.formInline));
      console.log("submit!");
    },
    goCreate() {
      this.$router.push("/order-create");
    },
    goRead(row) {
      this.$router.push({
        path: "/order-detail",
        query: {
          id: row.id,
        },
      });
    },
    goEdit(row) {
      this.$router.push({
        path: "/order-create",
        query: {
          id: row.id,
        },
      });
    },
  },
};
</script>
<style lang="less">
.order-center {
  height: 100%;
  display: flex;
  flex-direction: column;
  .search-form,
  .ops-buttons,
  .table-list {
    padding: 20px 10px;
  }
  .search-form {
    height: 60px;
  }
  .table-list {
    flex: 1;
  }
  .pagenation {
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
