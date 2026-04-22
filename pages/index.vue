<script setup lang="ts">
useHead({ title: 'Home' })

const isPageLoading = ref(true)

// Initialize page entrance animation
onMounted(() => {
  setTimeout(() => {
    isPageLoading.value = false
  }, 100)
})

// Define page transition
definePageMeta({
  pageTransition: {
    name: 'slide-down',
    mode: 'out-in'
  }
})
</script>

<template>
  <div class="pt-24 pb-48 w-full flex flex-col items-center transition-all duration-700 ease-out"
       :class="{
         'opacity-0 translate-y-8': isPageLoading,
         'opacity-100 translate-y-0': !isPageLoading
       }">
    <div class="w-full max-w-5xl space-y-10 flex flex-col items-center">
      <div class="flex items-center">
        <img src="/hand.svg" alt="" class="md:h-8 mr-2 animate-wave">

        <p class="text-lg md:text-2xl">, My Name is Juan and I am a</p>
      </div>

      <img src="/home-design.svg" alt="" class="w-full h-56 md:h-96 lg:h-auto">
      
      <div class="w-full flex flex-col md:flex-row items-center justify-between px-14 space-y-6 md:space-y-0">
        <span class="text-lg md:text-2xl">Based in Cebu, PH</span>

        <div class="flex items-center space-x-4">
          <img src="/frameworks/tailwind.svg" alt="" class="animate-float" />

          <img src="/frameworks/vue.svg" alt="" class="animate-float" style="animation-delay: 0.1s">
          
          <img src="/frameworks/laravel.svg" alt="" class="animate-float" style="animation-delay: 0.2s">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInSlideDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes wave {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-fade-in-slide-down {
  animation: fadeInSlideDown 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

.animate-scale-in {
  animation: scaleIn 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-wave {
  animation: wave 1s ease-in-out 1.5s infinite;
  transform-origin: 70% 70%;
}

.animate-float {
  animation: float 2s ease-in-out infinite;
}
</style>