<script setup lang="ts">
import { t } from '@/i18n'

import { shownFlights } from '../../hooks/flights.hook'
import FlightCard from './FlightCard.vue'
</script>

<template>
  <main class="cards-list">
    <template v-if="shownFlights.length">
      <FlightCard
        v-for="flight in shownFlights"
        :key="flight.id"
        :flight="flight"
      />
    </template>

    <h2 v-else>{{ t.EMPTY_LIST }}</h2>
  </main>
</template>
