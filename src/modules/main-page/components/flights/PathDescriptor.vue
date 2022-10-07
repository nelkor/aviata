<script setup lang="ts">
import { t } from '@/i18n'

import { stringifySeconds } from '../../helpers/date-formatter'
import { Flight } from '../../types'

defineProps<{ flight: Flight }>()
</script>

<template>
  <div class="path-descriptor">
    <div class="labels">
      <div class="point">{{ flight.from }}</div>
      <div class="travel-time">{{ stringifySeconds(flight.traveltime) }}</div>
      <div class="point">{{ flight.to }}</div>
    </div>

    <div class="line">
      <div class="bg" />

      <div class="dots">
        <div v-for="i in flight.stops.length + 2" :key="i" class="dot" />
      </div>
    </div>

    <div class="stops">
      <div v-for="(stop, i) in flight.stops" :key="i" class="stop">
        {{ t.PREFIX_THROUGH.toLowerCase() }}
        {{ stop.airport + (t.POSTFIX_THROUGH ? ` ${t.POSTFIX_THROUGH}` : '') }},
        {{ stringifySeconds(stop.time) }}
      </div>
    </div>
  </div>
</template>
