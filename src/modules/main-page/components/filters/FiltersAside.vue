<script setup lang="ts">
import { TextButton } from '@/ui'
import { t } from '@/i18n'

import { resetAllFilters } from '../../hooks/filters.hook'
import TariffOptions from './TariffOptions.vue'
import FilterAirlines from './FilterAirlines.vue'
</script>

<template>
  <aside class="filters-aside">
    <TariffOptions />
    <FilterAirlines />

    <TextButton class="reset-all-filters" @click="resetAllFilters">
      {{ t.RESET_ALL_FILTERS }}
    </TextButton>
  </aside>
</template>
