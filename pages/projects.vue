<script setup lang="ts">
type Projects = {
  im1: string,
  im2: string,
  im3: string,
  label: string,
  description: string,
  to: string
}
const projectsData = ref<Projects[]>([
  {
    im1: '',
    im2: '',
    im3: '',
    label: 'Milk Tea',
    description: 'yo',
    to: ''
  }, {
    im1: '',
    im2: '',
    im3: '',
    label: 'Milk Tea',
    description: 'yo',
    to: ''
  }
])
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
          />

          <div 
            class="w-[311px] h-[214px] border absolute border-black rounded-sm bg-white z-[2]"
            :class="[index % 2 !== 0 ? 'right-0 bottom-6' : 'left-0 bottom-6']"
          />

          <div 
            class="w-[149px] h-[144px] border absolute border-black rounded-sm bg-white z-[3]"
            :class="[index % 2 !== 0 ? 'left-4 bottom-0' : 'right-4 bottom-0']"
          />
        </div>

        <div class="space-y-8 flex flex-col w-[456px]">
          <p 
            class="text-6xl text-black font-bold w-full"
            :class="[index % 2 !== 0 ? 'text-right' : 'text-left']"
          >Sample</p>

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>

          <div 
            class="w-full flex"
            :class="[index % 2 !== 0 ? 'justify-end' : 'justify-start']"
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