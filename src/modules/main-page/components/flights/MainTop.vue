<script setup lang="ts">
import { t } from '@/i18n'

import {
  formDate,
  pickTime,
  getDateDiffLabel,
} from '../../helpers/date-formatter'
import { createIconUrl } from '../../helpers/icon-url'
import { Flight } from '../../types'
import PathDescriptor from './PathDescriptor.vue'

defineProps<{ flight: Flight }>()
</script>

<template>
  <div class="main-top">
    <div class="company-with-luggage">
      <div class="company-label">
        <img
          :src="createIconUrl(flight.carrierCode)"
          :alt="flight.carrierName"
        />

        <span class="company-name">{{ flight.carrierName }}</span>
      </div>

      <div class="mobile-luggage">
        {{ flight.luggage ? `${flight.luggage} ${t.KG}` : t.NO_LUGGAGE }}
      </div>
    </div>

    <div class="travel">
      <div class="departure-time">
        <div>{{ formDate(flight.depDate) }}</div>
        <span class="time-tag">{{ pickTime(flight.depDate) }}</span>
      </div>

      <PathDescriptor :flight="flight" />

      <div>
        <div>
          {{ formDate(flight.arrDate) }}
          <span class="date-diff">{{
            getDateDiffLabel(flight.depDate, flight.arrDate)
          }}</span>
        </div>

        <span class="time-tag">{{ pickTime(flight.arrDate) }}</span>
      </div>
    </div>
  </div>
</template>
