<script setup lang="ts">
import { currentLanguage, isLanguageLoading } from '../hooks/language.hook'
import { languages } from '../languages'
</script>

<template>
  <select
    v-model="currentLanguage"
    class="language-selector"
    :disabled="isLanguageLoading"
  >
    <option
      v-for="(language, shortName) in languages"
      :key="shortName"
      :value="shortName"
      :dir="language.rtl ? 'rtl' : 'ltr'"
    >
      {{ language.name }}
    </option>
  </select>
</template>
