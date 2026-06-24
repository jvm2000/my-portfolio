<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <div class="w-full flex items-center justify-start gap-x-6">
    <p class="text-gray-400 text-sm uppercase whitespace-nowrap tracking-widest font-mono">{{ props.label }}</p>

    <div class="h-[1px] w-full bg-gradient-to-r from-[#bb91ff] to-[#0e0c12]" />
  </div>
</template>