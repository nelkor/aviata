import { ref } from 'vue'

const currentDictionaryName = ref('')
const dictionaries = new Map<string, string[]>()

export const getCurrentDictionary = () =>
  dictionaries.get(currentDictionaryName.value)

export const addDictionary = (name: string, dictionary: string[]) => {
  dictionaries.set(name, dictionary)
}

export const setCurrentDictionaryName = (name: string) => {
  currentDictionaryName.value = name
}

export const checkDictionaryExistence = (name: string) => dictionaries.has(name)
