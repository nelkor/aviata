<script setup lang="ts">
import { t } from '@/i18n'
import { PrimaryButton, SecondaryButton } from '@/ui'

import {
  showLuggageMessage,
  showSelectionMessage,
} from '../../hooks/messages.hook'

defineProps<{
  price: number
  luggage: number
}>()
</script>

<template>
  <main class="flight-aside">
    <span class="price-tag">
      {{ price.toLocaleString() }} <strong>₸</strong>
    </span>

    <PrimaryButton @click="showSelectionMessage">{{ t.CHOOSE }}</PrimaryButton>
    <p class="total">{{ t.TOTAL_PRICE }}</p>

    <div class="luggage">
      <span class="luggage-text">{{
        luggage ? `${luggage} ${t.KG}` : t.NO_LUGGAGE
      }}</span>

      <SecondaryButton :disabled="!luggage" @click="showLuggageMessage">
        + {{ t.ADD_LUGGAGE }}
      </SecondaryButton>
    </div>
  </main>
</template>
