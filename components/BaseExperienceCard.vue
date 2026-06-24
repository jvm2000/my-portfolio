<script setup lang="ts">
const props = defineProps<{
  title: string
  company: string
  duration: string
  description: string
  technologies: string[]
}>()
</script>

<template>
  <div class="w-full flex items-start space-x-6 lg:space-x-14 group">
    <div class="relative flex flex-col items-center">
      <div class="bg-white group-hover:bg-[#bb91ff] w-2.5 h-2.5 rounded-full absolute top-2 z-[0]" />
      <div class="w-[1px] h-[clamp(24rem,15vw,12rem)] md:h-56 lg:h-[clamp(7.5rem,15vw,14rem)] bg-[#2f2f36]" />
    </div>

    <div class="w-full flex flex-col items-start space-y-4 py-8 px-6 border group-hover:bg-[#19171f] border-[#0e0c12] hover:border-[#2f2f36] rounded-xl transition-colors">
      <div class="w-full justify-between flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
        <div class="flex flex-col md:flex-row md:items-center md:space-x-2">
          <p class="text-lg lg:text-2xl font-medium text-white font-fraunces">{{ props.title }}</p>
          <div class="w-1 h-1 bg-gray-400 rounded-full hidden md:block" />
          <p class="text-lg lg:text-2xl font-semibold text-[#bb91ff] font-fraunces">{{ props.company }}</p>
        </div>

        <p class="text-gray-400 text-xs uppercase whitespace-nowrap tracking-widest font-mono">
          {{ props.duration }}
        </p>
      </div>

      <p class="text-base text-gray-400 w-full max-w-3xl">
        {{ props.description }}
      </p>

      <div class="flex flex-1 flex-wrap md:items-center gap-1 md:gap-2">
        <div 
          v-for="tech in props.technologies" 
          class="bg-[#0e0c12] py-1.5 px-3 rounded-full border border-[#2f2f36] text-xs text-gray-400"
        >
          {{ tech }}
        </div>
      </div>
    </div>
  </div>
</template>