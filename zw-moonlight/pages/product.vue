<template>
  <div class="product-page">
    <!-- 热销产品 -->
    <div class="hot-products">
      <header-nav title="热销产品"></header-nav>
      <div class="product-content">
        <product-card class="card-item" v-for="item in 6"></product-card>
      </div>
    </div>
    <!-- 明星产品 -->
    <div class="start-products">
      <header-nav title="明星产品"></header-nav>
      <div class="product-content">
        <product-card class="card-item" v-for="item in 4"></product-card>
      </div>
    </div>
    <!-- 其他 -->
    <div class="other-products">
      <header-nav title="其他产品"></header-nav>
      <div class="product-content">
        <product-card class="card-item" v-for="item in 12"></product-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less">
.product-page {
  .product-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    .card-item {
      margin-top: 20px;
    }
  }
}
</style>
