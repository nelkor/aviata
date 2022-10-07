<script setup lang="ts">
import { LanguageSelector } from '@/i18n'
import { AppLoader } from '@/common'
import { PopUp } from '@/pop-up'

import { useApp } from './app.hook'

const { isAppReady } = useApp()
</script>

<template>
  <AppLoader :disappeared="isAppReady" />

  <template v-if="isAppReady">
    <LanguageSelector />
    <router-view />
    <PopUp />
  </template>
</template>
