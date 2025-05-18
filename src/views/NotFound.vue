<template>
  <section class="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
    <h1 class="text-6xl font-bold mb-4">404</h1>
    <h2 class="text-3xl font-semibold text-white mb-8">{{ t.notFound }}</h2>
    
    <p class="text-white/70 text-lg mb-10">{{ t.pageNotExist }}</p>
    
    <router-link 
      to="/" 
      class="px-6 py-3 bg-blue-400 hover:bg-orange-500 text-white rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
    >
      <i class="fas fa-home"></i> {{ t.backToHome }}
    </router-link>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue'

const i18n = inject('i18n')
const t = computed(() => i18n.messages[i18n.locale])
</script>