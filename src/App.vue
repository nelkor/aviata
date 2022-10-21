<script setup lang="ts">
import { LanguageSelector } from '@/i18n'
import { PopUp } from '@/pop-up'

import { useApp } from './app.hook'

const { isAppReady } = useApp()
</script>

<template>
  <template v-if="isAppReady">
    <LanguageSelector />
    <router-view />
    <PopUp />
  </template>
</template>
