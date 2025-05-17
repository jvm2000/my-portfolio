<script setup lang="ts">
type Projects = {
  im1: string,
  im2: string,
  label: string,
  description: string,
  to: string
}
const projectsData = ref<Projects[]>([
  {
    im1: '/images/mt1.png',
    im2: '/images/mt2.png',
    label: 'Magic Milk Tea',
    description: "Step into a world of enchantment where every sip tells a story and every moment is infused with magic. At Magic Milktea, we're more than just a cafe—we're a destination for those seeking a taste of whimsy and wonder.",
    to: 'https://magic-milktea.vercel.app/'
  }, {
    im1: '/images/t1.png',
    im2: '/images/t2.png',
    label: 'EM Cosmetics',
    description: "Discover the glow within. Elevate your skincare routine with our nourishing essentials, designed to reveal your skin's natural brilliance",
    to: 'https://emcosmetics.vercel.app/'
  }, {
    im1: '/images/a1.png',
    im2: '/images/a2.png',
    label: 'AXIS Martial Arts',
    description: "AXIS Martial Arts is a world-class FREE software platform that enables you to manage your school, your students and your membership fees.",
    to: 'https://axismartialarts.com/'
  }
])

function openTab(link: string) {
  window.open(link)
}
</script>

<template>
  <div class="pt-24 pb-48 w-full flex flex-col items-center">
    <div class="w-full space-y-36 flex flex-col items-center">
      <div 
        v-for="(proj, index) in projectsData" 
        :key="index"
        class="flex items-center"
        :class="[index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row']"
      >
        <div 
          class="w-[527px] h-[397px] relative"
          :class="[index % 2 !== 0 ? 'ml-24' : 'mr-24']"
        >
          <div 
            class="w-[432px] h-[296px] border absolute border-black rounded-sm bg-white z-[1]" 
            :class="[index % 2 !== 0 ? 'left-0 top-0' : 'right-0 top-0']"
          >
            <img :src="proj.im1"  class="h-full w-auto object-cover">
          </div>

          <div 
            class="w-[311px] h-[214px] border absolute border-black rounded-sm bg-white z-[2]"
            :class="[index % 2 !== 0 ? 'right-0 bottom-6' : 'left-0 bottom-6']"
          >
            <img :src="proj.im2"  class="h-full w-auto object-cover">
          </div>
        </div>

        <div class="space-y-8 flex flex-col w-[456px]">
          <p 
            class="text-6xl text-black font-bold w-full"
            :class="[index % 2 !== 0 ? 'text-right' : 'text-left']"
          >{{ proj.label }}</p>

          <div 
            class="w-full flex"
            :class="[index % 2 !== 0 ? 'justify-end' : 'justify-start']"
          >
            <div class="w-24 border-[6px] border-black"></div>
          </div>

          <p 
            class="text-xl font-light"
            :class="[index % 2 !== 0 ? 'text-right' : 'text-left']"
          >
            {{ proj.description }}
          </p>

          <div 
            class="w-full flex"
            :class="[index % 2 !== 0 ? 'justify-end' : 'justify-start']"
            @click="openTab(proj.to)"
          >
            <button class="border-2 border-black w-56 py-2.5 justify-center ">
              <p class="text-xl">View Website</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>