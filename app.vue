<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · Juans Portfolio` : 'Juans Portfolio'
  },
  link: [{ rel: 'icon', type: "image/x-icon", href: '/icons/favicon.png' }]
})
</script>

<template>
  <div class="overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  font-family: "Barlow", sans-serif;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: inherit; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #060606; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #121212; 
}
</style>