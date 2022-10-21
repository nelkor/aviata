<script setup lang="ts">
defineProps<{ crossed: boolean }>()
</script>

<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#707276"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use href="#refundable-icon" />
    <use v-if="crossed" href="#refundable-cross" />
  </svg>
</template>
