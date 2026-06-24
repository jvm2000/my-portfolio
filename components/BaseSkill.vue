<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
  technologies?: string[]
}>()
</script>

<template>
  <div class="p-6 bg-[#19171f] border hover:border-[0.5px] border-[#2f2f36] hover:border-[#bb91ff] flex flex-col items-start rounded-xl w-full space-y-3 hover:-translate-y-[1px]">
    <div class="flex items-center space-x-4">
      <div class="w-10 h-10 min-w-9 min-h-9 shrink-0 bg-[#231e2c] grid place-items-center rounded-lg">
        <slot name="icon"></slot>
      </div>

      <p class="text-2xl font-medium text-white font-fraunces">{{ props.title }}</p>
    </div>

    <p v-if="props.description" class="text-gray-400 text-base">{{ props.description }}</p>

    <div v-if="props.technologies?.length" class="flex flex-1 flex-wrap items-center gap-2">
      <div 
        v-for="tech in props.technologies"
        class="bg-[#25222c] hover:bg-[#bb91ff] rounded-full py-1.5 px-3 text-white hover:text-[#140c47] text-xs"
      >{{ tech }}</div>
    </div>
  </div>
</template>