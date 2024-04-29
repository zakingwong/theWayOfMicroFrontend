<template>
  <div class="product-card">
    <NuxtLink class="a-link" to="/detail">
      <el-card style="max-width: 480px; min-width: 200px">
        <template #header>Yummy hamburger</template>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%"
        />
      </el-card>
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped></style>
