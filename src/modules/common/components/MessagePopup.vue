<script setup lang="ts">
import { t } from '@/i18n'
import { closePopup } from '@/pop-up'
import { SecondaryButton } from '@/ui'

defineProps<{
  header: string
  text: string
}>()
</script>

<template>
  <div class="message-popup">
    <h1>{{ header }}</h1>
    <p>{{ text }}</p>

    <SecondaryButton class="ok-button" @click="closePopup">
      {{ t.OK }}
    </SecondaryButton>
  </div>
</template>
