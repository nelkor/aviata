<script setup lang="ts">
defineProps<{ disappeared: boolean }>()
</script>

<template>
  <div class="app-loader" :class="{ disappeared }">
    <div class="spinner" />
  </div>
</template>
