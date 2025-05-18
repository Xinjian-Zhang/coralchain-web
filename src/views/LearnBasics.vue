<template>
  <section class="px-6 py-12 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-orange-300 mb-10">{{ t.menu.learnBasics }}</h2>

    <div class="grid md:grid-cols-2 gap-6">
      <div
        v-for="(item, index) in basics"
        :key="item.title"
        ref="el => cardRefs[index] = el"
        class="p-6 bg-white/10 rounded-xl backdrop-blur shadow-md cursor-pointer 
               flex flex-col md:flex-row gap-4 transition-transform transform
               hover:shadow-xl hover:brightness-110 hover:-translate-y-1"
        @click="toggleCard(index)"
        @mouseover="onHover(index)"
        @mouseleave="onLeave(index)"
      >
        <div class="w-full md:w-24 h-24 flex items-center justify-center rounded-lg">
          <img :src="item.icon" alt="icon" class="w-16 h-16 object-contain" />
        </div>
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-white mb-2">
            {{ item.title }}
          </h3>
          <transition name="fade">
            <p v-if="!expanded[index]" class="text-white/80 text-sm leading-relaxed">
              {{ item.summary }}
            </p>
          </transition>
          <transition name="expand">
            <p
              v-if="expanded[index]"
              class="text-white/90 text-sm leading-relaxed whitespace-pre-line mt-2"
            >
              {{ item.details }}
            </p>
          </transition>
          <span class="text-orange-300 text-xs mt-2 inline-block">
            {{ expanded[index] ? t.common.collapse : t.common.expand }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, computed, ref, onMounted, watch } from 'vue'
import { gsap } from 'gsap'

const i18n = inject('i18n')
const t = computed(() => i18n.messages[i18n.locale])

const basics = computed(() => [
  {
    icon: 'icons/blockchain.png',
    title: t.value.basics.blockchain.title,
    summary: t.value.basics.blockchain.summary,
    details: t.value.basics.blockchain.details,
  },
  {
    icon: 'icons/node.png',
    title: t.value.basics.node.title,
    summary: t.value.basics.node.summary,
    details: t.value.basics.node.details,
  },
  {
    icon: 'icons/consensus.png',
    title: t.value.basics.consensus.title,
    summary: t.value.basics.consensus.summary,
    details: t.value.basics.consensus.details,
  },
  {
    icon: 'icons/gossip.png',
    title: t.value.basics.gossip.title,
    summary: t.value.basics.gossip.summary,
    details: t.value.basics.gossip.details,
  },
  {
    icon: 'icons/byzantine.png',
    title: t.value.basics.byzantine.title,
    summary: t.value.basics.byzantine.summary,
    details: t.value.basics.byzantine.details,
  },
  {
    icon: 'icons/fork.png',
    title: t.value.basics.forks.title,
    summary: t.value.basics.forks.summary,
    details: t.value.basics.forks.details,
  },
  {
    icon: 'icons/smartContracts.png',
    title: t.value.basics.smartContracts.title,
    summary: t.value.basics.smartContracts.summary,
    details: t.value.basics.smartContracts.details,
  },
  {
    icon: 'icons/hash.png',
    title: t.value.basics.hash.title,
    summary: t.value.basics.hash.summary,
    details: t.value.basics.hash.details,
  }
])

const cardRefs = ref([])
const expanded = ref([])

watch(basics, (newVal) => {
  expanded.value = newVal.map(() => false)
}, { immediate: true })

const toggleCard = (index) => {
  expanded.value[index] = !expanded.value[index]
}

const onHover = (index) => {
  gsap.to(cardRefs.value[index], {
    scale: 1.04,
    duration: 0.3,
    ease: 'power2.out',
  })
}
const onLeave = (index) => {
  gsap.to(cardRefs.value[index], {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out',
  })
}

onMounted(() => {
  cardRefs.value.forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, delay: i * 0.1, duration: 0.6, ease: 'power2.out' }
    )
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>
