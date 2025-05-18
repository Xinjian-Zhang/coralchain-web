<template>
    <header
      class="flex items-center justify-between px-5 py-3 bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50 shadow-md h-16"
    >
      <router-link
        to="/"
        class="block"
        aria-label="Go to homepage"
      >
        <img 
          src="/images/coralchain.png"
          alt="CoralChain Logo"
          class="h-8 hover:opacity-80 transition duration-300"
        />
      </router-link>
  
      <!-- nav -->
      <nav class="hidden md:flex items-center gap-8 font-medium text-white">
        <router-link
          v-for="(text, key) in t.menu"
          :key="key"
          :to="paths[key]"
          class="hover:text-orange-400 transition duration-300"
        >
          {{ text }}
        </router-link>
      </nav>
  
      <!-- Lang -->
      <div class="hidden md:flex items-center gap-1 text-white text-base font-semibold select-none">
        <button
          v-for="lang in ['en', 'et']"
          :key="lang"
          @click="switchLang(lang)"
          :class="[
            'relative px-1.5 py-0.5 cursor-pointer transition-colors duration-300',
            currentLocale === lang
              ? 'text-orange-400 underline underline-offset-4 decoration-2'
              : 'hover:text-orange-300'
          ]"
          :aria-label="'Switch language to ' + lang.toUpperCase()"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>
  
      <!-- Mobile menu toggle -->
      <div class="flex items-center md:hidden gap-3">
        <button
          @click="toggleMenu"
          class="text-white text-3xl focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span v-if="!showMenu">☰</span>
          <span v-else>×</span>
        </button>
      </div>
    </header>
  
    <!-- Mobile nav panel -->
    <transition name="slide-fade">
      <nav
        v-if="showMenu"
        class="md:hidden fixed top-16 left-0 right-0 z-40 flex flex-col px-5 py-4 bg-gray-900/100 backdrop-blur-lg text-white space-y-3 border-t border-orange-300"
      >
        <router-link
          v-for="(text, key) in t.menu"
          :key="key"
          :to="paths[key]"
          class="text-base font-semibold hover:text-orange-400 border-b border-transparent hover:border-orange-400 pb-2 transition duration-300"
          @click="showMenu = false"
          style="line-height: 1.2"
        >
          {{ text }}
        </router-link>
  
        <div class="pt-3 mt-3 border-t border-orange-300 flex justify-center gap-6 text-white text-base font-semibold select-none">
          <button
            v-for="lang in ['en', 'et']"
            :key="lang"
            @click="switchLang(lang)"
            :class="[
              'relative px-3 py-1 cursor-pointer transition-colors duration-300',
              currentLocale === lang
                ? 'text-orange-400 underline underline-offset-4 decoration-2'
                : 'hover:text-orange-300'
            ]"
            :aria-label="'Switch language to ' + lang.toUpperCase()"
          >
            {{ lang.toUpperCase() }}
          </button>
        </div>
      </nav>
    </transition>
  </template>
  
  <script setup>
  import { inject, computed, ref } from 'vue'
  
  const showMenu = ref(false)
  
  const toggleMenu = () => {
    showMenu.value = !showMenu.value
  }
  
  const i18n = inject('i18n')
  const currentLocale = computed(() => i18n.locale)
  const t = computed(() => i18n.messages[i18n.locale])
  
  const switchLang = (lang) => {
    i18n.locale = lang
    showMenu.value = false
  }
  
  const paths = {
    home: '/',
    getStarted: '/get-started',
    learnBasics: '/learn-basics',
    tryItOut: '/try-it-out',
    aboutUs: '/about-us'
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active,
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.25s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .slide-fade-enter-from {
    opacity: 0;
    transform: translateY(-15px);
  }
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-15px);
  }
  </style>
  