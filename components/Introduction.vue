<script setup lang="ts">
import { ArrowUpRightIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'

function downloadCV() {
  const link = document.createElement('a')

  link.href = '/files/Miñoza, John Vincent - CV.pdf'
  link.download = 'Miñoza, John Vincent - CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="w-full flex flex-col-reverse lg:flex-row items-start justify-between space-y-10 space-y-reverse gap-x-36 lg:space-y-0">
    <div class="flex flex-col items-start space-y-6">
      <div class="flex items-center space-x-2">
        <div class="w-8 h-[1px] bg-[#bb91ff]" />
        <p class="text-sm text-[#bb91ff] font-medium uppercase tracking-widest">Portfolio</p>
        <div class="w-[2px] h-[2px] bg-[#bb91ff] rounded-full" />
        <p class="text-sm text-[#bb91ff] font-medium uppercase tracking-widest">2026</p>
      </div>

      <p class="text-6xl lg:text-7xl text-white font-fraunces font-semibold">John Vincent <br>O. Miñoza<span class="text-[#bb91ff]">.</span></p>

      <p class="text-lg text-gray-400">
        Hey there! I'm John, a web developer with 4+ years of experience building modern web applications with JavaScript, TypeScript, PHP, Laravel, Vue 3, and Nuxt 3.
      </p>

      <div class="flex flex-1 flex-wrap md:items-center gap-2 items-center">
        <a 
          class="px-6 py-2.5 bg-white rounded-full text-sm text-[#0e0c12] font-medium flex items-center group hover:-translate-y-[1px]"
          href="mailto:minozajohnvincent2000@gmail.com"
        >
          Get in touch

          <ArrowUpRightIcon class="ml-2 w-3.5 h-3.5 stroke-[#0e0c12] group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
        </a>

        <a 
          class="px-6 py-2.5 bg-[#19171f] rounded-full text-sm text-white font-medium flex items-center border hover:-translate-y-[1px] border-[#1c1a20]"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jvm2000"
        >
          <div class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-4 w-4" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </div>

          Github
        </a>

        <button 
          class="px-6 py-2.5 bg-[#19171f] rounded-full text-sm text-white font-medium flex items-center border hover:-translate-y-[1px] border-[#1c1a20]"
          @click="downloadCV"
        >
          <ArrowDownTrayIcon class="mr-2 w-3.5 h-3.5 stroke-white group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
          Download CV
        </button>
      </div>
    </div>

    <div class="w-[400px] h-[400px] rounded-lg">
      <img
        src="/images/professional-photo.png"
        alt="Photo"
        class="w-[300px] h-[300px] md:w-[400px] min-w-[380px] min-h-[380px] md:h-[400px] md:min-w-[400px] md:min-h-[400px] flex-none object-cover shrink-0 rounded-lg"
      />
    </div>
  </div>
</template>

<style scoped>
.font-fraunces {
  font-family: 'Fraunces', serif;
}
</style>