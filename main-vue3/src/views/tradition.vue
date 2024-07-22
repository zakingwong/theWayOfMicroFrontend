<template>
  <div id="tradition"></div>
</template>
<script>
import { startApp } from "wujie";

export default {
  name: "traditionPage",
  setup() {
    startApp({ name: "micro-tradition" });
  },
};
</script>
