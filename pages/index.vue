<script setup lang="ts">
useHead({ title: 'Home' })
</script>

<template>
  <div class="pt-24 pb-48 w-full flex flex-col items-center">
    <div class="w-full max-w-5xl space-y-10 flex flex-col items-center">
      <div class="flex items-center">
        <img src="/hand.svg" alt="" class="md:h-8 mr-2">

        <p class="text-lg md:text-2xl">, My Name is Juan and I am a</p>
      </div>

      <img src="/home-design.svg" alt="" class="w-full h-56 md:h-96 lg:h-auto">
      
      <div class="w-full flex flex-col md:flex-row items-center justify-between px-14 space-y-6 md:space-y-0">
        <span class="text-lg md:text-2xl">Based in Cebu, PH</span>

        <div class="flex items-center space-x-4">
          <img src="/frameworks/tailwind.svg" alt="" />

          <img src="/frameworks/vue.svg" alt="">
          
          <img src="/frameworks/laravel.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>