<script setup lang="ts">
import { ref, onMounted } from 'vue'

useHead({ title: 'About' })

const nameText = ref('')
const titleText = ref('')
const fullName = 'JOHN VINCENT O. MIÑOZA'
const fullTitle = 'Web Developer & Designer'
const nameIndex = ref(0)
const titleIndex = ref(0)
const isTypingName = ref(true)

const typeWriter = () => {
  if (isTypingName.value) {
    if (nameIndex.value < fullName.length) {
      nameText.value += fullName.charAt(nameIndex.value)
      nameIndex.value++
      setTimeout(typeWriter, 100)
    } else {
      isTypingName.value = false
      setTimeout(typeWriter, 500)
    }
  } else {
    if (titleIndex.value < fullTitle.length) {
      titleText.value += fullTitle.charAt(titleIndex.value)
      titleIndex.value++
      setTimeout(typeWriter, 80)
    } else {
      // Reset and restart animation
      setTimeout(() => {
        nameText.value = ''
        titleText.value = ''
        nameIndex.value = 0
        titleIndex.value = 0
        isTypingName.value = true
        setTimeout(typeWriter, 2000) // Wait 2 seconds before restarting
      }, 3000) // Wait 3 seconds after completing
    }
  }
}

onMounted(() => {
  typeWriter()
})
</script>

<template>
  <div class="min-h-screen pt-20 pb-48">
    <div class="container mx-auto px-4 py-4 sm:py-8 max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        <!-- Left Column - Name and Philosophy -->
        <div class="lg:col-span-8">
          <div class="mb-8">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2 leading-tight">
              {{ nameText }}<span class="animate-pulse">|</span>
            </h1>
            <p class="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
              {{ titleText }}<span v-if="!isTypingName && titleIndex.value < fullTitle.length" class="animate-pulse">|</span>
            </p>
            <div class="border-b-2 border-gray-300 w-32 mb-8"></div>
          </div>

          <!-- Philosophy Section -->
          <div class="mb-12">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">MY PHILOSOPHY</h2>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed italic">
              "make everything looks interesting"
            </p>
            <p class="text-gray-600 mt-4 leading-relaxed">
              A dynamic and detail-oriented web developer with one year of experience in crafting and maintaining websites and web applications. 
              Passionate about building seamless digital experiences, ensuring optimal functionality, performance, and user satisfaction. 
              Proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, and modern frameworks like Vue.js. 
              Always eager to embrace advancements in web development to create intuitive and high-performing solutions.
            </p>
          </div>

          <!-- Experience Section -->
          <div class="mb-12">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">MY EXPERIENCE</h2>
            
            <div class="space-y-6">
              <div class="border-l-4 border-orange-500 pl-4 sm:pl-6">
                <h3 class="text-lg sm:text-xl font-semibold text-gray-800">Full Stack Developer</h3>
                <p class="text-gray-500 mb-2">Freelance</p>
                <ul class="text-gray-600 space-y-1">
                  <li>Developed and deployed entire systems, covering frontend and backend, API and mailing services, and domain configuration</li>
                  <li>Utilized technologies such as Laravel, MySQL, Vue3, and Nuxt 3</li>
                  <li>Developed user interfaces and integrated them with Google Sheets</li>
                </ul>
              </div>

              <div class="border-l-4 border-orange-500 pl-4 sm:pl-6">
                <h3 class="text-lg sm:text-xl font-semibold text-gray-800">WordPress Developer</h3>
                <p class="text-gray-500 mb-2">Freelance</p>
                <ul class="text-gray-600 space-y-1">
                  <li>Enhanced, fixed, and deployed WordPress websites</li>
                  <li>Worked with tools like DIVI builder, Elementor, Avada, and Warehouse Theme</li>
                  <li>Experience with Shopify integration</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Education Section -->
          <div class="mb-12">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">EDUCATION</h2>
            <div class="border-l-4 border-orange-500 pl-4 sm:pl-6">
              <h3 class="text-lg sm:text-xl font-semibold text-gray-800">Bachelor of Science in Information Technology</h3>
              <p class="text-gray-600">University of Cebu - Main</p>
              <p class="text-gray-500 text-sm mt-1">2019 - 2024</p>
            </div>
          </div>
        </div>

        <!-- Right Column - Photo, Skills, Contact -->
        <div class="lg:col-span-4">
          <!-- Photo Placeholder -->
          <div class="mb-8">
            <div class="w-full h-48 sm:h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <img src="/images/profile-pic.png" alt="Profile Photo" class="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          <!-- Skills Section -->
          <div class="mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">SKILLS</h2>
            
            <div class="mb-6">
              <h3 class="font-semibold text-gray-700 mb-3">Technical Skills</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div class="bg-white border border-gray-300 rounded p-2 text-center text-sm">
                  <span class="block font-semibold">HTML</span>
                </div>
                <div class="bg-white border border-gray-300 rounded p-2 text-center text-sm">
                  <span class="block font-semibold">PHP</span>
                </div>
                <div class="bg-white border border-gray-300 rounded p-2 text-center text-sm">
                  <span class="block font-semibold">MySQL</span>
                </div>
                <div class="bg-white border border-gray-300 rounded p-2 text-center text-sm">
                  <span class="block font-semibold">Vue 3</span>
                </div>
                <div class="bg-white border border-gray-300 rounded p-2 text-center text-sm">
                  <span class="block font-semibold">CSS</span>
                </div>
                <div class="bg-white border border-gray-300 rounded p-2 text-center text-sm">
                  <span class="block font-semibold">WP</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-semibold text-gray-700 mb-3">Design & Tools</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div class="bg-white border border-gray-300 rounded p-2 text-center text-sm">
                  <span class="block font-semibold">Ps</span>
                </div>
                <div class="bg-white border border-gray-300 rounded p-2 text-center text-sm">
                  <span class="block font-semibold">Pr</span>
                </div>
                <div class="bg-white border border-gray-300 rounded p-2 text-center text-sm">
                  <span class="block font-semibold">Figma</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Interest Section -->
          <div class="mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">INTEREST</h2>
            <p class="text-gray-600">
              Web development, UI/UX design, photography, video editing, and exploring new technologies.
            </p>
          </div>

          <!-- Contact Section -->
          <div>
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">CONTACT</h2>
            <div class="space-y-2">
              <div class="flex items-center space-x-2 sm:space-x-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="text-gray-600 text-sm sm:text-base break-all">+63 994 317 3392</span>
              </div>
              <div class="flex items-center space-x-2 sm:space-x-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:minozajohnvincent2000@gmail.com" class="text-gray-600 text-sm sm:text-base break-all hover:text-orange-500 transition-colors">minozajohnvincent2000@gmail.com</a>
              </div>
              <div class="flex items-center space-x-2 sm:space-x-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <a href="https://www.instagram.com/partidakiddo/" target="_blank" rel="noopener noreferrer" class="text-gray-600 text-sm sm:text-base break-all hover:text-orange-500 transition-colors">https://www.instagram.com/partidakiddo/</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>