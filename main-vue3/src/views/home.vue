<template>
  <div class="home">
    <nav>
      <router-link to="/react">react</router-link> |
      <router-link to="/angular">angular</router-link> |
      <router-link to="/vue2">vue2</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "homePage",
};
</script>
