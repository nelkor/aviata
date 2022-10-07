<script setup lang="ts">
import { t } from '@/i18n'
import { ResetSelectionIcon, InfoBonus } from '@/ui'
</script>

<template>
  <div class="reset-selection-button">
    <InfoBonus>{{ t.RESET_SELECTION }}</InfoBonus>

    <button v-bind="$attrs">
      <ResetSelectionIcon />
    </button>
  </div>
</template>
