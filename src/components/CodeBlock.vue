<template>
  <div class="relative bg-black/80 text-white font-mono p-5 rounded-2xl my-6 shadow-lg backdrop-blur-sm border border-white/10">
    <p class="text text-white font-semibold mb-3">{{ title }}</p>

    <pre class="overflow-x-auto text-sm leading-relaxed bg-transparent shadow-none p-0 m-0">
      <code
        :class="`language-${language}`"
        class="bg-transparent whitespace-pre"
        v-html="highlightedCode"
      ></code>
    </pre>

    <button
      class="absolute top-4 right-4 text-xs text-white border border-white hover:bg-white hover:text-black px-3 py-1 rounded-1xl transition-all duration-200"
      @click="copyToClipboard"
    >
      {{ copied ? t.copied : t.copy }}
    </button>
  </div>
</template>

<script setup>
import { computed, inject, ref, watch } from 'vue'

const i18n = inject('i18n')
const t = computed(() => i18n.messages[i18n.locale])

import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'

const props = defineProps({
  title: String,
  code: String,
  language: {
    type: String,
    default: 'bash'
  }
})

const copied = ref(false)
const highlightedCode = ref('')

function dedent(str) {
  if (!str) return ''
  const lines = str.replace(/\t/g, '  ').split('\n')
  while (lines.length && lines[0].trim() === '') lines.shift()
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop()
  const minIndent = Math.min(...lines.filter(line => line.trim()).map(line => line.match(/^ */)?.[0].length || 0))
  return lines.map(line => line.slice(minIndent)).join('\n')
}

const cleanCode = ref('')

watch(
  () => props.code,
  () => {
    const cleaned = dedent(props.code || '')
    cleanCode.value = cleaned
    highlightedCode.value = Prism.highlight(
      cleaned,
      Prism.languages[props.language] || Prism.languages.bash,
      props.language
    )
  },
  { immediate: true }
)

function copyToClipboard() {
  navigator.clipboard.writeText(cleanCode.value).then(() => {
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
  })
}
</script>

<style scoped>
pre,
code {
  background-color: transparent !important;
  box-shadow: none !important;
}

pre {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
