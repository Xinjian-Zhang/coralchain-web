<template>
  <section class="px-6 py-12 max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-white mb-8">{{t.menu.tryItOut }}</h2>

    <p class="text-white/80 mb-6 leading-relaxed">
    <a v-html="t.tryText.t1"></a><br />
    <a v-html="t.tryText.t2"></a><br />
    <a v-html="t.tryText.t3"></a>
    </p>

    <div class="mb-10">
      <h3 class="text-xl text-white font-semibold mb-3">💡 {{t.tryText.lab1 }}</h3>
      <ul class="list-disc pl-5 text-white/80 space-y-2">
        <li>
          <a v-html="t.tryText.t4"></a>
          <a
            href="https://www.ruby-lang.org/en/downloads/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-accent ml-1"
          >
            {{t.tryText.t5}}<i class="fas fa-external-link-alt ml-1 text-xs"></i>
          </a>
        </li>
        <li>
          <a v-html="t.tryText.t6"></a>
          <CodeBlock :title="t.tryText.t7" :code="'gem install bundler'" />
        </li>
      </ul>
    </div>

    <div class="mb-10">
      <h3 class="text-xl text-white font-semibold mb-3">⚙️ {{t.tryText.lab2}}</h3>
      <CodeBlock :title="t.tryText.t8" :code="'git clone https://github.com/Xinjian-Zhang/coralchain.git'" />
      <CodeBlock :title="t.tryText.t9" :code="'cd coralchain'" />
      <CodeBlock :title="t.tryText.t10" :code="'bundle install'" />
      <CodeBlock :title="t.tryText.t11" :code="'ruby app.rb'" />
      <p class="text-white/70 mt-4">
        👉 {{t.tryText.t12}}
        <a href="http://localhost:4567" target="_blank" rel="noopener noreferrer" class="text-accent underline bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition">
          http://localhost:4567<i class="fas fa-external-link-alt ml-1 text-xs"></i>
        </a>
      </p>
    </div>

    <div class="mb-10">
      <h3 class="text-xl text-white font-semibold mb-3">🐳 {{t.tryText.lab3}}</h3>
      {{ t.tryText.t13 }}
      <CodeBlock :title="t.tryText.t8" :code="'git clone https://github.com/Xinjian-Zhang/coralchain.git'" />
      <CodeBlock :title="t.tryText.t9" :code="'cd coralchain'" />
      <CodeBlock :title="t.tryText.t14" :code="'docker-compose up --build'" />
      <p class="text-white/70 mt-4">
        {{t.tryText.t15}} 
        <a href="http://localhost:4567" target="_blank" rel="noopener noreferrer" class="text-accent underline bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition">
          http://localhost:4567<i class="fas fa-external-link-alt ml-1 text-xs"></i>
        </a>
      </p>
    </div>
  </section>
</template>

<script setup>
import CodeBlock from '../components/CodeBlock.vue'
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
