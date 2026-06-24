<script setup lang="ts">
import { CodeBracketIcon, CircleStackIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section id="skills" class="flex flex-col items-start space-y-12 w-full">
    <BaseAnchor label="03 - Skills" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div>
        <BaseSkill 
          title="Web Developement"
          :technologies="[
            'HTML',
            'PHP / Laravel',
            'MySQL',
            'JavaScript (Vue 3)',
            'Tailwind CSS'
          ]"
        >
          <template #icon>
            <CodeBracketIcon class="w-5 h-5 stroke-[#b189f1]" />
          </template>
        </BaseSkill>
      </div>

      <div>
        <BaseSkill 
          title="CMS & E-Commerce"
          :technologies="[
            'WordPress — Divi',
            'Elementor',
            'WPBakery',
            'Avada',
            'Shopify'
          ]"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b189f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag h-5 w-5" aria-hidden="true"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
          </template>
        </BaseSkill>
      </div>

      <div>
        <BaseSkill 
          title="Design & Creative"
          :technologies="[
            'Figma',
            'Photoshop',
            'Premiere Pro',
          ]"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b189f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette h-5 w-5" aria-hidden="true"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
          </template>
        </BaseSkill>
      </div>

      <div>
        <BaseSkill 
          title="Productivity"
          :technologies="[
            'Microsoft Word',
            'Excel',
            'Office Suite',
          ]"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b189f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-5 w-5" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
          </template>
        </BaseSkill>
      </div>

      <div class="col-span-1 md:col-span-2">
        <BaseSkill 
          title="Currently exploring"
          description="Always tracking advancements in the web ecosystem — Nuxt 3 patterns, edge-deployed APIs, and CMS-driven storefronts that scale."
        >
          <template #icon>
            <CircleStackIcon class="w-5 h-5 stroke-[#b189f1]" />
          </template>
        </BaseSkill>
      </div>
    </div>
  </section>
</template>