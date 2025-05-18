<template>
    <footer
      v-show="shouldShowFooter"
      class="fixed bottom-0 left-0 right-0 text-center py-2 text-sm text-white/70 border-t border-white/10 backdrop-blur-sm bg-black/30"
    >
      {{ t.footer }}
    </footer>
  
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-16 right-4 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm bg-black/30 text-white/70 hover:bg-black/50 transition"
      aria-label="Back to top"
    >
      ▲
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, computed, inject } from 'vue'
  
  const i18n = inject('i18n')
  const t = computed(() => i18n.messages[i18n.locale])
  
  const shouldShowFooter = ref(false)
  const showBackToTop = ref(false)
  
  const checkFooter = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY
    const clientHeight = document.documentElement.clientHeight
  
    shouldShowFooter.value =
      scrollHeight <= clientHeight || Math.ceil(scrollTop + clientHeight) >= scrollHeight
  
    showBackToTop.value = scrollTop > 100
  }
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', checkFooter)
    window.addEventListener('resize', checkFooter)
    checkFooter()
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkFooter)
    window.removeEventListener('resize', checkFooter)
  })
  </script>
  