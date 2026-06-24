<script setup lang="ts">
import { SunIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="w-screen relative h-screen">
    <div class="w-full border-b border-[#1c1a20] bg-[#0e0c13] bg-[#0e0c13]/80 fixed top-0 z-[2] backdrop-blur-md">
      <div class="flex items-center justify-between w-full xl:max-w-6xl mx-auto py-4 px-6 xl:px-0">
        <div>
          <img src="/icons/logo-website2.png" alt="Logo Website" class="shrink-0 w-14 " />
        </div>

        <div class="hidden md:flex items-center gap-12">
          <a href="#about" class="text-sm text-gray-400 hover:text-[#e4e2e9]">About</a>
          <a href="#experience" class="text-sm text-gray-400 hover:text-[#e4e2e9]">Experience</a>
          <a href="#skills" class="text-sm text-gray-400 hover:text-[#e4e2e9]">Skills</a>
          <a href="#education" class="text-sm text-gray-400 hover:text-[#e4e2e9]">Education</a>
        </div>

        <button 
          class="w-9 h-9 grid place-items-center bg-[#19171f] rounded-full border border-[#2f2f36] group hover:border-[#9473c9] disabled:opacity-50 disabled:border-0"
          disabled
        >
          <SunIcon class="w-5 h-5 stroke-white group-hover:stroke-[#9473c9]" />
        </button>
      </div>
    </div>

    <div class="mt-28 lg:mt-44 max-w-6xl mx-auto">
      <slot />
    </div>
  </div>
</template>
