<script setup lang="ts">
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
</script>

<template>
  <header>
    <div class="w-full 2xl:px-36 md:px-10 py-3 flex items-center justify-between">
      <img src="/logo.svg" alt="">

      <div class="flex items-center 2xl:space-x-20 md:space-x-16">
        <div v-for="nav in navLinks" class="p-1 space-y-2 group" @click="navigateTo(nav.to)">
          <span  class="text-xl">{{ nav.label }}</span>

          <div :class="[route.path === nav.to ? 'border border-black w-full' : 'w-full border-0 group-hover:border group-hover:border-black']" />
        </div>
      </div>
    </div>
  </header>

  <slot />
</template>
