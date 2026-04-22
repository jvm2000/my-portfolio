<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

type URLs = {
  to: string,
  label: string
}

const route = useRoute()
const navLinks = ref < URLs[] > ([
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/arts', label: 'Arts' },
  { to: '/about', label: 'About' },
])

const cursor = ref({ x: 0, y: 0 })
const trails = ref<Array<{ x: number, y: number, id: number }>>([])
let trailId = 0

const handleMouseMove = (e: MouseEvent) => {
  cursor.value = { x: e.clientX, y: e.clientY }
  
  // Add new trail point
  trails.value.push({
    x: e.clientX,
    y: e.clientY,
    id: trailId++
  })
  
  // Keep only last 10 trail points
  if (trails.value.length > 10) {
    trails.value.shift()
  }
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.body.style.cursor = 'none'
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.body.style.cursor = 'auto'
})
</script>

<template>
  <!-- Custom Cursor -->
  <div class="custom-cursor" :style="{ left: cursor.x + 'px', top: cursor.y + 'px' }"></div>
  
  <!-- Cursor Trail -->
  <div 
    v-for="trail in trails" 
    :key="trail.id" 
    class="cursor-trail"
    :style="{ left: trail.x + 'px', top: trail.y + 'px' }"
  ></div>

  <header class="animate-slide-down">
    <div class="w-full 2xl:px-36 md:px-10 py-3 flex items-center md:justify-between">
      <img src="/logo.svg" alt="" class="hidden md:block animate-fade-in">

      <div class="flex items-center 2xl:space-x-20 md:space-x-16">
        <div v-for="(nav, index) in navLinks" 
             :key="nav.to"
             class="p-1 space-y-2 group cursor-pointer animate-fade-in-staggered transition-all duration-300 ease-out hover:scale-105" 
             :style="{ animationDelay: `${index * 0.1 + 0.3}s` }"
             @click="navigateTo(nav.to)">
          <span class="text-xl transition-colors duration-300 group-hover:text-blue-600">{{ nav.label }}</span>

          <div class="transition-all duration-300 ease-out" 
               :class="[route.path === nav.to ? 'border border-black w-full' : 'w-full border-0 group-hover:border group-hover:border-black']" />
        </div>
      </div>
    </div>
  </header>

  <slot />
</template>

<style scoped>
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInStaggered {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slideDown 0.6s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-fade-in-staggered {
  animation: fadeInStaggered 0.6s ease-out forwards;
  opacity: 0;
}

/* Custom Cursor */
.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background: #3b82f6;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

.custom-cursor::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

/* Cursor Trail */
.cursor-trail {
  position: fixed;
  width: 12px;
  height: 12px;
  background: rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  animation: fadeOut 1s ease-out forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}

/* Hover effects for interactive elements */
a, button, .cursor-pointer {
  cursor: none !important;
}

a:hover .custom-cursor,
button:hover .custom-cursor,
.cursor-pointer:hover .custom-cursor {
  transform: translate(-50%, -50%) scale(1.5);
  background: #ef4444;
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.5);
}
</style>
