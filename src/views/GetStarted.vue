<template>
  <section class="px-6 py-12 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-white mb-8">{{t.menu.getStarted}}</h2>

    <!-- Block 1 -->
    <div ref="card1" class="p-6 bg-white/10 rounded-xl backdrop-blur-md shadow-md mb-10">
      <h3 class="text-2xl font-bold text-white mb-4">{{t.startText.lab1}}</h3>
      <p class="text-white/80 mb-4">
        {{t.startText.t1}}
      </p>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="flex flex-col items-center">
          <video class="w-full rounded-md shadow mb-2" muted loop controls>
            <source src="/videos/vid1.mp4" type="video/mp4" />
          </video>
          <p class="text-white/70 text-sm text-center">
            {{t.startText.d1}}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <video class="w-full rounded-md shadow mb-2" muted loop controls>
            <source src="/videos/vid2.mp4" type="video/mp4" />
          </video>
          <p class="text-white/70 text-sm text-center">
            {{t.startText.d2}}
          </p>
        </div>
        <div class="flex flex-col items-center md:col-span-2">
          <video class="w-full rounded-md shadow mb-2 max-w-xl mx-auto" muted loop controls>
            <source src="/videos/vid3.mp4" type="video/mp4" />
          </video>
          <p class="text-white/70 text-sm text-center">
            {{t.startText.d3}}
          </p>
        </div>
      </div>
    </div>

    <!-- Block 2 -->
    <div ref="card2" class="p-6 bg-white/10 rounded-xl backdrop-blur-md shadow-md mb-10">
      <h3 class="text-2xl font-bold text-white mb-4">{{t.startText.lab2}}</h3>
      <p class="text-white/80 mb-4">
        {{t.startText.t2}}
      </p>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="flex flex-col items-center">
          <video class="w-full rounded-md shadow mb-2" muted loop controls>
            <source src="/videos/vid4.mp4" type="video/mp4" />
          </video>
          <p class="text-white/70 text-sm text-center">
            {{t.startText.d4}}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <video class="w-full rounded-md shadow mb-2" muted loop controls>
            <source src="/videos/vid5.mp4" type="video/mp4" />
          </video>
          <p class="text-white/70 text-sm text-center">
            {{t.startText.d5}}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <video class="w-full rounded-md shadow mb-2" muted loop controls>
            <source src="/videos/vid6.mp4" type="video/mp4" />
          </video>
          <p class="text-white/70 text-sm text-center">
            {{t.startText.d6}}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <video class="w-full rounded-md shadow mb-2" muted loop controls>
            <source src="/videos/vid7.mp4" type="video/mp4" />
          </video>
          <p class="text-white/70 text-sm text-center">
            {{t.startText.d7}}
          </p>
        </div>
      </div>
    </div>

    <!-- Block 3 -->
    <div ref="card3" class="p-6 bg-white/10 rounded-xl backdrop-blur-md shadow-md mb-10">
      <h3 class="text-2xl font-bold text-white mb-4">{{t.startText.lab3}}</h3>
      <p class="text-white/80 mb-4">
        {{t.startText.t3}}
      </p>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="flex flex-col items-center">
          <video class="w-full rounded-md shadow mb-2" muted loop controls>
            <source src="/videos/vid8.mp4" type="video/mp4" />
          </video>
          <p class="text-white/70 text-sm text-center">
            {{t.startText.d8}}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <video class="w-full rounded-md shadow mb-2" muted loop controls>
            <source src="/videos/vid9.mp4" type="video/mp4" />
          </video>
          <p class="text-white/70 text-sm text-center">
            {{t.startText.d9}}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <video class="w-full rounded-md shadow mb-2" muted loop controls>
            <source src="/videos/vid10.mp4" type="video/mp4" />
          </video>
          <p class="text-white/70 text-sm text-center">
            {{t.startText.d10}}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <video class="w-full rounded-md shadow mb-2" muted loop controls>
            <source src="/videos/vid11.mp4" type="video/mp4" />
          </video>
          <p class="text-white/70 text-sm text-center">
          {{t.startText.d11}}  
          </p>
        </div>
      </div>
    </div>

    <div class="text-center mb-6">
      <p class="text-yellow-400/80 text-sm italic">{{t.startText.nb}} </p>
    </div>

  <div class="mt-12">
    <h3 class="text-xl font-bold text-white mb-4">📰 {{ t.startText.lab4 }}</h3>
    
    <div v-if="isAndroid" class="text-white">
      <p class="mb-2 flex items-center">
        <i class="fab fa-android text-green-500 mr-2"></i>
        {{t.startText.android}}
      </p>
      <a
        :href="pdfUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-400 underline bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition"
      >
        {{t.startText.poster}}<i class="fas fa-external-link-alt ml-1 text-xs"></i>
      </a>
    </div>

    <div v-else class="relative w-full" style="padding-top: 141.3%;">
      <embed 
        :src="pdfUrlWithZoom" 
        type="application/pdf"
        class="absolute top-0 left-0 w-full h-full"
      />
    </div>
  </div>

  </section>
</template>

<script setup>
import { inject, computed, onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)

onMounted(() => {
  [card1.value, card2.value, card3.value].forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, delay: i * 0.2, duration: 0.6, ease: 'power2.out' }
    )
  })
})

const i18n = inject('i18n')
const t = computed(() => i18n.messages[i18n.locale])

const pdfUrl = '/files/poster-xinjian-zhang-ut2025.pdf';
const pdfUrlWithZoom = `${pdfUrl}#zoom=20`;

const isAndroid = ref(false);
onMounted(() => {
  isAndroid.value = /android/i.test(navigator.userAgent);
});

</script>

<style scoped>
video {
  max-height: 240px;
}
</style>
