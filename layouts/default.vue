<script setup lang="ts">
type URLs = {
  to: string,
  label: string
}

const navLinks = ref < URLs[] > ([
  { to: '/', label: 'Home' },
  { to: '/', label: 'Projects' },
  { to: '/', label: 'Arts' },
  { to: '/', label: 'About' },
])
</script>

<template>
  <header>
    <div class="w-full px-36 py-3 flex items-center justify-between">
      <img src="/logo.svg" alt="">

      <div class="flex items-center space-x-20">
        <div v-for="nav in navLinks" class="p-1 space-y-2 group">
          <span href="" class="text-xl">{{ nav.label }}</span>

          <div class="w-full border-0 group-hover:border group-hover:border-black" />
        </div>
      </div>
    </div>
  </header>

  <slot />
</template>
