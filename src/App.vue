<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
    <Navbar v-if="!isHome" />
    <router-view />
    <Footer v-if="!isHome" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

const isHome = computed(() => route.path === '/')
</script>
