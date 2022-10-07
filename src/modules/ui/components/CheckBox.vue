<script setup lang="ts">
import { ref } from 'vue'

import { CheckMarkIcon } from '@/ui'

import { useCheckbox } from '../hooks/check-box.hook'
import { useTwoWayBinding } from '../hooks/two-way-binding.hook'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])
const innerValue = useTwoWayBinding(props, emit)
const checkboxRef = ref<HTMLInputElement>(null as unknown as HTMLInputElement)

const { highlighted, focus, blur, mouseEnter, mouseLeave } = useCheckbox(
  props.modelValue,
  checkboxRef
)
</script>

<template>
  <label
    class="check-box"
    :class="{ focus: highlighted }"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <input
      ref="checkboxRef"
      v-model="innerValue"
      type="checkbox"
      @focus="focus"
      @blur="blur"
    />

    <span class="visible-box" :class="{ checked: innerValue }">
      <CheckMarkIcon />
    </span>

    <span>
      <slot />
    </span>
  </label>
</template>
