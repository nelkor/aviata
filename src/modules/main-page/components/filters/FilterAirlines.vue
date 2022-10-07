<script setup lang="ts">
import { t } from '@/i18n'
import { ResetSelectionButton, CheckBox } from '@/ui'

import {
  airlines,
  allAirlinesChecked,
  resetFilterAirlines,
} from '../../hooks/filters.hook'
</script>

<template>
  <div class="side-filter">
    <div class="head">
      <h2>{{ t.AIRLINES }}</h2>
      <ResetSelectionButton @click="resetFilterAirlines" />
    </div>

    <div class="filter-scroll-area">
      <div class="item">
        <CheckBox v-model="allAirlinesChecked">{{ t.ALL }}</CheckBox>
      </div>

      <div
        v-for="(company, index) in airlines"
        :key="company.code"
        class="item"
      >
        <CheckBox v-model="airlines[index].checked">
          {{ company.name }}
        </CheckBox>
      </div>
    </div>
  </div>
</template>
