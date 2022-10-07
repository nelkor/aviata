import { ref, computed, Ref } from 'vue'

export const useCheckbox = (
  value: boolean,
  checkboxRef: Ref<HTMLInputElement>
) => {
  const inFocus = ref(false)
  const inHover = ref(false)
  const highlighted = computed(() => inHover.value || inFocus.value)

  const focus = () => {
    inFocus.value = true
  }

  const blur = () => {
    inFocus.value = false
  }

  const mouseEnter = () => {
    inHover.value = true
  }

  const mouseLeave = () => {
    inHover.value = false

    checkboxRef.value.blur()
  }

  return {
    highlighted,
    focus,
    blur,
    mouseEnter,
    mouseLeave,
  }
}
