<template>
    <div class="relative min-h-screen bg-gradient-to-b from-black via-[#1a1337] to-[#2e1d62] text-white font-sans px-6 pt-10">

      <div class="fixed top-4 left-6 flex gap-1 items-center text-white text-sm font-semibold select-none z-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" clip-rule="evenodd" />
        </svg>
        <button
          v-for="lang in ['en', 'et']"
          :key="lang"
          @click="switchLang(lang)"
          :class="currentLocale === lang ? 'text-orange-400 underline underline-offset-4 decoration-2' : 'hover:text-orange-300'"
          class="cursor-pointer px-1 py-1 rounded"
          :aria-label="'Switch language to ' + lang.toUpperCase()"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>
  
      <main class="flex flex-col md:flex-row items-start md:items-center justify-between max-w-7xl mx-auto min-h-[calc(100vh-48px)] pt-10">
        <section class="max-w-xl text-left text-white/90">
          <p class="text-3xl md:text-4xl mb-1 font-light">
            {{ t.hello }}
            <a class="text-sm mb-0"> {{ t.thisIs }}</a>
          </p>
  
          <div class="flex items-center mb-4 gap-2">
            <img src="/images/coralchain.png" alt="CoralChain Title" class="w-60" />
            <img src="/images/logo.png" alt="CoralChain Logo" class="w-24 h-24" />
          </div>
          <p class="text-lg md:text-xl leading-relaxed max-w-lg text-white/80">
            {{ t.subtitle }}
          </p>
        </section>
  
        <!-- link -->
        <aside class="mt-10 md:mt-0 flex flex-col gap-6 font-semibold text-white text-lg md:text-xl">
          <router-link to="/get-started" class="flex items-center gap-2 hover:text-orange-400 transition duration-300 cursor-pointer">
            {{ t.menu.getStarted }}
          </router-link>
          <router-link to="/learn-basics" class="flex items-center gap-2 hover:text-orange-400 transition duration-300 cursor-pointer">
            {{ t.menu.learnBasics }}
          </router-link>
          <router-link to="/try-it-out" class="flex items-center gap-2 hover:text-orange-400 transition duration-300 cursor-pointer">
            {{ t.menu.tryItOut }}
          </router-link>
          <router-link to="/about-us" class="flex items-center gap-2 hover:text-orange-400 transition duration-300 cursor-pointer">
            {{ t.menu.aboutUs }}
          </router-link>
        </aside>
      </main>
  
      <!-- Estonian Ver. Notice -->
      <div
        v-if="showEtNotice"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div class="bg-white text-black p-6 rounded-2xl max-w-md shadow-lg text-center mx-4">
          <h2 class="text-lg font-semibold mb-2">About "Estonian Version"</h2>
          <p class="mb-3 text-sm leading-relaxed">
            This Estonian version is machine-translated<br /> and may contain inaccuracies.<br />
            Thank you for your understanding! <br /><br />
            See eesti keele versioon on masintõlgitud<br /> ja võib sisaldada ebatäpsusi. <br />
            Täname mõistva suhtumise eest.
          </p>
          <button
            @click="closeEtNotice"
            class="mt-2 px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-lg transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
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
  
  const closeEtNotice = () => {
    showEtNotice.value = false
  }
  </script>
  