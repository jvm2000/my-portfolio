<script setup lang="ts">
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="pt-8 pb-20 border-t border-[#2f2f36] w-full flex flex-col items-start space-y-6">
    <div class="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
      <div class="flex flex-col items-start space-y-3">
        <p class="text-2xl font-fraunces font-semibold text-white">Let's build something thoughtful.</p>

        <div class="flex items-center space-x-2">
          <a 
            class="text-[#bb91d9] text-sm font-medium hover:underline cursor-pointer"
            href="mailto:minozajohnvincent2000@gmail.com"
          >minozajohnvincent2000@gmail.com</a>

          <ArrowUpRightIcon class="w-3 h-3 stroke-[#bb91d9]" />
        </div>
      </div>

      <div class="flex items-center space-x-2">
        <a 
          class="w-10 h-10 grid place-items-center bg-[#19171f] rounded-full border border-[#2f2f36] group hover:border-[#9473c9]"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jvm2000"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-4 w-4 stroke-white group-hover:stroke-[#9473c9] group-hover:-translate-y-[1px]" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>

        <a 
          class="w-10 h-10 grid place-items-center bg-[#19171f] rounded-full border border-[#2f2f36] group hover:border-[#9473c9]"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/john-minoza-a5aa52291/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin h-4 w-4 stroke-white group-hover:stroke-[#9473c9] group-hover:-translate-y-[1px]" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>

        <a 
          class="w-10 h-10 grid place-items-center bg-[#19171f] rounded-full border border-[#2f2f36] group hover:border-[#9473c9]"
          href="mailto:minozajohnvincent2000@gmail.com"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4 stroke-white group-hover:stroke-[#9473c9] group-hover:-translate-y-[1px]" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
        </a>
      </div>
    </div>

    <p class="text-xs text-gray-400">© 2026 John Vincent O. Miñoza. Crafted in Cebu City.</p>
  </div>
</template>