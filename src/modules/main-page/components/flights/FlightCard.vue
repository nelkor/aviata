<script setup lang="ts">
import { Flight } from '../../types'
import FlightMain from './FlightMain.vue'
import FlightAside from './FlightAside.vue'

defineProps<{ flight: Flight }>()
</script>

<template>
  <main class="flight-card">
    <FlightMain :flight="flight" />
    <FlightAside :price="flight.price" :luggage="flight.luggage" />
  </main>
</template>
