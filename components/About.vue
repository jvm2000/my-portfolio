<script setup lang="ts">
import { MusicalNoteIcon, FilmIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <section id="about" class="flex flex-col items-start space-y-12 w-full">
    <BaseAnchor label="01 - About" />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div class="flex flex-col items-start space-y-6">
        <p class="text-4xl font-medium text-white font-fraunces italic">"Building What I Enjoy"</p>

        <p class="text-lg text-gray-400">
          Beyond development, I have a deep appreciation for creativity. Music, singing, and drawing are some of the ways I express myself and explore new ideas. Whether I’m developing a web application, composing a melody, or sketching a concept, I’m always driven by the joy of creating and bringing something unique to life.
        </p>
      </div>

      <div class="bg-[#19171f] rounded-xl border border-[#2f2f36] p-8 flex flex-col items-start space-y-4">
        <p class="text-base text-gray-400 uppercase tracking-widest">Beyond the Screen</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex items-start space-x-4">
            <div class="w-9 h-9 min-w-9 min-h-9 shrink-0 bg-[#231e2c] grid place-items-center rounded-lg">
              <MusicalNoteIcon class="w-5 h-5 stroke-[#b189f1]" />
            </div>

            <div>
              <p class="text-sm text-white font-medium">Music</p>
              <p class="text-xs text-gray-400">Always vibing to new tracks while coding.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-9 h-9 min-w-9 min-h-9 shrink-0 bg-[#231e2c] grid place-items-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b189f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette h-4 w-4" aria-hidden="true"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
            </div>

            <div>
              <p class="text-sm text-white font-medium">Art & Design</p>
              <p class="text-xs text-gray-400">Exploring visual creativity through digital art.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-9 h-9 min-w-9 min-h-9 shrink-0 bg-[#231e2c] grid place-items-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b189f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones h-4 w-4" aria-hidden="true"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
            </div>

            <div>
              <p class="text-sm text-white font-medium">Gaming</p>
              <p class="text-xs text-gray-400">Competitive and story-driven games alike.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-9 h-9 min-w-9 min-h-9 shrink-0 bg-[#231e2c] grid place-items-center rounded-lg">
              <FilmIcon class="w-5 h-5 stroke-[#b189f1]" />
            </div>

            <div>
              <p class="text-sm text-white font-medium">Video Editing</p>
              <p class="text-xs text-gray-400">Crafting stories with Premiere Pro.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-fraunces {
  font-family: 'Fraunces', serif;
}
</style>