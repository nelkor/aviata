<script setup lang="ts">
import { closePopup, popUp } from '../hooks/pop-up.hook'
</script>

<template>
  <div class="popup-bg" :class="{ close: !popUp.isOpen }" @click="closePopup">
    <div class="popup" @click.stop>
      <component :is="popUp.component" v-bind="popUp.attrs" />
    </div>
  </div>
</template>
