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
  <div class="pt-24 pb-48 w-full flex flex-col items-center">
    <div class="w-full sm:max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
      <div
        v-for="art in artsData"
        class="art-container w-[303px] h-[303px] border border-black overflow-hidden flex items-center justify-center"
      >
        <img
          :src="art"
          class="art-image w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.art-container {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.art-container:hover {
  transform: scale(1.05);
  z-index: 10;
  position: relative;
}

.art-image {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.art-image:hover {
  transform: scale(1.1);
}
</style>