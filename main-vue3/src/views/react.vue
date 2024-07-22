<template>
  <div id="react"></div>
</template>
<script>
import { startApp } from "wujie";

export default {
  name: "reactPage",
  setup() {
    startApp({ name: "micro-react" });
  },
};
</script>
