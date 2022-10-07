import { watch, ref, Ref } from 'vue'

interface ModelValueProps<T> {
  modelValue: T
}

type EmitFn = <T>(event: 'update:modelValue', value: T) => void

export const useTwoWayBinding = <T>(
  props: ModelValueProps<T>,
  emit: EmitFn
) => {
  const innerValue = ref(props.modelValue) as Ref<T>

  watch(innerValue, value => {
    emit('update:modelValue', value)
  })

  watch(
    () => props.modelValue,
    value => {
      innerValue.value = value
    }
  )

  return innerValue
}
