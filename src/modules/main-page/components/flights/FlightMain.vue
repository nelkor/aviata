<script setup lang="ts">
import { Flight } from '../../types'
import MainTop from './MainTop.vue'
import MainBottom from './MainBottom.vue'

defineProps<{ flight: Flight }>()
</script>

<template>
  <main class="flight-main">
    <MainTop :flight="flight" />
    <MainBottom :refundable="flight.refundable" />
  </main>
</template>
