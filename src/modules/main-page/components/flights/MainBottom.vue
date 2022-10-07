<script setup lang="ts">
import { t } from '@/i18n'
import { TextButton, RefundableIcon } from '@/ui'

import { showDetailsMessage, showTermsMessage } from '../../hooks/messages.hook'

defineProps<{ refundable: boolean }>()
</script>

<template>
  <div class="main-bottom">
    <TextButton @click="showDetailsMessage">{{ t.FLIGHT_DETAILS }}</TextButton>

    <TextButton class="bottom-middle" @click="showTermsMessage">
      {{ t.TARIFF_TERMS }}
    </TextButton>

    <div class="possibility-of-refund">
      <RefundableIcon :crossed="!refundable" />
      <span>{{ refundable ? t.REFUNDABLE : t.NON_REFUNDABLE }}</span>
    </div>
  </div>
</template>
