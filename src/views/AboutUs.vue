<template>
  <section class="max-w-3xl mx-auto px-6 py-12 text-left">
    <h2 class="text-3xl font-bold text-white mb-8 text-left"> {{ t.menu.aboutUs }}</h2>

    <div class="mb-6">
      <h3 class="text-xl font-semibold text-white mb-1">Xinjian Zhang</h3>
      <p class="text-white/50 mb-1 mt-[15px]">{{t.school}}</p>
    </div>

    <div class="flex justify-start gap-8 text-white text-3xl my-6">
      <a href="https://github.com/Xinjian-Zhang/coralchain" target="_blank" class="hover:text-orange-300 transition" title="GitHub" aria-label="GitHub Profile">
        <i class="fab fa-github"></i>
      </a>
      <a href="mailto:1xinjian.zhang@gmail.com" class="hover:text-orange-300 transition" title="Email" aria-label="Send Email">
        <i class="fas fa-envelope"></i>
      </a>
    </div>

    <div class="mb-6">
      <p class="text-white/70 italic mt-[10px]" v-html="t.thanksToSupervisor"></p>
    </div>

    <div class="flex flex-col items-left gap-8" style="position: fixed; bottom: 50px;">
      <a href="https://chess-eu.cs.ut.ee/" target="_blank" class="hover:text-orange-300 transition flex items-center gap-2">
        <img src="/public/images/chess-ut-logo.png" alt="CHESS Logo" class="w-20 opacity-80" />
        <span class="text-white/70 text-sm flex items-center">
          chess-eu.cs.ut.ee
          <i class="fas fa-external-link-alt ml-1 text-xs"></i>
        </span>
      </a>
      <img src="/public/images/univ-logo-en.png" alt="University of Tartu Computer Science" class="w-72 opacity-80" />  
    </div>
  </section>
</template>

<script setup>
import { inject, computed, ref } from 'vue'

const i18n = inject('i18n')
const currentLocale = computed(() => i18n.locale)
const t = computed(() => i18n.messages[i18n.locale])

const showEtNotice = ref(false)

const switchLang = (lang) => {
  if (lang === 'et') {
    const hasSeenEtNotice = localStorage.getItem('seenEtNotice')
    if (!hasSeenEtNotice) {
      showEtNotice.value = true
      localStorage.setItem('seenEtNotice', 'true')
    }
  }
  i18n.locale = lang
}
</script>