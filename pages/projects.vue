<script setup lang="ts">
type Projects = {
  im1: string,
  im2: string,
  label: string,
  description: string,
  to: string
}

useHead({ title: 'Projects' })

// Define page transition
definePageMeta({
  pageTransition: {
    name: 'slide-down',
    mode: 'out-in'
  }
})

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
  }, {
    im1: '/images/ab1.png',
    im2: '/images/ab2.png',
    label: 'Abled Online',
    description: "Delivering comprehensive technical solutions with 24/7 professional support. We empower individuals and businesses with reliable, expert PC services.",
    to: 'https://abled-online-rebuild.vercel.app/'
  }, {
    im1: '/images/r1.png',
    im2: '/images/r2.png',
    label: 'Restauro Legal Services',
    description: "By harnessing the power of digital technology, we're committed to bridging the gap in legal services, reaching underserved individuals, areas and communities, and empowering individuals with our flexible scheduling and remote consultations for legal assistance.",
    to: 'https://restaurolegalservices.com//'
  }
])

const currentIndex = ref(0)
const isAnimating = ref(false)
const isFadingOut = ref(false)
const isPageLoading = ref(true)
const currentProject = computed(() => projectsData.value[currentIndex.value])

// Initialize page entrance animation
onMounted(() => {
  setTimeout(() => {
    isPageLoading.value = false
  }, 100)
})

// Touch handling for swipe gestures
const touchStartX = ref(0)
const touchEndX = ref(0)
const isTouching = ref(false)

function handleTouchStart(event: TouchEvent) {
  touchStartX.value = event.touches[0].clientX
  isTouching.value = true
}

function handleTouchMove(event: TouchEvent) {
  if (!isTouching.value) return
  touchEndX.value = event.touches[0].clientX
}

function handleTouchEnd() {
  if (!isTouching.value) return
  
  const swipeThreshold = 50
  const swipeDistance = touchStartX.value - touchEndX.value
  
  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance > 0) {
      // Swiped left - next project
      nextProject()
    } else {
      // Swiped right - previous project
      prevProject()
    }
  }
  
  isTouching.value = false
  touchStartX.value = 0
  touchEndX.value = 0
}

function openTab(link: string) {
  window.open(link)
}

function nextProject() {
  if (isAnimating.value) return
  isAnimating.value = true
  isFadingOut.value = true
  
  // Fade out current project
  setTimeout(() => {
    // Change to next project while faded out
    currentIndex.value = (currentIndex.value + 1) % projectsData.value.length
    isFadingOut.value = false
    
    // Fade in new project
    setTimeout(() => {
      isAnimating.value = false
    }, 500)
  }, 300)
}

function prevProject() {
  if (isAnimating.value) return
  isAnimating.value = true
  isFadingOut.value = true
  
  // Fade out current project
  setTimeout(() => {
    // Change to previous project while faded out
    currentIndex.value = currentIndex.value === 0 ? projectsData.value.length - 1 : currentIndex.value - 1
    isFadingOut.value = false
    
    // Fade in new project
    setTimeout(() => {
      isAnimating.value = false
    }, 500)
  }, 300)
}

function goToProject(index: number) {
  if (isAnimating.value || index === currentIndex.value) return
  isAnimating.value = true
  isFadingOut.value = true
  
  // Fade out current project
  setTimeout(() => {
    // Change to selected project while faded out
    currentIndex.value = index
    isFadingOut.value = false
    
    // Fade in new project
    setTimeout(() => {
      isAnimating.value = false
    }, 500)
  }, 300)
}
</script>

<template>
  <div class="pt-36 sm:pt-24 pb-48 w-full flex flex-col items-center px-6 md:px-0 relative min-h-screen transition-all duration-700 ease-out"
       :class="{
         'opacity-0 translate-y-8': isPageLoading,
         'opacity-100 translate-y-0': !isPageLoading
       }">
    <div class="w-full max-w-6xl mx-auto">
      <!-- Main Project Display with Fixed Navigation -->
      <div class="relative h-[400px] lg:h-[500px] flex items-center justify-center">
        <!-- Previous Button - Fixed Position -->
        <button 
          @click="prevProject"
          :disabled="isAnimating"
          class="absolute hidden sm:block left-2 lg:left-0 top-1/2 transform -translate-y-1/2 p-2 lg:p-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10 bg-white"
        >
          <svg class="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <!-- Project Container -->
        <div 
          class="absolute inset-0 flex items-center justify-center"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div class="relative w-full max-w-4xl h-full flex items-center justify-center px-4 lg:px-0">
            <!-- Current Project -->
            <div 
              class="absolute inset-0 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-12 transition-all duration-300 ease-in-out"
              :class="{
                'opacity-0 scale-95': isFadingOut,
                'opacity-100 scale-100': !isFadingOut
              }"
            >
              <!-- Images Section -->
              <div class="w-full lg:w-[527px] lg:h-[397px] lg:relative lg:mb-0 lg:mr-24 mb-8">
                <!-- Mobile/Tablet Block Layout -->
                <div class="lg:hidden flex flex-col items-center space-y-4">
                  <div class="w-[240px] md:w-[320px] h-[160px] md:h-[200px] border border-black rounded-sm bg-white transition-all duration-300 ease-in-out"
                       :class="{
                         'scale-95 rotate-1': isFadingOut,
                         'scale-100 rotate-0': !isFadingOut
                       }">
                    <img :src="currentProject.im1" class="h-full w-auto object-cover transition-all duration-300 ease-in-out"
                         :class="{
                           'brightness-70 scale-105': isFadingOut,
                           'brightness-100 scale-100': !isFadingOut
                         }">
                  </div>
                  <div class="w-[160px] md:w-[220px] h-[110px] md:h:[140px] border border-black rounded-sm bg-white transition-all duration-300 ease-in-out delay-50"
                       :class="{
                         'scale-95 -rotate-1': isFadingOut,
                         'scale-100 rotate-0': !isFadingOut
                       }">
                    <img :src="currentProject.im2" class="h-full w-auto object-cover transition-all duration-300 ease-in-out delay-50"
                         :class="{
                           'brightness-70 scale-105': isFadingOut,
                           'brightness-100 scale-100': !isFadingOut
                         }">
                  </div>
                </div>

                <!-- Desktop Absolute Layout -->
                <div class="hidden lg:block w-full h-full relative">
                  <div class="w-[432px] h-[296px] border absolute border-black rounded-sm bg-white z-[1] right-0 top-0 transition-all duration-300 ease-in-out"
                       :class="{
                         'scale-95 rotate-1': isFadingOut,
                         'scale-100 rotate-0': !isFadingOut
                       }">
                    <img :src="currentProject.im1" class="h-full w-auto object-cover transition-all duration-300 ease-in-out"
                         :class="{
                           'brightness-70 scale-105': isFadingOut,
                           'brightness-100 scale-100': !isFadingOut
                         }">
                  </div>

                  <div class="w-[311px] h-[214px] border absolute border-black rounded-sm bg-white z-[2] left-36 bottom-6 transition-all duration-300 ease-in-out delay-50"
                       :class="{
                         'scale-95 -rotate-1': isFadingOut,
                         'scale-100 rotate-0': !isFadingOut
                       }">
                    <img :src="currentProject.im2" class="h-full w-auto object-cover transition-all duration-300 ease-in-out delay-50"
                         :class="{
                           'brightness-70 scale-105': isFadingOut,
                           'brightness-100 scale-100': !isFadingOut
                         }">
                  </div>
                </div>
              </div>

              <!-- Text Section -->
              <div class="space-y-6 md:space-y-7 lg:space-y-8 flex flex-col w-full lg:w-[456px] transition-all duration-300 ease-in-out"
                   :class="{
                     'opacity-40 translate-x-4': isFadingOut,
                     'opacity-100 translate-x-0': !isFadingOut
                   }">
                <p class="text-3xl md:text-4xl lg:text-6xl text-black font-bold w-full text-left transition-all duration-300 ease-in-out delay-50"
                     :class="{
                       'scale-95 translate-y-2': isFadingOut,
                       'scale-100 translate-y-0': !isFadingOut
                     }">
                  {{ currentProject.label }}
                </p>

                <div class="w-full flex justify-start transition-all duration-300 ease-in-out delay-100"
                     :class="{
                       'scale-x-0 opacity-0': isFadingOut,
                       'scale-x-100 opacity-100': !isFadingOut
                     }">
                  <div class="w-16 md:w-20 lg:w-24 border-[4px] md:border-[5px] lg:border-[6px] border-black"></div>
                </div>

                <p class="text-sm md:text-base lg:text-xl font-light text-left transition-all duration-300 ease-in-out delay-150"
                     :class="{
                       'scale-95 translate-y-1 opacity-60': isFadingOut,
                       'scale-100 translate-y-0 opacity-100': !isFadingOut
                     }">
                  {{ currentProject.description }}
                </p>

                <div class="w-full flex transition-all duration-300 ease-in-out delay-200"
                     :class="{
                       'scale-95 opacity-0 translate-y-4': isFadingOut,
                       'scale-100 opacity-100 translate-y-0': !isFadingOut
                     }"
                     @click="openTab(currentProject.to)">
                  <button class="border-2 border-black w-full py-2 md:py-2.5 lg:py-2.5 justify-center transition-all duration-300 hover:bg-black hover:text-white">
                    <p class="text-lg md:text-lg lg:text-xl">View Website</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Next Button - Fixed Position -->
        <button 
          @click="nextProject"
          :disabled="isAnimating"
          class="absolute hidden sm:block right-2 lg:right-0 top-1/2 transform -translate-y-1/2 p-2 lg:p-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10 bg-white"
        >
          <svg class="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Dots Indicator - Fixed Position on Mobile/Tablet, Normal on Desktop -->
    <div class="lg:hidden absolute bottom-8 left-0 right-0 flex items-center justify-center space-x-2 z-20">
      <button
        v-for="(_, index) in projectsData"
        :key="index"
        @click="goToProject(index)"
        :disabled="isAnimating"
        class="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors disabled:cursor-not-allowed bg-white border border-gray-300"
        :class="index === currentIndex ? 'bg-black border-black' : 'bg-gray-300 border-gray-300 hover:bg-gray-500'"
      ></button>
    </div>

    <!-- Desktop Dots Indicator - Normal Flow -->
    <div class="hidden lg:flex items-center justify-center mt-12 space-x-2">
      <button
        v-for="(_, index) in projectsData"
        :key="index"
        @click="goToProject(index)"
        :disabled="isAnimating"
        class="w-3 h-3 rounded-full transition-colors disabled:cursor-not-allowed"
        :class="index === currentIndex ? 'bg-black' : 'bg-gray-300 hover:bg-gray-500'"
      ></button>
    </div>
  </div>
</template>
