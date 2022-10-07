<script setup lang="ts">
import { t } from '@/i18n'
import { ResetSelectionButton, CheckBox } from '@/ui'

import {
  onlyDirectFlights,
  onlyWithLuggage,
  onlyRefundable,
  resetTariffOptions,
} from '../../hooks/filters.hook'
</script>

<template>
  <div class="side-filter">
    <div class="head">
      <h2>{{ t.TARIFF_OPTIONS }}</h2>
      <ResetSelectionButton @click="resetTariffOptions" />
    </div>

    <div class="item">
      <CheckBox v-model="onlyDirectFlights">
        {{ t.ONLY_DIRECT_FLIGHTS }}
      </CheckBox>
    </div>

    <div class="item">
      <CheckBox v-model="onlyWithLuggage">{{ t.ONLY_WITH_LUGGAGE }}</CheckBox>
    </div>

    <div class="item">
      <CheckBox v-model="onlyRefundable">{{ t.ONLY_REFUNDABLE }}</CheckBox>
    </div>
  </div>
</template>
