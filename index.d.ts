declare module '*.vue' {
  import type { Component } from 'vue'

  const component: Component

  export default component
}

declare module '*.svg' {
  const text: string

  export default text
}

declare const dictionaryFiles: Record<string, string>
