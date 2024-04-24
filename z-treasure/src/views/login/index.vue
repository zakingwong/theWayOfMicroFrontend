<template>
  <div class="login">
    <div class="title-box">
      <h3>Zaking's Treasure</h3>
    </div>
    <div class="form-content">
      <el-form class="form-part" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            @keyup.enter.native="onSubmit"
            show-password
            v-model="form.password"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" style="width: 120px" @click="onSubmit"
        >登陆</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (
        this.form.username === "zaking" &&
        this.form.password === "treasure"
      ) {
        this.$router.push("/");
      } else {
        this.$message.error("您输入的账号或密码有误！");
      }
    },
  },
};
</script>
<style lang="less">
.login {
  .title-box,
  .form-content,
  .form-part {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-content,
  .form-part {
    flex-direction: column;
  }
  .form-part {
    width: 400px;
  }
}
</style>
