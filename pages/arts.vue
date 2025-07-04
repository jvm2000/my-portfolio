<script setup lang="ts">
useHead({ title: 'Arts' })

const artsData = ref([
  '/arts/1.png',
  '/arts/2.png',
  '/arts/3.png',
  '/arts/4.png',
  '/arts/5.png',
  '/arts/6.png',
  '/arts/7.png',
])
</script>

<template>
  <div class="pt-24 pb-48 w-full flex flex-col items-center pl-16 md:pl-10 lg:pl-0">
    <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div v-for="art in artsData" class="w-[303px] h-[303px] border border-black">
        <img :src="art" class="h-auto w-full object-cover" />
      </div>
    </div>
  </div>
</template>