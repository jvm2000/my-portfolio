<style scoped>
/* For Chrome, Edge, Safari */
::-webkit-scrollbar {
  width: 10px;
  height: 10px; /* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

<template>
  <div class="pt-24 pb-48 w-full flex flex-col items-center">
    <div class="w-full max-w-5xl space-y-10 flex flex-col items-center">
      <div class="flex items-center">
        <img src="/hand.svg" alt="" class="mr-2">

        <p class="text-2xl">, My Name is Juan and I am a</p>
      </div>

      <img src="/home-design.svg" alt="">
      
      <div class="w-full flex items-center justify-between px-14">
        <span class="text-2xl">Based in Cebu, PH</span>

        <div class="flex items-center space-x-4">
          <img src="/frameworks/tailwind.svg" alt="" />

          <img src="/frameworks/vue.svg" alt="">
          
          <img src="/frameworks/laravel.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>