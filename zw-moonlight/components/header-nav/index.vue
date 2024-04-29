<template>
  <div class="header">
    <h2>{{ $props.title }}</h2>
    <el-divider />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: String,
});
</script>
