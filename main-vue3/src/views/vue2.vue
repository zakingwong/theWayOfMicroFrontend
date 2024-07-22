<template>
  <div id="vue2"></div>
</template>
<script>
import { startApp } from "wujie";

export default {
  name: "vue2Page",
  setup() {
    startApp({ name: "micro-vue2" });
  },
};
</script>
